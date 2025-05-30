# TagGroup 标签组

类似antd  CheckableTag 效果， 支持单选、多选、图标等功能, 这里进行了组的封装,可以更简洁的获取数据。

## 基础用法

示例图标使用 [s-icon-font](/components/icon-font/) 组件,支持type调用iconfont线上图标，也支持传入antd图标组件。

<script setup>
  import Basic from './Basic.vue'
</script>

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 当前选中的值 | `string \| string[]` | `''` |
| tags | 标签数据 | `TagItem[]` | `[]` |
| gutter | 间隔 | `Number[]` | `[8,8]` |
| mode | 选择模式 | `'single' \| 'multiple'` | `'single'` |
| displayType | 显示样式（支持antd-tag采用antd tag） | `'default' \| 'antd-tag'` | `'default'` |

| totalConfig | 全选配置(批量选择下value无需传入) | `{ show: boolean; value?: any }` | `{ show: true, value: '' }` |

### TagItem 类型

```typescript
interface TagItem {
  /** 标签文本 */
  label: string;
  /** 标签值 */
  value: string;
  /** 图标类型或渲染函数(antd-tag模式下不支持) */
  icon?: string | VNode;
  /** 图标颜色（antd-tag模式下不支持） */
  iconColor?: string;
  /** 其他属性 */
  [prop: string]: any;
}
```
### Events

| 事件名称 | 说明 | 默认值 |
| --- | --- | --- |
| update:value | 选择回调 | function(value) |




## 注意事项

1. 单选模式下，开启全选需传入全选字段key,批量不需要。
2. antd-tag模式显示，不支持自定义图标与颜色。