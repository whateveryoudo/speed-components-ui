# SearchSelect 搜索选择器

基于 antd Select 封装的搜索选择器组件，支持远程搜索和数据加载。
<script setup>
  import Basic from './Basic.vue'
</script>
## 示例

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string \| string[]` | - |
| fetchFunc | 获取选项数据的函数 | `(params: { searchVal: string, ... }) => Promise<any>` | - |
| fieldNames | 自定义字段名 | `{ label: string, value: string }` | `{ label: 'name', value: 'id' }` |
| fetchOptions | 请求配置 | `{ params?: Record<string, any>, afterRes?: Function }` | - |
| mode | 设置 Select 的模式 | `'multiple'` | - |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| placeholder | 选择框默认文本 | `string` | `'请选择'` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:value | 选中值变化时触发 | `(value: string \| string[], option: any)` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| notFoundContent | 当下拉列表为空时显示的内容 |

## 注意事项

1. `fetchFunc` 函数需要返回符合以下格式的数据：
```typescript
{
  success: boolean;
  data: {
    data: Array<{
      [key: string]: any;
    }>;
  };
}
```

2. 如果后端返回的数据格式与默认格式不一致，可以通过 `fetchOptions.afterRes` 进行转换：
```typescript
{
  fetchOptions: {
    afterRes: (res) => {
      // 转换数据格式
      return res.map(item => ({
        name: item.label,
        id: item.value
      }))
    }
  }
}
```

3. 可以通过 `fieldNames` 自定义选项的标签和值的字段名：
```typescript
{
  fieldNames: {
    label: 'username',  // 显示的文本字段
    value: 'userId'     // 选项的值字段
  }
}
``` 