# ColorPicker 颜色选择器

基于 [vue-color](https://github.com/linx4200/vue-color) 封装的颜色选择器组件，支持多种颜色格式输出、透明度设置、颜色预览等功能。

<script setup>
    import Basic from './Basic.vue'
</script>
## 基础用法

<Basic/>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 当前选中的颜色值 | `string` | - |
| placeholder | 输入框占位符 | `string` | - |
| placement | 颜色选择器弹出位置 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| format | 颜色输出格式 | `'hex' \| 'rgb' \| 'hsb'` | `'hex'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:color | 颜色值变化时触发 | `(color: string) => void` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义触发器内容 |

## 颜色格式支持

组件支持三种颜色格式输出，所有格式都自动支持透明度：

### 1. Hex 格式 (默认)
```javascript
// 无透明度
"#ff0000"

// 有透明度 (8位 hex)
"#ff0000ff"
```

### 2. RGB 格式
```javascript
// 无透明度
"rgb(255, 0, 0)"

// 有透明度
"rgba(255, 0, 0, 0.5)"
```

### 3. HSB 格式
```javascript
// 无透明度
"hsv(0, 100%, 100%)"

// 有透明度
"hsva(0, 100%, 100%, 0.5)"
```



