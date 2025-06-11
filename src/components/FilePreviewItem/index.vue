<!-- 单个文件预览,沿用了antd组件样式：目前仅支持卡片模式 ,这里仅通过后缀名判断了，未准确校验mime-->
<template>
  <div
    v-if="['list', 'list-simple'].includes(mode)"
    :class="[
      'file-preview-item-list-wrapper',
      mode === 'list-simple' && 'simple',
    ]"
  >
    <img ref="imgRef" :src="showPlacePic()" alt="" />
    <div class="info-wrapper">
      <div
        class="overflow-hidden-one title"
        :title="file.fileName"
        @click.stop="clickTitlePreview"
      >
        {{ file.fileName }}
      </div>
      <div
        v-if="
          mode !== 'list-simple' &&
          (file.fileSize !== undefined || file.fileSize !== null)
        "
        class="overflow-hidden-one text-gray text-[12px]"
      >
        {{ formatFileSize(Number(file.fileSize)) }}
      </div>
      <Space class="right-actions" :size="5">
        <template v-if="mode !== 'list-simple'">
          <a class="text-primary" @click.stop="handlePreview"> 预览 </a>
          <a
            v-if="showDownLoad"
            class="text-primary"
            @click.stop="handleDownLoad"
          >
            下载
          </a>

          <a
            v-if="canIdel"
            class="text-error"
            @click.stop="emits('on-delete', file)"
          >
            删除
          </a>
        </template>
        <s-icon-font
          v-else
          title="删除"
          type="icon-close"
          @click.stop="emits('on-delete', file)"
        />
      </Space>
    </div>
  </div>

  <Tooltip v-else :title="file.fileName" placement="top">
    <div class="file-preview-item-wrapper">
      <img ref="imgRef" :src="showPlacePic()" alt="" />
      <span class="actions-wrapper">
        <EyeOutlined title="预览" @click.stop="handlePreview" />
        <!-- 仅有附件支持下载 -->
        <DownloadOutlined
          v-if="showDownLoad"
          title="下载"
          style="margin-left: 5px"
          @click.stop="handleDownLoad"
        />
        <!-- <DeleteOutlined @click.stop="emits('on-delete', id)" /> -->
      </span>
      <s-icon-font
        v-if="canIdel"
        title="删除"
        color="#ff4d4f"
        :size="18"
        type="icon-close-circle-fill"
        class="close-icon"
        @click.stop="emits('on-delete', file)"
      />
    </div>
  </Tooltip>
</template>

