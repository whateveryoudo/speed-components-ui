import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'unplugin-dts/vite'
import UnoCSS from '@unocss/vite'
import { rmSync } from 'fs'

// 清理 dist 目录
if (process.env.BUILD_MODE === 'lib') {
  rmSync('dist', { recursive: true, force: true })
}

// https://vitejs.dev/config/
export default defineConfig({
  root: process.env.BUILD_MODE === 'lib' ? '' : 'example',
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.json',
      processor: 'vue',
      copyDtsFiles: true
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@sc': resolve(__dirname, 'src'),
    },
  },
  build: {
    // 根据命令行参数决定是构建库还是示例
    lib: process.env.BUILD_MODE === 'lib' ? {
      entry: {
        components: resolve(__dirname, 'src/components/index.ts'),
        hooks: resolve(__dirname, 'src/hooks/index.ts'),
        resolver: resolve(__dirname, 'src/resolver.ts'),
      },
      name: 'SpeedComponents',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs'],
    } : undefined,
    rollupOptions: {
      external: process.env.BUILD_MODE === 'lib' ? ['vue', 'ant-design-vue'] : [],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'AntDesignVue',
        },
        dir: 'dist',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css'
          return assetInfo.name
        },
      },
    },
  },
  server: {
    port: 3001,
  },
})
