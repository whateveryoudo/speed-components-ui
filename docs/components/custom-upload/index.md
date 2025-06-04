# CustomUpload 自定义上传组件

基于 `useCustomUpload` hook 封装的文件上传组件，意在简化a-upload使用(仅提供基础配置)。

:::warning 提示
请先配置[全局请求配置](/guide/quickstart.html)<br/>
:::

<script setup>
  import Basic from './Basic.vue'

</script>

## 基础用法

<Basic/>


## API

### Props


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 上传文件列表 | `IFileItem[]` | `[]` |
| maxCount | 最大上传数量 | `number` | `8` |
| maxSize | 单个文件最大大小(MB) | `number` | `50` |
| acceptTypes | 接受的文件类型`'见底部'` | `string[]` | `[]` |
| multiple | 是否支持多选 | `boolean` | `true` |
| showFileList | 是否显示文件列表 | `boolean` | `true` |
| tooltip | 上传按钮提示文字 | `string` | `'上传附件/图片'` |
| apis | 上传相关接口 | `{ fileUpload, fileDel?, fileDownload?, getPreviewUrl? }` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 文件列表更新时触发 | `(files: IFileItem[]) => void` |
| afterUpload | 上传完成后触发 | `(files: IFileItem[]) => void` |
| afterDelete | 删除文件后触发 | `(files: IFileItem[]) => void` |

### Slots

| 名称 | 说明 |
| --- | --- |
| trigger | 自定义触发(仅type为file时生效) | 


### 支持的acceptTypes

`.jpeg`, `.jpg`, `.png`, `.svg`, `.xls`, `.xlsx`, `.zip`, `.rar`, `.doc`, `.docx`, `.mp4`, `.mpeg`, `.avi`, `.pdf`, `.ppt`, `.pptx`, `.txt`, `.mp3`
