import {
  create
} from "./chunk-N5MI7EI6.js";
import {
  computed,
  defineComponent,
  unref
} from "./chunk-QXP276DV.js";
import "./chunk-G3PMV62Z.js";

// src/components/index.ts
import FullModal from "/Users/ykx/work/gitee/speed-components/src/components/FullModal/Index.vue";
import CollapseHz from "/Users/ykx/work/gitee/speed-components/src/components/CollapseHz/index.vue";
import FilePreviewItem from "/Users/ykx/work/gitee/speed-components/src/components/FilePreviewItem/index.vue";

// src/components/IconFont/index.tsx
var scriptUrls = [import.meta.env.VITE_ICONFONT_URL];
var IconFont_default = defineComponent({
  name: "SIconFont",
  props: {
    iconRender: {
      type: Function,
      default: null
    },
    type: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: "icon-"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: 14
    },
    scriptUrl: {
      type: Array,
      default: () => []
    },
    imgModule: {
      type: String,
      default: null
    },
    imgStyle: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(props, { attrs }) {
    const wrapStyleObj = computed(() => {
      const { size, color } = props;
      const fontSize = typeof size === "string" ? parseInt(size) : size;
      return {
        fontSize: fontSize + "px",
        color
      };
    });
    if (props.iconRender) {
      return () => {
        return React.createElement(
          props.iconRender,
          {
            style: { color: props.color, fontSize: props.size + "px" }
          }
        );
      };
    }
    let MyIconfontComponent = create({
      scriptUrl: scriptUrls
    });
    if (props.scriptUrl) {
      scriptUrls = [...new Set(scriptUrls.concat(props.scriptUrl))];
      MyIconfontComponent = create({
        scriptUrl: scriptUrls
      });
    }
    return () => {
      const { type, prefix, imgModule, imgStyle } = props;
      return imgModule ? React.createElement(
        "img",
        {
          style: { ...unref(imgStyle), ...attrs.style },
          src: imgModule
        }
      ) : React.createElement(
        MyIconfontComponent,
        {
          type: type.startsWith(prefix) ? type : prefix + type,
          ...attrs,
          style: { ...unref(wrapStyleObj), ...attrs.style }
        }
      );
    };
  }
});

// src/components/index.ts
import { default as default2 } from "/Users/ykx/work/gitee/speed-components/src/components/FullModal/Index.vue";
import { default as default3 } from "/Users/ykx/work/gitee/speed-components/src/components/CollapseHz/index.vue";
import { default as default4 } from "/Users/ykx/work/gitee/speed-components/src/components/FilePreviewItem/index.vue";
var components = [FullModal, CollapseHz, FilePreviewItem, IconFont_default];
var install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
var components_default = {
  install
};
export {
  default3 as CollapseHz,
  default4 as FilePreviewItem,
  default2 as FullModal,
  IconFont_default as IconFont,
  components_default as default
};
//# sourceMappingURL=speed-components.js.map
