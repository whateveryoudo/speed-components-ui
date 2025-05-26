<script lang="ts" setup>
  import { ref, watch, computed } from 'vue';
  import { Boot, type DomEditor, type IToolbarConfig } from '@wangeditor/editor';
  import { getRandomId } from '@/utils';
  import { useRoute, useRouter } from 'vue-router';
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
  const route = useRoute();
  const router = useRouter();
  const emit = defineEmits(['update:value']);
  const iframeUrl = computed(() => {
    const isWuJie = window.__POWERED_BY_WUJIE__;
    const parentProps = window.$wujie?.props;
    return (
      (isWuJie ? parentProps.fullUrlInWujie : window.location.origin) +
      router.resolve({
        path: `/iframe-wangeditor/${editorKey.value}`,
      }).href
    );
  });
  const iframeEditorRef = ref<any>(null);
  const editorKey = ref(`iframe_editor_${getRandomId()}`);
  window.parent.addEventListener('message', function (event) {
    const evtData = JSON.parse(event.data);
    if (evtData.type === 'childStatus' && evtData.data === 'isReady') {
      if (iframeEditorRef.value) {
        const zionAuthKey = window.localStorage.getItem('zion-auth-key') as string;
        const zionAuthValue = window.localStorage.getItem('zion-auth-value') as string;
        // 将props传入iframe的editor中
        console.log('初始', props.value);
        iframeEditorRef.value.contentWindow.postMessage(
          JSON.stringify({
            type: 'sendProps',
            // 将props传入
            data: {
              [editorKey.value]: {
                ...props,
                // isInit: true,
                token: { key: zionAuthKey, value: zionAuthValue },
              },
            },
          }),
          '*',
        );
      }
    } else if (evtData.type === 'emitValue') {
      console.log(evtData.data, evtData.isFirst, '接收');
      if (!evtData.isFirst) { // 首次valueHtml = ''会触发change??
        emit('update:value', evtData.data);
      }
    }
  });
  watch(
    () => props,
    () => {
      if (iframeEditorRef.value) {
        // console.log(props.value);
        // 将props传入iframe的editor中
        console.log('改变了', props.value);
        iframeEditorRef.value.contentWindow.postMessage(
          JSON.stringify({
            type: 'sendProps',
            // 将props传入
            data: {
              [editorKey.value]: props,
            },
          }),
          '*',
        );
      }
    },
    {
      deep: true,
    },
  );
</script>
<template>
  <iframe
    :style="{ height }"
    ref="iframeEditorRef"
    class="wangeditor-iframe-wrapper"
    :src="iframeUrl"
    frameborder="0"
  ></iframe>
</template>
<style scoped lang="less">
  .wangeditor-iframe-wrapper {
    width: 100%;
    padding-right: 1px; // 边框截取了？？
    padding-left: 1px;
  }
</style>
