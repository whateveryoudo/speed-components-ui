<!-- 配置式搜索:不支持联动操作, 不提供太多slot -->
<template>
  <!-- 普通类型/复合类型 -->
  <a-row
    :gutter="20"
    v-if="mode !== 'simple'"
    :class="['query-filter-wrapper', mode]"
  >
    <template v-for="(item, index) in innerFields" :key="item.fieldKey">
      <a-col
        v-if="index < rowCount - 1 || (index > rowCount - 2 && isExpand)"
        :span="col"
      >
        <filter-item
          :item="item"
          :mode="mode"
          :model-value="getFieldValue(item)"
          :placeholder-with-label="placeholderWithLabel"
          :rel-options="getRelOptions(item)?.relOptions ?? []"
          :rel="item.fieldRel"
          @update:model-value="(val) => handleItemChange(item, val)"
          @rel-change="(val) => handleRelChange(item, val)"
          @enter="handleEnterSearch"
        />
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
          v-if="fields.length > defaultDiplayCols"
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

  <!-- 简洁版 -->
  <div v-else-if="mode === 'simple'">
    <a-flex justify="flex-end" :style="{ gap: `0 ${gutter}px` }" wrap="wrap">
      <template v-for="(item, index) in innerFields" :key="item.fieldKey">
        <filter-item
          v-if="index < defaultDisplayCount || isExpand"
          :item="item"
          mode="simple"
          :model-value="getFieldValue(item)"
          :placeholder-with-label="placeholderWithLabel"
          @update:model-value="(val) => handleItemChange(item, val)"
          @enter="handleEnterSearch"
        />
      </template>

      <a-space v-if="showOpt">
        <a-button type="text" @click="handleReset" title="重置">
          <template #icon><RedoOutlined /></template>
        </a-button>
        <a-button type="text" @click="handleSearch" title="查询">
          <template #icon><SearchOutlined /></template>
        </a-button>
        <a-button
          v-if="fields.length > defaultDisplayCount"
          type="text"
          @click="isExpand = !isExpand"
          :title="isExpand ? '收起' : '展开'"
        >
          <template #icon
            ><UpOutlined v-if="isExpand" /><DownOutlined v-else
          /></template>
        </a-button>
      </a-space>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick, onMounted } from "vue";
import { cloneDeep } from "lodash-es";
import {
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  RedoOutlined,
} from "@ant-design/icons-vue";
import type { IFieldType } from "./type";
import FilterItem from "./FilterItem.vue";
import { htmlTypeRelMap } from "./const";
defineOptions({
  name: "SQueryFilter",
});

const props = withDefaults(
  defineProps<{
    mode?: "simple" | "default" | "complex";
    searchWhenChange?: boolean; // 是否在切换时搜索
    fields: IFieldType[]; // 字段列表
    values: Record<string, any>; // 当前搜索的值
    col?: number;
    gutter?: number;
    showOpt?: boolean;
    defaultDisplayCount?: number; // 默认显示搜索个数（simple模式下生效）
    placeholderWithLabel?: boolean; // 是否在placeholder中显示label
  }>(),
  {
    mode: "default",
    searchWhenChange: false,
    fields: () => [],
    values: () => ({}),
    col: 6, //请保证为24得子数
    gutter: 10,
    defaultDisplayCount: 3,
    showOpt: true, // 是否显示操作按钮
    placeholderWithLabel: true, // 是否在placeholder中显示label
  }
);

const defaultDiplayRows = ref(1); // 默认显示的最大行数
const isExpand = ref(false);
const emits = defineEmits(["search"]);

const rowCount = computed(() => {
  return 24 / props.col; // 每行能够显示的个数
});

const defaultDiplayCols = computed(() => {
  return props.mode === "simple"
    ? props.defaultDisplayCount
    : rowCount.value * defaultDiplayRows.value - 1;
});

const defaultValues = ref<Record<string, any>>({});
const innerValues = ref<Record<string, any>>({}); // 内部的搜索值

// 保持搜索项始终在最右侧
const optOffset = computed(() => {
  const fieldsLength =
    props.fields.length > defaultDiplayCols.value
      ? !isExpand.value
        ? defaultDiplayCols.value
        : props.fields.length
      : props.fields.length;
  const restCol = fieldsLength % rowCount.value;

  return (rowCount.value - restCol - 1) * props.col;
});
const getFieldValue = (item: IFieldType) => {
  if (item?.props?.transform2Params) {
    // 如果携带转换函数(目前仅支持数组转换)
    return [
      innerValues.value[item.props.transform2Params[0]],
      innerValues.value[item.props.transform2Params[1]],
    ];
  }
  return innerValues.value[item.fieldKey];
};
const searchTrigger = (values: Record<string, any>) => {
  if (props.mode === "complex") {
    // 复合类型需要处理成 [{fieldKey: '', fieldValue: '', fieldRel: ''}] 形式
    const result = props.fields.reduce((acc: any[], curr) => {
      const value = values[curr.fieldKey];
      // 只处理有值的字段
      if (value !== undefined && value !== null && value !== "") {
        // 处理数组类型的值
        if (Array.isArray(value)) {
          if (value.length > 0) {
            acc.push({
              fieldKey: curr.fieldKey,
              fieldValue: value,
              fieldRel: curr.fieldRel || getRelOptions(curr).defaultRel,
            });
          }
        } else {
          acc.push({
            fieldKey: curr.fieldKey,
            fieldValue: value,
            fieldRel: curr.fieldRel || getRelOptions(curr).defaultRel,
          });
        }
      }
      return acc;
    }, []);

    emits("search", result);
  } else {
    // 普通类型直接返回对象
    emits("search", values);
  }
};
// 查询
const handleSearch = async () => {
  searchTrigger(cloneDeep(innerValues.value));
};

