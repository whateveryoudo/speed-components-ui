# FullModal 全屏弹窗

全屏弹窗组件，支持全屏拖拽。
<script setup>
    import Basic from './Basic.vue'
    import CustomRender from './CustomRender.vue'
    import Drag from './Drag.vue'
</script>
### 基础用法
<Basic />

### 自定义渲染(slot使用)

<CustomRender />

### 拖拽支持
沿用了官网的示例，这里仅需要配置 draggable 即可。

<Drag />


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 是否显示弹窗 | boolean | false |
| title | 弹窗标题 | string | - |
| width | 弹窗宽度 | string \| number | 520 |
| centered | 是否居中显示 | boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| destroyOnClose | 关闭时是否销毁 Modal 里的子元素 | boolean | false |
| getContainer | 指定 Modal 挂载的 HTML 节点 | () => HTMLElement | () => document.body |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| ok | 点击确定回调 | function(e) |
| cancel | 点击取消回调 | function(e) |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 弹窗内容 |
| title | 自定义标题 |
| footer | 自定义底部 |
