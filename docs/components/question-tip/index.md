# QuestionTip 快捷提示

基于 antd Tooltip/Popover 封装的快捷提示组件，支持字符串、字符串数组形式的提示内容。
<script setup>
    import Basic from './Basic.vue'
</script>
## 用法示例

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | `string` | `''` |
| tip | 提示内容，支持字符串或字符串数组 | `string \| string[]` | `''` |
| placement | 提示框位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'right'` |
| theme | 提示框主题 | `'dark' \| 'white'` | `'dark'` |
| blocked | 是否块级显示 | `boolean` | `false` |
| cardStyle | 提示框样式 | `object` | `{}` |

## 注意事项

1. 当 `theme` 为 `'dark'` 时，使用 Tooltip 组件
2. 当 `theme` 为 `'white'` 时，使用 Popover 组件
3. 提示内容支持字符串或字符串数组，数组形式会自动换行显示
4. 组件默认使用问号图标，可以通过自定义插槽修改
5. 组件默认是行内显示，设置 `blocked` 为 `true` 可以改为块级显示 