<template>
  <Demo :code="code">
    <a-flex vertical gap="10px" class="mb-2">
      <span>最大上传数: {{ uploadOptions.maxCount }}</span>
      <span>单个文件最大: {{ uploadOptions.maxSize }}MB</span>
      <span>接受的文件类型: {{ uploadOptions.acceptTypes.join(", ") }}</span>
    </a-flex>
    <div class="attachment-wrapper">
      <s-file-preview-item
        v-for="item in files"
        :key="item.id"
        className="disable-outside"
        :file="item"
        @on-delete="handleDelFile"
      />
    </div>
    <a-tooltip title="上传附件/图片(最多支持8个,单个大小不超过50M)">
      <a-upload
        :before-upload="beforeUpload"
        :custom-request="customRequest"
        :showUploadList="false"
        multiple
      >
        <a-button type="text" class="px-2">
          <paper-clip-outlined />
        </a-button>

      </a-upload>
    </a-tooltip>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";
import { PaperClipOutlined } from "@ant-design/icons-vue";
import type { IFileItem } from "@/hooks/useCustomUpload";
// 定义上传选项
const uploadOptions = ref({
  maxCount: 8, // 最大上传数量
  maxSize: 50, // 最大文件大小(MB)
  acceptTypes: [".jpg", ".png", ".pdf", ".xlsx", '.docx'], // 接受的文件类型
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
const { beforeUpload, customRequest, handleDelFile, files } =
  useCustomUpload(uploadOptions);
const code = ref(`
<template>
    <a-flex vertical gap="10px" class="mb-2">
      <span>最大上传数: {{ uploadOptions.maxCount }}</span>
      <span>单个文件最大: {{ uploadOptions.maxSize }}MB</span>
      <span>接受的文件类型: {{ uploadOptions.acceptTypes.join(", ") }}</span>
    </a-flex>
    <div class="attachment-wrapper">
      <s-file-preview-item
        v-for="item in files"
        :key="item.id"
        className="disable-outside"
        :file="item"
        @on-delete="handleDelFile"
      />
    </div>
    <a-tooltip title="上传附件/图片(最多支持8个,单个大小不超过50M)">
      <a-upload
        :before-upload="beforeUpload"
        :custom-request="customRequest"
        :showUploadList="false"
        multiple
      >
        <a-button type="text" class="px-2">
          <paper-clip-outlined />
        </a-button>

      </a-upload>
    </a-tooltip>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";
import { PaperClipOutlined } from "@ant-design/icons-vue";
import type { IFileItem } from "@/hooks/useCustomUpload";
// 定义上传选项
const uploadOptions = ref({
  maxCount: 8, // 最大上传数量
  maxSize: 50, // 最大文件大小(MB)
  acceptTypes: [".jpg", ".png", ".pdf", ".xlsx", '.docx'], // 接受的文件类型
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
const { beforeUpload, customRequest, handleDelFile, files } =
  useCustomUpload(uploadOptions);
<\/script>

<style scoped lang="less">
.attachment-wrapper,
.placeholder-btn {
  flex-shrink: 0;
}
.attachment-wrapper {
  padding: 5px;
  width: 100%;
  display: flex;
  min-height: 60px;
  flex-wrap: nowrap;
  overflow-x: auto;
  :deep(.file-preview-item-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
}
</style>  
`)  
</script>

<style scoped lang="less">
.attachment-wrapper,
.placeholder-btn {
  flex-shrink: 0;
}
.attachment-wrapper {
  padding: 5px;
  width: 100%;
  display: flex;
  min-height: 60px;
  flex-wrap: nowrap;
  overflow-x: auto;
  :deep(.file-preview-item-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
}
</style>
