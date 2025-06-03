# useCustomUpload 自定义上传 Hook

用于处理文件上传的自定义 Hook，支持文件大小、数量、类型的校验，以及上传、删除等操作。

## 基础用法

```vue
<script setup>
import { useCustomUpload } from '@/hooks/useCustomUpload'
import { ref } from 'vue'

const options = ref({
  maxCount: 5,
  maxSize: 2,
  acceptTypes: ['.jpg', '.png', '.pdf'],
  transformResult: (res) => ({
    id: res.id,
    fileName: res.fileName,
    fileType: res.fileType,
    fileSize: res.fileSize
  }),
  afterUpload: (files) => {
    console.log('上传完成', files)
  },
  afterDelete: (files) => {
    console.log('删除完成', files)
  }
})

const { files, uploadLoading, beforeUpload, customRequest, handleDelFile } = useCustomUpload(options)
</script>
```

## 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| options | 配置项 | `Ref<IUploadOption> \| ComputedRef<IUploadOption>` | - |

### IUploadOption 配置项

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| maxCount | 最大上传数量 | `number` | - |
| maxSize | 单个文件最大大小(MB) | `number` | - |
| acceptTypes | 允许上传的文件类型 | `string[]` | - |
| transformResult | 上传结果转换函数 | `(res: any) => any` | - |
| afterUpload | 上传完成后的回调 | `(files: any[]) => void` | - |
| afterDelete | 删除完成后的回调 | `(files: any[]) => void` | - |

## 返回值

| 参数 | 说明 | 类型 |
|------|------|------|
| files | 文件列表 | `Ref<any[]>` |
| uploadLoading | 上传加载状态 | `Ref<boolean>` |
| beforeUpload | 上传前校验函数 | `(file: File, fileList?: File[]) => boolean` |
| customRequest | 自定义上传函数 | `(option: any) => Promise<void>` |
| handleDelFile | 删除文件函数 | `(id: string) => Promise<void>` |

## 注意事项

1. 文件类型校验目前仅通过文件名后缀判断，未做 MIME 类型校验
2. 上传前会自动进行文件大小、数量、类型的校验
3. 上传过程中会自动处理文件状态（uploading、error、done）
4. 删除操作需要后端接口支持
5. 可以通过 `transformResult` 自定义上传结果的转换逻辑

::: tip 提示
使用前请确保已配置好上传和删除的后端接口。
:::

## 代码示例

```vue
<template>
  <a-upload
    :file-list="files"
    :before-upload="beforeUpload"
    :custom-request="customRequest"
    :show-upload-list="{ showRemoveIcon: true }"
    @remove="handleDelFile"
  >
    <a-button :loading="uploadLoading">
      <upload-outlined /> 点击上传
    </a-button>
  </a-upload>
</template>
```
