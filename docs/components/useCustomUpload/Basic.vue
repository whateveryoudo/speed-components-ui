<template>
  <Demo :code="code">
    <input type="file" multiple @change="handleFileChange" />
    <div v-if="uploadLoading">上传中...</div>
    <div v-if="files.length > 0">
      <div v-for="file in files" :key="file.uid" class="file-item">
        <span>{{ file.fileName }}</span>
        <span v-if="file.status === 'uploading'">上传中...</span>
        <span v-else-if="file.status === 'error'">上传失败</span>
        <button v-else @click="handleDelFile(file.id)">删除</button>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";

// 定义上传选项
const uploadOptions = ref({
  multiple: true,
  // 上传后的回调
  afterUpload: (files: any[]) => {
    console.log("上传完成:", files);
  },
  // 删除后的回调
  afterDelete: (files: any[]) => {
    console.log("删除后剩余文件:", files);
  },
});

// 使用自定义上传hook
const { beforeUpload, customRequest, handleDelFile, uploadLoading, files } =
  useCustomUpload(uploadOptions);

// 处理文件选择
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  const files = Array.from(input.files);
  // 如果后端支持多文件上传，则直接上传
  // 检查文件是否符合要求
  if (files.every((file) => beforeUpload(file as any))) {
    // 执行上传
    customRequest({
      file: files,
      afterUpload: () => {
        // 清空input，允许重复选择相同文件
        input.value = "";
      },
    });
  }
};

const code = ref(`
<template>
    <input
      type="file"
      @change="handleFileChange"
      multiple
    />
    <div v-if="uploadLoading">上传中...</div>
    <div v-if="files.length > 0">
      <div v-for="file in files" :key="file.uid" class="file-item">
        <span>{{ file.fileName }}</span>
        <span v-if="file.status === 'uploading'">上传中...</span>
        <span v-else-if="file.status === 'error'">上传失败</span>
        <button v-else @click="handleDelFile(file.id)">删除</button>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";

// 定义上传选项
const uploadOptions = ref({
  multiple: true,
  // 上传后的回调
  afterUpload: (files: any[]) => {
    console.log("上传完成:", files);
  },
  // 删除后的回调
  afterDelete: (files: any[]) => {
    console.log("删除后剩余文件:", files);
  },
});

// 使用自定义上传hook
const { beforeUpload, customRequest, handleDelFile, uploadLoading, files } =
  useCustomUpload(uploadOptions);

// 处理文件选择
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  const files = Array.from(input.files);
  // 如果后端支持多文件上传，则直接上传
  // 检查文件是否符合要求
  if (files.every((file) => beforeUpload(file as any))) {
    // 执行上传
    customRequest({
      file: files,
      afterUpload: () => {
        // 清空input，允许重复选择相同文件
        input.value = "";
      },
    });
  }
};
<\/script>
<style scoped>
.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 4px;
}

button {
  padding: 2px 8px;
  border: 1px solid #ff4d4f;
  color: #ff4d4f;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #ff4d4f;
  color: white;
}
</style>


`);
</script>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 4px;
}

button {
  padding: 2px 8px;
  border: 1px solid #ff4d4f;
  color: #ff4d4f;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #ff4d4f;
  color: white;
}
</style>
