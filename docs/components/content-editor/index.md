# ContentEditor 富文本编辑器

基于 wangEditor 封装的富文本编辑器组件，支持图片上传、自定义工具栏等功能。

## 基础用法

:::demo
content-editor/Basic
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 编辑器内容 | `string` | `''` |
| readOnly | 是否只读 | `boolean` | `false` |
| height | 编辑器高度 | `string` | `'360px'` |
| placeholder | 占位文本 | `string` | `'请输入内容...'` |
| toolbarConfig | 工具栏配置 | `Partial<IToolbarConfig>` | `{ excludeKeys: ['insertVideo', 'insertTable'] }` |
| mode | 编辑器模式 | `'simple' \| 'default'` | `'simple'` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:value | 内容变化时触发 | `(value: string)` |

## 注意事项

1. 组件基于 wangEditor 实现，需要安装相关依赖：
   ```bash
   npm install @wangeditor/editor @wangeditor/editor-for-vue
   ```

2. 默认使用简单模式（`simple`），工具栏不包含视频和表格功能
3. 可以通过 `toolbarConfig` 自定义工具栏配置
4. 支持图片上传功能，需要配置 `fileUpload` API
5. 可以通过 `mode` 切换编辑器模式：
   - `simple`：简单模式，精简工具栏
   - `default`：完整模式，包含所有功能 