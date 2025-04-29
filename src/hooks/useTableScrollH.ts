// 针对antd table的scrolly进行阈值控制,目前只支持window为边界的情况,目前不处理顶部元素变化的情况
import { useElementBounding } from '@vueuse/core';
import { nextTick, onMounted, type Ref, ref } from 'vue';
type IOptions = {
  isAntdTable?: boolean;
  paddingBottom?: number;
  thresholdH?: number; // 滚动高度阀值
};
const defaultOptions = {
  thresholdH: 500,
  isAntdTable: true,
  paddingBottom: 40
};
export default (el: Ref<HTMLElement | null>, options?: IOptions) => {
  const mergeOptions = { ...defaultOptions, ...(options || {}) };
  const scrollY = ref(0);
  onMounted(async () => {
    await nextTick();
    let scrollEl = el.value;
    if (mergeOptions.isAntdTable) {
      // 查找到antd的 .ant-table-body(注意保持固定的结构，在外层加div用于ref获取)
      if (el && el.value) {
        scrollEl = el.value.querySelector('.ant-table-container>.ant-table-body') as HTMLElement;
      }
    }
    if (!scrollEl) {
      return;
    }
    const documentHeight = document.documentElement.offsetHeight;
    const { y } = useElementBounding(scrollEl);
    const restHeight = documentHeight - y.value - mergeOptions.paddingBottom; // 计算剩余高度
    scrollY.value = restHeight < mergeOptions.thresholdH ? mergeOptions.thresholdH : restHeight;
  });

  return {
    scrollY,
  };
};
