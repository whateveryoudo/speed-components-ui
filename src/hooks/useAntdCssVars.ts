import { theme } from 'ant-design-vue';

const { defaultAlgorithm, defaultSeed } = theme;

/**
 * 将驼峰命名转换为 kebab-case
 * @param str 驼峰命名的字符串
 * @returns kebab-case 格式的字符串
 */
const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * 生成 Ant Design Vue 的 CSS 变量
 * @returns {void}
 */
export const useAntdCssVars = () => {
  // 使用 defaultAlgorithm 和 defaultSeed 获取 token
  const token = defaultAlgorithm(defaultSeed);

  // 生成 CSS 变量内容
  const generateCssVars = () => {
    const cssVars: string[] = [];
    
    // 遍历 token 对象，生成 CSS 变量
    Object.entries(token).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
        // 将驼峰命名转换为 kebab-case
        const kebabKey = camelToKebab(key);
        cssVars.push(`--ant-${kebabKey}: ${value};`);
      }
    });

    return `:root {\n  ${cssVars.join('\n  ')}\n}`;
  };
  debugger;
  // 创建并插入 style 标签
  const style = document.createElement('style');
  style.id = 'antd-css-vars';
  style.textContent = generateCssVars();
  document.head.appendChild(style);

  // 返回清理函数
  return () => {
    const style = document.getElementById('antd-css-vars');
    if (style) {
      document.head.removeChild(style);
    }
  };
}; 