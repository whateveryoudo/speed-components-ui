<!-- 基于 useTable 封装的简单表格组件 -->
<script setup lang="ts">
import { computed, ref } from "vue";
import { useTable } from "@/hooks";

interface Props {
  /** 请求函数 */
  fetchFunc: Function;
  /** 请求参数 */
  fetchParams?: Record<string, any>;
  /** 列配置 */
  columns: any[];
  /** 行唯一标识 */
  rowKey?: string;
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
  afterFetch?: (data: any, res?: any) => any;
  /** 行选择配置 */
  rowSelection?: any;
  /** 选中的行条目 */
  hasSelectedRows?: any[];
}

const emit = defineEmits(["update:hasSelectedRows"]);

defineOptions({
  name: "SSimpleTable",
});

const props = withDefaults(defineProps<Props>(), {
  fetchParams: () => ({}),
  showPagination: true,
  showIndex: true,
  bordered: false,
  size: "middle",
  rowKey: "id",
});

// 表格配置
const tableOptions = computed(() => ({
  extraParams: props.fetchParams,
  rowKey: props.rowKey,
  hasPagination: props.hasPagination,
  beforeFetch: props.beforeFetch,
  afterFetch: props.afterFetch,
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

// 初始化加载数据
getList();
</script>

<template>
  <a-table
    class="simple-table"
    :columns="finalColumns"
    :data-source="dataSource"
    :loading="loading"
    :pagination="hasPagination ? pagination : false"
    :row-key="rowKey"
    :bordered="bordered"
    :size="size"
    :row-selection="{
      ...(rowSelection || {}),
      selectedRowKeys: state.selectedRowKeys,
      onChange: onSelectChange,
    }"
    @change="handleTableChange"
  >
    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </a-table>
</template>

<style lang="less">
// 消除vite-press的样式影响
.simple-table.ant-table-wrapper {
  table {
    display: table; // vite-press会影响自适应宽度
  }
  .ant-pagination-options {
    margin-top: 0;
  }
}
</style>
