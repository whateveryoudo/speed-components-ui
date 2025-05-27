# TextMore 文字展开收起

基于 antd Typography.Paragraph 封装的文字展开收起组件，支持自定义行数。
<script setup>
    import Basic from './Basic.vue'
</script>

## 示例

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文本内容 | `string` | `''` |
| rows | 显示行数 | `number` | `3` |

## 注意事项

1. 组件基于 antd Typography.Paragraph 的 ellipsis 功能实现
2. 当文本超过指定行数时，会自动显示"展开"按钮
3. 点击"展开"后，显示完整文本，并显示"收起"按钮
4. 组件默认显示 3 行文本
5. 可以通过 `rows` 属性自定义显示行数 