import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { Button } from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
import Demo from './components/Demo.vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Button);
    // 注册所有图标组件
    for (const [key, component] of Object.entries(Icons)) {
      app.component(key, component);
    }
    app.component('Demo', Demo);
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义布局
    });
  },
}; 