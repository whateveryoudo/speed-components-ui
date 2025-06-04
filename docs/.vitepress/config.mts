import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import UnoCSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// 环境变量配置
const VITE_APP_BASE_URL = process.env.VITE_APP_BASE_URL || '/api';
const VITE_APP_BASE_PROXY_URL = process.env.VITE_APP_BASE_PROXY_URL || 'http://localhost:4000';

// 根据环境判断 base 路径
const base = process.env.NODE_ENV === 'production' ? '/speed-components-ui/' : '/';

export default defineConfig({
  title: 'Speed Components',
  description: '基于 Ant Design Vue 的组件库',
  base,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件/hooks', link: '/components/' },
      // { text: '工具', link: '/utils/' },
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
          text: '反馈',
          items: [
            { text: 'FullModal 全局弹框', link: '/components/full-modal/index' },
          ],
        },
        {
          text: '数据显示',
          items: [
            { text: 'SimpleTable 简单表格', link: '/components/simple-table/index' },
            { text: 'FilePreviewItem 文件预览', link: '/components/file-preview-item/index' },
          ],
        },
        {
          text: '易用',
          items: [
            { text: 'CollapseHz 水平展开收起', link: '/components/collapse-hz/index' },
            { text: 'IconFont 图标', link: '/components/icon-font/index' },
            { text: 'KeyMapTip 快捷键提示', link: '/components/key-map-tip/index' },
            { text: 'TextMore 文本展开收起', link: '/components/text-more/index' },
            { text: 'QuestionTip 说明提示', link: '/components/question-tip/index' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: 'CustomUpload 自定义上传控件', link: '/components/custom-upload/index' },
            { text: 'RangeNum 范围数字', link: '/components/range-num/index' },
            { text: 'TagGroupSelect 标签组选择', link: '/components/tag-group-select/index' },
            { text: 'QueryFilter 查询过滤器', link: '/components/query-filter/index' },
            { text: 'LazySelect 懒加载选择器', link: '/components/lazy-select/index' },
            { text: 'ApiSelect 支持请求的搜索选择器', link: '/components/api-select/index' },
            { text: 'ToggleInput 切换输入', link: '/components/toggle-input/index' },
            { text: 'ContentEditor 内容编辑器', link: '/components/content-editor/index' },
          ],
        },
        {
          text: '一些常用hooks',
          items: [
            { text: 'useCustomUpload 自定义上传', link: '/components/useCustomUpload/index' },
            { text: 'useTable 表格通用 Hook', link: '/components/useTable/index' },
            // { text: 'useLoadMore 加载更多 Hook', link: '/components/useLoadMore/index' },
            { text: 'useAntdCssVars 使用antd css变量', link: '/components/useAntdCssVars/index' },
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
        '@docs': resolve(__dirname, '../'),
      },
    },
    server: {
      proxy: {
        [VITE_APP_BASE_URL]: {
          target: VITE_APP_BASE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${VITE_APP_BASE_URL}`), ''),
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              proxyReq.setHeader('Connection', 'keep-alive');
            });
          },
          timeout: 30000
        }
      }
    },
    ssr: {
      noExternal: [
        'speed-components',
        'ant-design-vue',
        '@ant-design/icons-vue'
      ],
      external: [
        'speed-components/hooks/useAntdCssVars'
      ]
    },
    optimizeDeps: {
      include: [
        'speed-components',
        'ant-design-vue',
        '@ant-design/icons-vue'
      ]
    },
    plugins: [
      UnoCSS(),
      vueJsx(),
    ],
  }
}); 