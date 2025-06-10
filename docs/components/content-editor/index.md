# ContentEditor 富文本编辑器

基于 wangEditor 封装的富文本编辑器组件，支持图片上传、自定义工具栏等功能。（注：此组件意在快速生成富文本控件(支持v-model),提供一些通用的配置。）

:::warning 提示
1、图片上传功能，请先配置[全局请求配置](/guide/quickstart.html)，上传接口、预览方法。<br/>
2、此处用图片和代码展示调用方式，wangeditor ssr存在问题！
:::

<script setup>

   import Basic from './Basic.vue'
const isDev = process.env.NODE_ENV === 'development';

</script>

## 用法

<Basic v-if="isDev"/>



```vue
<template>
  <div class="demo-wrapper">
    <div class="demo-item">
      <s-content-editor v-model:value="content1" placeholder="请输入内容..." />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const content1 = ref("<p>富文本内容</p>");
</script>

```

## API

### 属性

| 属性名         | 说明                                                                 | 类型                      | 默认值                                            |
| -------------- | -------------------------------------------------------------------- | ------------------------- | ------------------------------------------------- |
| value(v-model) | 编辑器内容                                                           | `string`                  | `''`                                              |
| readOnly       | 是否只读                                                             | `boolean`                 | `false`                                           |
| height         | 编辑器高度                                                           | `string`                  | `'360px'`                                         |
| placeholder    | 占位文本                                                             | `string`                  | `'请输入内容...'`                                 |
| toolbarConfig  | 工具栏配置,[参考](https://www.wangeditor.com/v5/toolbar-config.html) | `Partial<IToolbarConfig>` | `{ excludeKeys: ['insertVideo', 'insertTable'] }` |
| mode           | 编辑器模式                                                           | `'simple' \| 'default'`   | `'default'`                                       |
| uploadConfig           | 图片上传配置（请参考[useCustomUpload](/components/useCustomUpload/)）                                                           | -   | -                                       |
