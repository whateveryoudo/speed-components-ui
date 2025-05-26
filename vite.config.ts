import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SpeedComponents',
      fileName: (format) => `index.${format}.js`,
    } : undefined,
    rollupOptions: {
      external: process.env.BUILD_MODE === 'lib' ? ['vue', 'ant-design-vue'] : [],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'AntDesignVue',
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})
