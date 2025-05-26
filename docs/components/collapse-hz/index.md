# CollapseHz 横向的展开收起

用于横向的展开收起（基于flex布局,你可以快速生成一个展开收起的面板)，纵向展开收起推荐 [vue-collapsed] (https://vue-collapsed.pages.dev),比起antd自带的collapsed更具定制性。; 如果你需要支持横纵项拖拽大小，推荐使用 [vue-split-pane](https://github.com/PanJiaChen/vue-split-pane?tab=readme-ov-file#readme) ；
<script setup>
    import Basic from './Basic.vue'
    import CustomTrigger from './CustomTrigger.vue'
</script>
### 基础用法


<Basic />

### 自定义触发器(注：需要自己控制展开收起)

<CustomTrigger/>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open(v-model) | 外部控制展开收起状态 | boolean | false |
| expandAttrBefore | 收起时的样式属性 | string | 'flex: 0' |
| expandAttrAfter | 展开时的样式属性 | string | 'flex: 0 0 320px' |
| transitionAttr | 过渡动画属性 | string | 'flex' |
| triggerMode | 触发方式 | 'default'-默认显示触发器 \| 'hover'-移动上去显示触发器 | 'default' |
| expandDir | 展开方向 | 'left' \| 'right' | 'left' |


### Slots

| 名称 | 说明 |
| --- | --- |
| trigger-render | 自定义触发器 |
| expand-render | 展开时显示的内容 |
| collapse-render | 收起时显示的内容 |

## 注意事项

1. 组件默认使用 flex 布局，需要父容器设置 `display: flex`
2. 展开时内容会延迟显示，避免宽度挤压导致的视觉问题
3. 支持鼠标悬停触发展开（trigger="hover"）
