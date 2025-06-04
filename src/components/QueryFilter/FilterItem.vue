<!-- 单个过滤项组件 -->
<template>
  <div :class="['item-wrapper', mode]">
    <a-flex
      justify="space-between"
      :class="mode === 'complex' ? 'w-full' : ''"
      align="center"
    >
      <span class="item-label" v-if="mode !== 'simple'" :title="item.label">{{ item.label }}</span>
      <a-select
        v-if="mode === 'complex'"
        :dropdownMatchSelectWidth="100"
        style="flex-shrink: 0"
        :bordered="false"
        :options="relOptions"
        :value="rel"
        @change="handleRelChange"
      ></a-select>
    </a-flex>
    <div class="item-value">
      <!-- 字符串 -->
      <template v-if="item.fieldType === 'input'">
        <a-input
          v-model:value="model"
          :placeholder="placeholder"
          allow-clear
          @pressEnter="handleEnterSearch"
          @change="handleInputChange"
          :style="commonStyle"
        >
          <template #suffix v-if="item?.props?.hasSearchIcon">
            <SearchOutlined />
          </template>
        </a-input>
      </template>

      <!-- 数字 -->
      <template v-if="item.fieldType === 'inputNumber'">
        <a-input-number
          v-if="mode === 'complex' && item.fieldRel != 'scope'"
          v-model:value="model"
          :style="commonStyle"
          :placeholder="placeholder"
        />
        <RangeNum
          v-else
          v-model:value="model"
          :style="commonStyle"
          :auto-width="mode !== 'simple'"
        />
      </template>

      <!-- 日期 -->
      <template v-else-if="item.fieldType === 'date'">
        <!-- 范围 -->
        <a-range-picker
          v-if="item.fieldRel === 'scope'"
          :style="commonStyle"
          :placeholder="['起始日期', '结束日期']"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD'"
        />
        <a-date-picker
          v-else
          :style="commonStyle"
          :placeholder="placeholder"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD'"
          @change="handleSelectChange"
          v-bind="item.props"
        />
      </template>

      <!-- 日期时间 -->
      <template v-else-if="item.fieldType === 'dateTime'">
        <!-- 范围 -->
        <a-range-picker
          v-if="item.fieldRel === 'scope'"
          :style="commonStyle"
          :placeholder="['起始日期', '结束日期']"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD HH:mm:ss'"
          :show-time="{
            defaultValue: [
              dayjs('00:00:00', 'HH:mm:ss'),
              dayjs('23:59:59', 'HH:mm:ss'),
            ],
          }"
        />
        <a-date-picker
          v-else
          :style="commonStyle"
          :placeholder="placeholder"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD HH:mm:ss'"
          :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
        />
      </template>

      <!-- 时间 -->
      <template v-else-if="item.fieldType === 'time'">
        <!-- 范围 -->
        <a-time-range-picker
          v-if="item.fieldRel === 'scope'"
          :style="commonStyle"
          :placeholder="['起始时间', '结束时间']"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'HH:mm:ss'"
        />
        <a-time-picker
          v-else
          :style="commonStyle"
          :placeholder="placeholder"
          v-model:value="model"
          valueFormat="HH:mm:ss"
        />
      </template>

      <!-- 日期范围 -->
      <template v-else-if="item.fieldType === 'dateRange'">
        <a-range-picker
          :style="commonStyle"
          :placeholder="item?.props?.placeholder ?? ['开始时间', '结束时间']"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD'"
        />
      </template>

      <!-- 日期时间范围 -->
      <template v-else-if="item.fieldType === 'dateTimeRange'">
        <a-range-picker
          :style="commonStyle"
          :placeholder="item?.props?.placeholder ?? ['开始时间', '结束时间']"
          v-model:value="model"
          :valueFormat="item?.props?.valueFormat ?? 'YYYY-MM-DD HH:mm:ss'"
          :show-time="{
            defaultValue: [
              dayjs('00:00:00', 'HH:mm:ss'),
              dayjs('23:59:59', 'HH:mm:ss'),
            ],
          }"
        />
      </template>

      <!-- Select -->
      <template v-if="item.fieldType === 'select'">
        <a-select
          allow-clear
          :show-search="item?.props?.showSearch"
          :style="commonStyle"
          :filter-option="filterOption"
          :placeholder="placeholder"
          :mode="item?.props?.mode"
          v-model:value="model"
          @change="handleSelectChange"
          style="min-width: 100px"
        >
          <a-select-option
            v-for="option in item.props?.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </a-select-option>
        </a-select>
      </template>

      <!-- 自定义带请求的搜索 -->
      <template v-else-if="item.fieldType === 'apiSelect'">
        <api-select
          :style="commonStyle"
          :placeholder="placeholder"
          v-model:value="model"
          :fetchFunc="item.props?.fetchFunc"
          :fetchOptions="item.props?.fetchOptions"
          :fieldNames="item.props?.fieldNames"
          :mode="item?.props?.mode"
          @update:value="handleSelectChange"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import dayjs, { type Dayjs } from "dayjs";
import type { IFieldType } from "./type";
import ApiSelect from "../ApiSelect/index.vue";
import RangeNum from "../RangeNum/index.vue";
import { debounce } from "lodash-es";
defineOptions({
  name: "FilterItem",
});

const props = defineProps<{
  item: IFieldType;
  mode?: "simple" | "default" | "complex";
  placeholderWithLabel?: boolean;
  rel?: string;
  relOptions?: { label: string; value: string }[];
}>();

const model = defineModel<any>();
const emit = defineEmits<{
  (e: "update:model-value", value: any): void;
  (e: "enter"): void;
  (e: "rel-change", value: string): void;
}>();

// 占位文字获取
const placeholder = computed(() => {
  let basePrefix = "";
  if (
    ["select", "selectSearch", "time", "date", "dateTime"].includes(
      props.item.fieldType
    )
  ) {
    basePrefix = "请选择";
  } else {
    basePrefix = "请输入";
  }
  if (props.placeholderWithLabel) {
    return props.item?.props?.placeholder
      ? (props.item?.props?.placeholder as string)
      : basePrefix + props.item.label;
  }
  return props.item?.props?.placeholder
    ? (props.item?.props?.placeholder as string)
    : basePrefix;
});

// 通用样式部分
const commonStyle = computed(() => {
  return {
    width:
      ["complex", "default"].includes(props.mode ?? "")
        ? "100%"
        : props.item?.props?.itemWidth
          ? props.item.props.itemWidth + "px"
          : "auto",
  };
});

const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
// 连接符变化
const handleRelChange = (value: string) => {
  emit("rel-change", value);
};
// 查询
const handleEnterSearch = () => {
  emit("enter");
};

// 输入改变
const handleInputChange = debounce((e: Event) => {
  if (props.item?.props?.whenChangeTrigger === "input") {
    emit("update:model-value", (e.target as HTMLInputElement).value);
  }
}, 300);

// 选择改变
const handleSelectChange = (value: any) => {
  emit("update:model-value", value);
};

// // 日期 / 数字范围，会进行值转换
// const handleRangeChange = (
//   dateStrs: [string, string] | [number, number] | [Dayjs, Dayjs]
// ) => {
//   model.value = dateStrs;
//   emit("update:model-value", dateStrs);
// };
</script>

<style lang="less" scoped>
.item-wrapper {
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  &.complex {
    flex-direction: column;
    .item-value {
      width: 100%;
    }
  }
  .item-label {
    flex-shrink: 0;
    margin-right: 10px;
  }
  .item-value {
    flex: 1;
  }
}
</style>
