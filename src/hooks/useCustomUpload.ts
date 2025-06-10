// 自定义上传
import type { UploadProps } from "ant-design-vue";
import { ref, type Ref, type ComputedRef, inject, computed } from "vue";
import { message } from "ant-design-vue";
import { getRandomId } from "@/utils";
import { handleExceptDown } from "@/hooks/useDownload";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
export type IFileItem = {
  id: string;
  previewUrl?: string;
  fileName: string;
  fileType: string;
  fileSize?: string | number;
  status?: "done" | "error" | "uploading";
  className?: string;
};
type IUploadOption = {
  maxCount?: number;
  maxSize?: number;
  name?: string; // 上传文件的key名
  acceptTypes?: string[];
  multiple?: boolean;
  // 一些外部传入的api接口
  apis?: {
    fileUploadMulti: (formData: FormData) => Promise<any>;
    fileUploadSingle: (formData: FormData) => Promise<any>;
    fileDel?: (fieldId: string) => Promise<any>;
    fileDownload?: (fieldId: string) => Promise<any>;
    getPreviewUrl?: (fieldId: string) => string;
  };
  data?: Record<string, any> | ((file: File) => Record<string, any>); // 上传所需参数或返回上传参数的方法
  transformResult?: (res: any) => any; // 上传结果转换
  onPreview?: (fileId: string) => void; // 预览文件的操作
  afterUpload?: (files: any[]) => void; // 上传完成后执行得操作
  afterDelete?: (files: any[]) => void; // 删除完成后执行得操作
};
type NewFileListType = Exclude<UploadProps["fileList"], undefined>;
export function useCustomUpload(
  outOptions?: Ref<IUploadOption> | ComputedRef<IUploadOption>
) {
  const files = ref<any[]>([]); // 上传文件列表
  const uploadLoading = ref(false);
  const speedComsConfig = inject("speed-components-config", ref({ apis: {} }));
  const options = computed<IUploadOption>(() => {
    if (outOptions === undefined) {
      return speedComsConfig.value?.apis
        ? { apis: speedComsConfig.value?.apis }
        : {}; // 如果没有外部传入，则使用默认配置
    }
    return speedComsConfig.value?.apis
      ? { apis: speedComsConfig.value?.apis, ...outOptions.value }
      : outOptions.value; // 整合apis选项
  });
  const beforeUpload = (
    file: NewFileListType[number],
    outFiles?: UploadProps["fileList"]
  ) => {
    const fileList = outFiles || files.value;
    if (!options.value) {
      return true;
    }
    let hasOverLimit = false,
      validType = true,
      isLt = true;
    // 校验格式，目前仅通过文件名后缀处理
    if (options.value.acceptTypes && options.value.acceptTypes.length > 0) {
      const rge = /\.\w+$/;
      const fileSuffix = file.name.match(rge)?.[0] ?? "";
      if (!options.value.acceptTypes.includes(fileSuffix)) {
        message.warning(
          `请上传${options.value.acceptTypes.join("、")}格式的文件`
        );
        validType = false;
      }
    }
    // 这里追加判断如果是一项，则执行替换
    if (options.value.maxCount) {
      if (options.value.maxCount > 1) {
        hasOverLimit =
          files.value.length + (fileList || [])?.length >
          options.value.maxCount;
        if (hasOverLimit) {
          message.warning(`已超过最大上传数${options.value.maxCount}`);
          return false;
        }
      }
    }
    if (options.value.maxSize && file.size) {
      isLt = file.size / 1024 / 1024 < options.value.maxSize;
      if (!isLt) {
        message.warning(`单个文件最大为${options.value.maxSize}M`);
      }
    }

    return isLt && validType;
  };
  const customRequest = async (option: any) => {
    if (options.value.multiple && !options?.value?.apis?.fileUploadMulti) {
      console.warn("未配置批量上传接口");
      return;
    } else {
      if (!options?.value?.apis?.fileUploadSingle) {
        console.warn("未配置单条上传接口");
        return;
      }
    }
    
    let formData = new FormData();
    const { file } = option;
    let fileList = [];
    // 兼容数组和单项
    if (options.value.multiple && Array.isArray(file)) {
      fileList = file;
      file.forEach((f: File) => {
        formData.append(options.value.name || "files[]", f);
      });
    } else {
      fileList = [file];
      formData.append(options.value.name || "file", file);
    }
    if (options.value?.data) {
      if (
        !(
          typeof options.value.data === "function" ||
          typeof options.value.data === "object"
        )
      ) {
        console.warn("data类型错误,请传入object或function");
        return;
      }
      if (typeof options.value.data === "object") {
        const data = options.value.data as Record<string, any>;
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
      } else {
        const customData = (options.value.data as (file: File[]) => FormData)(
          fileList
        );
        // 合并自定义FormData
        Array.from(customData.entries()).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }
    }

    console.log("formData-imgUpload=", formData);
    uploadLoading.value = true;

    // 为每个文件创建一个uid
    const uids = fileList.map(() => getRandomId());

    // 添加所有文件到列表，状态为uploading
    const filesToAdd = fileList.map((f, index) => ({
      uid: uids[index],
      fileName: f.name,
      status: "uploading",
    }));
    if (options.value.maxCount === 1) {
      files.value = [filesToAdd[0]];
    } else {
      files.value.push(...filesToAdd);
    }
    const realFileUpload = options.value.multiple
      ? options.value.apis.fileUploadMulti
      : options.value.apis.fileUploadSingle;
    try {
      const res = await realFileUpload(formData);
      uploadLoading.value = false;
      if (res.success) {
        const filterData = (options.value.multiple ? res.data : [res.data]).map(
          (item: any) => {
            if (
              options?.value?.transformResult &&
              typeof options.value.transformResult === "function"
            ) {
              return options.value.transformResult(item);
            }
            return {
              id: item.id,
              fileType: item.fileType,
              fileSize: item.fileSize,
              fileName: item.fileName,
            };
          }
        );

        // 更新所有文件状态
        filterData.forEach((item: any, index: number) => {
          const targetIndex = files.value.findIndex(
            (f: any) => f.uid === uids[index]
          );
          if (targetIndex !== -1) {
            files.value[targetIndex] = { ...item, status: "done" };
          }
        });

        // 调用成功回调
        option.afterUpload?.(files.value);
      } else {
        // 更新所有文件状态为错误
        uids.forEach((uid) => {
          const targetIndex = files.value.findIndex(
            (item: any) => item.uid === uid
          );
          if (targetIndex !== -1) {
            files.value[targetIndex].status = "error";
          }
        });
      }

      if (
        options?.value?.afterUpload &&
        typeof options.value.afterUpload === "function"
      ) {
        options.value.afterUpload(files.value);
      }
    } catch (error) {
      uploadLoading.value = false;
      // 更新所有文件状态为错误
      uids.forEach((uid) => {
        const targetIndex = files.value.findIndex(
          (item: any) => item.uid === uid
        );
        if (targetIndex !== -1) {
          files.value[targetIndex].status = "error";
        }
      });
    }
  };
  const viewerInstance = ref();
  // 图片/附件删除
  const handleDelFile = async (file: IFileItem) => {
    const id = file.id;
    if (!options?.value?.apis) {
      console.warn("未配置删除接口");
      // 仅更新files
      const delIndex = files.value.findIndex((item: any) => item.id === id);
      files.value.splice(delIndex, 1);
      if (
        options?.value?.afterDelete &&
        typeof options.value.afterDelete === "function"
      ) {
        options.value.afterDelete(files.value);
      }
      return;
    }
    uploadLoading.value = true;
    const res = await options.value.apis.fileDel?.(id);
    uploadLoading.value = false;
    if (res && res.success) {
      const delIndex = files.value.findIndex((item: any) => item.id === id);
      files.value.splice(delIndex, 1);
      if (
        options?.value?.afterDelete &&
        typeof options.value.afterDelete === "function"
      ) {
        options.value.afterDelete(files.value);
      }
    }
  };
  // 图片/附件预览
  const handlePreviewFile = async (file: IFileItem) => {
    if (!file.fileName) {
      throw new Error("缺少必要属性fileName");
    }
    const getPreviewUrl = options.value?.apis?.getPreviewUrl;
    const rge = /\.\w+$/;
    const fileSuffix = file.fileName.match(rge)?.[0] ?? "";
    if (fileSuffix) {
      // 图片走插件预览(如何禁止img点击触发？？)
      if ([".png", ".jpg", ".gif", ".jpeg"].includes(fileSuffix)) {
        if (viewerInstance.value) {
          viewerInstance.value.view(0);
        } else {
          let img = null;
          if (document.getElementById("viewer-img")) {
            // 如果已经存在，则直接显示
            img = document.getElementById("viewer-img");
          } else {
            // 创建新的 img 元素
            img = document.createElement("img");
            img.id = "viewer-img";
            img.style.display = "none"; // 隐藏元素
          }
          if (img) {
            (img as HTMLImageElement).src =
              (getPreviewUrl ? getPreviewUrl(file.id) : file.previewUrl) || "";
            viewerInstance.value = new Viewer(img, {
              className: file.className,
              // 内联展示
              inline: false,
            });
            viewerInstance.value.view(0);
          }
        }
      } else {
        if (
          options.value.onPreview ||
          typeof options.value.onPreview === "function"
        ) {
          options.value.onPreview(file.id);
        } else {
          window.open(file.previewUrl);
        }
      }
    } else {
      if (
        options.value.onPreview ||
        typeof options.value.onPreview === "function"
      ) {
        options.value.onPreview(file.id);
      } else {
        window.open(file.previewUrl);
      }
    }
  };
  // 图片/附件下载
  const handleDownloadFile = async (file: IFileItem) => {
    const fileDownload = options.value?.apis?.fileDownload;
    if (!fileDownload || typeof fileDownload !== "function") {
      throw new Error("文件下载方法缺失或传入的fileDownload不正确");
    }
    const res = await fileDownload(file.id);
    handleExceptDown(res, file.fileName, file?.className);
  };
  return {
    beforeUpload,
    customRequest,
    handleDelFile,
    handleDownloadFile,
    handlePreviewFile,
    uploadLoading,
    files,
  };
}
