# 快速开始

本节将介绍如何在项目中使用 Speed Components。

## 安装

使用 npm 或 yarn 安装：

```bash
# npm
npm install speed-components

# yarn
yarn add speed-components
```

## 完整引入

在 main.ts 中引入组件库：

```ts
import { createApp } from 'vue';
import SpeedComponents from 'speed-components';
import 'speed-components/dist/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(SpeedComponents);
app.mount('#app');
```

## 按需引入

使用 Vite 的项目，推荐使用 `unplugin-vue-components` 进行按需引入：

1. 安装插件：

```bash
npm install unplugin-vue-components -D
```

2. 在 vite.config.ts 中配置：

```ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { SpeedComponentsResolver } from 'speed-components/resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [SpeedComponentsResolver()],
    }),
  ],
});
```

3. 在组件中直接使用：

```vue
<template>
  <speed-button type="primary">按钮</speed-button>
</template>
```

## 使用示例

### 基础按钮

```vue
<template>
  <speed-button type="primary">主要按钮</speed-button>
  <speed-button>默认按钮</speed-button>
  <speed-button type="dashed">虚线按钮</speed-button>
</template>
```

### 不同尺寸

```vue
<template>
  <speed-button size="large">大按钮</speed-button>
  <speed-button>中按钮</speed-button>
  <speed-button size="small">小按钮</speed-button>
</template>
```

## 注意事项

1. 确保项目中已安装 Vue 3 和 Ant Design Vue 4
2. 按需引入时，不需要手动引入样式
3. 完整引入时，需要手动引入样式文件
4. 建议使用 TypeScript 以获得更好的开发体验 