<!-- 富文本编辑器：带有图片上传 -->
<script lang="ts" setup>
  import { type IToolbarConfig } from '@wangeditor/editor';
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
  import { inject, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';



  import '@wangeditor/editor/dist/css/style.css';
  const globalConfig = inject("speed-components-config", ref({})) as Ref<GlobalConfig>;

  // 引入 css
  const props = withDefaults(
    defineProps<{
      value?: string;
      readOnly?: boolean;
      height?: string;
      placeholder?: string;
      toolbarConfig?: Partial<IToolbarConfig>;
      mode?: 'simple' | 'default';
    }>(),
    {
      value: '',
      readOnly: false,
      height: '360px',
      placeholder: '请输入内容...',
      toolbarConfig: () => ({ excludeKeys: ['insertVideo', 'insertTable'] }),
      mode: 'simple',
    },
  );
  type InsertFnType = (url: string, alt: string, href: string) => void;

  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef();
  // 内容 HTML
  const valueHtml = ref('');
  const editorConfig = {
    placeholder: props.placeholder,
    MENU_CONF: {},
  };
  const getPreviewUrl = () => {
    return ''
  }
  // 这里暂时不处理图片删除了(这里采用自定义上传，后端为put，好像编辑器没提供修改)
  (editorConfig.MENU_CONF as any)['uploadImage'] = {
    // 自定义上传
    async customUpload(file: File, insertFn: InsertFnType) {
      // TS 语法 TODO换成customUpload
      // const formData = new FormData();
      // formData.append('files', file);
      // const res = await fileUpload(formData);
      // if (res && res.success) {
      //   if (res.data && res.data.length > 0) {
      //     res.data.forEach((item: any) => {
      //       const tempUrl = getPreviewUrl(item.id);
      //       insertFn(tempUrl, '', tempUrl);
      //     });
      //     setTimeout(() => {
      //       emit('update:value', editorRef.value.getHtml()); // 更新一下值
      //     });
      //   }
      // }
    },
  };
  const emit = defineEmits(['update:value']);
  const handleChange = (editor: any) => {
    emit('update:value', editor.getHtml());
  };

  onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
  });
  const handleCreated = (editor: any) => {
    editorRef.value = editor; // 记录 editor 实例，重要！

    valueHtml.value = props.value || '';
  };
  // 监听是否只读
  watch(
    () => props.readOnly,
    async (val: boolean) => {
      await nextTick();
      if (editorRef.value) {
        val ? editorRef.value.disable() : editorRef.value.enable();
      }
    },
    {
      immediate: true,
    },
  );
  // 监听外部值变化，同步编辑器
  watch(
    () => props.value,
    (val: string) => {
      if (editorRef.value) {
        valueHtml.value = val;
      }
    },
  );
</script>

<template>
  <div
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
</style>
