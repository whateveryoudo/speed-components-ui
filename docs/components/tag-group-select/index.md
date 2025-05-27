# TagGroup 标签组

基于 antd Space 封装的标签组组件，支持单选、多选、图标等功能。

## 基础用法

:::demo
tag-group/Basic
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string \| string[]` | `''` |
| tags | 标签数据 | `TagItem[]` | `[]` |
| mode | 选择模式 | `'single' \| 'multiple'` | `'single'` |
| totalConfig | 全选配置 | `{ show: boolean; value: any }` | `{ show: true, value: '' }` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:value | 选中值变化时触发 | `(value: string \| string[])` |

### TagItem 类型

```typescript
interface TagItem {
  /** 标签文本 */
  label: string;
  /** 标签值 */
  value: string;
  /** 图标类型或渲染函数 */
  icon?: string | VNode;
  /** 图标颜色 */
  iconColor?: string;
  /** 其他属性 */
  [prop: string]: any;
}
```

## 注意事项

1. 单选模式下，`value` 为字符串类型
2. 多选模式下，`value` 为字符串数组类型
3. 标签选中状态通过右上角的蓝色三角形标识
4. 图标支持字符串类型（使用 `s-icon-font` 组件）或 VNode 类型
5. 可以通过 `iconColor` 自定义图标颜色，默认为 `#5e76b5` 