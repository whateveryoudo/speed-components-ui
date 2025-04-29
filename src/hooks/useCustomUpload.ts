// 自定义上传
import type { UploadProps } from 'ant-design-vue';
import { ref, type Ref, type ComputedRef } from 'vue';
import { message } from 'ant-design-vue';
import { fileUpload, del } from '@/api/attachment';
import { getRandomId } from '@/utils';
type IUploadOption = {
  maxCount?: number;
  maxSize?: number;
  acceptTypes?: string[];
  transformResult?: (res: any) => any; // 上传结果转换
  afterUpload?: (files: any[]) => void; // 上传完成后执行得操作
  afterDelete?: (files: any[]) => void; // 删除完成后执行得操作
};
type NewFileListType = Exclude<UploadProps['fileList'], undefined>;
export function useCustomUpload(options?: Ref<IUploadOption> | ComputedRef<IUploadOption>) {
  const files = ref<any[]>([]); // 上传文件列表
  const uploadLoading = ref(false);

  const beforeUpload = (file: NewFileListType[number], outFiles?: UploadProps['fileList']) => {
    const fileList = outFiles || files.value;
    if (!options) {
      return true;
    }
    let hasOverLimit = false,
      validType = true,
      isLt = true;
    if (options.value.maxCount) {
      hasOverLimit = files.value.length + (fileList || [])?.length > options.value.maxCount;
      if (hasOverLimit) {
        message.warning(`已超过最大上传数${options.value.maxCount}`);
        return false;
      }
    }
    if (options.value.maxSize && file.size) {
      isLt = file.size / 1024 / 1024 < options.value.maxSize;
      if (!isLt) {
        message.warning(`单个文件最大为${options.value.maxSize}M`);
      }
    }
    // 校验格式，目前仅通过文件名后缀处理
    if (options.value.acceptTypes && options.value.acceptTypes.length > 0) {
      const rge = /\.\w+$/;
      const fileSuffix = file.name.match(rge)?.[0] ?? '';
      if (!options.value.acceptTypes.includes(fileSuffix)) {
        message.warning(`请上传${options.value.acceptTypes.join('、')}格式的文件`);
        validType = false;
      }
    }

    return isLt && validType;
  };
  // 手动上传图片(这里批量实际是多次调用单次上传)
  const customRequest = async (option: any) => {
    // 用不上回调，这里是自己写的渲染
    const { file } = option;
    const formData = new FormData();
    console.log(file);
    formData.append('files', file);
    console.log('formData-imgUpload=', formData);
    uploadLoading.value = true;
    // 创建一个中间项
    const uid = getRandomId();
    files.value.push({
      uid,
      fileName: file.name,
      status: 'uploading',
    });
    try {
      const res = await fileUpload(formData);
      uploadLoading.value = false;
      if (res.success) {
        const filterData = res.data.map((item: any) => {
          if (
            options?.value?.transformResult &&
            typeof options.value.transformResult === 'function'
          ) {
            return options.value.transformResult(item);
          }
          return {
            id: item.id,
            fileType: item.fileType,
            fileSize: item.fileSize,
            fileName: item.fileName,
          };
        });
        // 更新状态
        const targetIndex = files.value.findIndex((item: any) => item.uid === uid);
        if (targetIndex !== -1 && filterData.length > 0) {
          files.value[targetIndex] = filterData[0]; // 替换下元素
        }
      } else {
        // 更新状态
        const targetIndex = files.value.findIndex((item: any) => item.uid === uid);
        if (targetIndex !== -1) {
          files.value[targetIndex].status = 'error';
        }
      }

      if (options?.value?.afterUpload && typeof options.value.afterUpload === 'function') {
        options.value.afterUpload(files.value);
      }
    } catch (error) {
      uploadLoading.value = false;
      // 更新状态
      const targetIndex = files.value.findIndex((item: any) => item.uid === uid);
      if (targetIndex !== -1) {
        files.value[targetIndex].status = 'error';
      }
    }
  };
  // 图片删除
  const handleDelFile = async (id: string) => {
    uploadLoading.value = true;
    const res = await del(id);
    uploadLoading.value = false;
    if (res && res.success) {
      const delIndex = files.value.findIndex((item: any) => item.id === id);
      files.value.splice(delIndex, 1);
      if (options?.value?.afterDelete && typeof options.value.afterDelete === 'function') {
        options.value.afterDelete(files.value);
      }
    }
  };
  return {
    beforeUpload,
    customRequest,
    handleDelFile,
    uploadLoading,
    files,
  };
}
