# CustomTag 自定义标签

一个简单的自定义标签组件，支持自定义文字、颜色和背景色。
<script setup>

   import Basic from './Basic.vue'

</script>
## 基础用法

<Basic/>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 标签文本内容 | string | - |
| color | 文字颜色 | string | '#333' |
| bgColor | 背景颜色 | string | '#fff' |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义标签内容 |

### 样式

组件使用以下 CSS 类名，你可以通过覆盖这些类名来自定义样式：

| 类名 | 说明 |
| --- | --- |
| custom-tag | 标签根元素 | 