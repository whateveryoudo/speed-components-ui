<!--
 * @Author: ykx
 * @Date: 2023-05-11 10:49:46
 * @LastEditTime: 2024-06-11 17:04:32
 * @LastEditors: Anxure
 * @Description: 快捷提示（支持字符串,字符串数组，如果需要更多自定义，请自行实现）,增加白色的提示
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\QuestionTip.vue
-->

<template>
  <span>
    {{ label }}
    <template v-if="true">
      <Tooltip
        v-if="tip && theme === 'dark'"
        :placement="placement"
        v-bind="$attrs"
      >
        <template #title>
          <template v-if="Array.isArray(tip)">
            <div
              v-for="(str, index) in tip"
              :key="index"
            >
              {{ str }}
            </div>
          </template>
          <div v-else>{{ tip }}</div>
        </template>
        <slot>
        <s-icon-font type="icon-question-circle" />
        </slot>
      </Tooltip>
      <!-- 白色提示 -->
      <Popover
        v-if="tip && theme === 'white'"
        :title="false"
        :placement="placement"
        v-bind="$attrs"
      >
        <template #content>
          <template v-if="Array.isArray(tip)">
            <div
              v-for="(str, index) in tip"
              :key="index"
            >
              {{ str }}
            </div>
          </template>
          <div v-else>{{ tip }}</div>
        </template>
        <slot>
          <s-icon-font type="icon-question-circle" />
        </slot>
      </Popover>
    </template>
  </span>
</template>

<script setup lang="ts">
import { type TooltipPlacement } from 'ant-design-vue/es/tooltip/Tooltip';
import { Tooltip, Popover } from 'ant-design-vue';

// eslint-disable-next-line no-undef
defineOptions({
  name: 'SQuestionTip',
});
withDefaults(
  defineProps<{
    label?: string;
    tip?: string | string[];
    placement?: TooltipPlacement;
    theme?: 'dark' | 'white';
  }>(),
  {
    label: '',
    placement: 'right',
    tip: '',
    theme: 'dark',
  }
);
</script>

<style scoped lang="less">

</style>
