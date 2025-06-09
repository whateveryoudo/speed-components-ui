# useLoadMore 加载更多

`useLoadMore` 是一个用于实现加载更多功能的 Hook，它提供了分页加载、加载状态管理等功能。（此功能仅提供请求的一些通用状态，具体滚动还是点击加载更多由你自己决定）
<script setup>
    import Basic from './Basic.vue'
</script>
## 点击加载更多

<Basic/>

## 滚动加载

请参考 [懒加载选择器](/components/lazy-select/index) 实现

## API

### useLoadMore 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajaxFn | 请求数据的函数 | `Function` | - |
| extraOptions | 额外配置项 | `Ref<OptionsType>` | `ref({ extraParams: {}, hasPagination: true })` |

### extraOptions 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraParams | 额外的请求参数 | `Record<string, any>` | `{}` |
| hasPagination | 是否使用分页 | `boolean` | `true` |
| pageKey | 页码参数名 | `string` | `page` |
| pageSizekey | 每页条数参数名 | `string` | `size` |
| transformAfterFetch | 数据转换函数 | `(data: any) => any` | - |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| list | 数据列表 | `Ref<any[]>` |
| loading | 加载状态 | `Ref<boolean>` |
| noMore | 是否还有更多数据 | `Ref<boolean>` |
| initLoad | 初始化加载函数 | `(resetPage?: boolean) => Promise<void>` |
| onLoadMore | 加载更多函数 | `() => Promise<void>` |

## 注意事项

1. 接口返回数据格式需要包含以下字段：
   ```typescript
   {
     success: boolean;
     data: any[];
     totalCount?: number;
     totalPages?: number;
   }
   ```

2. 如果接口返回格式与默认格式不一致，可以通过 `transformRequsRes` 配置进行转换。

3. 初始化加载时，可以通过 `initLoad(true)` 来重置页码和数据列表。
