/*
 * @Author: ykx
 * @Date: 2022-05-30 17:13:19
 * @LastEditTime: 2024-01-22 14:44:32
 * @LastEditors: Anxure
 * @Description:支持iconfont & antd图标组件
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\IconFont\index.tsx
 */

import { type PropType, defineComponent, computed, unref, inject, ref } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'SIconFont',
  props: {
    iconRender: {
      type: Function,
      default: null,
    },
    type: {
      type: String as PropType<string>,
      default: '',
    },
    prefix: {
      type: String,
      default: 'icon-',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 14,
    },
    scriptUrl: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    imgModule: {
      type: String,
      default: null,
    },
    imgStyle: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { attrs, }) {
    const config = inject('speed-components-config', ref({
      iconfontUrl: ''
    }));
    // 这里加入内置的图标
    let scriptUrls = ['//at.alicdn.com/t/c/font_4946230_7d6dp217fih.js', config?.value?.iconfontUrl];
    const wrapStyleObj = computed(() => {
      const { size, color } = props;
      const fontSize = typeof size === 'string' ? parseInt(size) : size;
      return {
        fontSize: fontSize + 'px',
        color,
      };
    });
    if (props.iconRender) {
      return () => {
        return (
          <props.iconRender
            style={{ color: props.color, fontSize: props.size + 'px' }}
          />
        );
      };
    }
    // 实例化组件
    let MyIconfontComponent = createFromIconfontCN({
      scriptUrl: scriptUrls,
    });
    if (props.scriptUrl) {
      //整合外界传入的地址
      scriptUrls = [...new Set(scriptUrls.concat(props.scriptUrl))];
      MyIconfontComponent = createFromIconfontCN({
        scriptUrl: scriptUrls,
      });
    }
    return () => {
      const { type, prefix, imgModule, imgStyle } = props;
      return imgModule ? (
        <img
          style={{ ...unref(imgStyle), ...(attrs.style as any) }}
          src={imgModule}
        />
      ) : (
        <MyIconfontComponent
          type={type.startsWith(prefix) ? type : prefix + type}
          {...attrs}
          style={{ ...unref(wrapStyleObj), ...(attrs.style as any) }}
        />
      );
    };
  },
});
