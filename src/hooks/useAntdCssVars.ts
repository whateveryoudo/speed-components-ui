import { theme } from 'ant-design-vue';
import { ref } from 'vue';

const { defaultAlgorithm, darkAlgorithm, defaultSeed } = theme;

export type ThemeConfig = {
  algorithm?: typeof defaultAlgorithm | typeof darkAlgorithm;
  token?: Partial<typeof defaultSeed>;
};

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

/**
 * 使用 Ant Design Vue 的 CSS 变量
 * @param initialTheme 初始主题配置
 * @returns {Object} 包含主题配置和更新方法的对象
 */
export const useAntdCssVars = (initialTheme: ThemeConfig = {}) => {
  const themeConfig = ref<ThemeConfig>(initialTheme);
  const isBrowser =
    typeof window !== "undefined" && typeof document !== "undefined";
  let styleElement: HTMLStyleElement | null = null;

  // 更新 CSS 变量的函数
  const updateCssVars = (config: ThemeConfig) => {
    if (!isBrowser) return;

    const cssContent = generateCssVars(config);
    
    if (!styleElement) {
      // 首次创建 style 标签
      styleElement = document.createElement('style');
      styleElement.id = 'antd-css-vars';
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = cssContent;
  };

  // 初始化 CSS 变量
  if (isBrowser) {
    styleElement = document.getElementById("antd-css-vars") as HTMLStyleElement | null;
    updateCssVars(themeConfig.value);
  } else {
    // ssr 不支持
    return {}
  }

  return {
    // 更新主题
    updateTheme: (config: ThemeConfig) => {
      themeConfig.value = config;
      updateCssVars(config);
    },
    // 清理函数
    cleanup: () => {
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
        styleElement = null;
      }
    }
  };
}; 