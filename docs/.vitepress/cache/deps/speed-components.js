import {
  require_zh_cn
} from "./chunk-6KMQPRXY.js";
import {
  theme_default
} from "./chunk-LMHF3OV6.js";
import "./chunk-5SOETNNC.js";
import {
  require_customParseFormat
} from "./chunk-TCLP4MPK.js";
import {
  require_dayjs_min
} from "./chunk-KLOCJB4C.js";
import {
  create
} from "./chunk-N5MI7EI6.js";
import {
  computed,
  defineComponent,
  inject,
  ref,
  unref
} from "./chunk-QXP276DV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// src/components/index.ts
import FullModal from "/Users/ykx/work/gitee/speed-components/src/components/FullModal/Index.vue";
import CollapseHz from "/Users/ykx/work/gitee/speed-components/src/components/CollapseHz/index.vue";
import FilePreviewItem from "/Users/ykx/work/gitee/speed-components/src/components/FilePreviewItem/index.vue";

// src/components/IconFont/index.tsx
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
    var _a;
    const config = inject("speed-components-config", ref({
      iconfontUrl: ""
    }));
    let scriptUrls = [(_a = config == null ? void 0 : config.value) == null ? void 0 : _a.iconfontUrl];
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
import KeyMapTip from "/Users/ykx/work/gitee/speed-components/src/components/KeyMapTip/index.vue";
import LazySelect from "/Users/ykx/work/gitee/speed-components/src/components/LazySelect/index.vue";
import SimpleTable from "/Users/ykx/work/gitee/speed-components/src/components/SimpleTable/index.vue";
import RangeNum from "/Users/ykx/work/gitee/speed-components/src/components/RangeNum/index.vue";
import TextMore from "/Users/ykx/work/gitee/speed-components/src/components/TextMore/index.vue";
import TagGroupSelect from "/Users/ykx/work/gitee/speed-components/src/components/TagGroupSelect/index.vue";
import QueryFilter from "/Users/ykx/work/gitee/speed-components/src/components/QueryFilter/index.vue";
import QuestionTip from "/Users/ykx/work/gitee/speed-components/src/components/QuestionTip/index.vue";
import ApiSelect from "/Users/ykx/work/gitee/speed-components/src/components/ApiSelect/index.vue";
import ToggleInput from "/Users/ykx/work/gitee/speed-components/src/components/ToggleInput/index.vue";
import ContentEditor from "/Users/ykx/work/gitee/speed-components/src/components/ContentEditor/index.vue";

// src/utils/index.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
var import_zh_cn = __toESM(require_zh_cn());
import_dayjs.default.extend(import_customParseFormat.default);

// src/hooks/useAntdCssVars.ts
var { defaultAlgorithm, defaultSeed } = theme_default;
var camelToKebab = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
var useAntdCssVars = () => {
  const token = defaultAlgorithm(defaultSeed);
  const generateCssVars = () => {
    const cssVars = [];
    Object.entries(token).forEach(([key, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        const kebabKey = camelToKebab(key);
        cssVars.push(`--ant-${kebabKey}: ${value};`);
      }
    });
    return `:root {
  ${cssVars.join("\n  ")}
}`;
  };
  const style = document.createElement("style");
  style.id = "antd-css-vars";
  style.textContent = generateCssVars();
  document.head.appendChild(style);
  return () => {
    const style2 = document.getElementById("antd-css-vars");
    if (style2) {
      document.head.removeChild(style2);
    }
  };
};

// src/components/index.ts
import { default as default2 } from "/Users/ykx/work/gitee/speed-components/src/components/FullModal/Index.vue";
import { default as default3 } from "/Users/ykx/work/gitee/speed-components/src/components/CollapseHz/index.vue";
import { default as default4 } from "/Users/ykx/work/gitee/speed-components/src/components/FilePreviewItem/index.vue";
import { default as default5 } from "/Users/ykx/work/gitee/speed-components/src/components/KeyMapTip/index.vue";
import { default as default6 } from "/Users/ykx/work/gitee/speed-components/src/components/LazySelect/index.vue";
import { default as default7 } from "/Users/ykx/work/gitee/speed-components/src/components/SimpleTable/index.vue";
import { default as default8 } from "/Users/ykx/work/gitee/speed-components/src/components/RangeNum/index.vue";
import { default as default9 } from "/Users/ykx/work/gitee/speed-components/src/components/TagGroupSelect/index.vue";
import { default as default10 } from "/Users/ykx/work/gitee/speed-components/src/components/QueryFilter/index.vue";
import { default as default11 } from "/Users/ykx/work/gitee/speed-components/src/components/ApiSelect/index.vue";
import { default as default12 } from "/Users/ykx/work/gitee/speed-components/src/components/ToggleInput/index.vue";
import { default as default13 } from "/Users/ykx/work/gitee/speed-components/src/components/ContentEditor/index.vue";
import { default as default14 } from "/Users/ykx/work/gitee/speed-components/src/components/TextMore/index.vue";
import { default as default15 } from "/Users/ykx/work/gitee/speed-components/src/components/QuestionTip/index.vue";
var components = [
  FullModal,
  CollapseHz,
  FilePreviewItem,
  IconFont_default,
  KeyMapTip,
  LazySelect,
  SimpleTable,
  RangeNum,
  TextMore,
  TagGroupSelect,
  QueryFilter,
  ApiSelect,
  ToggleInput,
  ContentEditor,
  QuestionTip
];
var defaultConfig = {
  registerGlobal: true,
  iconfontUrl: import.meta.env.VITE_ICONFONT_URL,
  apis: {}
};
var configRef = ref({ ...defaultConfig });
var currentConfig = computed(() => configRef.value);
var setConfig = (config) => {
  configRef.value = {
    ...configRef.value,
    ...config
  };
};
var install = (app, config) => {
  if (config) {
    setConfig(config);
  }
  if (currentConfig.value.registerGlobal) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  }
  app.provide("speed-components-config", currentConfig);
  const cleanup = useAntdCssVars();
  app.unmount = () => {
    cleanup();
    app.unmount();
  };
};
var components_default = {
  install,
  setConfig,
  version: "0.1.0"
};
export {
  default11 as ApiSelect,
  default3 as CollapseHz,
  default13 as ContentEditor,
  default4 as FilePreviewItem,
  default2 as FullModal,
  IconFont_default as IconFont,
  default5 as KeyMapTip,
  default6 as LazySelect,
  default10 as QueryFilter,
  default15 as QuestionTip,
  default8 as RangeNum,
  default7 as SimpleTable,
  default9 as TagGroupSelect,
  default14 as TextMore,
  default12 as ToggleInput,
  components_default as default,
  setConfig
};
//# sourceMappingURL=speed-components.js.map
