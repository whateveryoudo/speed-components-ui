import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import UnoCSS from '@unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'example',
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // 根据命令行参数决定是构建库还是示例
    lib: process.env.BUILD_MODE === 'lib' ? {
      entry: {
        components: resolve(__dirname, 'src/components/index.ts'),
        hooks: resolve(__dirname, 'src/hooks/index.ts'),
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
    port: 3000,
  },
})
