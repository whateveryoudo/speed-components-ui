<!--
 * @Author: ykx
 * @Date: 2022-12-16 17:30:55
 * @LastEditTime: 2023-03-03 14:50:19
 * @LastEditors: your name
 * @Description: 带有快捷键tip显示(支持title null传入不显示tip)
 * @FilePath: \easycube-ui\src\widgets\globalComponents\KeymapTip.vue
-->
<template>
  <Tooltip v-bind="$attrs" :placement="placement" v-if="title !== null">
    <template #title>
      <div class="keymap-tip-wrapper">
        <span v-if="title">{{ title }}</span>
        <span
          v-if="keyMap"
          class="key-map"
        >{{ keyMap }}</span>
      </div>
    </template>
    <slot></slot>
  </Tooltip>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { Tooltip } from "ant-design-vue";
import type { TooltipPlacement } from "ant-design-vue/es/tooltip";

// eslint-disable-next-line no-undef
defineOptions({
  name: 'SKeymapTip',
  inheritAttrs: false
})
withDefaults(defineProps<{
  title: string | null;
  keyMap: string | null;
  placement: TooltipPlacement;
}>(), {
  title: '',
  keyMap: '',
  placement: 'bottom',
})
</script>

<style scoped lang="less">
.keymap-tip-wrapper {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  .key-map{
    color: #8A8F8D;
    font-size: 12px;
  }
}
</style>
