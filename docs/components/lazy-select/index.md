# LazySelect 懒加载选择器

带有分页请求的多选组件，采用 popover 实现，值为默认 `{ value, label }`(批量为`[{value, label}]`)，用于跨页回显。（注：组件需要存入label字段，请确保后端能够存储值和文字。）

<script setup>
import Basic from './Basic.vue'
</script>
::: tip 提示
演示示例请求逻辑依赖了公共hook的useLoad的useLoadMore。
:::

## 基础用法

<Basic/>


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 选中的值 | `{ label: string, value: string }` \| `Array<{ label: string, value: string }>` | - |
| mode | 选择模式 | `'single'` \| `'multiple'` | `'single'` |
| disabled | 是否禁用 | boolean | `false` |
| placeholder | 占位文本 | string | `'请选择'` |
| allowClear | 是否显示清除按钮 | boolean | `true` |
| fieldNames | 自定义字段名 | `{ label: string, value: string }` | `{ label: 'name', value: 'id' }` |
| maxCount | 多选模式下最多显示标签数 | number | `10` |
| maxTagTextLength | 多选模式下标签最大字符数 | number | `10` |
| search | 搜索配置 | `{ key: string, placeholder?: string }` | - |
| fetchFunc | 获取数据的函数 | `(params: any) => Promise<{ data: {records: any[], total: number, pages: number },list: success: boolean }>` | - |
| fetchParams | 额外请求参数(如果配置了search,这里可以不用再设置) | any | `{}` |
| afterFetch | 数据获取后的回调(可处理为hook需要的数据结构) | `(data: any, res?: any) => any` | - |


### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| render-option | 自定义选项内容 | `{ data: any }`(当前行数据) | 