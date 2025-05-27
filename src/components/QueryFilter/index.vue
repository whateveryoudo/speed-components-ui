<!-- 配置式搜索:不支持联动操作, 不提供太多slot -->
<template>
  <a-row :gutter="20" class="query-filter-wrapper">
    <template v-for="(item, index) in innerSearchWhere" :key="item.key">
      <a-col
        v-if="index < rowCount - 1 || (index > rowCount - 2 && isExpand)"
        :span="col"
        style="margin-bottom: 10px"
      >
        <div class="item-wrapper">
          <span class="item-label" :title="item.label">
            {{ item.label }}
          </span>

          <!-- <span>{{ getRelText(item.rel, item.relOptions) }}</span> -->
          <div class="item-value">
            <!-- Input -->
            <template v-if="item.filterCom === 'input'">
              <a-input
                v-model:value="item.val"
                placeholder="请输入"
                allow-clear
                @pressEnter="handleSearch"
              />
            </template>

            <!-- Number -->
            <template v-if="item.filterCom === 'inputNumber'">
              <template v-if="['FormInputNumber'].includes(item.type)">
                <RangeNum
                  v-if="item.rel === 'scope'"
                  v-model:value="item.val"
                />
                <a-input-number
                  v-else
                  v-model:value="item.val"
                  placeholder="请输入"
                  style="width: 100%"
                  @pressEnter="handleSearch"
                />
              </template>
              <template v-else>
                <!-- 时间控件 -->
                <template v-if="['FormTimePicker'].includes(item.type)">
                  <!-- 如果是范围则显示日期区间 -->
                  <a-time-range-picker
                    v-if="item.rel === 'scope'"
                    :placeholder="['选择时间', '选择时间']"
                    v-model:value="item.val"
                    :valueFormat="item?.props?.valueFormat"
                  />
                  <a-time-picker
                    v-else
                    placeholder="请选择"
                    style="width: 100%"
                    v-model:value="item.val"
                    :valueFormat="item?.props?.valueFormat"
                  />
                </template>
                <!-- 日期 | 日期时间控件 -->
                <template v-else>
                  <!-- 如果是范围则显示时间区间 -->
                  <a-range-picker
                    v-if="item.rel === 'scope'"
                    :placeholder="['选择日期', '选择日期']"
                    v-model:value="item.val"
                    :valueFormat="item?.props?.valueFormat"
                    :showTime="item.type === 'FormDateTimePicker'"
                  />
                  <a-date-picker
                    v-else
                    placeholder="请选择"
                    style="width: 100%"
                    v-model:value="item.val"
                    :valueFormat="item?.props?.valueFormat"
                    :showTime="item.type === 'FormDateTimePicker'"
                  />
                </template>
              </template>
            </template>

            <!-- Select -->
            <template v-if="item.filterCom === 'select'">
              <template v-if="item.type === 'FormSwitch'">
                <a-select
                  v-model:value="item.val"
                  style="width: 100%"
                  placeholder="请选择"
                  allow-clear
                  :options="[
                    { label: '是', value: true },
                    { label: '否', value: false },
                  ]"
                />
              </template>
              <template v-else>
                
                <a-select
                  allow-clear
                  :show-search="item?.props?.showSearch"
                  v-model:value="item.val"
                  :options="item.props?.options"
                ></a-select>
              </template>
            </template>
          </div>
        </div>
      </a-col>
    </template>

    <!-- Actions -->
    <a-col
      v-if="showOpt"
      :span="col"
      :offset="optOffset"
      class="filter-item opt-wrapper"
      :style="{ marginTop: optOffset + 1 === 24 / props.col ? '10px' : 0 }"
    >
      <div class="opt-wrapper-inner">
        <a-button @click="handleReset">
          <template #icon><RedoOutlined /></template>
          重置
        </a-button>
        <a-button type="primary" @click="handleSearch">
          <template #icon><SearchOutlined /></template>
          查询
        </a-button>
        <a-button
          v-if="innerSearchWhere.length > defaultDiplayCols"
          type="link"
          @click="isExpand = !isExpand"
        >
          {{ isExpand ? "收起" : "展开" }}
          <template #icon>
            <UpOutlined v-if="isExpand" />
            <DownOutlined v-else />
          </template>
        </a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick } from "vue";
import { cloneDeep } from "lodash-es";
import {
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  RedoOutlined,
} from "@ant-design/icons-vue";
import type { SearchWhereItem } from "./type";

import RangeNum from "../RangeNum/index.vue";

defineOptions({
  name: "SQueryFilter",
});

const props = withDefaults(
  defineProps<{
    searchWhere: SearchWhereItem[];
    defaultSearchWhere: SearchWhereItem[];
    col?: number;
    gutter?: number;
    showOpt?: boolean;
  }>(),
  {
    searchWhere: () => [],
    col: 6, //请保证为24得子数
    gutter: 20,
    showOpt: true, // 是否显示操作按钮
  }
);
const defaultDiplayRows = ref(1); // 默认显示的最大行数
const isExpand = ref(false);
const emits = defineEmits(["search"]);
const innerSearchWhere = ref<SearchWhereItem[]>([]);
const rowCount = computed(() => {
  return 24 / props.col; // 每行能够显示的个数
});
const defaultDiplayCols = computed(() => {
  return rowCount.value * defaultDiplayRows.value - 1;
});

// 保持搜索项始终在最右侧
const optOffset = computed(() => {
  const fieldsLength =
    innerSearchWhere.value.length > defaultDiplayCols.value
      ? !isExpand.value
        ? defaultDiplayCols.value
        : innerSearchWhere.value.length
      : innerSearchWhere.value.length;
  const restCol = fieldsLength % rowCount.value;

  return (rowCount.value - restCol - 1) * props.col;
});
const getRelText = (rel: string, relOptions: any[]) => {
  return relOptions.find((item: any) => item.value === rel)?.label;
};
// 查询
const handleSearch = async () => {
  // 判断是否有一个字段存在值，如果存在值则设置为已搜索，否则重置
  // const setSearched = innerSearchWhere.value.some((item: SearchWhereItem) => {
  //   return item.val || (Array.isArray(item.val) && item.val.length > 0);
  // });
  await nextTick();
  emits("search", cloneDeep(innerSearchWhere.value));
};

// 重置
const handleReset = () => {
  emits("search", cloneDeep(props.defaultSearchWhere), false);
};
watch(
  () => props.searchWhere,
  (val: SearchWhereItem[]) => {
    innerSearchWhere.value = cloneDeep(val);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped>
.query-filter-wrapper {
  font-weight: normal;
  .filter-item {
    display: flex;
    align-items: center;
    .item-label {
      flex-shrink: 0;
      margin-right: 10px;
    }
    .item-value {
      flex: 1;
    }
  }
  .item-wrapper {
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    .item-label {
      flex-shrink: 0;
      margin-right: 10px;
    }
    .item-value {
      flex: 1;
    }
  }
  .opt-wrapper {
    display: flex;
    // align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 10px;
    .opt-wrapper-inner {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
  }
}
</style>
