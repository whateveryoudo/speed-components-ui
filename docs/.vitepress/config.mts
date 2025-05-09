import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { demoPlugin } from './plugins/demo';
import UnoCSS from 'unocss/vite';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  title: 'Speed Components',
  description: '基于 Ant Design Vue 的组件库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
      { text: 'Hooks', link: '/hooks/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'FullModal 全局弹框', link: '/components/full-modal/index' },
          ],
        },
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '格式化', link: '/utils/format' },
            { text: '验证', link: '/utils/validate' },
          ],
        },
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useDebounce', link: '/hooks/useDebounce' },
            { text: 'useThrottle', link: '/hooks/useThrottle' },
          ],
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      debugger;
      const defaultRender = md.render;
      md.render = (src, env) => {
        // 匹配 Demo 组件的内容
        const demoRegex = /<Demo>([\s\S]*?)<\/Demo>/g;
        let match;
        let result = src;

        while ((match = demoRegex.exec(src)) !== null) {
          const demoContent = match[1];
          // 提取 template 和 script 部分
          const templateMatch = demoContent.match(/<template>([\s\S]*?)<\/template>/);
          const scriptMatch = demoContent.match(/<script[^>]*>([\s\S]*?)<\/script>/);

          if (templateMatch && scriptMatch) {
            const template = templateMatch[1].trim();
            const script = scriptMatch[1].trim();
            
            // 构建完整的 Vue 组件代码
            const componentCode = `<template>${template}</template>\n\n<script setup>${script}</script>`;
            
            // 替换 Demo 组件的内容
            result = result.replace(match[0], `<Demo :code="\`${componentCode}\`">${demoContent}</Demo>`);
          }
        }

        return defaultRender.call(md, result, env);
      };
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
        'speed-components': resolve(__dirname, '../../src/components'),
      },
    },
    ssr: {
      noExternal: ['speed-components'],
    },
    optimizeDeps: {
      include: ['speed-components'],
    },
    plugins: [
      UnoCSS(),
    ],
  }
}); 