# useAntdCssVars

用于生成 Ant Design Vue 的 CSS 变量，支持在 CSS 中使用 Ant Design Vue 的主题变量。

::: tip 提示
React 版本支持`theme` 属性设置为 `{ cssVar: true }`，Vue 这里采用手动挂载 style 元素
:::

## 功能特点

- 自动生成 Ant Design Vue 的主题变量
- 支持在 CSS 中使用 `--ant-*` 变量
- 不依赖 Vue 生命周期
- 自动清理机制

## 使用方式

```ts
import { useAntdCssVars } from 'speed-components';

// 在应用初始化时调用
const cleanup = useAntdCssVars();

// 在应用卸载时清理
cleanup();
```

## 生成的 CSS 变量

```css
:root {
  --ant-primary-color: #1890ff;
  --ant-primary-color-hover: #40a9ff;
  --ant-primary-color-active: #096dd9;
  --ant-primary-color-outline: rgba(24, 144, 255, 0.2);
  /* ... 其他变量 */
}
```

## 在 CSS 中使用

```css
.my-component {
  color: var(--ant-primary-color);
  background-color: var(--ant-primary-color-hover);
}
```

## 注意事项

1. 该 hook 使用 Ant Design Vue 的默认主题
2. 变量名会自动转换为 kebab-case 格式
3. 建议在应用初始化时调用一次即可
4. 记得在应用卸载时调用清理函数 