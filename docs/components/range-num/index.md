# RangeNum 数字区间

基于 antd InputNumber 封装的数字区间组件，支持前后缀、最大值最小值设定。
<script setup>
    import Basic from './Basic.vue'
</script>
## 用法示例

<Basic/>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 当前选中的值 | `number[]` | `[]` |
| maxNum | 最大值设定 | `number` | - |
| minNum | 最小值设定 | `number` | `0` |
| suffix | 后缀文本 | `string` | - |

## 注意事项

1. 组件会在输入框失焦时触发值更新
2. 当输入值超过最大值时，会自动设置为最大值
3. 当输入值小于最小值时，会自动设置为最小值
4. 当起始值大于结束值时，会自动调整两个值相等
5. 当结束值小于起始值时，会自动调整两个值相等
6. 当两个值都为空时，会返回空数组 