# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

  <div class="demo-button">
    <button>测试按钮1</button>
  </div>

<style>
.demo-button {
  display: flex;
  gap: 8px;
  color: red;
}
</style>

## API

### Props

| 参数     | 说明       | 类型                                                     | 默认值      |
| -------- | ---------- | -------------------------------------------------------- | ----------- |
| type     | 按钮类型   | `'primary' \| 'default' \| 'dashed' \| 'link' \| 'text'` | `'default'` |
| size     | 按钮大小   | `'large' \| 'middle' \| 'small'`                         | `'middle'`  |
| loading  | 加载中状态 | `boolean`                                                | `false`     |
| disabled | 禁用状态   | `boolean`                                                | `false`     |

### Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击按钮时触发 | `(event: MouseEvent) => void` |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
| icon    | 按钮图标 |
