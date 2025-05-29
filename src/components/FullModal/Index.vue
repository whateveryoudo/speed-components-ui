<!--
 * @Author: ykx
 * @Date: 2023-05-01 10:49:24
 * @LastEditTime: 2023-06-22 18:15:37
 * @LastEditors: your name
 * @Description: 全局弹框
 * @FilePath: \speed-components\src\components\FullModal\index.vue
-->
<script lang="ts" setup>
import { watch, ref, type CSSProperties, watchEffect, computed } from "vue";
import type { ButtonProps } from "ant-design-vue";
import { useDraggable } from '@vueuse/core';
import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from "@ant-design/icons-vue";
// eslint-disable-next-line no-undef
defineOptions({
  name: "SFullModal",
});
const props = withDefaults(
  defineProps<{
    visible?: boolean;
    open?: boolean;
    height?: number | string | "auto";
    needConfirmClose?: boolean;
    maxHeight?: string;
    minHeight?: string;
    width?: number | string;
    title?: string;
    allowFullScreen?: boolean;
    cancelText?: string;
    okText?: string;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    okType?: string;
    closable?: boolean;
    confirmLoading?: boolean;
    showCancelBtn?: boolean;
    maskClosable?: boolean;
    footer?: boolean
    draggable?: boolean;
    fullScreen?: boolean;
  }>(),
  {
    title: "弹框标题",
    needConfirmClose: false,
    height: "auto",
    maxHeight: "70vh",
    minHeight: "100px",
    width: 450,
    cancelText: "取消",
    okText: "确定",
    okType: "primary",
    allowFullScreen: false,
    confirmLoading: false,
    closable: true,
    showCancelBtn: true,
    maskClosable: false,
    fullScreen: false,
    footer: true,
    draggable: false,
    open: undefined, // 注：这样要显示设置undefined,否则isOpen获取到props.open会是false
    visible: undefined,
  }
);

const isOpen = computed(() => {
  return props.open !== undefined ? props.open : props.visible;
});

const emits = defineEmits<{
  (e: "update:visible", value: boolean): void;
  (e: "update:open", value: boolean): void;
  (e: "update:fullScreen", value: boolean): void;
  (e: "ok", event: Event): void;
  (e: "cancel", event: Event): void;
}>();

const isFullScreen = ref(false);
const startX = ref<number>(0);
const startY = ref<number>(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const modalTitleRef = ref<HTMLElement>(null);
const { x, y, isDragging } = useDraggable(modalTitleRef, {
  disabled: !props.draggable
});
const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 });
watch([x, y], () => {
  // 这里拦截全屏拖拽
  console.log(isFullScreen.value);
  if (isFullScreen.value) {
    return;
  }
  if (!startedDrag.value) {
    startX.value = x.value;
    startY.value = y.value;
    const bodyRect = document.body.getBoundingClientRect();
    const titleRect = modalTitleRef.value.getBoundingClientRect();
    dragRect.value.right = bodyRect.width - titleRect.width;
    dragRect.value.bottom = bodyRect.height - titleRect.height;
    preTransformX.value = transformX.value;
    preTransformY.value = transformY.value;
  }
  startedDrag.value = true;
});
watch(isDragging, () => {
  if (!isDragging) {
    startedDrag.value = false;
  }
});

watchEffect(() => {
  if (isFullScreen.value) {
    return;
  }
  if (startedDrag.value) {
    transformX.value =
      preTransformX.value +
      Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
      startX.value;
    transformY.value =
      preTransformY.value +
      Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
      startY.value;
  }
});
const transformStyle = computed<CSSProperties>(() => {
  return {
    transform: `translate(${transformX.value}px, ${transformY.value}px)`,
  };
});

const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
  emits("update:fullScreen", isFullScreen.value);
};
const resetTransform = () => {
  transformX.value = 0;
  transformY.value = 0;
};
watch(
  () => isOpen,
  () => {
    if (!isOpen) {
      isFullScreen.value = false;
      emits("update:fullScreen", false);
    }
  }
);
// 监听全屏切换，重置位置
watch(
  () => isFullScreen.value,
  () => {
    resetTransform();
  }
);

