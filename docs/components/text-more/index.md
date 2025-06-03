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