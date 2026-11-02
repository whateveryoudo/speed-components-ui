<!--
 * @Author: ykx
 * @Date: 2022-12-16 17:30:55
 * @LastEditTime: 2026-10-27 11:40:00
 * @LastEditors: ykx
 * @Description: 带有快捷键tip显示(支持title null传入不显示tip，点击子节点时自动收起气泡，防止遮挡下拉)
 * @FilePath: \speed-components\src\components\KeyMapTip\index.vue
-->
<template>
  <span
    class="s-keymap-tip-trigger"
    @click.capture="handleClick"
    @mouseleave="handleMouseLeave"
  >
    <Tooltip
      v-if="title !== null"
      v-bind="$attrs"
      :open="resolvedOpen"
      :placement="placement"
      @open-change="handleOpenChange"
    >
      <template #title>
        <div class="keymap-tip-wrapper">
          <span v-if="title">{{ title }}</span>
          <span v-if="keyMap" class="key-map">{{ keyMap }}</span>
        </div>
      </template>
      <slot></slot>
    </Tooltip>
    <slot v-else></slot>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'
import { Tooltip } from 'ant-design-vue'
import type { TooltipPlacement } from 'ant-design-vue/es/tooltip'

defineOptions({
  name: 'SKeymapTip',
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title: string | null
    keyMap?: string | null
    placement?: TooltipPlacement
    open?: boolean
  }>(),
  {
    title: '',
    keyMap: '',
    placement: 'bottom',
    open: undefined
  }
)

const emit = defineEmits<{
  (e: 'update:open', val: boolean): void
  (e: 'openChange', val: boolean): void
}>()

const attrs = useAttrs()

// undefined 表示交由 Tooltip 内部 hover 控制；false 强制关闭
const innerVisible = ref<boolean | undefined>(undefined)

const resolvedOpen = computed(() => {
  if (props.open !== undefined) return props.open
  if (attrs.open !== undefined) return attrs.open as boolean
  return innerVisible.value
})

function handleOpenChange(visible: boolean) {
  innerVisible.value = visible
  emit('update:open', visible)
  emit('openChange', visible)
}

function handleClick() {
  // 在原生捕获阶段强制收起提示，防止遮挡弹层/下拉菜单，绝不拦截或破坏子节点本身的点击事件
  innerVisible.value = false
  emit('update:open', false)
  emit('openChange', false)
}

function handleMouseLeave() {
  // 鼠标移出后重置内部受控，下次 hover 恢复自主提示
  innerVisible.value = undefined
}
</script>

<style lang="less">
.s-keymap-tip-trigger {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

.keymap-tip-wrapper {
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  color: #fff;
  .key-map {
    color: #8a8f8d;
    font-size: 12px;
  }
}
</style>
