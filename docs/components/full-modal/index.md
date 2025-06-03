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
| visible/open(v-model) | 是否显示弹窗(visible部分历史兼容) | boolean | false |
| title | 弹窗标题 | string | - |
| width | 弹窗宽度 | string \| number | 450 |
| height | 弹窗高度 | string \| number | 'auto' |
| max-height | 最大高度 | string | 70vh |
| min-height | 最小高度 | string | 100px |
| draggable | 是否可拖动 | boolean | false |
| needConfirmClose | 是否需要二次确认(默认情况下，会触发cancel后自动关闭，如果有需求，设置后可以自定义取消逻辑) | boolean | false |

### antv的modal剩余 [props](https://www.antdv.com/components/modal-cn#api) 均能使用。

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| ok | 点击确定回调 | function(e) |
| cancel | 点击取消或X的回调 | function(e) |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 弹窗内容 |
| title | 自定义标题 |
| title-left | 左侧标题 |
| title-right | 右侧操作(默认会显示关闭按钮) |
| footer | 自定义底部 |
| footer-left | 自定义底部左侧 |
| footer-right | 自定义底部右侧 |