<script setup lang="ts">
import { ref, computed, inject, type Ref } from "vue";
import { formatFileSize } from "@/utils";
import "viewerjs/dist/viewer.css";
import excelImg from "@/assets/image/excel.png";
import fileImg from "@/assets/image/file.png";
import musicImg from "@/assets/image/music.png";
import pptImg from "@/assets/image/ppt.png";
import videoImg from "@/assets/image/video.png";
import wordImg from "@/assets/image/word.png";
import zipImg from "@/assets/image/zip.png";
import { GlobalConfig } from "..";
import { useCustomUpload } from "@/hooks";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons-vue";
import { Space, Tooltip } from "ant-design-vue";
export type IFileItem = {
  id: string;
  previewUrl?: string;
  fileName: string;
  fileType: string;
  fileSize?: string | number;
  status?: "done" | "error" | "uploading";
};
const imgRef = ref();
const props = withDefaults(
  defineProps<{
    mode?: "card" | "list" | "list-simple";
    fileDownload?: (fileId: string) => Promise<BlobPart>; // 下载请求，返回流结果
    getPreviewUrl?: (fileId: string) => string; // 图片预览路径
    onPreview?: (fileId: string) => void; // 预览函数
    canIdel?: boolean;
    className?: string;
    file: IFileItem;
  }>(),
  {
    mode: "card",
    canIdel: true, // 是否允许删除附件
  }
);
// 这里仅使用hook的一些公共方法
const { handlePreviewFile, handleDownloadFile } = useCustomUpload();
const globalConfig = inject(
  "speed-components-config",
  ref({})
) as Ref<GlobalConfig>;
const emits = defineEmits(["on-delete"]);
const showDownLoad = computed(() => {
  if (!props.file.fileName) {
    throw new Error("缺少必要属性fileName");
  }
  const rge = /\.\w+$/;
  const fileSuffix = props.file.fileName.match(rge)?.[0] ?? "";
  if (fileSuffix) {
    return ![".png", ".jpg", ".gif", ".jpeg"].includes(fileSuffix);
  }
  return false;
});
// 图片占位映射
const placeholderPicMap = {
  ".xlsx,.xls": excelImg,
  ".doc,.docx": wordImg,
  ".mp3": musicImg,
  ".ppt": pptImg,
  ".mp4,.avi,.wmv,.mpeg": videoImg,
  ".zip,.rar": zipImg,
};
/*eslint no-undef: "off"*/
defineOptions({
  name: "SFilePreviewItem",
});
// 占位图显示
const showPlacePic = () => {
  const getPreviewUrl =
    globalConfig?.value?.apis?.getPreviewUrl ?? props.getPreviewUrl;

  if (!props.file.fileName) {
    throw new Error("缺少必要属性fileName");
  }
  const rge = /\.\w+$/;
  let target: any = fileImg;
  const fileSuffix = props.file.fileName.match(rge)?.[0] ?? "";
  if (fileSuffix) {
    // 图片走插件预览(如何禁止img点击触发？？)
    if ([".png", ".jpg", ".gif", ".jpeg"].includes(fileSuffix)) {
      if (!getPreviewUrl || typeof getPreviewUrl !== "function") {
        console.warn("缺少获取预览路径方法，将采用 previewUrl预览");
        if (!props.file.previewUrl) {
          throw new Error("缺少预览路径");
        }
        return props.file.previewUrl || "";
      }
      return getPreviewUrl(props.file.id);
    } else {
      Object.keys(placeholderPicMap).forEach((key: string) => {
        if (key.includes(fileSuffix)) {
          target = placeholderPicMap[key as keyof typeof placeholderPicMap];
        }
      });
    }
  }
  return target;
};
// 附件预览
const handlePreview = () => {
  handlePreviewFile(props.file);
};
const clickTitlePreview = () => {
  if (props.mode === "list-simple") {
    handlePreview();
  }
};
// 附件下载
const handleDownLoad = () => {
  handleDownloadFile(props.file);
};
</script>

<style scoped lang="less">
.file-preview-item-wrapper {
  width: 60px;
  height: 60px;
  border: 1px solid #d9d9d9;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    .actions-wrapper {
      opacity: 1;
    }
    .close-icon {
      display: block;
    }
  }

  img {
    position: static;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .actions-wrapper {
    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    transition: opacity 0.2s;
    opacity: 0;
    left: 0;
    transform: translateY(-50%);
    :deep(.anticon) {
      transition: color 0.2s;
      color: rgba(255, 255, 255, 0.8);

      &:hover {
        color: #fff;
      }
    }
  }
  .close-icon {
    position: absolute;
    right: -10px;
    top: -5px;
    display: none;
  }
}
// 列表模式
.file-preview-item-list-wrapper {
  background: #f0f1f4;
  border: none;
  border-radius: 3px;
  height: 52px;
  padding: 0 5px;
  margin: 6px 0;
  display: flex;
  position: relative;
  align-items: center;
  &.simple {
    height: 40px;
    img {
      height: 30px;
      width: 30px;
    }
    .right-actions {
      top: 50%;
    }
    .info-wrapper .title {
      cursor: pointer;
    }
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .info-wrapper {
    flex: 1;
    padding-right: 10px;
    min-width: 0;
  }
  .right-actions {
    position: absolute;
    top: 70%;
    right: 5px;
    font-size: 12px;
    transform: translateY(-50%);
  }
}
</style>
