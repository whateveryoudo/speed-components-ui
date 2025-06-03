# ToggleInput 快捷文字修改

基于 antd Input 封装的快捷文字修改组件，支持二次确认、自定义触发等功能。

<script setup>
    import Basic from './Basic.vue'
</script>
## 基础用法

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 显示文本 | `string` | `'未命名'` |
| inputWidth | 输入框宽度 | `string` | `'200px'` |
| needConfirm | 是否需要二次确认 | `boolean` | `false` |
| updateText | 更新文本回调 | `(state: { text: string }) => void` | `() => {}` |

### 插槽

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| trigger | 自定义触发元素 | `{ text: string }` |

## 注意事项

1. 默认情况下，失去焦点时自动保存修改
2. 设置 `needConfirm` 为 `true` 时，需要点击确认按钮才会保存修改
3. 可以通过 `inputWidth` 自定义输入框宽度
4. 支持通过 `trigger` 插槽自定义触发元素
5. 修改成功后会触发 `updateText` 回调 