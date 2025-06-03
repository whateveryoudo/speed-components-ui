<!--
 * @Author: ykx
 * @Date: 2023-06-20 11:00:18
 * @LastEditTime: 2023-06-23 10:49:05
 * @LastEditors: your name
 * @Description: 数字区间(blur触发),支持前后缀，最大值最小值设定
 * @FilePath: \easycube-apps\packages\zeroFlowDesign\src\configComs\toolComs\RangeNum.vue
-->
<template>
  <span class="range-number">
    <a-input-number
      :value="realVal[0]"
      :style="[props.autoWidth ? { flex: 1, width: 'auto' } : { width: suffix ? '110px' : '80px'}]"
      placeholder="请输入"
      :min="0"
      @blur="(e: any) => handleChange(e.target.value, 'startVal')"
    >
      <template v-if="suffix" #addonAfter>
        {{ suffix }}
      </template>
    </a-input-number>
    <span style="margin: 0 5px">-</span>
    <a-input-number
      :value="realVal[1]"
      :style="[props.autoWidth ? { flex: 1, width: 'auto' } : { width: suffix ? '110px' : '80px' }]"
      placeholder="请输入"
      :min="0"
      @blur="(e: any) => handleChange(e.target.value, 'endVal')"
    >
      <template v-if="suffix" #addonAfter>
        {{ suffix }}
      </template>
    </a-input-number>
  </span>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { cloneDeep } from "lodash-es";
import { isNumEmpty } from "@/utils";
// eslint-disable-next-line no-undef
defineOptions({
  name: "SRangeNum",
});
const props = withDefaults(
  defineProps<{
    value?: any[];
    autoWidth?: boolean; // 是否自动宽度
    maxNum?: number; // 最大值设定
    minNum?: number; // 最小值设定
    suffix?: string;
  }>(),
  {
    value: () => [],
    minNum: 0,
    autoWidth: false,
  }
);
const emit = defineEmits(["update:value"]);
const realVal = ref<any[]>([]);
// 联动更新
const handleChange = (val: number, type: "startVal" | "endVal") => {
  // 先更新realVal
  if (type === "startVal") {
    realVal.value[0] = val;
  } else if (type === "endVal") {
    realVal.value[1] = val;
  }
  // 判断数组值
  if (isNumEmpty(realVal.value[0]) && isNumEmpty(realVal.value[1])) {
    emit("update:value", []);
    return;
  }
  // 范围判断
  if (!isNumEmpty(props.maxNum) && val > props.maxNum) {
    emit("update:value", [props.maxNum, props.maxNum]);
    return;
  } else if (!isNumEmpty(props.minNum) && val < props.minNum) {
    emit("update:value", [props.minNum, props.minNum]);
    return;
  }
  const numVal = Number(val);
  if (type === "startVal") {
    if (numVal > (Number(realVal.value[1]) || 0)) {
      emit("update:value", [numVal, numVal]);
    } else {
      emit("update:value", [
        numVal,
        realVal.value[1] === undefined ? undefined : Number(realVal.value[1]),
      ]);
    }
  } else if (type === "endVal") {
    if (numVal < (Number(realVal.value[0]) || 0)) {
      emit("update:value", [numVal, numVal]);
    } else {
      emit("update:value", [
        realVal.value[0] === undefined ? undefined : Number(realVal.value[0]),
        numVal,
      ]);
    }
  }
};
watch(
  () => props.value,
  (val: number[]) => {
    realVal.value = cloneDeep(val);
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="less">
// display flex 会影响对齐？？
.range-number {
  display: inline-flex;
  position: relative;
  align-items: center;
}
</style>
