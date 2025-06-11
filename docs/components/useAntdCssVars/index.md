# useAntdCssVars

<script setup>

  import ChangeTheme from './ChangeTheme.vue'
</script>

用于生成 Ant Design Vue 的 CSS 变量，支持在 CSS 中使用 Ant Design Vue 的主题变量。

::: tip 提示
1、这里采用手动挂载 style 元素 <br/>
2、ssr不支持
:::

## 功能特点

- 自动生成 Ant Design Vue 的主题变量
- 支持在 CSS 中使用 `--ant-*` 变量
- 不依赖 Vue 生命周期
- 自动清理机制

## 使用方式

```vue
<template>
  <a-config-provider :theme="themeConfig"> // 你的顶层页面 </a-config-provider>
</template>
<script setup lang="ts">
import { useAntdCssVars } from "speed-components-ui/hooks";
import { ref } from "vue";
// 通antd主题配置相同
const themeConfig = ref({
  token: {
    colorPrimary: "red",
  },
});

// 如果你的页面使用了useAntdCssVars
// 可以在应用初始化时传入
const { cleanup, updateTheme } = useAntdCssVars(themeConfig.value);

// 动态修改token示例
setTimeout(() => {
  themeConfig.value.token.colorPrimary = "blue";
  // 这里要用update方法(内部没有监听themeConfig变化)
  updateTheme(themeConfig.value);
}, 1000);
</script>
```

### 示例 
你可以点击下发按钮切换当前文档组件样式

<ChangeTheme/>

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
3. 页面的css使用场景不支持主题层级隔离（如：多层config-provider 实现同一页面不同 主题色）
