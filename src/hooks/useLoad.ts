/*
 * @Author: ykx
 * @Date: 2023-04-29 15:44:47
 * @LastEditTime: 2023-06-15 11:37:45
 * @LastEditors: your name
 * @Description: useTable公共hook(这里option传入ref),支持翻页，搜索勾选;  useLoadMore(加载更多)
 * @FilePath: \easycube-apps\packages\hooks\src\useLoad.ts
 */
import {
  type Ref,
  type ComputedRef,
  ref,
  reactive,
  computed,
  unref,
  watch,
  inject
} from "vue";
import type { RequestResponse } from '..';
import { uniqBy } from "lodash-es";
type OptionsType = {
  extraParams?: Record<string, any>;
  rowKey?: string;
  beforeFetch?: () => void;
  transformAfterFetch?: (data: any, res?: any) => any;
  afterFetch?: (res: any) => any;
  handleMultiRes?: (res: any) => any;
  fullRowsAjax?: any;
  emit?: any;
  sortFieldKey?: string;
  sortOrderKey?: string;
  [props: string]: any;
};
const defaultOptions = {
  extraParams: {},
  needFullSelect: false,
  hasPagination: true,
  hasSort: false,
  hasSelectedRows: [],
  sortFieldKey: 'sortField',
  sortOrderKey: 'sortOrder'
};
// 默认最大50
export const defaultPageSizeOptions = ["10", "20", "50"];
// 表格通用
export const useTable = (
  ajaxFn: Function | Ref<Function>,
  extraOptions: Ref<OptionsType> | ComputedRef<OptionsType>
) => {
  const loading = ref(false); // 通用请求loading
  const selectAllLoading = ref(false); // 全选请求loading
  const dataSource = ref<any[]>([]); // 选择请求返回数据
  const speedComponentsConfig = inject<RequestResponse<any>>('speed-components-config');
  const transformRequestRes = speedComponentsConfig?.value?.transformRequestRes;
  const useLoadConfig = speedComponentsConfig?.value?.useLoadConfig;
  // 整合默认配置和传入配置
  const options = computed(() => {
    return { ...defaultOptions, ...extraOptions.value, ...useLoadConfig };
  });
  // 唯一key
  const rowKey = computed(() => {
    return options.value.rowKey || "id";
  });
  const tableHeaderFilters = ref({}); // 表格头搜索条件
  const tableHeaderSorter = ref({
    [String(options.value.sortFieldKey)]: '',
    [String(options.value.sortOrderKey)]: ''
  }); // 表格头排序
  const emit = options.value.emit;
  const pagination = ref({
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: defaultPageSizeOptions,
    showTotal: (total: number) => `共${total}条`,
  });
  // 获取应用下的用户
  const state = reactive<{
    curPageKeys: string[];
    selectedRowKeys: string[]; // 已选中keys -当前页
    selectedRows: Record<string, any>[]; // 已选中rows -当前页
    totalRows: any[]; // 全量条目
    hasSelectedRows: any[]; // 已选择的条目
  }>({
    curPageKeys: [],
    selectedRowKeys: [],
    selectedRows: [],
    totalRows: [],
    hasSelectedRows: [],
  });

  // 全选条目keys
  const totalKeys = computed(() => {
    return state.totalRows.map((item: any) => item[rowKey.value]) || [];
  });
  // 全选的状态项
  const totalCheckStatus = computed(() => {
    return {
      checkAll:
        state.hasSelectedRows.length > 0 &&
        state.hasSelectedRows.length === Number(state.totalRows.length),
      indeterminate:
        state.hasSelectedRows.length > 0 &&
        state.hasSelectedRows.length < state.totalRows.length,
    };
  });
  // 处理回显操作
  const handleReChecked = () => {
    // 兼容外部处理
    if (options.value && options.value.handleMultiRes) {
      state.curPageKeys = options.value.handleMultiRes(dataSource.value);
    } else {
      state.curPageKeys = dataSource.value.map(
        (item: any) => item[rowKey.value]
      );
    }
    // 兼容全选的情况
    state.selectedRows =
      state.hasSelectedRows.filter((item: any) => {
        return state.curPageKeys.includes(item[rowKey.value]);
      }) || [];
    state.selectedRowKeys =
      state.selectedRows.map((item: any) => item[rowKey.value]) || [];
  };
  // 监听外部hasSelectedRows
  watch(
    () => options.value.hasSelectedRows,
    (newVal) => {
      state.hasSelectedRows = newVal || [];
      handleReChecked(); // 同步回显
    },
    { immediate: true }
  );
  // 全量数据请求
  const onCheckAllChange = async (e: any) => {
    if (e.target.checked) {
      state.hasSelectedRows = uniqBy(
        [...state.hasSelectedRows, ...state.totalRows],
        rowKey.value
      );
    } else if (!e.target.checked) {
      state.hasSelectedRows = state.hasSelectedRows.filter((item: any) => {
        return !totalKeys.value.includes(item[rowKey.value]);
      });
    }
    handleReChecked();
    if (emit) {
      // 触发外部更新
      emit("update:hasSelectedRows", state.hasSelectedRows);
    }
  };
  // 获取全量条目
  async function getTotalRows() {
    if (options.value.fullRowsAjax) {
      selectAllLoading.value = true;
      const res = await options.value.fullRowsAjax({
        ...options.value.extraParams,
      });
      selectAllLoading.value = false;
      if (res && res.success) {
        state.totalRows = res.data || [];
        handleReChecked();
      }
    }
  }
  const handleResetChecked = () => {
    state.curPageKeys = [];
    state.selectedRowKeys = [];
    state.selectedRows = [];
    state.totalRows = [];
    state.hasSelectedRows = [];
  };
  // 通用请求 isSearch - 是否是搜索操作，（添加错误处理）
  async function getList(
    isSearch = true,
    listOptions: any = {
      needResetChecked: false,
      backLoad: false,
    }
  ) {
    const ajaxFnVal = unref(ajaxFn);
    loading.value = true;

    if (listOptions.needResetChecked) {
      // 重置勾选项
      handleResetChecked();
    }
    // 获取数据前的处理
    if (
      options.value.beforeFetch &&
      typeof options.value.beforeFetch === "function"
    ) {
      options.value.beforeFetch();
    }
    isSearch && (pagination.value.current = 1); // 重置页码
    try {
      // 合并表格头搜索条件和排序
      const baseParams = {
        ...options.value.extraParams,
        ...tableHeaderFilters.value,
        ...(options.value.hasSort ? tableHeaderSorter.value : {}),
      };
      let res = {} as any;
      res = await ajaxFnVal(
        options.value.hasPagination
          ? {
              page: pagination.value.current,
              size: pagination.value.pageSize,
              ...baseParams,
            }
          : baseParams
      );
      if (transformRequestRes) {
        if (typeof transformRequestRes !== 'function') {
          console.error('transformRequestRes应为一个函数');
        } else {
          res = transformRequestRes(res);
        }
      }
      if (res && res?.success) {
        loading.value = false;
        // 防止删除 | 修改pageSize后 最后一页无数据的情况(提前一页请求，这里仅倒退一次)
        if (
          dataSource.value.length === 0 &&
          pagination.value.current !== 1 &&
          !listOptions.backLoad
        ) {
          pagination.value.current--;
          getList(isSearch, {
            backLoad: true,
          });
          return;
        }
        // 提交后的参数处理
        if (
          options.value.transformAfterFetch &&
          typeof options.value.transformAfterFetch === "function"
        ) {
          res.data = options.value.transformAfterFetch(res.data);
        }
        dataSource.value = res?.data ?? [];
        pagination.value.total = Number(res.totalCount);
        // 获取全量条目(翻页不需要重新请求)
        if (options.value.needFullSelect && isSearch) {
          getTotalRows();
        }
        // 回显选中
        handleReChecked();
        // 请求的回调
        if (
          options.value.afterFetch &&
          typeof options.value.afterFetch === "function"
        ) {
          options.value.afterFetch(dataSource.value);
        }
      }
    } catch (error) {
      // 新增异常的时候清空数组
      dataSource.value = [];
      loading.value = false;
      console.error(error);
    }
  }
  // 单条 / 当前页全选
  const onSelectChange = (
    selectedRowKeys: string[],
    selectedRows: Record<string, string>[]
  ) => {
    console.log(selectedRowKeys, selectedRows);
    state.selectedRowKeys = selectedRowKeys;
    state.selectedRows = selectedRows;
    // 先排除选中当前页
    // console.log(state.curPageKeys)
    const restCurRows = state.hasSelectedRows.filter((item: any) => {
      return !state.curPageKeys.includes(item[rowKey.value]);
    });
    // 组合勾选项
    state.hasSelectedRows = [...restCurRows, ...selectedRows];
    if (emit) {
      // 触发外部更新
      emit("update:hasSelectedRows", state.hasSelectedRows);
    }
  };
  // 表格变化（分页，搜索，排序）
  const handleTableChange = (page: { pageSize: number; current: number }, filters: any, sorter: any) => {
    console.log(filters, sorter);
    pagination.value.current = page.current;
    pagination.value.pageSize = page.pageSize;
    if (filters) {
      tableHeaderFilters.value = filters;
    }
    if (sorter) {
      tableHeaderSorter.value[String(options.value.sortFieldKey)] = sorter.field;
      tableHeaderSorter.value[String(options.value.sortOrderKey)] = sorter.order;
    }

    getList(false);
  };
  // 处理列宽度变化
  const handleResizeColumn = (w: string | number, col: any) => {
    col.width = w;
  };
  return {
    state,
    totalCheckStatus,
    loading,
    selectAllLoading,
    pagination,
    dataSource,
    getList,
    onSelectChange,
    handleTableChange,
    handleResizeColumn,
    onCheckAllChange,
  };
};
// 加载更多
const defaultLoadMoreOptions = {
  extraParams: {},
  hasPagination: true,
};
export const useLoadMore = (
  ajaxFn: Function | Ref<Function>,
  extraOptions: Ref<OptionsType> = ref({
    extraParams: {},
    hasPagination: true,
  })
) => {
  const ajaxFnVal = unref(ajaxFn);
  const speedComponentsConfig = inject<RequestResponse<any>>('speed-components-config');
  const transformRequestRes = speedComponentsConfig?.value?.transformRequestRes;
  const useLoadConfig = speedComponentsConfig?.value?.useLoadConfig;
  // 整合默认配置和传入配置
  const options = computed(() => {
    return { ...defaultLoadMoreOptions, ...extraOptions.value, ...useLoadConfig };
  });
  const pageParams = reactive({
    page: 1,
    size: 10,
  });
  const loading = ref(false);
  const initLoading = ref(false);
  const noMore = ref(false);
  const list = ref<any[]>([]);
  // 添加错误拦截
  const handleInit = async () => {
    loading.value = true;
    try {
      let res = await ajaxFnVal({
        [options.value.pageKey]: pageParams.page,
        [options.value.pageSizekey]: pageParams.size,
        ...options.value.extraParams,
      });
      if (transformRequestRes) {
        if (typeof transformRequestRes !== 'function') {
          console.error('transformRequestRes应为一个函数');
        } else {
          res = transformRequestRes(res);
        }
      }
      if (res && res.success) {
        loading.value = false;
        if (
          options.value.transformAfterFetch &&
          typeof options.value.transformAfterFetch === "function"
        ) {
          res.data = options.value.transformAfterFetch(res.data);
        }
        // 兼容获取，后端格式不同
        const newData = list.value.concat(res.data);
        list.value = newData;
        // 判断数据是否请求完
        if (res.totalPages !== undefined) {
          if (res.totalPages <= pageParams.page) {
            noMore.value = true;
          } else {
            noMore.value = false;
          }
        } else if (res.totalCount !== undefined) {
          if (res.totalCount <= list.value.length) {
            noMore.value = true;
          } else {
            noMore.value = false;
          }
        }
      } else {
        loading.value = false;
      }
    } catch (error) {
      loading.value = false;
      console.error(error);
    }
  };
  // 初始加载
  const initLoad = async (resetPage = true) => {
    if (resetPage) {
      pageParams.page = 1;
      list.value = [];
    }
    initLoading.value = true;
    await handleInit();
    initLoading.value = false;
  };
  // 加载更多
  const onLoadMore = async () => {
    loading.value = true;
    if (!noMore.value) {
      pageParams.page += 1;
      handleInit();
    }
  };
  return {
    noMore,
    loading,
    initLoading,
    initLoad,
    onLoadMore,
    list,
  };
};
