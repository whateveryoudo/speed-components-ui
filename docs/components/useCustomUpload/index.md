# useCustomUpload 自定义上传 Hook

用于处理文件上传的自定义 Hook，支持文件大小、数量、类型的校验，以及上传、删除等操作。

:::tip 提示
1、此hook采用覆盖request方式，如想配置action地址，可直接使用antd的Upload组件。<br/>
2、使用前请确保已配置好上传、删除、预览的后端接口（可在初始化时配置）。
:::

<script setup>
  import Basic from './Basic.vue'
  import UseInAntd from './UseInAntd.vue'
  import UseWithPreview from './UseWithPreview.vue'

</script>

## 基础用法

普通的input上传(多选)

<Basic/>

## 结合antd的Upload组件

<UseInAntd/>

## 结合[FilePreviewItem](/components/file-preview-item/index)组件

<UseWithPreview/>

## 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| options | 配置项 | `Ref<IUploadOption> \| ComputedRef<IUploadOption>` | - |

### IUploadOption 配置项

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| maxCount | 最大上传数量(antd内置的maxCount不在支持，当为 1 时，始终用最新上传的代替当前) | `number` | - |
| multiple | 是否需要批量上传（注意：这里是指附件为数组形式,默认为`files[]`,调用的接口为api下的fileUploadMulti，antd upload设置了multiple，内部还是是调用多次的单次上传，估不需要设置此参数） | `boolean` | `false` |
| maxSize | 单个文件最大大小(MB) | `'number' \| 'string'` | - |
| acceptTypes | 允许上传的文件类型 | `string[]` | - |
| transformResult | 上传结果转换函数(这里是单条) | `(res: IFileItem) => any` | - |
| afterUpload | 上传完成后的回调 | `(files: IFileItem[]) => void` | - |
| afterDelete | 删除完成后的回调 | `(files: IFileItem[]) => void` | - |

## IFileItem

| 参数       | 说明         | 类型   | 默认值 |
| ---------- | ------------ | ------ | ------ |
| id         | 文件唯一标识 | string | -      |
| fileName   | 文件名       | string | -      |
| fileType   | 文件类型     | string | -      |
| fileSize   | 文件大小     | `'string'` \| `'number'` | -      |
| status   | 状态     | `'uploading'` \| `'done'` \| `'error'` | -      |
| previewUrl | 文件预览地址 | string | -      |


## 返回值

| 参数 | 说明 | 类型 |
|------|------|------|
| files | 文件列表 | `Ref<IFileItem[]>` |
| uploadLoading | 上传加载状态(本次上传，单/多) | `Ref<boolean>` |
| beforeUpload | 上传前校验函数 | `(file: IFileItem, fileList?: IFileItem[]) => boolean` |
| customRequest | 自定义上传函数 | `(option: {file: IFileItem \| IFileItem[];afterUpload?: (IFileItem[] => void)}) => Promise<void>` |
| handleDelFile | 删除文件函数 | `(file: IFileItem) => Promise<void>` |

## 注意事项

1. 文件类型校验目前仅通过文件名后缀判断，未做 MIME 类型校验(需要自己配置accept)
2. acceptTypes 这里和 antd accept 不同，为类型的后缀,如：`'.jpg', '.png', '.pdf'`
2. 上传前会自动进行文件大小、数量、类型的校验
3. customRequest 和antd原始的customRequest参数有一定差异，仅保留了file字段（简易传入数组）
4. 可以通过 `transformResult` 自定义上传结果的转换逻辑（这里为单条转换）
### 支持的acceptTypes

`.jpeg`, `.jpg`, `.png`, `.svg`, `.xls`, `.xlsx`, `.zip`, `.rar`, `.doc`, `.docx`, `.mp4`, `.mpeg`, `.avi`, `.pdf`, `.ppt`, `.pptx`, `.txt`, `.mp3`



