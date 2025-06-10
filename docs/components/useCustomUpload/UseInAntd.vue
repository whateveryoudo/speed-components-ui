<template>
  <Demo :code="code">
    <a-flex vertical gap="10px" class="mb-2">
      <span>最大上传数: {{ uploadOptions.maxCount }}</span>
      <span>单个文件最大: {{ uploadOptions.maxSize }}MB</span>
      <span>接受的文件类型: {{ uploadOptions.acceptTypes.join(", ") }}</span>
    </a-flex>
    <a-upload
      :file-list="files"
      :before-upload="beforeUpload"
      :custom-request="customRequest"
      @remove="handleDelFile"
      @preview="handlePreviewFile"
      @download="handleDownloadFile"
      :show-upload-list="{
        showRemoveIcon: true,
        showDownloadIcon: true,
        showPreviewIcon: true,
      }"
    >
      <a-button> <upload-outlined /> 点击上传 </a-button>
    </a-upload>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";
import type { IFileItem } from "@/hooks/useCustomUpload";
// 定义上传选项
const uploadOptions = ref({
  maxCount: 1, // 最大上传数量
  maxSize: 2, // 最大文件大小(MB)
  acceptTypes: [".jpg", ".png", ".pdf"], // 接受的文件类型
  // 转换为upload组件要的格式(这里是单项)
  transformResult: (item: IFileItem) => {
    return {
      ...item,
      uid: item.id,
      name: item.fileName,
    };
  },
  // 上传后的回调
  afterUpload: (files: IFileItem[]) => {
    console.log("上传完成:", files);
  },
  // 删除后的回调
  afterDelete: (files: IFileItem[]) => {
    console.log("删除后剩余文件:", files);
  },
});

// 使用自定义上传hook
const {
  beforeUpload,
  customRequest,
  handleDelFile,
  handleDownloadFile,
  handlePreviewFile,
  files,
} = useCustomUpload(uploadOptions);

const code = ref(`
<template>
    <a-flex vertical gap="10px" class="mb-2">
      <span>最大上传数: {{ uploadOptions.maxCount }}</span>
      <span>单个文件最大: {{ uploadOptions.maxSize }}MB</span>
      <span>接受的文件类型: {{ uploadOptions.acceptTypes.join(', ') }}</span>
    </a-flex>
    <a-upload
      :file-list="files"
      :before-upload="beforeUpload"
      :custom-request="customRequest"
      @remove="handleDelFile"
      @preview="handlePreviewFile"
      @download="handleDownloadFile"
      :show-upload-list="{
        showRemoveIcon: true,
        showDownloadIcon: true,
        showPreviewIcon: true
      }"
    >
      <a-button>
        <upload-outlined /> 点击上传
      </a-button>
    </a-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useCustomUpload, type IFileItem } from "speed-components-ui/hooks";
// 定义上传选项
const uploadOptions = ref({
  maxCount: 1, // 最大上传数量
  maxSize: 2, // 最大文件大小(MB)
  acceptTypes: ['.jpg', '.png', '.pdf'], // 接受的文件类型
  // 转换为upload组件要的格式(这里是单项)
  transformResult: (item: IFileItem) => {
    return {
      ...item,
      uid: item.id,
      name: item.fileName,
    }
  },
  // 上传后的回调
  afterUpload: (files: IFileItem[]) => {
    console.log("上传完成:", files);
  },
  // 删除后的回调
  afterDelete: (files: IFileItem[]) => {
    console.log("删除后剩余文件:", files);
  }
});


// 使用自定义上传hook
const { beforeUpload, customRequest, handleDelFile,
    handleDownloadFile,
    handlePreviewFile, files } =
  useCustomUpload(uploadOptions);
  <\/script>

<style scoped>
:deep(.ant-upload-list-item) {
  margin-top: 8px;
}
</style>
`);
</script>

<style scoped>
:deep(.ant-upload-list-item) {
  margin-top: 8px;
}
</style>
