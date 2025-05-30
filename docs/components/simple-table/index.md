# SimpleTable 简单表格

简易的table组件，满足大部分需求，如需要高度定制的table，请使用 `useLoad` 的 `useTable`。
::: tip 提示
- 示例中存在边框样式问题(为文档框架内部影响)，实际使用无此问题。<br/>
- 请求逻辑依赖了公共hook的 [useLoad](/components/useLoad) 的useTable。
:::

<script setup>
import Basic from './Basic.vue'
import WithQuery from './WithQuery.vue'
</script>

## 基础用法

包含基础的表格渲染，单选、多选，（区别于a-table,这里的勾选会保留翻页效果，且存储在hasSelectedRows内，hasSelectedRows会包含选择的全量信息）

<Basic/>

## 包含搜索的示例

整合[QueryFilter](/components/query-filter/)组件,支持部分插槽定义(注：可内置使用，也可以自行使用query-filter配合使用)

<WithQuery/>

### 更自定义场景请参照[useLoad]中的示例

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fetchFunc | 请求函数 | `Function` | - |
| fetchParams | 请求参数(默认会携带上page,size参数) | `Record<string, any>` | `{}` |
| columns | 列配置 | `any[]` | - |
| rowKey | 行唯一标识 | `string` | `'id'` |
| showPagination | 是否显示分页(关闭会去掉内置page,size参数) | `boolean` | `true` |
| showIndex | 是否显示序号 | `boolean` | `true` |
| bordered | 是否显示边框 | `boolean` | `false` |
| size | 表格大小 | `'small'` \| `'middle'` \| `'large'` | `'middle'` |
| beforeFetch | 数据获取前的回调 | `() => void` | - |
| afterFetch | 请求后的参数转换（用于处理不符合标准参数的场景） | `(data: any) => any` | - |
| fetchCallback | 数据获取后的回调 | `(data: any) => void` | - |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| - | 自定义列内容 | `{ text, record, index }` | 