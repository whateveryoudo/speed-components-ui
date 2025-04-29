<!--
 * @Author: ykx
 * @Date: 2023-05-11 10:49:46
 * @LastEditTime: 2024-06-11 17:04:32
 * @LastEditors: Anxure
 * @Description: 快捷提示（支持字符串,字符串数组，如果需要更多自定义，请自行实现）,增加白色的提示
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\QuestionTip.vue
-->

<template>
  <span :style="{ display: blocked ? 'block' : 'inline-block' }">
    {{ label }}
    <template v-if="true">
      <a-tooltip
        v-if="tip && theme === 'dark'"
        :placement="placement"
        :overlayStyle="cardStyle"
      >
        <template #title>
          <template v-if="Array.isArray(tip)">
            <p
              v-for="(str, index) in tip"
              :key="index"
            >
              {{ str }}
            </p>
          </template>
          <p v-else>{{ tip }}</p>
        </template>
        <s-icon-font type="icon-question-circle" />
      </a-tooltip>
      <!-- 白色提示 -->
      <a-popover
        v-if="tip && theme === 'white'"
        :title="false"
        :placement="placement"
        :overlayStyle="cardStyle"
      >
        <template #content>
          <template v-if="Array.isArray(tip)">
            <p
              v-for="(str, index) in tip"
              :key="index"
            >
              {{ str }}
            </p>
          </template>
          <p v-else>{{ tip }}</p>
        </template>
        <s-icon-font type="icon-question-circle" />
      </a-popover>
    </template>
  </span>
</template>

<script setup lang="ts">
import { type TooltipPlacement } from 'ant-design-vue/es/tooltip/Tooltip';

// eslint-disable-next-line no-undef
defineOptions({
  name: 'SQuestionTip',
});
withDefaults(
  defineProps<{
    label?: string;
    cardStyle?: any;
    tip?: string | string[];
    placement?: TooltipPlacement;
    blocked?: boolean;
    theme?: 'dark' | 'white';
  }>(),
  {
    label: '',
    cardStyle: () => {},
    placement: 'right',
    blocked: false,
    tip: '',
    theme: 'dark',
  }
);
</script>

<style scoped lang="less"></style>
