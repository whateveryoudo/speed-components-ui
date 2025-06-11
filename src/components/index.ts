/*
 * @Author: ykx
 * @Date: 2023-02-06 18:06:47
 * @LastEditTime: 2024-03-19 11:39:25
 * @LastEditors: Anxure
 * @Description:
 */
import type { App, Component } from "vue";
import { computed, ref } from "vue";
import FullModal from "./FullModal/index.vue";
import CollapseHz from "./CollapseHz/index.vue";
import FilePreviewItem from "./FilePreviewItem/index.vue";
import IconFont from "./IconFont/index";
import KeyMapTip from "./KeyMapTip/index.vue";
import LazySelect from "./LazySelect/index.vue";
import SimpleTable from "./SimpleTable/index.vue";
import RangeNum from "./RangeNum/index.vue";
import TextMore from "./TextMore/index.vue";
import TagGroupSelect from "./TagGroupSelect/index.vue";
import QueryFilter from "./QueryFilter/index.vue";
import QuestionTip from "./QuestionTip/index.vue";
import ApiSelect from "./ApiSelect/index.vue";
import ToggleInput from "./ToggleInput/index.vue";
import ContentEditor from "./ContentEditor/index.vue";
import CustomUpload from './CustomUpload/index.vue'
import { useAntdCssVars, type ThemeConfig } from "../hooks/useAntdCssVars";
import { vFocus, vCopy, vView, vSelect, vLinkTransform } from "../directives";
import type { RequestResponse } from "..";
// 组件列表
const components: Component[] = [
  FullModal,
  CollapseHz,
  FilePreviewItem,
  IconFont,
  KeyMapTip,
  LazySelect,
  SimpleTable,
  RangeNum,
  TextMore,
  TagGroupSelect,
  QueryFilter,
  ApiSelect,
  ToggleInput,
  ContentEditor,
  QuestionTip,
  CustomUpload,
];

// AJAX 方法类型
type AjaxMethod = (params?: any) => Promise<any>;

// 全局配置类型
export interface GlobalConfig {
  iconfontUrl?: string;
  themeConfig?: ThemeConfig;
  registerGlobal?: boolean; // 是否注册为全局组件
  apis?: {
    [key: string]: AjaxMethod;
  };
  // 全局转换请求响应（框架接收响应范式为：RequestResponse，可自行转换,能和后端协商最好）
  transformRequsRes?: (res: any) => RequestResponse<any>;
  // 使用useTable, useLoadMore的 一些配置
  useLoadConfig: {
    pageKey: string; // 全局page参数名，默认 page
    pageSizekey: string; // 全局pageSize参数名 默认  pageSize
  };
}

// 默认配置
const defaultConfig: GlobalConfig = {
  registerGlobal: true,
  iconfontUrl: import.meta.env.VITE_ICONFONT_URL,
  apis: {},
  useLoadConfig: {
    pageKey: "page",
    pageSizekey: "size",
  },
};

// 使用 ref 创建响应式配置
const configRef = ref<GlobalConfig>({ ...defaultConfig });

// 使用 computed 包装配置，确保响应式
const currentConfig = computed(() => configRef.value);

// 设置全局配置
export const setConfig = (config: Partial<GlobalConfig>) => {
  configRef.value = {
    ...configRef.value,
    ...config,
  };
};

// 主题相关
let themeInstance: ReturnType<typeof useAntdCssVars> | null = null;

// 更新主题方法
export const updateTheme = (config: ThemeConfig) => {
  if (themeInstance) {
    themeInstance.updateTheme(config);
  }
};

const install = (app: App, config?: Partial<GlobalConfig>) => {
  // 合并配置
  if (config) {
    setConfig(config);
  }

  // 注册组件
  if (currentConfig.value.registerGlobal) {
    components.forEach((component) => {
      app.component(component.name as string, component as any);
    });
  }
  // 注入响应式配置
  app.provide("speed-components-config", currentConfig);

  // 使用 Ant Design Vue CSS 变量
  themeInstance = useAntdCssVars(config?.themeConfig);
  // 注册一些指令
  app.directive("focus", vFocus);
  app.directive("copy", vCopy);
  app.directive("view", vView);
  app.directive("select", vSelect);
  app.directive("link-transform", vLinkTransform);
  // 在应用卸载时清理
  app.unmount = () => {
    themeInstance?.cleanup();
    app.unmount();
  };
};

export { default as FullModal } from "./FullModal/index.vue";
export { default as CollapseHz } from "./CollapseHz/index.vue";
export { default as FilePreviewItem } from "./FilePreviewItem/index.vue";
export { default as IconFont } from "./IconFont/index";
export { default as KeyMapTip } from "./KeyMapTip/index.vue";
export { default as LazySelect } from "./LazySelect/index.vue";
export { default as SimpleTable } from "./SimpleTable/index.vue";
export { default as RangeNum } from "./RangeNum/index.vue";
export { default as TagGroupSelect } from "./TagGroupSelect/index.vue";
export { default as QueryFilter } from "./QueryFilter/index.vue";
export { default as ApiSelect } from "./ApiSelect/index.vue";
export { default as ToggleInput } from "./ToggleInput/index.vue";
export { default as ContentEditor } from "./ContentEditor/index.vue";
export { default as TextMore } from "./TextMore/index.vue";
export { default as QuestionTip } from "./QuestionTip/index.vue";
export { default as CustomUpload } from './CustomUpload/index.vue'

export default {
  install,
  setConfig,
  updateTheme,
  version: "0.1.0",
};
