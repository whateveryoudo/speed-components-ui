# useTable

表格通用 Hook，支持分页、搜索、全选、跨页勾选等功能。

<script setup>
    import Basic from './Basic.vue'
    import Complex from './Complex.vue'
</script>

## 基础用法

结合a-table

<Basic/>

## 复合示例

一个包含，翻页，全选，排序，勾选，筛选的综合示例

<Complex/>


## API

### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajaxFn | 请求数据的函数 | `Function` | - |
| extraOptions | 额外配置选项 | `Ref<OptionsType> \| ComputedRef<OptionsType>` | - |

### extraOptions 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraParams | 额外请求参数(不包含page,size) | `Record<string, any>` | `{}` |
| rowKey | 行数据的 Key | `string` | `'id'` |
| beforeFetch | 请求前回调函数 | `() => void` | - |
| transformAfterFetch | 请求后处理函数（可用于转换data数据结构） | `(data: any ) => any` | - |
| afterFetch | 请求后回调函数 | `(res: any) => void` | - |
| handleMultiRes | 处理多选结果(可用于过滤一些可勾选的rowKey) | `(res: any) => string[]` | - |
| fullRowsAjax | 获取全量数据的请求函数 | `Function` | - |
| emit | 事件发射器 | `Function` | - |
| needFullSelect | 是否需要全选功能(配套fullRowsAjax传入) | `boolean` | `false` |
| sortFieldKey | 排序字段key | `string` | `sortField`
| sortOrderKey | 排序方式key | `string` | `sortOrder`
| hasPagination | 是否启用分页（false下会隐藏分页，且去掉page,size参数） | `boolean` | `true` |
| hasSelectedRows | 已选择的行数据（这里是全量数据集，包含跨页选择） | `any[]` | `[]` |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| state | 表格状态对象 | `Object` |
| state.curPageKeys | 当前页的 key 列表 | `string[]` |
| state.selectedRowKeys | 已选中的 key 列表 | `string[]` |
| state.selectedRows | 已选中的行数据 | `Record<string, any>[]` |
| state.totalRows | 全量数据 | `any[]` |
| state.hasSelectedRows | 已选择的行数据 | `any[]` |
| totalCheckStatus | 全选状态 | `Object` |
| totalCheckStatus.checkAll | 是否全选 | `boolean` |
| totalCheckStatus.indeterminate | 是否半选 | `boolean` |
| loading | 加载状态 | `Ref<boolean>` |
| selectAllLoading | 全选加载状态 | `Ref<boolean>` |
| pagination | 分页配置 | `Ref<Object>` |
| dataSource | 表格数据源 | `Ref<any[]>` |
| getList | 获取列表数据 | `(isSearch: boolean, listOptions: ListOption) => void` |
| onSelectChange | 选择变化处理函数 | `Function` |
| handleTableChange | 表格变化处理函数(用于处理分页，表头筛选，排序) | `Function` |
| handleResizeColumn | 处理列宽变化 | `Function` |
| onCheckAllChange | 全选变化处理函数 | `Function` |


### getList 参数说明 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isSearch | 是否为筛选请求（内部会重置页码为1） | `boolean` | true |
| ListOption | needResetChecked(是否重置勾选，会清除所有已有勾选态)，backLoad（递归调用时使用，无需传入） | `{ needResetChecked:boolean; backLoad?:boolean }` | `{ needResetChecked:false, backLoad:false }` |
