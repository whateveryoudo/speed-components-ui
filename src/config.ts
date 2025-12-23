import { computed, ref } from "vue";
import type { ThemeConfig } from "./hooks/useAntdCssVars";
import type { RequestResponse } from "./global";

// AJAX 方法类型
type AjaxMethod = (params?: any) => Promise<any>;

export interface GlobalConfig {
  iconfontUrl?: string[];
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

export const defaultConfig: GlobalConfig = {
  registerGlobal: true,
  iconfontUrl: [import.meta.env.VITE_ICONFONT_URL],
  apis: {},
  useLoadConfig: {
    pageKey: "page",
    pageSizekey: "size",
  },
};

// 使用 ref 创建响应式配置
export const configRef = ref<GlobalConfig>({ ...defaultConfig });

// 使用 computed 包装配置，确保响应式
export const currentConfig = computed(() => configRef.value);

// 设置全局配置
export const setConfig = (config: Partial<GlobalConfig>) => {
  configRef.value = {
    ...configRef.value,
    ...config,
    // 整合iconfontUrl传入
    iconfontUrl: [
      ...(configRef.value.iconfontUrl || []),
      ...(config.iconfontUrl || []),
    ],
  };
  return configRef.value;
};

