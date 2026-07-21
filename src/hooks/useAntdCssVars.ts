import { theme } from 'ant-design-vue';
import { ref } from 'vue';

const { defaultAlgorithm, darkAlgorithm, defaultSeed } = theme;

export type ThemeConfig = {
  algorithm?: typeof defaultAlgorithm | typeof darkAlgorithm;
  token?: Partial<typeof defaultSeed>;
};

/** 是否包含会改变 :root CSS 变量的有效 theme 配置（空 token / 空对象不视为 override） */
export function hasThemeOverride(config: ThemeConfig = {}): boolean {
  if (config.algorithm) return true;
  const token = config.token;
  return !!token && Object.keys(token).length > 0;
}

/**
 * 将驼峰命名转换为 kebab-case
 * @param str 驼峰命名的字符串
 * @returns kebab-case 格式的字符串
 */
const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

/** 无单位的 number token，注册为 CSS 变量时不追加 px */
const UNITLESS_NUMBER_TOKEN_KEYS =
  /^lineHeight|zIndex|fontWeight|opacity|sizeUnit|sizeStep|motion/i;

/**
 * antd algorithm 输出的 number 多为 px 尺寸；少数为比例/层级等无单位值。
 * 字符串 token（颜色、0.2s 等）原样输出。
 */
export function formatAntdTokenCSSValue(key: string, value: string | number): string {
  if (typeof value === 'string') return value;
  if (UNITLESS_NUMBER_TOKEN_KEYS.test(key)) return String(value);
  return `${value}px`;
}

/**
 * 生成 Ant Design Vue 的 CSS 变量
 * @param themeConfig 主题配置
 * @returns CSS 变量字符串
 */
const generateCssVars = (themeConfig: ThemeConfig) => {
  const cssVars: string[] = [];
  const algorithm = themeConfig.algorithm || defaultAlgorithm;
  
  // 合并默认 token 和自定义 token
  const seed = {
    ...defaultSeed,
    ...themeConfig.token
  };
  // 通过主题算法生成token
  const token = algorithm(seed);
  
  // 遍历 token 对象，生成 CSS 变量
  Object.entries(token).forEach(([key, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      // 将驼峰命名转换为 kebab-case
      const kebabKey = camelToKebab(key);
      cssVars.push(`--ant-${kebabKey}: ${formatAntdTokenCSSValue(key, value)};`);
    }
  });

  return `:root {\n  ${cssVars.join('\n  ')}\n}`;
};

const ANTD_CSS_VARS_STYLE_ID = 'antd-css-vars';

/** 全局 #antd-css-vars 引用计数：多 app（主应用 + 离屏导出）共享同一 style，仅最后一次 cleanup 才移除 */
let antdCssVarsRefCount = 0;
let sharedStyleElement: HTMLStyleElement | null = null;

function getOrCreateStyleElement(): HTMLStyleElement | null {
  if (typeof document === 'undefined') return null;
  if (sharedStyleElement && document.head.contains(sharedStyleElement)) {
    return sharedStyleElement;
  }
  const existing = document.getElementById(ANTD_CSS_VARS_STYLE_ID) as HTMLStyleElement | null;
  if (existing) {
    sharedStyleElement = existing;
    return existing;
  }
  const el = document.createElement('style');
  el.id = ANTD_CSS_VARS_STYLE_ID;
  document.head.appendChild(el);
  sharedStyleElement = el;
  return el;
}

/**
 * 使用 Ant Design Vue 的 CSS 变量
 * @param initialTheme 初始主题配置
 * @returns {Object} 包含主题配置和更新方法的对象
 */
export const useAntdCssVars = (initialTheme: ThemeConfig = {}) => {
  const themeConfig = ref<ThemeConfig>(initialTheme);
  const isBrowser =
    typeof window !== "undefined" && typeof document !== "undefined";
  let released = false;

  // 更新 CSS 变量的函数
  const updateCssVars = (config: ThemeConfig) => {
    if (!isBrowser) return;

    const styleElement = getOrCreateStyleElement();
    if (!styleElement) return;
    styleElement.textContent = generateCssVars(config);
  };

  // 初始化 CSS 变量
  if (isBrowser) {
    antdCssVarsRefCount += 1;
    const styleElement = getOrCreateStyleElement();
    if (!styleElement?.textContent) {
      // 首个安装者或空节点：写入 defaultSeed
      updateCssVars(themeConfig.value);
    } else if (hasThemeOverride(themeConfig.value)) {
      // 已有全局 theme 时，仅显式传入 token/algorithm 才覆盖
      updateCssVars(themeConfig.value);
    }
  } else {
    // ssr 不支持
    return {}
  }

  return {
    // 更新主题
    updateTheme: (config: ThemeConfig) => {
      if (!hasThemeOverride(config)) return;
      themeConfig.value = config;
      updateCssVars(config);
    },
    // 清理：引用计数归零才移除全局 #antd-css-vars
    cleanup: () => {
      if (!isBrowser || released) return;
      released = true;
      antdCssVarsRefCount = Math.max(0, antdCssVarsRefCount - 1);
      if (antdCssVarsRefCount > 0) return;
      if (sharedStyleElement && document.head.contains(sharedStyleElement)) {
        document.head.removeChild(sharedStyleElement);
      }
      sharedStyleElement = null;
    }
  };
}; 