const updateVisible = (value: boolean) => {
  if (props.open !== undefined) {
    emits("update:open", value);
  } else {
    emits("update:visible", value);
  }
};

const handleClose = (e: Event) => {
  if (props.needConfirmClose) {
    emits("cancel", e);
  } else {
    emits("cancel", e);
    updateVisible(false);
  }
};
// 监听外部的传入
watch(
  () => props.fullScreen,
  (val: boolean) => {
    if (val !== undefined) {
      isFullScreen.value = val;
      resetTransform();
    }
  },
  {
    immediate: true,
  }
);
</script>
<!-- overflowY高度一样也出现了滚动条？？ -->
<template>
  <a-modal :wrap-class-name="`full-base-modal ${isFullScreen ? 'full-screen' : ''}`" :body-style="{
    minHeight,
    maxHeight: isFullScreen ? '100vh' : maxHeight,
    height: typeof height === 'number'
      ? height + 'px'
      : height
    ,
    overflowY: 'auto',
  }" :open="isOpen" :keyboard="false" destroy-on-close :closable="false" :width="width"
    :mask-closable="maskClosable" @update:open="updateVisible" v-bind="$attrs">
    <slot />
    <template #modalRender="{ originVNode }">
      <div :style="transformStyle">
        <component :is="originVNode" />
      </div>
    </template>
    <!-- 这里完全使用title来控制顶部[这里支持3种:1.完全传入title自定义渲染，ps:关闭按钮也需要自行实现；2.title-left控制左侧渲染 3. title-right 控制右侧渲染] -->
    <template #title>
      <slot name="title">
        <div ref="modalTitleRef"
          :class="['w-full flex justify-between align-center', { 'cursor-move': props.draggable }]">
          <slot name="title-left">
            <span class="title-left">
              {{ title }}
            </span>
          </slot>
          <!-- 右侧自定义按钮 -->
          <slot name="title-right">
            <a-space class="title-right">
              <a-button type="text" v-if="allowFullScreen">
                <FullscreenExitOutlined v-if="isFullScreen" @click.stop="toggleFullScreen" />
                <FullscreenOutlined v-else @click.stop="toggleFullScreen" />
              </a-button>
              <a-button type="text" v-if="closable" @click.stop="handleClose">
                <CloseOutlined />
              </a-button>
            </a-space>
          </slot>
        </div>
      </slot>
    </template>
    <!-- 这里没提供footer插槽了，如需自定义底部，设置footer为false -->

    <template #footer>
      <slot name="footer">
        <a-flex align="center" :justify="$slots['footer-left'] ? 'space-between' : 'flex-end'" v-if="footer">
          <slot name="footer-left">
          </slot>
          <!-- 支持右侧自定义按钮集合 -->
          <slot name="footer-right">
            <a-space>
              <a-button v-if="showCancelBtn" v-bind="cancelButtonProps" @click="handleClose">
                {{ cancelText }}
              </a-button>

              <a-button :loading="confirmLoading" v-bind="okButtonProps ? okButtonProps : { type: okType }" @click="
                ($event: Event) => {
                  emits('ok', $event);
                }
              ">
                {{ okText }}
              </a-button>
            </a-space>

          </slot>
        </a-flex>
      </slot>
    </template>
  </a-modal>
</template>

<style lang="less">
.full-base-modal {
  .ant-modal-header {
    .title-right {
      .ant-btn {
        padding: 0;
        width: 22px;
        height: 22px;
        line-height: 1;
        border-radius: 3px;
      }
    }
  }

  // 全屏模式
  &.full-screen {
    .ant-modal {
      width: 100% !important;
      max-width: 100%;
      top: 0;
      padding-bottom: 0;
      margin: 0;
    }

    .ant-modal-content {
      display: flex;
      flex-direction: column;
      height: calc(100vh);
    }

    .ant-modal-body {
      flex: 1;
    }
  }

}
</style>
