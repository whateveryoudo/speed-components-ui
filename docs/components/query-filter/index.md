# QueryFilter 查询过滤器

基于 antd 组件封装的查询过滤器组件，支持多种表单项类型和布局配置。

## 基础用法

:::demo
query-filter/Basic
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| searchWhere | 搜索条件配置 | `SearchWhereItem[]` | `[]` |
| defaultSearchWhere | 默认搜索条件 | `SearchWhereItem[]` | `[]` |
| col | 每行显示的列数（24的约数） | `number` | `6` |
| gutter | 列间距 | `number` | `20` |
| showOpt | 是否显示操作按钮 | `boolean` | `true` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 搜索或重置时触发 | `(values: SearchWhereItem[], isSearch: boolean)` |

### SearchWhereItem 类型

```typescript
interface SearchWhereItem {
  /** 字段标识 */
  key: string;
  /** 字段标签 */
  label: string;
  /** 字段值 */
  val: any;
  /** 表单项类型 */
  filterCom: 'input' | 'inputNumber' | 'select';
  /** 组件类型 */
  type: 'FormInput' | 'FormInputNumber' | 'FormSelect' | 'FormSelectMultiple' | 'FormSwitch' | 'FormDatePicker' | 'FormTimePicker' | 'FormDateTimePicker';
  /** 组件属性 */
  props?: {
    /** 选项标识 */
    relaOptFlag?: string;
    /** 日期格式 */
    valueFormat?: string;
    [key: string]: any;
  };
}
```

## 支持的表单类型

1. 输入框（`FormInput`）
```typescript
{
  key: 'name',
  label: '姓名',
  val: '',
  filterCom: 'input',
  type: 'FormInput'
}
```

2. 数字输入框（`FormInputNumber`）
```typescript
{
  key: 'age',
  label: '年龄',
  val: '',
  filterCom: 'inputNumber',
  type: 'FormInputNumber'
}
```

3. 下拉选择（`FormSelect`）
```typescript
{
  key: 'status',
  label: '状态',
  val: '',
  filterCom: 'select',
  type: 'FormSelect',
  props: {
    relaOptFlag: 'status'
  }
}
```

4. 多选下拉（`FormSelectMultiple`）
```typescript
{
  key: 'tags',
  label: '标签',
  val: [],
  filterCom: 'select',
  type: 'FormSelectMultiple',
  props: {
    relaOptFlag: 'tags'
  }
}
```

5. 开关选择（`FormSwitch`）
```typescript
{
  key: 'switch',
  label: '开关',
  val: '',
  filterCom: 'select',
  type: 'FormSwitch'
}
```

6. 日期选择（`FormDatePicker`）
```typescript
{
  key: 'date',
  label: '日期',
  val: '',
  filterCom: 'inputNumber',
  type: 'FormDatePicker',
  props: {
    valueFormat: 'YYYY-MM-DD'
  }
}
```

7. 时间选择（`FormTimePicker`）
```typescript
{
  key: 'time',
  label: '时间',
  val: '',
  filterCom: 'inputNumber',
  type: 'FormTimePicker',
  props: {
    valueFormat: 'HH:mm:ss'
  }
}
```

8. 日期时间选择（`FormDateTimePicker`）
```typescript
{
  key: 'datetime',
  label: '日期时间',
  val: '',
  filterCom: 'inputNumber',
  type: 'FormDateTimePicker',
  props: {
    valueFormat: 'YYYY-MM-DD HH:mm:ss'
  }
}
```

## 注意事项

1. `col` 属性必须是 24 的约数（如：2、3、4、6、8、12、24）
2. 当表单项数量超过默认显示数量时，会自动显示展开/收起按钮
3. 操作按钮（查询/重置）会自动对齐到最后一列
4. 重置操作会清空所有表单项的值 