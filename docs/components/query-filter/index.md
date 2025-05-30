# QueryFilter 查询过滤器

一个基于配置的查询过滤器组件，支持多种类型的查询条件。

## 功能特点

- 支持多种查询类型：`input`(输入框)、`inputNumber`(数字范围)、`date`(日期)、`dateTime`(日期时间)、`dateRange`(日期范围)、`dateTimeRange`(日期时间范围)、`select`(选择器)、`apiSelect`(远程搜索选择器)
- 支持自定义查询条件布局
- 支持展开/收起功能
- 支持重置和查询操作
- 支持自定义样式和宽度
<script setup>
  import Basic from './Basic.vue'
  import Simple from './Simple.vue'
  import Complex from './Complex.vue'
</script>

## 基础用法

文档中宽度可能会显示挤压。容器宽度合适下不会出现此情况

<Basic/>

## 简洁版

<Simple/>

## 复合版(特定场景)

:::warning 提示
此模式下，参数配置相对固定(最好与后端协商字段)。与普通搜索组件有以下区别<br/> 1.内置了组件连接符类型匹配（[见尾部](/components/query-filter/index#内置连接匹配规则)）<br/> 2.搜索出参/默认参数设置结构为对象数组形式。`{fieldKey: 字段名, fieldVal: 字段值,fieldRel: 连接条件}[]`
:::

<Complex/>

## API

### Props

| 参数          | 说明                       | 类型                  | 默认值 |
| ------------- | -------------------------- | --------------------- | ------ |
| fields        | 查询字段配置               | `IFieldType[]`        | `[]`   |
| values        | 查询值                     | `Record<string, any>` | `{}`   |
| col           | 每行显示的列数（24的约数）,简易模式下无效 | `number`              | `6`    |
| gutter        | 列间距                     | `number`              | `20`   |
| showOpt       | 是否显示操作按钮           | `boolean`             | `true` |

### IFieldType 类型

```ts
type IFieldType = {
  label: string; // 字段标签
  fieldKey: string; // 字段标识
  fieldRel?: string; // 条件连接符
  fieldType:
    | "input"
    | "time"
    | "inputNumber"
    | "select"
    | "apiSearch"
    | "dateRange"
    | "dateTimeRange"
    | "date"
    | "dateTime"; // 字段类型
  props?: IPropType; // 字段属性
};
```

### IPropType 类型

```ts
type IFetchOptions = {
  params?: Record<string, any>;
  afterRes?: Function;
};
type IPropType = {
  placeholder?: string | string[]; // 占位符
  options?: DefaultOptionType[]; // 选项列表（select类型）
  searchWhenChange?: boolean; // 值变化时是否触发搜索
  itemWidth?: number; // 表单项宽度
  showSearch?: boolean; // 是否显示搜索框（select类型）
  transform2Params?: string[]; // 值转换（范围类型）
  valueFormat?: string; // 日期格式
  mode?: "multiple"; // select 的模式
  whenChangeTrigger?: "input"; // 触发方式(input生效)
  hasSearchIcon?: boolean; // 是否显示搜索图标
  fieldNames?: { label: string; value: string }; // 字段映射（selectSearch类型）
  fetchOptions?: IFetchOptions; // 远程搜索配置
  fetchFunc?: Function; // 远程搜索方法（selectSearch类型）
  search?: {
    key: string // 搜索字段名
  }
};
```

### Events

| 事件名 | 说明               | 回调参数                        |
| ------ | ------------------ | ------------------------------- |
| search | 点击查询按钮时触发 | `(values: Record<string, any>)` |

## 注意事项

1. `col` 属性必须是 24 的约数（如：6、8、12、24）
2. 日期类型支持自定义格式，默认格式：
   - 日期：`YYYY-MM-DD`
   - 日期时间：`YYYY-MM-DD HH:mm:ss`
3. 范围类型（日期范围、数字范围）支持值转换（如果后端是采用的两个值存储），通过 `transform2Params` 配置，如：`createTime => ['createTimeStart','createTimeEnd']`
4. 选择器类型支持远程搜索，通过 `fetchFunc` 和 `fetchOptions` 配置

### 内置连接匹配规则

组件内置了以下类型的连接符匹配规则：

#### 文本类型 (input)

- 包含 (search)
- 等于 (eq)
- 不等于 (neq)
- 开头是 (startWith)

#### 数字类型 (inputNumber)

- 范围 (scope)
- 等于 (eq)
- 不等于 (neq)
- 大于 (gt)
- 小于 (lt)
- 大于等于 (gte)
- 小于等于 (lte)

#### 日期类型 (date, dateTime, time)

- 范围 (scope)
- 等于 (eq)
- 不等于 (neq)
- 早于 (gt)
- 晚于 (lt)

#### 日期范围类型 (dateRange, dateTimeRange, timeRange)

- 等于 (eq)
- 不等于 (neq)

#### 单选类型 (select, apiSelect)

- 等于 (eq)
- 不等于 (neq)

#### 多选类型 (selectMultiple)

- 等于任意一个 (in)
- 不等于任意一个 (nin)

:::tip 提示
1.你可以通过传入props下relOptions对内置连接项进行覆盖（这里仅支持包含在已有连接项的选项传入，自定义项无效）<br/>2. 对于 `select` 和 `apiSelect` 类型，当设置 `props.mode="multiple"` 时，会自动使用多选类型的连接符规则<br/>3. number,select 传入的relOptions 需添加defaultValue,
:::

完整的relOptions:

```js
// ["input"]
[
  { value: "search", label: "包含" },
  { value: "eq", label: "等于" },
  { value: "neq", label: "不等于" },
  { value: "startWith", label: "开头是" },
],
  // ["inputNumber"]
  [
    { value: "scope", label: "范围", defaultValue: [] },
    { value: "eq", label: "等于", defaultValue: undefined },
    { value: "neq", label: "不等于", defaultValue: undefined },
    { value: "gt", label: "大于", defaultValue: undefined },
    { value: "lt", label: "小于", defaultValue: undefined },
    { value: "gte", label: "大于等于", defaultValue: undefined },
    { value: "lte", label: "小于等于", defaultValue: undefined },
  ],
  // ["selectMultiple"]
  [
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
  ],
  // ["date", "dateTime", "time"], 这里需要传入defaultValue
  [
    { value: "scope", label: "范围", defaultValue: [] },
    { value: "eq", label: "等于", defaultValue: undefined },
    { value: "neq", label: "不等于", defaultValue: undefined },
    { value: "gt", label: "早于", defaultValue: undefined },
    { value: "lt", label: "晚于", defaultValue: undefined },
  ],
  // ["select", "apiSelect"]
  [
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
  ],
  //["dateRange", "dateTimeRange", "timeRange"]
  [
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
  ];
```
