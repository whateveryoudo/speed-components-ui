/*
 * @Author: ykx
 * @Date: 2022-05-30 17:13:19
 * @LastEditTime: 2024-01-22 14:44:32
 * @LastEditors: Anxure
 * @Description:支持iconfont & antd图标组件
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\IconFont\index.tsx
 */

import {
  type PropType,
  type Ref,
  defineComponent,
  computed,
  unref,
  inject,
} from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { SPEED_COMPONENTS_CONFIG_TOKEN } from "../../tokens";
import { currentConfig, type GlobalConfig } from "../../config";
export default defineComponent({
  name: "SIconFont",
  props: {
    iconRender: {
      type: Function,
      default: null,
    },
    // 雪碧图模式
    svgSprite: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<string>,
      default: "",
    },
    prefix: {
      type: String,
      default: "icon-",
    },
    color: {
      type: String,
      default: "",
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
      default: () => { },
    },
  },
  setup(props, { attrs }) {
    const config = inject<Ref<GlobalConfig>>(
      SPEED_COMPONENTS_CONFIG_TOKEN,
      currentConfig as Ref<GlobalConfig>
    );
    // console.log(config.value);
    const mergedIconfonts = (
      Array.isArray(config?.value?.iconfontUrl)
        ? config?.value?.iconfontUrl
        : [config?.value?.iconfontUrl]
    ).filter((i): i is string => typeof i === "string");
    // 这里加入内置的图标(兼容数组注入)
    let scriptUrls: string[] = [
      "//at.alicdn.com/t/c/font_4946230_7d6dp217fih.js",
      ...mergedIconfonts,
    ];
    console.log(scriptUrls);
    const wrapStyleObj = computed(() => {
      const { size, color } = props;
      const fontSize = typeof size === "string" ? parseInt(size) : size;
      return {
        fontSize: fontSize + "px",
        color,
      };
    });
    if (props.iconRender) {
      return () => {
        return (
          <props.iconRender
            style={{ color: props.color, fontSize: props.size + "px" }}
          />
        );
      };
    }
    // 兼容svg图标
    if (props.svgSprite) {
      return () => {
        return (
          <svg aria-hidden="true" style={{ color: props.color, fontSize: props.size + "px" }} {...attrs}>
            <use xlinkHref={`#${props.type}`} />
          </svg>
        );
      };
    }
    // 实例化组件
    let MyIconfontComponent = createFromIconfontCN({
      scriptUrl: scriptUrls,
    });
    if (props.scriptUrl?.length) {
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
