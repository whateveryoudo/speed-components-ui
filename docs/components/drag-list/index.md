# DragList 拖拽列表

基于 vuedraggable 封装的拖拽列表组件，支持列表项拖拽排序、添加、删除等操作。

## 基础用法

:::demo
drag-list/Basic
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 列表数据 | `any[]` | `[]` |
| itemKey | 列表项的唯一标识字段 | `string` | `'id'` |
| addText | 添加按钮文本 | `string` | `'添加'` |
| height | 列表项高度 | `string \| number` | `30` |
| showAddIcon | 是否显示添加按钮 | `boolean` | `true` |
| perRow | 新增项的默认数据 | `object` | `{}` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:list | 列表数据变化时触发 | `(list: any[], type?: string, item?: any)` |

### 插槽

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| itemRender | 列表项渲染 | `{ record: any, index: number }` |

## 注意事项

1. 列表项必须包含 `itemKey` 指定的唯一标识字段
2. 拖拽操作通过列表项右侧的拖拽图标触发
3. 删除操作通过列表项左侧的删除图标触发
4. 新增操作通过底部的添加按钮触发
5. 列表项内容通过 `itemRender` 插槽自定义
6. 组件内部使用 `vuedraggable` 实现拖拽功能，确保已安装该依赖 