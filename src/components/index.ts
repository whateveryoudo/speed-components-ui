/*
 * @Author: ykx
 * @Date: 2023-02-06 18:06:47
 * @LastEditTime: 2024-03-19 11:39:25
 * @LastEditors: Anxure
 * @Description:
 */
import type { App, Component } from "vue";
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
import CustomUpload from "./CustomUpload/index.vue";
import CustomTag from "./CustomTag/index.vue";
import ColorPicker from "./ColorPicker/index.vue";
import { hasThemeOverride, useAntdCssVars, type ThemeConfig } from "../hooks/useAntdCssVars";
import { vFocus, vCopy, vView, vSelect, vLinkTransform } from "../directives";
import {
  currentConfig,
  setConfig,
  type GlobalConfig,
} from "../config";
import { SPEED_COMPONENTS_CONFIG_TOKEN } from "../tokens";
// 导入 UnoCSS 样式
import "uno.css";
import "vue-color/style.css";
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
  QuestionTip,
  CustomTag,
  CustomUpload,
  ColorPicker,
];

export const SPEED_COMPONENTS_THEME_KEY = '__speed_components_theme_instance__';

/** 是否已在当前 app 上完成 SpeedComponents 安装（用于子包避免重复 app.use 触发 Vue 警告） */
export function isSpeedComponentsInstalled(app: App): boolean {
  return !!app.config.globalProperties[SPEED_COMPONENTS_THEME_KEY];
}

// 更新主题方法(需要传入app实例)
export const updateTheme = (app: App, config: ThemeConfig) => {
  const themeInstance: ReturnType<typeof useAntdCssVars> | null =
    app.config.globalProperties[SPEED_COMPONENTS_THEME_KEY];
  if (themeInstance?.updateTheme) {
    themeInstance.updateTheme(config);
  }
};
const directives = [
  ["focus", vFocus],
  ["copy", vCopy],
  ["view", vView],
  ["select", vSelect],
  ["link-transform", vLinkTransform],
];
const install = (app: App, config?: Partial<GlobalConfig>) => {
  if (config) {
    setConfig(config);
  }

  // 注册组件
  if (currentConfig.value.registerGlobal) {
    components.forEach((component) => {
      const name = component.name as string;
      // 已经注册过就跳过，避免重复注册警告
      if (!app.component(name)) {
        app.component(name, component as any);
      }
    });
  }
  // 注入响应式配置
  app.provide(SPEED_COMPONENTS_CONFIG_TOKEN, currentConfig);

  // 使用 Ant Design Vue CSS 变量
  if (!app.config.globalProperties[SPEED_COMPONENTS_THEME_KEY]) {
    app.config.globalProperties[SPEED_COMPONENTS_THEME_KEY] = useAntdCssVars(config?.themeConfig)
  }
  // 注册一些指令
  directives.forEach(([name, dir]: any) => {
    if (!app.directive(name)) {
      app.directive(name, dir);
    }
  });
  // 卸载时 cleanup（内部有引用计数，不会误删其它 app 仍在用的 #antd-css-vars）
  const originalUnmount = app.unmount.bind(app);
  app.unmount = () => {
    app.config.globalProperties[SPEED_COMPONENTS_THEME_KEY]?.cleanup?.();
    originalUnmount();
  };
};

const SpeedComponentsPlugin = {
  install,
  setConfig,
  updateTheme,
  version: "0.1.16",
};

/**
 * 宿主或子包均可调用：未安装则 app.use；已安装则仅 setConfig（避免 Plugin has already been applied）。
 */
export function ensureSpeedComponents(app: App, config?: Partial<GlobalConfig>): void {
  if (isSpeedComponentsInstalled(app)) {
    if (config) {
      setConfig(config);
      if (config.themeConfig && hasThemeOverride(config.themeConfig)) {
        updateTheme(app, config.themeConfig);
      }
    }
    return;
  }
  app.use(SpeedComponentsPlugin, config);
}

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
export { default as TextMore } from "./TextMore/index.vue";
export { default as QuestionTip } from "./QuestionTip/index.vue";
export { default as CustomUpload } from "./CustomUpload/index.vue";
export { default as STag } from "./CustomTag/index.vue";
export { default as ColorPicker } from "./ColorPicker/index.vue";
export { setConfig } from "../config";
export type { GlobalConfig } from "../config";
export { SPEED_COMPONENTS_CONFIG_TOKEN } from "../tokens";

export default SpeedComponentsPlugin;
