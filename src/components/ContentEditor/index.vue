<!-- 富文本编辑器：带有图片上传 -->
<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  ref,
  shallowRef,
  watch,
} from "vue";
import type { Ref } from "vue";
import { Form } from "ant-design-vue";
import { useCustomUpload } from "@/hooks/useCustomUpload";
// 是否在客户端环境
const isClient = typeof window !== "undefined";

defineOptions({
  name: "SContentEditor",
});
// 动态导入组件和样式
const Editor = ref();
const Toolbar = ref();
const formItemContext = Form.useInjectFormItemContext();
if (isClient) {
  import("@wangeditor/editor/dist/css/style.css");
  import("@wangeditor/editor-for-vue").then((module) => {
    Editor.value = module.Editor;
    Toolbar.value = module.Toolbar;
  });
}

// 引入 css
const props = withDefaults(
  defineProps<{
    value?: string;
    readOnly?: boolean;
    height?: string;
    placeholder?: string;
    toolbarConfig?: any; // 改为 any，因为类型会在运行时动态导入
    mode?: "simple" | "default";
    // 附件上传配置，参考useCustomUpload的参数
    uploadConfig?: {
      maxCount?: number;
      maxSize?: number;
      name?: string; // 上传文件的key名
      acceptTypes?: string[];
      multiple?: boolean;
      data?: Record<string, any> | ((file: File) => Record<string, any>); // 上传所需参数或返回上传参数的方法
      transformResult?: (res: any) => any; // 上传结果转换
      onPreview?: (fileId: string) => void; // 预览文件的操作
      afterUpload?: (files: any[]) => void; // 上传完成后执行得操作
      afterDelete?: (files: any[]) => void; // 删除完成后执行得操作
    };
  }>(),
  {
    value: "",
    readOnly: false,
    height: "360px",
    placeholder: "请输入内容...",
    toolbarConfig: () => ({ excludeKeys: ["insertVideo", "insertTable"] }),
    mode: "simple",
  }
);
const uploadOption = computed(() => {
  return (
    props.uploadConfig || {
      acceptTypes: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"],
    }
  );
});
const { customRequest: handleUpload } = useCustomUpload(uploadOption);
type InsertFnType = (url: string, alt: string, href: string) => void;
const speedComsConfig = inject(
  "speed-components-config",
  ref({ apis: {} })
) as Ref<any>;
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref("");
const editorConfig = {
  placeholder: props.placeholder,
  MENU_CONF: {},
};
// 追加一个路径
const getPreviewUrl = speedComsConfig.value?.apis?.getPreviewUrl;
// 这里暂时不处理图片删除了(这里采用自定义上传，后端为put，好像编辑器没提供修改)
(editorConfig.MENU_CONF as any)["uploadImage"] = {
  // 自定义上传
  async customUpload(file: File, insertFn: InsertFnType) {
    await handleUpload({
      file,
      afterUpload: (files: any[]) => {
        if (files.length > 0) {
          files.forEach((item: any) => {
            const tempUrl =
              (getPreviewUrl ? getPreviewUrl(item.id) : item.previewUrl) || "";
            insertFn(tempUrl, "", tempUrl);
          });
          setTimeout(() => {
            emit("update:value", editorRef.value.getHtml()); // 更新一下值
          });
        }
      },
    });
  },
};
const emit = defineEmits(["update:value"]);
const handleChange = (editor: any) => {
  emit("update:value", editor.getHtml());
  formItemContext.onFieldChange();
};

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
  valueHtml.value = props.value || "";

  // 初始化只读状态
  if (props.readOnly) {
    editor.disable();
  }
};
// 监听是否只读
watch(
  () => props.readOnly,
  async (val: boolean) => {
    await nextTick();
    if (editorRef.value) {
      val ? editorRef.value.disable() : editorRef.value.enable();
    }
  }
);
// 监听外部值变化，同步编辑器
watch(
  () => props.value,
  (val: string) => {
    if (editorRef.value) {
      valueHtml.value = val;
    }
  }
);
</script>

<template>
  <div
    v-if="isClient && Editor && Toolbar"
    class="content-editor-wrapper"
    :style="{ height: height }"
  >
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="valueHtml"
      class="content-editor-body"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
  <div v-else class="content-editor-wrapper" :style="{ height: height }">
    <div class="content-editor-placeholder">
      {{ placeholder }}
    </div>
  </div>
</template>

<style lang="less" scoped>
// :deep(.w-e-bar-item) {
//   height: 20px;
//   padding: 0;
//   margin: 2px;
//   button {
//     height: 18px;
//     padding: 0 2px;
//   }
// }
// :deep(.w-e-text-container [data-slate-editor]) {
//   padding: 0 3px;
// }
// :deep(.w-e-text-container [data-slate-editor] p) {
//   margin: 0;
// }
// :deep(.w-e-drop-panel) {
//   right: -20px !important;
//   overflow-y: auto;
// }
// :deep(.w-e-panel-content-color) {
//   height: 190px;
//   width: 190px;
// }

.content-editor-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  .content-editor-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.content-editor-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}
</style>
