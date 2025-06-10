# CustomUpload 自定义上传组件

基于 `useCustomUpload` hook 封装的文件上传组件，意在简化a-upload使用(仅提供基础配置)。

:::warning 提示
1、请先配置[全局请求配置](/guide/quickstart.html),api中的附件方法<br/>
2、如有自定义的上传，可参照[useCustomUpload](/components/useCustomUpload/index)自行封装。
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
| value(v-model) | 上传文件列表 | `IFileItem[]` | `[]` |
| maxCount | 最大上传数量 | `number` | `8` |
| maxSize | 单个文件最大大小(MB) | `number` | `50` |
| acceptTypes | 接受的文件类型`'见底部'` | `string[]` | `[]` |
| multiple | 是否支持多选 | `boolean` | `false` |
| showFileList | 是否显示文件列表 | `boolean` | `true` |
| name | 发到后台的文件参数名 | `string` | `files[]` |
| data | 上传所需参数或返回上传参数的方法 | `'object' \| '((file: IFileItem) => object)'` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| afterUpload | 上传完成后触发 | `(files: IFileItem[]) => void` |
| afterDelete | 删除文件后触发 | `(files: IFileItem[]) => void` |

### Slots

| 名称 | 说明 |
| --- | --- |
| trigger | 自定义触发(仅type为file时生效) | 


### 支持的acceptTypes

`.jpeg`, `.jpg`, `.png`, `.svg`, `.xls`, `.xlsx`, `.zip`, `.rar`, `.doc`, `.docx`, `.mp4`, `.mpeg`, `.avi`, `.pdf`, `.ppt`, `.pptx`, `.txt`, `.mp3`
