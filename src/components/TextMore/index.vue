<!--
 * @Author: ykx
 * @Date: 2023-05-11 10:49:46
 * @LastEditTime: 2023-06-14 18:40:54
 * @LastEditors: your name
 * @Description: 文字展开收起(由于antd的段落组件只提供了展开这里采用切换实现)
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\QuestionTip.vue
-->

<template>
  <div class="text-more-wrapper">
    <!-- 这里不用监听onEllipsis -->
    <a-typography-paragraph
      v-if="ellipsis"
      :ellipsis="{
        rows: rows,
        expandable: true,
        symbol: '展开',
        onExpand: () => {
          ellipsis = false;
        },
      }"
      :content="text"
    />
    <a-typography-paragraph v-else>
      {{ text
      }}<span
        style="color: #1890ff; margin-left: 5px"
        @click="ellipsis = true"
      >收起</span>
    </a-typography-paragraph>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line no-undef
defineOptions({
  name: 'STextMore',
});
const props = withDefaults(
  defineProps<{
    text: string;
    rows?: number;
  }>(),
  {
    rows: 3,
  }
);
const ellipsis = ref(true);
</script>

<style scoped lang="less">
.text-more-wrapper{
  :deep(.ant-typography){
    margin-bottom: 0;
  }
}
</style>
