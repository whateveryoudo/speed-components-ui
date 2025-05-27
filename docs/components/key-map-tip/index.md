# KeyMapTip 快捷键提示

用于显示带有快捷键提示的文本提示组件。
<script setup>
    import Basic from './Basic.vue'
</script>

## 基础用法

<Basic/>


### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文本 | string | - |
| keyMap | 快捷键文本 | string | - |

### antv的tooltip的[props](https://www.antdv.com/components/tooltip-cn#api)均支持使用

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义内容 | 