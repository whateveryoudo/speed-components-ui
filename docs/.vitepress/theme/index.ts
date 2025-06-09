import { h, type App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
import Demo from './components/Demo.vue';
import SpeedComs from 'speed-components-ui/components'
import '@/assets/style/base.less'
import 'ant-design-vue/dist/reset.css';
import 'uno.css';
import './style.css';
import 'speed-components-ui/dist/style.css';
import { fileDownload, fileUpload, fileDel } from '../api/attachement';
import { ConfigProvider } from 'ant-design-vue';
// import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App}) {
    // 注册所有 Ant Design Vue 组件
    app.use(Antd);
    app.use(SpeedComs, {
      iconfontUrl: "//at.alicdn.com/t/c/font_3871804_pab634p3if.js", // 示例地址
      baseURL: (import.meta as any).env.VITE_APP_BASE_URL,
      apis: {
        fileDownload: fileDownload,
        fileUpload: fileUpload,
        fileDel: fileDel,
        getPreviewUrl: (fileId: string) => {
          // 实际情况替换为实际地址
          return "//localhost:4000/attachment/preview/" + fileId + "?token=speed-test-token";
        }
      },
    });
    // 注册所有图标组件
    for (const [key, component] of Object.entries(Icons)) {
      app.component(key, component);
    }
    app.component('Demo', Demo);
  },
  Layout: () => {
    return h(DefaultTheme.Layout);
    // return h(ConfigProvider, {
    //   locale: zhCN,
    // }, () => h(DefaultTheme.Layout));
  },
}; 