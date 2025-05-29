import type { IFetchOptions } from "../ApiSelect/index.vue";
import type { DefaultOptionType } from "ant-design-vue/lib/select";
export type IPropType = {
  placeholder?: string | string[];
  options?: DefaultOptionType[];
  searchWhenChange?: boolean;
  fetchFunc?: Function;
  fieldNames?: { label: string; value: string };
  fetchOptions?: IFetchOptions;
  itemWidth?: number;
  showSearch?: boolean;
  transform2Params?: string[]; // 值转换
  valueFormat?: string; // 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。默认 YYYY-MM-DD
  mode?: 'multiple'; // select 的模式
  whenChangeTrigger?: 'input'; // 触发方式
  hasSearchIcon?: boolean; // 是否显示搜索图标
};
export type IFieldType = {
  label: string;
  fieldKey: string;
  fieldRel?: string;
  props?: IPropType;
  fieldType:
    | "input"
    | "time"
    | "inputNumber"
    | "select"
    | "apiSelect"
    | "dateRange"
    | "dateTimeRange"
    | "date"
    | "dateTime";
};
