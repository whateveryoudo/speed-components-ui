<!--
 * @Author: ykx
 * @Date: 2022-12-16 17:30:55
 * @LastEditTime: 2023-03-03 14:50:19
 * @LastEditors: your name
 * @Description: 带有快捷键tip显示
 * @FilePath: \easycube-ui\src\widgets\globalComponents\KeymapTip.vue
-->
<template>
  <a-tooltip v-bind="$attrs" :placement="placement">
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
  </a-tooltip>
</template>

<script setup lang="ts">

// eslint-disable-next-line no-undef
defineOptions({
  name: 'SKeymapTip',
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    default: '',
  },
  keyMap: {
    type: String,
    default: '',
  },
  placement: {
    type: String,
    default: 'bottom',
  },
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
