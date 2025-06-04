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
      :file="fItem"
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
// 模拟预览地址拼接(如果你在全局初始化配置了地址，这里就不用再配置了)
const getPreviewUrl = (fileId: string) => {
  return "//localhost:4000/attachment/preview/" + fileId + "?token=" + token.value;
};
// TODO: 文件类型预览需自行实现
const onPreview = (fileId: string) => {
  console.log(fileId);
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
const mode = ref("card");
const token = ref("speed-test-token");
const direction = ref("horizontal");
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
// 模拟预览地址拼接(如果你在全局初始化配置了地址，这里就不用再配置了)
const getPreviewUrl = (fileId: string) => {
  return "//localhost:4000/attachment/preview/" + fileId + "?token=" + token.value;
};
// TODO: 文件类型预览需自行实现
const onPreview = (fileId: string) => {
  console.log(fileId);
  message.warning("文件类型预览需自行实现");
};
</script>

<template>
  <Demo :code="code">
    <div :class="['attachment-wrapper', direction]">
      <s-file-preview-item
        v-for="fItem in files"
        :key="fItem.id"
        :canIdel="canIdel"
        :getPreviewUrl="getPreviewUrl"
        :onPreview="onPreview"
        :mode="mode"
        @on-delete="handleDelFile"
        :file="fItem"
      />
    </div>
    <a-flex vertical class="mt-2" :gap="10">
      <a-space>
        是否允许删除
        <a-switch v-model:checked="canIdel" />
      </a-space>
      <a-space>
        展示样式
        <a-radio-group v-model:value="mode">
          <a-radio value="card">卡片</a-radio>
          <a-radio value="list">列表</a-radio>
          <a-radio value="list-simple">列表-简洁</a-radio>
        </a-radio-group>
      </a-space>
      <a-space>
        方向
        <a-radio-group v-model:value="direction">
          <a-radio value="horizontal">水平</a-radio>
          <a-radio value="vertical">垂直</a-radio>
        </a-radio-group>
      </a-space>
    </a-flex>
  </Demo>
</template>
<style lang="less" scoped>
.attachment-wrapper {
  padding: 5px 0;
  width: 100%;
  display: flex;

  gap: 10px;
  &.horizontal {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  &.vertical {
    flex-direction: column;
    :deep(.file-preview-item-list-wrapper) {
      width: 100%;
    }
  }
  // 设置不缩放
  :deep(.file-preview-item-wrapper),
  :deep(.file-preview-item-list-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
  :deep(.file-preview-item-list-wrapper) {
    width: 170px;
  }
}
</style>
