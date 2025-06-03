# useLoadMore

加载更多 Hook，支持无限滚动加载。

## 基础用法

```ts
import { useLoadMore } from '@/hooks/useLoad'

const { 
  list,
  loading,
  noMore,
  initLoad,
  onLoadMore
} = useLoadMore(fetchData, {
  extraParams: {
    // 额外参数
  },
  hasPagination: true
})
```

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajaxFn | 请求数据的函数 | `Function \| Ref<Function>` | - |
| extraOptions | 额外配置选项 | `Ref<OptionsType>` | `{ extraParams: {}, hasPagination: true }` |

### extraOptions 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraParams | 额外请求参数 | `Record<string, any>` | `{}` |
| hasPagination | 是否启用分页 | `boolean` | `true` |
| afterFetch | 请求后处理函数 | `(data: any, res?: any) => any` | - |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| noMore | 是否没有更多数据 | `Ref<boolean>` |
| loading | 加载状态 | `Ref<boolean>` |
| initLoading | 初始化加载状态 | `Ref<boolean>` |
| list | 数据列表 | `Ref<any[]>` |
| initLoad | 初始化加载 | `Function` |
| onLoadMore | 加载更多 | `Function` |

## 代码演示

### 基础列表

<demo src="./demos/Basic.vue" />

### 无限滚动列表

<demo src="./demos/Infinite.vue" /> 