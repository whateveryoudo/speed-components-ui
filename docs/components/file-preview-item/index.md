# FilePreviewItem 文件预览项

用于单个文件的预览展示，支持图片、文档、音视频等多种类型，支持预览、下载、删除等操作。默认采用卡片模式，也支持列表模式。

::: tip 提示
1、演示示例依赖了公共hook的[useCustomUpload](/components/useCustomUpload),你也可以自行实现。<br>
2、部分示例需结合后端运行[后端示例](https://gitee.com/ykxstore/speed-apis)
:::

<script setup>
    import Basic from './Basic.vue'
</script>
## 基础用法

列表显示（你可以自定义组的样式，注：此处的删除未请求接口）

<Basic/>


## Props

| 参数         | 说明                 | 类型                                   | 默认值   |
| ------------ | -------------------- | -------------------------------------- | -------- |
| id           | 文件唯一标识         | string                                 | -        |
| fileName     | 文件名               | string                                 | -        |
| fileType     | 文件类型             | string                                 | -        |
| fileSize     | 文件大小             | string                                 | -        |
| previewUrl   | 文件预览地址         | string                                 | -        |
| mode         | 展示模式             | 'card' \| 'list' \| 'list-simple'      | 'card'   |
| canIdel      | 是否允许删除         | boolean                                | true     |
| className    | 自定义类名           | string                                 | -        |

## Events

| 事件名      | 说明           | 回调参数         |
| ----------- | -------------- | ---------------- |
| on-delete   | 删除文件时触发 | (id: string)     |

## Slots

无

## 注意事项

1. 组件会根据文件后缀自动显示对应的占位图标或图片预览。
2. 仅支持通过文件名后缀简单判断类型，未做 MIME 校验。
3. 依赖 `viewerjs` 实现图片预览，需提前安装依赖。
4. 下载、预览等功能需后端接口支持。
5. 支持三种模式：卡片（默认）、列表、简洁列表。

---

> 如需批量文件预览，请结合列表循环使用。
