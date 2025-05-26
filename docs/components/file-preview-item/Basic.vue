<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";

const code = `<template>
  <div class="attachment-wrapper">
    <s-file-preview-item
      v-for="fItem in files"
      :key="fItem.id"
      :canIdel="canIdel"
      :getPreviewUrl="getPreviewUrl"
      :onPreview="onPreview"
      @on-delete="handleDelFile"
      v-bind="fItem"
    />
  </div>
  <a-flex vertical class="mt-2">
    <a-space>
      是否允许删除
      <a-switch v-model:checked="canIdel" />
    </a-space>
  </a-flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { useCustomUpload } from "speed-components/hooks/useCustomUpload";

const canIdel = ref(false);
const token = ref("speed-test-token");
const { files, handleDelFile } = useCustomUpload();
files.value = [
  {
    id: "test1",
    fileName: "test1.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test2",
    fileName: "test2.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test3",
    fileName: "test3.xlsx",
    fileType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    fileSize: 1024,
  },
  {
    id: "test4",
    fileName: "test4.docx",
    fileType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileSize: 1024,
  },
];
// 模拟预览地址拼接（需启动后端服务）
const getPreviewUrl = (fieldId: string) => {
  return "//localhost:4000/preview/" + fieldId + "?token=" + token.value;
};
// TODO: 文件类型预览需自行实现
const onPreview = (fieldId: string) => {
  console.log(fieldId);
  message.warning("文件类型预览需自行实现");
};
<\/script>
<style lang="less">
.attachment-wrapper {
  padding: 5px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  // 设置不缩放
  :deep(.file-preview-item-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
}
</style>`;

const canIdel = ref(false);
const token = ref("speed-test-token");
const { files, handleDelFile } = useCustomUpload();
files.value = [
  {
    id: "test1",
    fileName: "test1.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test2",
    fileName: "test2.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test3",
    fileName: "test3.xlsx",
    fileType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    fileSize: 1024,
  },
  {
    id: "test4",
    fileName: "test4.docx",
    fileType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileSize: 1024,
  },
];
// 模拟预览地址拼接
const getPreviewUrl = (fieldId: string) => {
  return "//localhost:4000/preview/" + fieldId + "?token=" + token.value;
};
// TODO: 文件类型预览需自行实现
const onPreview = (fieldId: string) => {
  console.log(fieldId);
  message.warning("文件类型预览需自行实现");
};
</script>

<template>
  <Demo :code="code">
    <div class="attachment-wrapper">
      <s-file-preview-item
        v-for="fItem in files"
        :key="fItem.id"
        :canIdel="canIdel"
        :getPreviewUrl="getPreviewUrl"
        :onPreview="onPreview"
        @on-delete="handleDelFile"
        v-bind="fItem"
      />
    </div>
    <a-flex vertical class="mt-2">
      <a-space>
        是否允许删除
        <a-switch v-model:checked="canIdel" />
      </a-space>
    </a-flex>
  </Demo>
</template>
<style lang="less">
.attachment-wrapper {
  padding: 5px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  // 设置不缩放
  :deep(.file-preview-item-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
}
</style>
