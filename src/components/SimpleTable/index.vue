<!-- 基于 useTable 封装的简单表格组件 -->
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useTable } from "@/hooks";
import QueryFilter from "../QueryFilter/index.vue";
import {
  constructQueryFilterByColumns,
  fieldTypeMap,
} from "../QueryFilter/const";

interface Props {
  /** 请求函数 */
  fetchFunc: Function;
  /** 请求参数 */
  fetchParams?: Record<string, any>;
  /** 列配置 */
  columns: any[];
  /** 行唯一标识 */
  rowKey?: string;
  /** 是否显示排序 */
  hasSort?: boolean;
  /** 是否显示分页 */
  hasPagination?: boolean;
  /** 是否显示序号 */
  showIndex?: boolean;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 表格大小 */
  size?: "small" | "middle" | "large";
  /** 数据获取前的回调 */
  beforeFetch?: () => void;
  /** 数据获取后的回调 */
  afterFetch?: (data: any) => any;
  /** 数据获取后的转换方法*/
  transformAfterFetch?: (data: any) => any;
  /** 行选择配置 */
  rowSelection?: any;
  /** 选中的行条目 */
  hasSelectedRows?: any[];
  /** 是否显示查询过滤 */
  needQueryFilter?: boolean;
}
const values = ref({});
const emit = defineEmits(["update:hasSelectedRows"]);

defineOptions({
  name: "SSimpleTable",
});

const props = withDefaults(defineProps<Props>(), {
  fetchParams: () => ({}),
  showPagination: true,
  showIndex: true,
  bordered: false,
  hasPagination: true,
  size: "middle",
  rowKey: "id",
});

// 表格配置
const tableOptions = computed(() => ({
  extraParams: { ...props.fetchParams, ...values.value },
  rowKey: props.rowKey,
  hasPagination: props.hasPagination,
  hasSort: props.hasSort,
  beforeFetch: props.beforeFetch,
  afterFetch: props.afterFetch,
  transformAfterFetch: props.transformAfterFetch,
  hasSelectedRows: props.hasSelectedRows,
  emit: emit,
}));

// 使用 useTable
const {
  loading,
  dataSource,
  pagination,
  state,
  getList,
  onSelectChange,
  handleTableChange,
} = useTable(props.fetchFunc, tableOptions);
// 搜索
const handleSearch = (params: any) => {
  values.value = params;
  getList(true);
};
// 计算最终的列配置
const finalColumns = computed(() => {
  const columns = [...props.columns];

  // 添加序号列
  if (props.showIndex) {
    columns.unshift({
      title: "序号",
      width: 60,
      align: "center",
      customRender: ({ index }: { index: number }) => {
        const { current = 1, pageSize = 10 } = pagination.value;
        return (current - 1) * pageSize + index + 1;
      },
    });
  }

  return columns;
});
const fields = computed(() => {
  if (props.needQueryFilter) {
    // queryConfig - 字符串（控件类型） 配置， 完整的queryFilter配置
    return constructQueryFilterByColumns(props.columns);
  }
  return [];
});

// 构建初始化查询过滤值

watch(
  () => props.needQueryFilter,
  () => {
    values.value = props.columns.reduce((acc, cur) => {
      if (cur.queryConfig) {
        if (typeof cur.queryConfig === "string") {
          acc[cur.dataIndex] =
            fieldTypeMap[cur.queryConfig as keyof typeof fieldTypeMap]
              ?.defaultValue ?? "";
        } else {
          acc[cur.queryConfig?.fieldKey] =
            fieldTypeMap[
              cur.queryConfig?.fieldType as keyof typeof fieldTypeMap
            ]?.defaultValue ?? "";
        }
      }
      return acc;
    }, {});
  },
  { immediate: true }
);
// 初始化加载数据
getList();

defineExpose({
  getList,
});
</script>

<template>
  <a-flex vertical :gap="10">
    <QueryFilter
      class="mb-2"
      v-if="needQueryFilter"
      :fields="fields"
      :values="values"
      @search="handleSearch"
    />
    <a-flex justify="end" v-if="$slots['optBar']">
      <slot name="optBar" />
    </a-flex>
    <a-flex
      justify="space-between"
      v-if="$slots['optBarLeft'] || $slots['optBarRight']"
    >
      <span v-if="$slots['optBarLeft']">
        <slot name="optBarLeft" />
      </span>
      <span v-if="$slots['optBarRight']">
        <slot name="optBarRight" />
      </span>
    </a-flex>
    <a-table
      class="simple-table"
      :columns="finalColumns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="hasPagination ? pagination : false"
      :row-key="rowKey"
      :bordered="bordered"
      :size="size"
      @change="handleTableChange"
      v-bind="
        rowSelection
          ? {
              rowSelection: {
                ...(rowSelection || {}),
                selectedRowKeys: state.selectedRowKeys,
                onChange: onSelectChange,
              },
            }
          : {}
      "
    >
      <!-- 透传所有插槽 -->
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </a-table>
  </a-flex>
</template>

<style lang="less"></style>
