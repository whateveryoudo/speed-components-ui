// htmlType类型对应连接条件
const htmlTypeRelMap = new Map();
const strMapKeys = ["input"];
const numberMapKeys = ["inputNumber"];
const enumMultiMapKeys = ["selectMultiple"];
const enumSingleMapKeys = ["select", "apiSelect"];
const dateMapKeys = ["date", "dateTime", "time"];
const dateRangeMapKeys = ["dateRange", "dateTimeRange", "timeRange"];
const fullFieldTypes = [
  ...new Set([
    ...strMapKeys,
    ...numberMapKeys,
    ...enumMultiMapKeys,
    ...enumSingleMapKeys,
    ...dateMapKeys,
    ...dateRangeMapKeys,
  ]),
];
// 类型配置隐射
export const fieldTypeMap = {
  input: {
    defaultValue: "",
    props: {},
  },
  inputNumber: {
    defaultValue: [],
    props: {},
  },
  select: {
    defaultValue: undefined,
    props: {},
  },
  selectMultiple: {
    defaultValue: [],
    props: {},
  },
  date: {
    defaultValue: undefined,
    props: {
      valueFormat: "YYYY-MM-DD",
    },
  },
  dateTime: {
    defaultValue: undefined,
    props: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
    },
  },
  time: {
    defaultValue: undefined,
    props: {
      valueFormat: "HH:mm:ss",
    },
  },
  dateRange: {
    defaultValue: [],
    props: {},
  },
  dateTimeRange: {
    defaultValue: [],
    props: {},
  },
  timeRange: {
    defaultValue: [],
    props: {},
  },
};

export { htmlTypeRelMap };
// filterCom  用于显示条件过滤的组件类型
htmlTypeRelMap.set(strMapKeys, {
  relOptions: [
    { value: "search", label: "包含" },
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
    { value: "startWith", label: "开头是" },
  ],
  defaultRel: "search",
  defaultValue: "",
});
htmlTypeRelMap.set(numberMapKeys, {
  relOptions: [
    { value: "scope", label: "范围", defaultValue: [] },
    { value: "eq", label: "等于", defaultValue: undefined },
    { value: "neq", label: "不等于", defaultValue: undefined },
    { value: "gt", label: "大于", defaultValue: undefined },
    { value: "lt", label: "小于", defaultValue: undefined },
    { value: "gte", label: "大于等于", defaultValue: undefined },
    { value: "lte", label: "小于等于", defaultValue: undefined },
  ],
  defaultRel: "scope",
  defaultValue: [],
});
htmlTypeRelMap.set(dateRangeMapKeys, {
  relOptions: [
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
  ],
  defaultRel: "eq",
  defaultValue: [],
});

htmlTypeRelMap.set(dateMapKeys, {
  relOptions: [
    { value: "scope", label: "范围", defaultValue: [] },
    { value: "eq", label: "等于", defaultValue: undefined },
    { value: "neq", label: "不等于", defaultValue: undefined },
    { value: "gt", label: "早于", defaultValue: undefined },
    { value: "lt", label: "晚于", defaultValue: undefined },
  ],
  defaultRel: "scope",
  defaultValue: [],
});
htmlTypeRelMap.set(enumSingleMapKeys, {
  relOptions: [
    { value: "eq", label: "等于" },
    { value: "neq", label: "不等于" },
  ],
  defaultRel: "eq",
  filterCom: "select",
  defaultValue: undefined,
});
htmlTypeRelMap.set(enumMultiMapKeys, {
  relOptions: [
    { value: "in", label: "等于任意一个" },
    { value: "nin", label: "不等于任意一个" },
  ],
  defaultRel: "in",
  filterCom: "selectMultiple",
  defaultValue: [],
});

export const constructQueryFilterByColumns = (columns: any) => {
  return columns.map((item: any) => {
    if (item.queryConfig) {
      if (typeof item.queryConfig === "string") {
        if (!fullFieldTypes.includes(item.queryConfig)) {
          throw new Error(`fieldType: ${item.queryConfig} 不支持`);
        } else {
          return {
            label: item.title,
            fieldKey: item.dataIndex,
            fieldType: item.queryConfig,
            props: fieldTypeMap[item.queryConfig]?.props ?? {},
          };
        }
      } else {
        return item.queryConfig;
      }
    }
    return null;
  }).filter((item: any) => !!item);
};
