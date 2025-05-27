# IconFont 图标组件

基于`@ant-design/icons-vue`的`createFromIconfontCN`封装的图标渲染器，支持iconfont图标（常用）、antd内置图标、自定义传入图片等功能。

::: tip 提示
你可以在[全局配置](/guide/quickstart.html#在-main-ts-中引入组件库)中传入iconfontUrl
:::

<script setup>
import Basic from './Basic.vue'
import CustomRender from './CustomRender.vue'
</script>

## 基础用法

支持 iconfont 和 antd 图标

<Basic/>

## 自定义渲染

支持自定义图标渲染和图片模块

<CustomRender/>

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 图标类型(iconfont渲染时用到) | `string` | - |
| prefix | 图标样式前缀 | `string` | 'icon-' |
| color | 图标颜色 | `string` | - |
| size | 图标大小 | `string \| number` | 14 |
| scriptUrl | 自定义 iconfont 脚本地址(支持全局配置) | `string[]` | [] |
| imgModule | 图片模块地址 | `string` | - |
| imgStyle | 图片样式 | `object` | {} |
| iconRender | 自定义图标渲染函数 | `Function` | - |