// enter
const handleEnterSearch = async () => {
  if (props.searchWhenChange) {
    await nextTick();
    handleSearch();
  }
};
// 获取连接选项 （这里是初始化默认值）
const getRelOptions = (item: IFieldType) => {
  // 查找
  let relOptions = [],
    defaultVal = undefined,
    defaultRel = "";
  // 遍历 Map 查找匹配的配置
  for (const [keys, config] of htmlTypeRelMap.entries()) {
    // 如果是select, apiSelect,props mode为multiple时，需要特殊处理
    let tempFieldType = item.fieldType;
    if (
      ["select", "apiSelect"].includes(item.fieldType) &&
      item.props?.mode === "multiple"
    ) {
      tempFieldType = "selectMultiple"; // 转换为多选模式
    }
    if (keys.includes(tempFieldType)) {
      // 注意：这里支持传入配置，仅支持内置的项减少，自定义连接项是无效的
      relOptions = item?.props?.relOptions ?? config.relOptions ?? [];
      defaultVal =
        item?.props?.defaultValue ?? config.defaultValue ?? undefined;
      defaultRel = item?.props?.defaultRel ?? config.defaultRel ?? "eq";
      break;
    }
  }
  return {
    relOptions,
    defaultRel,
    defaultVal,
  };
};

// 切换连接符后获取新的值
const getNewValuesByRel = (item: IFieldType) => {
  // 查找
  const relConfig = getRelOptions(item);
  let defaultVal = undefined;
  if (relConfig.relOptions.length > 0) {
    // 切换重置
    const targetRel = relConfig.relOptions.find(
      (item) => item.value === item.fieldRel
    );
    // 兼容下切换连接符时默认值
    if (targetRel && "defaultValue" in targetRel) {
      defaultVal = targetRel.defaultValue;
    }
    return defaultVal;
  }
  return relConfig.defaultVal;
};

// 选择改变
const handleItemChange = async (item: IFieldType, value: any) => {
  // 这里处理下，item.props.transform2Params存在存在的情况
  if (item?.props?.transform2Params) {
    if (item.props.transform2Params.length > 0) {
      const newValue = { ...innerValues.value };
      if (value) {
        newValue[item.props.transform2Params[0]] = value[0];
        newValue[item.props.transform2Params[1]] = value[1];
      } else {
        // 清空
        newValue[item.props.transform2Params[0]] = "";
        newValue[item.props.transform2Params[1]] = "";
      }
      innerValues.value = newValue;
    }
  } else {
    innerValues.value[item.fieldKey] = value;
  }
};
const handleRelChange = (item: IFieldType, value: string) => {
  const targetField = innerFields.value.find(
    (field) => field.fieldKey === item.fieldKey
  );
  if (targetField) {
    targetField.fieldRel = value;
  }
  // 清空当前的值
  innerValues.value[item.fieldKey] = getNewValuesByRel(item);
};
// 重置
const handleReset = () => {
  searchTrigger(cloneDeep(defaultValues.value));
};

// 添加响应式的字段列表
const innerFields = ref<IFieldType[]>([]);

// 监听 props.fields 变化，更新 innerFields
watch(
  () => props.fields,
  (newFields) => {
    if (props.mode === "complex") {
      innerFields.value = newFields.map((field) => ({
        ...field,
        fieldRel: field.fieldRel || getRelOptions(field).defaultRel,
      }));
    } else {
      innerFields.value = newFields;
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (props.mode === "complex") {
    defaultValues.value = props.fields.reduce((acc, curr) => {
      const target = props.values.find(
        (item: any) => item.fieldKey === curr.fieldKey
      );
      if (target) {
        acc[curr.fieldKey] = target?.fieldValue;
      } else {
        // 初始化设置默认值
        acc[curr.fieldKey] = getRelOptions(curr).defaultVal;
      }
      return acc;
    }, {});
  } else {
    defaultValues.value = cloneDeep(props.values);
  }
});

watch(
  () => props.values,
  (val: Record<string, any>) => {
    // 如果是复合类型，需要根据key构建innerValues
    if (props.mode === "complex") {
      innerValues.value = props.fields.reduce((acc, curr) => {
        const target = val.find((item: any) => item.fieldKey === curr.fieldKey);
        if (target) {
          acc[curr.fieldKey] = target?.fieldValue;
        } else {
          // 初始化设置默认值
          acc[curr.fieldKey] = getRelOptions(curr).defaultVal;
        }
        return acc;
      }, {});
    } else {
      innerValues.value = cloneDeep(val);
    }
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
  }
  .opt-wrapper {
    display: flex;
    justify-content: flex-end;
    .opt-wrapper-inner {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
  }
  &.complex {
    .opt-wrapper {
      align-items: flex-end;
      padding-bottom: 10px;
    }
  }
}
</style>
