import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

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
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'FullModal 全局弹框', link: '/components/full-modal' },
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
  }
  
}); 