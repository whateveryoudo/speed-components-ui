<script lang="ts" setup>
import { computed, inject, Ref, ref, watch } from "vue";
import { useCustomUpload, type IFileItem } from "@/hooks/useCustomUpload";
import { Form } from "ant-design-vue";
import { cloneDeep } from "lodash-es";
import { acceptToMimeMap } from "./const";
import { Upload, Button } from "ant-design-vue";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons-vue";
defineOptions({
  name: "SCustomUpload",
});
const props = withDefaults(
  defineProps<{
    value?: any;
    acceptTypes?: string[];
    maxCount?: number;
    multiple?: boolean;
    disabled?: boolean;
    type?: "picture" | "file"; // 上传类型
    name?: string;
    data?: object | ((file: IFileItem) => object);
  }>(),
  {
    value: [],
    maxCount: 9,
    type: 'file',
    name: "file",
    multiple: false,
    disabled: false,
    listType: "text",
    acceptTypes: () => [],
  }
);
const formItemContext = Form.useInjectFormItemContext
  ? Form.useInjectFormItemContext()
  : null;
const uploadOption = computed(() => {
  return {
    acceptTypes: realAcceptTypes.value,
    maxCount: props.maxCount,
    multiple: props.multiple,
    name: props.name,
    data: props.data,
    afterUpload: (result: any[]) => {
      emit("update:value", result);
      formItemContext && formItemContext.onFieldChange();
    },
    afterDelete: (result: any[]) => {
      emit("update:value", result);
      formItemContext && formItemContext.onFieldChange();
    },
  };
});
const {
  files,
  beforeUpload,
  customRequest,
  handleDelFile,
  handleDownloadFile,
  handlePreviewFile,
} = useCustomUpload(uploadOption);
const speedComsConfig = inject(
  "speed-components-config",
  ref({ apis: {} })
) as Ref<any>;
// 内置规则， 图片追加内置， 文件则不限制规则
const invokeAccept = computed(() => {
  return props.type === "picture" ? [".jpg", ".png", ".jpeg", '.svg'] : [];
});
const realAcceptTypes = computed(() => {
  return props.acceptTypes.length > 0 ? props.acceptTypes : invokeAccept.value;
});
// 构建accept
const accept = computed(() => {
  return realAcceptTypes.value
    .map(
      (item) => acceptToMimeMap[item as keyof typeof acceptToMimeMap] || item
    )
    .join(",");
});
const previewFiles = computed(() => {
  // 追加一个路径
  const getPreviewUrl = speedComsConfig.value?.apis?.getPreviewUrl;
  return files.value.map((item: IFileItem) => {
    return {
      ...item,
      uid: item.id,
      name: item.fileName,
      url: (getPreviewUrl ? getPreviewUrl(item.id) : item.previewUrl) || "",
    };
  });
});
const handleCustomRequest = (option: any) => {
  const { file } = option;
  const valid = beforeUpload(file); // 这里调用拦截
  if (!valid) {
    return;
  }
  customRequest(option);
};

const emit = defineEmits(["update:value"]);
watch(
  () => props.value,
  (val: any[]) => {
    files.value = cloneDeep(val || []);
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <div>
    <Upload
      v-bind="props"
      :file-list="previewFiles"
      :accept="accept"
      :disabled="disabled"
      :list-type="type === 'picture' ? 'picture-card' : 'text'"
      :custom-request="handleCustomRequest"
      :max-count="maxCount"
      :multiple="multiple"
      @preview="handlePreviewFile"
      @remove="handleDelFile"
      @download="handleDownloadFile"
    >
      <template v-if="files.length < maxCount">
        <slot name="trigger" v-if="$slots.trigger" />
        <div v-else-if="type === 'picture'">
          <PlusOutlined />
          <div style="margin-top: 8px">上传图片</div>
        </div>
        <Button v-else>
          <UploadOutlined></UploadOutlined>
          上传文件
        </Button>
      </template>
    </Upload>
  </div>
</template>
<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 25px;
  line-height: 25px;
  padding-left: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  .file-name {
    color: var(--ant-primary-color);
    cursor: pointer;
    width: calc(100% - 40px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    .delete-file {
      display: block;
    }
  }
  .delete-file {
    margin-left: 10px;
    color: var(--ant-danger-color);
    display: none;
    cursor: pointer;
  }
}
</style>
