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
    <TypographyParagraph
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
    <TypographyParagraph v-else>
      {{ text
      }}<span
        style="color: var(--ant-color-primary); margin-left: 5px;cursor:pointer"
        @click="ellipsis = true"
      >收起</span>
    </TypographyParagraph>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Typography } from 'ant-design-vue';
const { Paragraph: TypographyParagraph } = Typography;

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
