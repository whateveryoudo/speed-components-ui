# QuestionTip 快捷提示

基于 antd Tooltip/Popover 封装的快捷提示组件，支持字符串、字符串数组形式的提示内容。（注：本组件意在快速添加提示，如果你需要自定义复杂的提示，请结合a-tooltip自行封装。）
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
| tip | 提示内容，支持字符串或字符串数组 | `string \| string[]` | `[]` |
| placement | 提示框位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'right'` |
| theme | 提示框主题 | `'dark' \| 'white'` | `'dark'` |
| blocked | 是否块级显示 | `boolean` | `false` |
| cardStyle | 提示框样式 | `object` | `{}` |


antv的tooltip剩余 [props](https://www.antdv.com/components/tooltip-cn#api) 均能使用。