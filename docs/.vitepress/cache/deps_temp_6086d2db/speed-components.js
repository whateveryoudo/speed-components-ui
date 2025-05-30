import {
  message_default,
  require_customParseFormat,
  require_dayjs_min,
  theme_default
} from "./chunk-GE7CWYKD.js";
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
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/locale/zh-cn.js
var require_zh_cn = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/locale/zh-cn.js"(exports, module) {
    !function(e, _) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t = _(e), d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
        return "W" === _2 ? e2 + "周" : e2 + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
      } };
      return t.default.locale(d, null, true), d;
    });
  }
});

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

// src/utils/base.ts
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

// src/directives/vFocus.ts
var vFocus = {
  mounted(el) {
    var _a;
    if ((el == null ? void 0 : el.tagName) !== "INPUT") {
      (_a = el == null ? void 0 : el.querySelector("input")) == null ? void 0 : _a.focus();
      return;
    }
    el == null ? void 0 : el.focus();
  }
};

// src/directives/vCopy.ts
var vCopy = {
  mounted(el, binding) {
    if (el) {
      el.addEventListener("click", () => {
        const text2 = binding.arg || binding.value || el.innerText || "";
        console.log(text2);
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text2);
          message_default.success("复制成功");
        } else {
          const textarea = document.createElement("textarea");
          document.body.appendChild(textarea);
          textarea.style.position = "fixed";
          textarea.style.width = "0";
          textarea.style.height = "0";
          textarea.style.top = "10px";
          textarea.value = text2;
          textarea.select();
          document.execCommand("copy", true);
          message_default.success("复制成功");
          document.body.removeChild(textarea);
        }
      });
    }
  }
};

// src/directives/vView.ts
import "/Users/ykx/work/gitee/speed-components/node_modules/.pnpm/viewerjs@1.11.7/node_modules/viewerjs/dist/viewer.css";

// node_modules/.pnpm/viewerjs@1.11.7/node_modules/viewerjs/dist/viewer.esm.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var DEFAULTS = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: true,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: true,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: true,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: true,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: true,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: true,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: false,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: true,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: true,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: true,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: true,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: true,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: true,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: true,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: true,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: true,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: true,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: true,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: true,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: true,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: true,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
};
var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
var NAMESPACE = "viewer";
var ACTION_MOVE = "move";
var ACTION_SWITCH = "switch";
var ACTION_ZOOM = "zoom";
var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
var CLASS_FADE = "".concat(NAMESPACE, "-fade");
var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
var CLASS_IN = "".concat(NAMESPACE, "-in");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");
var CLASS_OPEN = "".concat(NAMESPACE, "-open");
var CLASS_SHOW = "".concat(NAMESPACE, "-show");
var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");
var EVENT_CLICK = "click";
var EVENT_DBLCLICK = "dblclick";
var EVENT_DRAG_START = "dragstart";
var EVENT_FOCUSIN = "focusin";
var EVENT_KEY_DOWN = "keydown";
var EVENT_LOAD = "load";
var EVENT_ERROR = "error";
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
var EVENT_RESIZE = "resize";
var EVENT_TRANSITION_END = "transitionend";
var EVENT_WHEEL = "wheel";
var EVENT_READY = "ready";
var EVENT_SHOW = "show";
var EVENT_SHOWN = "shown";
var EVENT_HIDE = "hide";
var EVENT_HIDDEN = "hidden";
var EVENT_VIEW = "view";
var EVENT_VIEWED = "viewed";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_ROTATE = "rotate";
var EVENT_ROTATED = "rotated";
var EVENT_SCALE = "scale";
var EVENT_SCALED = "scaled";
var EVENT_ZOOM = "zoom";
var EVENT_ZOOMED = "zoomed";
var EVENT_PLAY = "play";
var EVENT_STOP = "stop";
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var REGEXP_SPACES = /\s\s*/;
var BUTTONS = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function isString(value) {
  return typeof value === "string";
}
var isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
  } catch (error) {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)) {
      var length = data.length;
      var i;
      for (i = 0; i < length; i += 1) {
        if (callback.call(data, data[i], i, data) === false) {
          break;
        }
      }
    } else if (isObject(data)) {
      Object.keys(data).forEach(function(key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}
var assign = Object.assign || function assign2(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(obj) && args.length > 0) {
    args.forEach(function(arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function(key) {
          obj[key] = arg[key];
        });
      }
    });
  }
  return obj;
};
var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function(value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += "px";
    }
    style[property] = value;
  });
}
function escapeHTMLEntities(value) {
  return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : value;
}
function hasClass(element, value) {
  if (!element || !value) {
    return false;
  }
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
function addClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
function removeClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, "");
  }
}
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      toggleClass(elem, value, added);
    });
    return;
  }
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
function hyphenate(value) {
  return value.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
}
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(hyphenate(name)));
}
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(hyphenate(name)), data);
  }
}
var onceSupported = function() {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener2() {
    };
    var options = Object.defineProperty({}, "once", {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener("test", listener, options);
    WINDOW.removeEventListener("test", listener, options);
  }
  return supported;
}();
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}
function dispatchEvent(element, type, data, options) {
  var event;
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, _objectSpread2({
      bubbles: true,
      cancelable: true,
      detail: data
    }, options));
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function getTransforms(_ref) {
  var rotate2 = _ref.rotate, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }
  if (isNumber(rotate2) && rotate2 !== 0) {
    values.push("rotate(".concat(rotate2, "deg)"));
  }
  if (isNumber(scaleX2) && scaleX2 !== 1) {
    values.push("scaleX(".concat(scaleX2, ")"));
  }
  if (isNumber(scaleY2) && scaleY2 !== 1) {
    values.push("scaleY(".concat(scaleY2, ")"));
  }
  var transform = values.length ? values.join(" ") : "none";
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform
  };
}
function getImageNameFromURL(url) {
  return isString(url) ? decodeURIComponent(url.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);
function getImageNaturalSizes(image, options, callback) {
  var newImage = document.createElement("img");
  if (image.naturalWidth && !IS_SAFARI) {
    callback(image.naturalWidth, image.naturalHeight);
    return newImage;
  }
  var body = document.body || document.documentElement;
  newImage.onload = function() {
    callback(newImage.width, newImage.height);
    if (!IS_SAFARI) {
      body.removeChild(newImage);
    }
  };
  forEach(options.inheritedAttributes, function(name) {
    var value = image.getAttribute(name);
    if (value !== null) {
      newImage.setAttribute(name, value);
    }
  });
  newImage.src = image.src;
  if (!IS_SAFARI) {
    newImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
    body.appendChild(newImage);
  }
  return newImage;
}
function getResponsiveClass(type) {
  switch (type) {
    case 2:
      return CLASS_HIDE_XS_DOWN;
    case 3:
      return CLASS_HIDE_SM_DOWN;
    case 4:
      return CLASS_HIDE_MD_DOWN;
    default:
      return "";
  }
}
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var ratios = [];
  forEach(pointers, function(pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function(pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      ratios.push(ratio);
    });
  });
  ratios.sort(function(a, b) {
    return Math.abs(a) < Math.abs(b);
  });
  return ratios[0];
}
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX, pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    timeStamp: Date.now(),
    startX: pageX,
    startY: pageY
  }, end);
}
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function(_ref3) {
    var startX = _ref3.startX, startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX,
    pageY
  };
}
var render = {
  render: function render2() {
    this.initContainer();
    this.initViewer();
    this.initList();
    this.renderViewer();
  },
  initBody: function initBody() {
    var ownerDocument = this.element.ownerDocument;
    var body = ownerDocument.body || ownerDocument.documentElement;
    this.body = body;
    this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
    this.initialBodyPaddingRight = body.style.paddingRight;
    this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
  },
  initContainer: function initContainer() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function initViewer() {
    var options = this.options, parent = this.parent;
    var viewerData;
    if (options.inline) {
      viewerData = {
        width: Math.max(parent.offsetWidth, options.minWidth),
        height: Math.max(parent.offsetHeight, options.minHeight)
      };
      this.parentData = viewerData;
    }
    if (this.fulled || !viewerData) {
      viewerData = this.containerData;
    }
    this.viewerData = assign({}, viewerData);
  },
  renderViewer: function renderViewer() {
    if (this.options.inline && !this.fulled) {
      setStyle(this.viewer, this.viewerData);
    }
  },
  initList: function initList() {
    var _this = this;
    var element = this.element, options = this.options, list = this.list;
    var items = [];
    list.innerHTML = "";
    forEach(this.images, function(image, index) {
      var src = image.src;
      var alt = image.alt || getImageNameFromURL(src);
      var url = _this.getImageURL(image);
      if (src || url) {
        var item = document.createElement("li");
        var img = document.createElement("img");
        forEach(options.inheritedAttributes, function(name) {
          var value = image.getAttribute(name);
          if (value !== null) {
            img.setAttribute(name, value);
          }
        });
        if (options.navbar) {
          img.src = src || url;
        }
        img.alt = alt;
        img.setAttribute("data-original-url", url || src);
        item.setAttribute("data-index", index);
        item.setAttribute("data-viewer-action", "view");
        item.setAttribute("role", "button");
        if (options.keyboard) {
          item.setAttribute("tabindex", 0);
        }
        item.appendChild(img);
        list.appendChild(item);
        items.push(item);
      }
    });
    this.items = items;
    forEach(items, function(item) {
      var image = item.firstElementChild;
      var onLoad;
      var onError;
      setData(image, "filled", true);
      if (options.loading) {
        addClass(item, CLASS_LOADING);
      }
      addListener(image, EVENT_LOAD, onLoad = function onLoad2(event) {
        removeListener(image, EVENT_ERROR, onError);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
        _this.loadImage(event);
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
      }, {
        once: true
      });
    });
    if (options.transition) {
      addListener(element, EVENT_VIEWED, function() {
        addClass(list, CLASS_TRANSITION);
      }, {
        once: true
      });
    }
  },
  renderList: function renderList() {
    var index = this.index;
    var item = this.items[index];
    if (!item) {
      return;
    }
    var next2 = item.nextElementSibling;
    var gutter = parseInt(window.getComputedStyle(next2 || item).marginLeft, 10);
    var offsetWidth = item.offsetWidth;
    var outerWidth = offsetWidth + gutter;
    setStyle(this.list, assign({
      width: outerWidth * this.length - gutter
    }, getTransforms({
      translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index
    })));
  },
  resetList: function resetList() {
    var list = this.list;
    list.innerHTML = "";
    removeClass(list, CLASS_TRANSITION);
    setStyle(list, getTransforms({
      translateX: 0
    }));
  },
  initImage: function initImage(done) {
    var _this2 = this;
    var options = this.options, image = this.image, viewerData = this.viewerData;
    var footerHeight = this.footer.offsetHeight;
    var viewerWidth = viewerData.width;
    var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
    var oldImageData = this.imageData || {};
    var sizingImage;
    this.imageInitializing = {
      abort: function abort() {
        sizingImage.onload = null;
      }
    };
    sizingImage = getImageNaturalSizes(image, options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
      var width = viewerWidth;
      var height = viewerHeight;
      _this2.imageInitializing = false;
      if (viewerHeight * aspectRatio > viewerWidth) {
        height = viewerWidth / aspectRatio;
      } else {
        width = viewerHeight * aspectRatio;
      }
      initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
      width = Math.min(width * initialCoverage, naturalWidth);
      height = Math.min(height * initialCoverage, naturalHeight);
      var left = (viewerWidth - width) / 2;
      var top = (viewerHeight - height) / 2;
      var imageData = {
        left,
        top,
        x: left,
        y: top,
        width,
        height,
        oldRatio: 1,
        ratio: width / naturalWidth,
        aspectRatio,
        naturalWidth,
        naturalHeight
      };
      var initialImageData = assign({}, imageData);
      if (options.rotatable) {
        imageData.rotate = oldImageData.rotate || 0;
        initialImageData.rotate = 0;
      }
      if (options.scalable) {
        imageData.scaleX = oldImageData.scaleX || 1;
        imageData.scaleY = oldImageData.scaleY || 1;
        initialImageData.scaleX = 1;
        initialImageData.scaleY = 1;
      }
      _this2.imageData = imageData;
      _this2.initialImageData = initialImageData;
      if (done) {
        done();
      }
    });
  },
  renderImage: function renderImage(done) {
    var _this3 = this;
    var image = this.image, imageData = this.imageData;
    setStyle(image, assign({
      width: imageData.width,
      height: imageData.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: imageData.x,
      marginTop: imageData.y
    }, getTransforms(imageData)));
    if (done) {
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
        var onTransitionEnd = function onTransitionEnd2() {
          _this3.imageRendering = false;
          done();
        };
        this.imageRendering = {
          abort: function abort() {
            removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
          }
        };
        addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
          once: true
        });
      } else {
        done();
      }
    }
  },
  resetImage: function resetImage() {
    var image = this.image;
    if (image) {
      if (this.viewing) {
        this.viewing.abort();
      }
      image.parentNode.removeChild(image);
      this.image = null;
      this.title.innerHTML = "";
    }
  }
};
var events = {
  bind: function bind() {
    var options = this.options, viewer = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
    addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
    addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
    addListener(document2, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
    addListener(document2, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
    addListener(document2, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
    addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
  },
  unbind: function unbind() {
    var options = this.options, viewer = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    removeListener(viewer, EVENT_CLICK, this.onClick);
    removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
    removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
    removeListener(document2, EVENT_POINTER_MOVE, this.onPointerMove);
    removeListener(document2, EVENT_POINTER_UP, this.onPointerUp);
    removeListener(document2, EVENT_KEY_DOWN, this.onKeyDown);
    removeListener(window, EVENT_RESIZE, this.onResize);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(viewer, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
    }
  }
};
var handlers = {
  click: function click(event) {
    var options = this.options, imageData = this.imageData;
    var target = event.target;
    var action = getData(target, DATA_ACTION);
    if (!action && target.localName === "img" && target.parentElement.localName === "li") {
      target = target.parentElement;
      action = getData(target, DATA_ACTION);
    }
    if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
      clearTimeout(this.clickCanvasTimeout);
    }
    switch (action) {
      case "mix":
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          } else {
            this.full();
          }
        } else {
          this.hide();
        }
        break;
      case "hide":
        if (!this.pointerMoved) {
          this.hide();
        }
        break;
      case "view":
        this.view(getData(target, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, true);
        break;
      case "zoom-out":
        this.zoom(-0.1, true);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(options.loop);
        break;
      case "play":
        this.play(options.fullscreen);
        break;
      case "next":
        this.next(options.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-imageData.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-imageData.scaleY || -1);
        break;
      default:
        if (this.played) {
          this.stop();
        }
    }
  },
  dblclick: function dblclick(event) {
    event.preventDefault();
    if (this.viewed && event.target === this.image) {
      if (IS_TOUCH_DEVICE && event.isTrusted) {
        clearTimeout(this.doubleClickImageTimeout);
      }
      this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
    }
  },
  load: function load() {
    var _this = this;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = false;
    }
    var element = this.element, options = this.options, image = this.image, index = this.index, viewerData = this.viewerData;
    removeClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      removeClass(this.canvas, CLASS_LOADING);
    }
    image.style.cssText = "height:0;" + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + "max-width:none!important;position:relative;width:0;";
    this.initImage(function() {
      toggleClass(image, CLASS_MOVE, options.movable);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      _this.renderImage(function() {
        _this.viewed = true;
        _this.viewing = false;
        if (isFunction(options.viewed)) {
          addListener(element, EVENT_VIEWED, options.viewed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_VIEWED, {
          originalImage: _this.images[index],
          index,
          image
        }, {
          cancelable: false
        });
      });
    });
  },
  loadImage: function loadImage(event) {
    var image = event.target;
    var parent = image.parentNode;
    var parentWidth = parent.offsetWidth || 30;
    var parentHeight = parent.offsetHeight || 50;
    var filled = !!getData(image, "filled");
    getImageNaturalSizes(image, this.options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var width = parentWidth;
      var height = parentHeight;
      if (parentHeight * aspectRatio > parentWidth) {
        if (filled) {
          width = parentHeight * aspectRatio;
        } else {
          height = parentWidth / aspectRatio;
        }
      } else if (filled) {
        height = parentWidth / aspectRatio;
      } else {
        width = parentHeight * aspectRatio;
      }
      setStyle(image, assign({
        width,
        height
      }, getTransforms({
        translateX: (parentWidth - width) / 2,
        translateY: (parentHeight - height) / 2
      })));
    });
  },
  keydown: function keydown(event) {
    var options = this.options;
    if (!options.keyboard) {
      return;
    }
    var keyCode = event.keyCode || event.which || event.charCode;
    switch (keyCode) {
      case 13:
        if (this.viewer.contains(event.target)) {
          this.click(event);
        }
        break;
    }
    if (!this.fulled) {
      return;
    }
    switch (keyCode) {
      case 27:
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          }
        } else {
          this.hide();
        }
        break;
      case 32:
        if (this.played) {
          this.stop();
        }
        break;
      case 37:
        if (this.played && this.playing) {
          this.playing.prev();
        } else {
          this.prev(options.loop);
        }
        break;
      case 38:
        event.preventDefault();
        this.zoom(options.zoomRatio, true);
        break;
      case 39:
        if (this.played && this.playing) {
          this.playing.next();
        } else {
          this.next(options.loop);
        }
        break;
      case 40:
        event.preventDefault();
        this.zoom(-options.zoomRatio, true);
        break;
      case 48:
      case 49:
        if (event.ctrlKey) {
          event.preventDefault();
          this.toggle();
        }
        break;
    }
  },
  dragstart: function dragstart(event) {
    if (event.target.localName === "img") {
      event.preventDefault();
    }
  },
  pointerdown: function pointerdown(event) {
    var options = this.options, pointers = this.pointers;
    var buttons = event.buttons, button = event.button;
    this.pointerMoved = false;
    if (!this.viewed || this.showing || this.viewing || this.hiding || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[event.pointerId || 0] = getPointer(event);
    }
    var action = options.movable ? ACTION_MOVE : false;
    if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
      action = ACTION_ZOOM;
    } else if (options.slideOnTouch && (event.pointerType === "touch" || event.type === "touchstart") && this.isSwitchable()) {
      action = ACTION_SWITCH;
    }
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      removeClass(this.image, CLASS_TRANSITION);
    }
    this.action = action;
  },
  pointermove: function pointermove(event) {
    var pointers = this.pointers, action = this.action;
    if (!this.viewed || !action) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  pointerup: function pointerup(event) {
    var _this2 = this;
    var options = this.options, action = this.action, pointers = this.pointers;
    var pointer;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointer = pointers[touch.identifier];
        delete pointers[touch.identifier];
      });
    } else {
      pointer = pointers[event.pointerId || 0];
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      addClass(this.image, CLASS_TRANSITION);
    }
    this.action = false;
    if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
      clearTimeout(this.clickCanvasTimeout);
      clearTimeout(this.doubleClickImageTimeout);
      if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
        if (this.imageClicked) {
          this.imageClicked = false;
          this.doubleClickImageTimeout = setTimeout(function() {
            dispatchEvent(_this2.image, EVENT_DBLCLICK, {
              originalEvent: event
            });
          }, 50);
        } else {
          this.imageClicked = true;
          this.doubleClickImageTimeout = setTimeout(function() {
            _this2.imageClicked = false;
          }, 500);
        }
      } else {
        this.imageClicked = false;
        if (options.backdrop && options.backdrop !== "static" && event.target === this.canvas) {
          this.clickCanvasTimeout = setTimeout(function() {
            dispatchEvent(_this2.canvas, EVENT_CLICK, {
              originalEvent: event
            });
          }, 50);
        }
      }
    }
  },
  resize: function resize() {
    var _this3 = this;
    if (!this.isShown || this.hiding) {
      return;
    }
    if (this.fulled) {
      this.close();
      this.initBody();
      this.open();
    }
    this.initContainer();
    this.initViewer();
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this3.renderImage();
      });
    }
    if (this.played) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      forEach(this.player.getElementsByTagName("img"), function(image) {
        addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
          once: true
        });
        dispatchEvent(image, EVENT_LOAD);
      });
    }
  },
  wheel: function wheel(event) {
    var _this4 = this;
    if (!this.viewed) {
      return;
    }
    event.preventDefault();
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function() {
      _this4.wheeling = false;
    }, 50);
    var ratio = Number(this.options.zoomRatio) || 0.1;
    var delta = 1;
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, true, null, event);
  }
};
var methods = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function show() {
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.showing || this.isShown || this.showing) {
      return this;
    }
    if (!this.ready) {
      this.build();
      if (this.ready) {
        this.show(immediate);
      }
      return this;
    }
    if (isFunction(options.show)) {
      addListener(element, EVENT_SHOW, options.show, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
      return this;
    }
    if (this.hiding) {
      this.transitioning.abort();
    }
    this.showing = true;
    this.open();
    var viewer = this.viewer;
    removeClass(viewer, CLASS_HIDE);
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-labelledby", this.title.id);
    viewer.setAttribute("aria-modal", true);
    viewer.removeAttribute("aria-hidden");
    if (options.transition && !immediate) {
      var shown2 = this.shown.bind(this);
      this.transitioning = {
        abort: function abort() {
          removeListener(viewer, EVENT_TRANSITION_END, shown2);
          removeClass(viewer, CLASS_IN);
        }
      };
      addClass(viewer, CLASS_TRANSITION);
      viewer.initialOffsetWidth = viewer.offsetWidth;
      addListener(viewer, EVENT_TRANSITION_END, shown2, {
        once: true
      });
      addClass(viewer, CLASS_IN);
    } else {
      addClass(viewer, CLASS_IN);
      this.shown();
    }
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function hide() {
    var _this = this;
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.hiding || !(this.isShown || this.showing)) {
      return this;
    }
    if (isFunction(options.hide)) {
      addListener(element, EVENT_HIDE, options.hide, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_HIDE) === false) {
      return this;
    }
    if (this.showing) {
      this.transitioning.abort();
    }
    this.hiding = true;
    if (this.played) {
      this.stop();
    } else if (this.viewing) {
      this.viewing.abort();
    }
    var viewer = this.viewer, image = this.image;
    var hideImmediately = function hideImmediately2() {
      removeClass(viewer, CLASS_IN);
      _this.hidden();
    };
    if (options.transition && !immediate) {
      var _onViewerTransitionEnd = function onViewerTransitionEnd(event) {
        if (event && event.target === viewer) {
          removeListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
          _this.hidden();
        }
      };
      var onImageTransitionEnd = function onImageTransitionEnd2() {
        if (hasClass(viewer, CLASS_TRANSITION)) {
          addListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
          removeClass(viewer, CLASS_IN);
        } else {
          hideImmediately();
        }
      };
      this.transitioning = {
        abort: function abort() {
          if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
            removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
          } else if (hasClass(viewer, CLASS_TRANSITION)) {
            removeListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
          }
        }
      };
      if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
        addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
          once: true
        });
        this.zoomTo(0, false, null, null, true);
      } else {
        onImageTransitionEnd();
      }
    } else {
      hideImmediately();
    }
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function view() {
    var _this2 = this;
    var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    index = Number(index) || 0;
    if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
      return this;
    }
    if (!this.isShown) {
      this.index = index;
      return this.show();
    }
    if (this.viewing) {
      this.viewing.abort();
    }
    var element = this.element, options = this.options, title = this.title, canvas = this.canvas;
    var item = this.items[index];
    var img = item.querySelector("img");
    var url = getData(img, "originalUrl");
    var alt = img.getAttribute("alt");
    var image = document.createElement("img");
    forEach(options.inheritedAttributes, function(name) {
      var value = img.getAttribute(name);
      if (value !== null) {
        image.setAttribute(name, value);
      }
    });
    image.src = url;
    image.alt = alt;
    if (isFunction(options.view)) {
      addListener(element, EVENT_VIEW, options.view, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_VIEW, {
      originalImage: this.images[index],
      index,
      image
    }) === false || !this.isShown || this.hiding || this.played) {
      return this;
    }
    var activeItem = this.items[this.index];
    if (activeItem) {
      removeClass(activeItem, CLASS_ACTIVE);
      activeItem.removeAttribute("aria-selected");
    }
    addClass(item, CLASS_ACTIVE);
    item.setAttribute("aria-selected", true);
    if (options.focus) {
      item.focus();
    }
    this.image = image;
    this.viewed = false;
    this.index = index;
    this.imageData = {};
    addClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      addClass(canvas, CLASS_LOADING);
    }
    canvas.innerHTML = "";
    canvas.appendChild(image);
    this.renderList();
    title.innerHTML = "";
    var onViewed = function onViewed2() {
      var imageData = _this2.imageData;
      var render3 = Array.isArray(options.title) ? options.title[1] : options.title;
      title.innerHTML = escapeHTMLEntities(isFunction(render3) ? render3.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " × ").concat(imageData.naturalHeight, ")"));
    };
    var onLoad;
    var onError;
    addListener(element, EVENT_VIEWED, onViewed, {
      once: true
    });
    this.viewing = {
      abort: function abort() {
        removeListener(element, EVENT_VIEWED, onViewed);
        if (image.complete) {
          if (_this2.imageRendering) {
            _this2.imageRendering.abort();
          } else if (_this2.imageInitializing) {
            _this2.imageInitializing.abort();
          }
        } else {
          image.src = "";
          removeListener(image, EVENT_LOAD, onLoad);
          if (_this2.timeout) {
            clearTimeout(_this2.timeout);
          }
        }
      }
    };
    if (image.complete) {
      this.load();
    } else {
      addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
        removeListener(image, EVENT_ERROR, onError);
        _this2.load();
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (_this2.timeout) {
          clearTimeout(_this2.timeout);
          _this2.timeout = false;
        }
        removeClass(image, CLASS_INVISIBLE);
        if (options.loading) {
          removeClass(_this2.canvas, CLASS_LOADING);
        }
      }, {
        once: true
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(function() {
        removeClass(image, CLASS_INVISIBLE);
        _this2.timeout = false;
      }, 1e3);
    }
    return this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function prev() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var index = this.index - 1;
    if (index < 0) {
      index = loop ? this.length - 1 : 0;
    }
    this.view(index);
    return this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function next() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var maxIndex = this.length - 1;
    var index = this.index + 1;
    if (index > maxIndex) {
      index = loop ? 0 : maxIndex;
    }
    this.view(index);
    return this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function move(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var imageData = this.imageData;
    this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
    return this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function moveTo(x) {
    var _this3 = this;
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var _originalEvent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var element = this.element, options = this.options, imageData = this.imageData;
    x = Number(x);
    y = Number(y);
    if (this.viewed && !this.played && options.movable) {
      var oldX = imageData.x;
      var oldY = imageData.y;
      var changed = false;
      if (isNumber(x)) {
        changed = true;
      } else {
        x = oldX;
      }
      if (isNumber(y)) {
        changed = true;
      } else {
        y = oldY;
      }
      if (changed) {
        if (isFunction(options.move)) {
          addListener(element, EVENT_MOVE, options.move, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_MOVE, {
          x,
          y,
          oldX,
          oldY,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        imageData.x = x;
        imageData.y = y;
        imageData.left = x;
        imageData.top = y;
        this.moving = true;
        this.renderImage(function() {
          _this3.moving = false;
          if (isFunction(options.moved)) {
            addListener(element, EVENT_MOVED, options.moved, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_MOVED, {
            x,
            y,
            oldX,
            oldY,
            originalEvent: _originalEvent
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function rotate(degree) {
    this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    return this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function rotateTo(degree) {
    var _this4 = this;
    var element = this.element, options = this.options, imageData = this.imageData;
    degree = Number(degree);
    if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
      var oldDegree = imageData.rotate;
      if (isFunction(options.rotate)) {
        addListener(element, EVENT_ROTATE, options.rotate, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ROTATE, {
        degree,
        oldDegree
      }) === false) {
        return this;
      }
      imageData.rotate = degree;
      this.rotating = true;
      this.renderImage(function() {
        _this4.rotating = false;
        if (isFunction(options.rotated)) {
          addListener(element, EVENT_ROTATED, options.rotated, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ROTATED, {
          degree,
          oldDegree
        }, {
          cancelable: false
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function scaleX(_scaleX) {
    this.scale(_scaleX, this.imageData.scaleY);
    return this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function scaleY(_scaleY) {
    this.scale(this.imageData.scaleX, _scaleY);
    return this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function scale(scaleX2) {
    var _this5 = this;
    var scaleY2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX2;
    var element = this.element, options = this.options, imageData = this.imageData;
    scaleX2 = Number(scaleX2);
    scaleY2 = Number(scaleY2);
    if (this.viewed && !this.played && options.scalable) {
      var oldScaleX = imageData.scaleX;
      var oldScaleY = imageData.scaleY;
      var changed = false;
      if (isNumber(scaleX2)) {
        changed = true;
      } else {
        scaleX2 = oldScaleX;
      }
      if (isNumber(scaleY2)) {
        changed = true;
      } else {
        scaleY2 = oldScaleY;
      }
      if (changed) {
        if (isFunction(options.scale)) {
          addListener(element, EVENT_SCALE, options.scale, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_SCALE, {
          scaleX: scaleX2,
          scaleY: scaleY2,
          oldScaleX,
          oldScaleY
        }) === false) {
          return this;
        }
        imageData.scaleX = scaleX2;
        imageData.scaleY = scaleY2;
        this.scaling = true;
        this.renderImage(function() {
          _this5.scaling = false;
          if (isFunction(options.scaled)) {
            addListener(element, EVENT_SCALED, options.scaled, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_SCALED, {
            scaleX: scaleX2,
            scaleY: scaleY2,
            oldScaleX,
            oldScaleY
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function zoom(ratio) {
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var imageData = this.imageData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
    return this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function zoomTo(ratio) {
    var _this6 = this;
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var _zoomable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var element = this.element, options = this.options, pointers = this.pointers, imageData = this.imageData;
    var x = imageData.x, y = imageData.y, width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
    ratio = Math.max(0, ratio);
    if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
      if (!_zoomable) {
        var minZoomRatio = Math.max(0.01, options.minZoomRatio);
        var maxZoomRatio = Math.min(100, options.maxZoomRatio);
        ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
      }
      if (_originalEvent) {
        switch (_originalEvent.type) {
          case "wheel":
            if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
              ratio = 1;
            }
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            if (ratio > 0.99 && ratio < 1.01) {
              ratio = 1;
            }
            break;
        }
      }
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      var offsetWidth = newWidth - width;
      var offsetHeight = newHeight - height;
      var oldRatio = imageData.ratio;
      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ZOOM, {
        ratio,
        oldRatio,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      this.zooming = true;
      if (_originalEvent) {
        var offset = getOffset(this.viewer);
        var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };
        imageData.x -= offsetWidth * ((center.pageX - offset.left - x) / width);
        imageData.y -= offsetHeight * ((center.pageY - offset.top - y) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        imageData.x -= offsetWidth * ((pivot.x - x) / width);
        imageData.y -= offsetHeight * ((pivot.y - y) / height);
      } else {
        imageData.x -= offsetWidth / 2;
        imageData.y -= offsetHeight / 2;
      }
      imageData.left = imageData.x;
      imageData.top = imageData.y;
      imageData.width = newWidth;
      imageData.height = newHeight;
      imageData.oldRatio = oldRatio;
      imageData.ratio = ratio;
      this.renderImage(function() {
        _this6.zooming = false;
        if (isFunction(options.zoomed)) {
          addListener(element, EVENT_ZOOMED, options.zoomed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ZOOMED, {
          ratio,
          oldRatio,
          originalEvent: _originalEvent
        }, {
          cancelable: false
        });
      });
      if (showTooltip) {
        this.tooltip();
      }
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function play() {
    var _this7 = this;
    var fullscreen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!this.isShown || this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction(options.play)) {
      addListener(element, EVENT_PLAY, options.play, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_PLAY) === false) {
      return this;
    }
    var player = this.player;
    var onLoad = this.loadImage.bind(this);
    var list = [];
    var total = 0;
    var index = 0;
    this.played = true;
    this.onLoadWhenPlay = onLoad;
    if (fullscreen) {
      this.requestFullscreen(fullscreen);
    }
    addClass(player, CLASS_SHOW);
    forEach(this.items, function(item, i) {
      var img = item.querySelector("img");
      var image = document.createElement("img");
      image.src = getData(img, "originalUrl");
      image.alt = img.getAttribute("alt");
      image.referrerPolicy = img.referrerPolicy;
      total += 1;
      addClass(image, CLASS_FADE);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      if (hasClass(item, CLASS_ACTIVE)) {
        addClass(image, CLASS_IN);
        index = i;
      }
      list.push(image);
      addListener(image, EVENT_LOAD, onLoad, {
        once: true
      });
      player.appendChild(image);
    });
    if (isNumber(options.interval) && options.interval > 0) {
      var _prev = function prev2() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index], CLASS_IN);
        index -= 1;
        index = index >= 0 ? index : total - 1;
        addClass(list[index], CLASS_IN);
        _this7.playing.timeout = setTimeout(_prev, options.interval);
      };
      var _next = function next2() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index], CLASS_IN);
        index += 1;
        index = index < total ? index : 0;
        addClass(list[index], CLASS_IN);
        _this7.playing.timeout = setTimeout(_next, options.interval);
      };
      if (total > 1) {
        this.playing = {
          prev: _prev,
          next: _next,
          timeout: setTimeout(_next, options.interval)
        };
      }
    }
    return this;
  },
  // Stop play
  stop: function stop() {
    var _this8 = this;
    if (!this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction(options.stop)) {
      addListener(element, EVENT_STOP, options.stop, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_STOP) === false) {
      return this;
    }
    var player = this.player;
    clearTimeout(this.playing.timeout);
    this.playing = false;
    this.played = false;
    forEach(player.getElementsByTagName("img"), function(image) {
      removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
    });
    removeClass(player, CLASS_SHOW);
    player.innerHTML = "";
    this.exitFullscreen();
    return this;
  },
  // Enter modal mode (only available in inline mode)
  full: function full() {
    var _this9 = this;
    var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || this.fulled || !options.inline) {
      return this;
    }
    this.fulled = true;
    this.open();
    addClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    addClass(viewer, CLASS_FIXED);
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-labelledby", this.title.id);
    viewer.setAttribute("aria-modal", true);
    viewer.removeAttribute("style");
    setStyle(viewer, {
      zIndex: options.zIndex
    });
    if (options.focus) {
      this.enforceFocus();
    }
    this.initContainer();
    this.viewerData = assign({}, this.containerData);
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this9.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Exit modal mode (only available in inline mode)
  exit: function exit() {
    var _this10 = this;
    var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || !this.fulled || !options.inline) {
      return this;
    }
    this.fulled = false;
    this.close();
    removeClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    if (options.focus) {
      this.clearEnforceFocus();
    }
    viewer.removeAttribute("role");
    viewer.removeAttribute("aria-labelledby");
    viewer.removeAttribute("aria-modal");
    removeClass(viewer, CLASS_FIXED);
    setStyle(viewer, {
      zIndex: options.zIndexInline
    });
    this.viewerData = assign({}, this.parentData);
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this10.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Show the current ratio of the image with percentage
  tooltip: function tooltip() {
    var _this11 = this;
    var options = this.options, tooltipBox = this.tooltipBox, imageData = this.imageData;
    if (!this.viewed || this.played || !options.tooltip) {
      return this;
    }
    tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
    if (!this.tooltipping) {
      if (options.transition) {
        if (this.fading) {
          dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
        }
        addClass(tooltipBox, CLASS_SHOW);
        addClass(tooltipBox, CLASS_FADE);
        addClass(tooltipBox, CLASS_TRANSITION);
        tooltipBox.removeAttribute("aria-hidden");
        tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
        addClass(tooltipBox, CLASS_IN);
      } else {
        addClass(tooltipBox, CLASS_SHOW);
        tooltipBox.removeAttribute("aria-hidden");
      }
    } else {
      clearTimeout(this.tooltipping);
    }
    this.tooltipping = setTimeout(function() {
      if (options.transition) {
        addListener(tooltipBox, EVENT_TRANSITION_END, function() {
          removeClass(tooltipBox, CLASS_SHOW);
          removeClass(tooltipBox, CLASS_FADE);
          removeClass(tooltipBox, CLASS_TRANSITION);
          tooltipBox.setAttribute("aria-hidden", true);
          _this11.fading = false;
        }, {
          once: true
        });
        removeClass(tooltipBox, CLASS_IN);
        _this11.fading = true;
      } else {
        removeClass(tooltipBox, CLASS_SHOW);
        tooltipBox.setAttribute("aria-hidden", true);
      }
      _this11.tooltipping = false;
    }, 1e3);
    return this;
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function toggle() {
    var _originalEvent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.imageData.ratio === 1) {
      this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
    } else {
      this.zoomTo(1, true, null, _originalEvent);
    }
    return this;
  },
  // Reset the image to its initial state
  reset: function reset() {
    if (this.viewed && !this.played) {
      this.imageData = assign({}, this.initialImageData);
      this.renderImage();
    }
    return this;
  },
  // Update viewer when images changed
  update: function update() {
    var _this12 = this;
    var element = this.element, options = this.options, isImg = this.isImg;
    if (isImg && !element.parentNode) {
      return this.destroy();
    }
    var images = [];
    forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
      if (isFunction(options.filter)) {
        if (options.filter.call(_this12, image)) {
          images.push(image);
        }
      } else if (_this12.getImageURL(image)) {
        images.push(image);
      }
    });
    if (!images.length) {
      return this;
    }
    this.images = images;
    this.length = images.length;
    if (this.ready) {
      var changedIndexes = [];
      forEach(this.items, function(item, i) {
        var img = item.querySelector("img");
        var image = images[i];
        if (image && img) {
          if (image.src !== img.src || image.alt !== img.alt) {
            changedIndexes.push(i);
          }
        } else {
          changedIndexes.push(i);
        }
      });
      setStyle(this.list, {
        width: "auto"
      });
      this.initList();
      if (this.isShown) {
        if (this.length) {
          if (this.viewed) {
            var changedIndex = changedIndexes.indexOf(this.index);
            if (changedIndex >= 0) {
              this.viewed = false;
              this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
            } else {
              var activeItem = this.items[this.index];
              addClass(activeItem, CLASS_ACTIVE);
              activeItem.setAttribute("aria-selected", true);
            }
          }
        } else {
          this.image = null;
          this.viewed = false;
          this.index = 0;
          this.imageData = {};
          this.canvas.innerHTML = "";
          this.title.innerHTML = "";
        }
      }
    } else {
      this.build();
    }
    return this;
  },
  // Destroy the viewer
  destroy: function destroy() {
    var element = this.element, options = this.options;
    if (!element[NAMESPACE]) {
      return this;
    }
    this.destroyed = true;
    if (this.ready) {
      if (this.played) {
        this.stop();
      }
      if (options.inline) {
        if (this.fulled) {
          this.exit();
        }
        this.unbind();
      } else if (this.isShown) {
        if (this.viewing) {
          if (this.imageRendering) {
            this.imageRendering.abort();
          } else if (this.imageInitializing) {
            this.imageInitializing.abort();
          }
        }
        if (this.hiding) {
          this.transitioning.abort();
        }
        this.hidden();
      } else if (this.showing) {
        this.transitioning.abort();
        this.hidden();
      }
      this.ready = false;
      this.viewer.parentNode.removeChild(this.viewer);
    } else if (options.inline) {
      if (this.delaying) {
        this.delaying.abort();
      } else if (this.initializing) {
        this.initializing.abort();
      }
    }
    if (!options.inline) {
      removeListener(element, EVENT_CLICK, this.onStart);
    }
    element[NAMESPACE] = void 0;
    return this;
  }
};
var others = {
  getImageURL: function getImageURL(image) {
    var url = this.options.url;
    if (isString(url)) {
      url = image.getAttribute(url);
    } else if (isFunction(url)) {
      url = url.call(this, image);
    } else {
      url = "";
    }
    return url;
  },
  enforceFocus: function enforceFocus() {
    var _this = this;
    this.clearEnforceFocus();
    addListener(document, EVENT_FOCUSIN, this.onFocusin = function(event) {
      var viewer = _this.viewer;
      var target = event.target;
      if (target === document || target === viewer || viewer.contains(target)) {
        return;
      }
      while (target) {
        if (target.getAttribute("tabindex") !== null || target.getAttribute("aria-modal") === "true") {
          return;
        }
        target = target.parentElement;
      }
      viewer.focus();
    });
  },
  clearEnforceFocus: function clearEnforceFocus() {
    if (this.onFocusin) {
      removeListener(document, EVENT_FOCUSIN, this.onFocusin);
      this.onFocusin = null;
    }
  },
  open: function open() {
    var body = this.body;
    addClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
    }
  },
  close: function close() {
    var body = this.body;
    removeClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = this.initialBodyPaddingRight;
    }
  },
  shown: function shown() {
    var element = this.element, options = this.options, viewer = this.viewer;
    this.fulled = true;
    this.isShown = true;
    this.render();
    this.bind();
    this.showing = false;
    if (options.focus) {
      viewer.focus();
      this.enforceFocus();
    }
    if (isFunction(options.shown)) {
      addListener(element, EVENT_SHOWN, options.shown, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOWN) === false) {
      return;
    }
    if (this.ready && this.isShown && !this.hiding) {
      this.view(this.index);
    }
  },
  hidden: function hidden() {
    var element = this.element, options = this.options, viewer = this.viewer;
    if (options.fucus) {
      this.clearEnforceFocus();
    }
    this.close();
    this.unbind();
    addClass(viewer, CLASS_HIDE);
    viewer.removeAttribute("role");
    viewer.removeAttribute("aria-labelledby");
    viewer.removeAttribute("aria-modal");
    viewer.setAttribute("aria-hidden", true);
    this.resetList();
    this.resetImage();
    this.fulled = false;
    this.viewed = false;
    this.isShown = false;
    this.hiding = false;
    if (!this.destroyed) {
      if (isFunction(options.hidden)) {
        addListener(element, EVENT_HIDDEN, options.hidden, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_HIDDEN, null, {
        cancelable: false
      });
    }
  },
  requestFullscreen: function requestFullscreen(options) {
    var document2 = this.element.ownerDocument;
    if (this.fulled && !(document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      var documentElement = document2.documentElement;
      if (documentElement.requestFullscreen) {
        if (isPlainObject(options)) {
          documentElement.requestFullscreen(options);
        } else {
          documentElement.requestFullscreen();
        }
      } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
      } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
      }
    }
  },
  exitFullscreen: function exitFullscreen() {
    var document2 = this.element.ownerDocument;
    if (this.fulled && (document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      if (document2.exitFullscreen) {
        document2.exitFullscreen();
      } else if (document2.webkitExitFullscreen) {
        document2.webkitExitFullscreen();
      } else if (document2.mozCancelFullScreen) {
        document2.mozCancelFullScreen();
      } else if (document2.msExitFullscreen) {
        document2.msExitFullscreen();
      }
    }
  },
  change: function change(event) {
    var options = this.options, pointers = this.pointers;
    var pointer = pointers[Object.keys(pointers)[0]];
    if (!pointer) {
      return;
    }
    var offsetX = pointer.endX - pointer.startX;
    var offsetY = pointer.endY - pointer.startY;
    switch (this.action) {
      case ACTION_MOVE:
        if (offsetX !== 0 || offsetY !== 0) {
          this.pointerMoved = true;
          this.move(offsetX, offsetY, event);
        }
        break;
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), false, null, event);
        break;
      case ACTION_SWITCH: {
        this.action = "switched";
        var absoluteOffsetX = Math.abs(offsetX);
        if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
          this.pointers = {};
          if (offsetX > 1) {
            this.prev(options.loop);
          } else if (offsetX < -1) {
            this.next(options.loop);
          }
        }
        break;
      }
    }
    forEach(pointers, function(p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  },
  isSwitchable: function isSwitchable() {
    var imageData = this.imageData, viewerData = this.viewerData;
    return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
  }
};
var AnotherViewer = WINDOW.Viewer;
var getUniqueID = /* @__PURE__ */ function(id) {
  return function() {
    id += 1;
    return id;
  };
}(-1);
var Viewer = function() {
  function Viewer2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Viewer2);
    if (!element || element.nodeType !== 1) {
      throw new Error("The first argument is required and must be an element.");
    }
    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.action = false;
    this.fading = false;
    this.fulled = false;
    this.hiding = false;
    this.imageClicked = false;
    this.imageData = {};
    this.index = this.options.initialViewIndex;
    this.isImg = false;
    this.isShown = false;
    this.length = 0;
    this.moving = false;
    this.played = false;
    this.playing = false;
    this.pointers = {};
    this.ready = false;
    this.rotating = false;
    this.scaling = false;
    this.showing = false;
    this.timeout = false;
    this.tooltipping = false;
    this.viewed = false;
    this.viewing = false;
    this.wheeling = false;
    this.zooming = false;
    this.pointerMoved = false;
    this.id = getUniqueID();
    this.init();
  }
  return _createClass(Viewer2, [{
    key: "init",
    value: function init() {
      var _this = this;
      var element = this.element, options = this.options;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (options.focus && !options.keyboard) {
        options.focus = false;
      }
      var isImg = element.localName === "img";
      var images = [];
      forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
        if (isFunction(options.filter)) {
          if (options.filter.call(_this, image)) {
            images.push(image);
          }
        } else if (_this.getImageURL(image)) {
          images.push(image);
        }
      });
      this.isImg = isImg;
      this.length = images.length;
      this.images = images;
      this.initBody();
      if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
        options.transition = false;
      }
      if (options.inline) {
        var count = 0;
        var progress = function progress2() {
          count += 1;
          if (count === _this.length) {
            var timeout;
            _this.initializing = false;
            _this.delaying = {
              abort: function abort() {
                clearTimeout(timeout);
              }
            };
            timeout = setTimeout(function() {
              _this.delaying = false;
              _this.build();
            }, 0);
          }
        };
        this.initializing = {
          abort: function abort() {
            forEach(images, function(image) {
              if (!image.complete) {
                removeListener(image, EVENT_LOAD, progress);
                removeListener(image, EVENT_ERROR, progress);
              }
            });
          }
        };
        forEach(images, function(image) {
          if (image.complete) {
            progress();
          } else {
            var onLoad;
            var onError;
            addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
              removeListener(image, EVENT_ERROR, onError);
              progress();
            }, {
              once: true
            });
            addListener(image, EVENT_ERROR, onError = function onError2() {
              removeListener(image, EVENT_LOAD, onLoad);
              progress();
            }, {
              once: true
            });
          }
        });
      } else {
        addListener(element, EVENT_CLICK, this.onStart = function(_ref) {
          var target = _ref.target;
          if (target.localName === "img" && (!isFunction(options.filter) || options.filter.call(_this, target))) {
            _this.view(_this.images.indexOf(target));
          }
        });
      }
    }
  }, {
    key: "build",
    value: function build() {
      if (this.ready) {
        return;
      }
      var element = this.element, options = this.options;
      var parent = element.parentNode;
      var template = document.createElement("div");
      template.innerHTML = TEMPLATE;
      var viewer = template.querySelector(".".concat(NAMESPACE, "-container"));
      var title = viewer.querySelector(".".concat(NAMESPACE, "-title"));
      var toolbar = viewer.querySelector(".".concat(NAMESPACE, "-toolbar"));
      var navbar = viewer.querySelector(".".concat(NAMESPACE, "-navbar"));
      var button = viewer.querySelector(".".concat(NAMESPACE, "-button"));
      var canvas = viewer.querySelector(".".concat(NAMESPACE, "-canvas"));
      this.parent = parent;
      this.viewer = viewer;
      this.title = title;
      this.toolbar = toolbar;
      this.navbar = navbar;
      this.button = button;
      this.canvas = canvas;
      this.footer = viewer.querySelector(".".concat(NAMESPACE, "-footer"));
      this.tooltipBox = viewer.querySelector(".".concat(NAMESPACE, "-tooltip"));
      this.player = viewer.querySelector(".".concat(NAMESPACE, "-player"));
      this.list = viewer.querySelector(".".concat(NAMESPACE, "-list"));
      viewer.id = "".concat(NAMESPACE).concat(this.id);
      title.id = "".concat(NAMESPACE, "Title").concat(this.id);
      addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
      addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
      toggleClass(button, CLASS_HIDE, !options.button);
      if (options.keyboard) {
        button.setAttribute("tabindex", 0);
      }
      if (options.backdrop) {
        addClass(viewer, "".concat(NAMESPACE, "-backdrop"));
        if (!options.inline && options.backdrop !== "static") {
          setData(canvas, DATA_ACTION, "hide");
        }
      }
      if (isString(options.className) && options.className) {
        options.className.split(REGEXP_SPACES).forEach(function(className) {
          addClass(viewer, className);
        });
      }
      if (options.toolbar) {
        var list = document.createElement("ul");
        var custom = isPlainObject(options.toolbar);
        var zoomButtons = BUTTONS.slice(0, 3);
        var rotateButtons = BUTTONS.slice(7, 9);
        var scaleButtons = BUTTONS.slice(9);
        if (!custom) {
          addClass(toolbar, getResponsiveClass(options.toolbar));
        }
        forEach(custom ? options.toolbar : BUTTONS, function(value, index) {
          var deep = custom && isPlainObject(value);
          var name = custom ? hyphenate(index) : value;
          var show2 = deep && !isUndefined(value.show) ? value.show : value;
          if (!show2 || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
            return;
          }
          var size = deep && !isUndefined(value.size) ? value.size : value;
          var click2 = deep && !isUndefined(value.click) ? value.click : value;
          var item = document.createElement("li");
          if (options.keyboard) {
            item.setAttribute("tabindex", 0);
          }
          item.setAttribute("role", "button");
          addClass(item, "".concat(NAMESPACE, "-").concat(name));
          if (!isFunction(click2)) {
            setData(item, DATA_ACTION, name);
          }
          if (isNumber(show2)) {
            addClass(item, getResponsiveClass(show2));
          }
          if (["small", "large"].indexOf(size) !== -1) {
            addClass(item, "".concat(NAMESPACE, "-").concat(size));
          } else if (name === "play") {
            addClass(item, "".concat(NAMESPACE, "-large"));
          }
          if (isFunction(click2)) {
            addListener(item, EVENT_CLICK, click2);
          }
          list.appendChild(item);
        });
        toolbar.appendChild(list);
      } else {
        addClass(toolbar, CLASS_HIDE);
      }
      if (!options.rotatable) {
        var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
        addClass(rotates, CLASS_INVISIBLE);
        forEach(rotates, function(rotate2) {
          toolbar.appendChild(rotate2);
        });
      }
      if (options.inline) {
        addClass(button, CLASS_FULLSCREEN);
        setStyle(viewer, {
          zIndex: options.zIndexInline
        });
        if (window.getComputedStyle(parent).position === "static") {
          setStyle(parent, {
            position: "relative"
          });
        }
        parent.insertBefore(viewer, element.nextSibling);
      } else {
        addClass(button, CLASS_CLOSE);
        addClass(viewer, CLASS_FIXED);
        addClass(viewer, CLASS_FADE);
        addClass(viewer, CLASS_HIDE);
        setStyle(viewer, {
          zIndex: options.zIndex
        });
        var container = options.container;
        if (isString(container)) {
          container = element.ownerDocument.querySelector(container);
        }
        if (!container) {
          container = this.body;
        }
        container.appendChild(viewer);
      }
      if (options.inline) {
        this.render();
        this.bind();
        this.isShown = true;
      }
      this.ready = true;
      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_READY) === false) {
        this.ready = false;
        return;
      }
      if (this.ready && options.inline) {
        this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Viewer = AnotherViewer;
      return Viewer2;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
}();
assign(Viewer.prototype, render, events, handlers, methods, others);

// src/directives/vView.ts
var vView = {
  mounted(el) {
    if (el) {
      el.style.cursor = "zoom-in";
      const viewer = new Viewer(el, {
        // 内联展示
        inline: false,
        // 全屏预览时的缩放比例
        viewed() {
          viewer.zoomTo(0.8);
        },
        // 追加url处理（新版静态资源预览需要携带accessKey(公开地址),token(内部地址)）,未变化的地址也会重新再发送一遍请求？？
        url(image) {
          return image.src;
        }
      });
      el.addEventListener("click", () => {
        viewer.play();
      });
    }
  }
};

// node_modules/.pnpm/dompurify@3.2.6/node_modules/dompurify/dist/purify.es.mjs
var {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
var {
  freeze,
  seal,
  create: create2
} = Object;
var {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create2(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.2.6";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element: Element2,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create2(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE2 = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE2 = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE2,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE2 === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE2 === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE2, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE2 === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value) {
    return typeof Node === "function" && value instanceof Node;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();

// src/directives/vLinkTransform.ts
var vLinkTransform = {
  mounted(el, binding) {
    if (el) {
      const urlRegex = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
      const baseInnerhtml = (binding == null ? void 0 : binding.value) ?? "";
      const htmlText = baseInnerhtml.replace(urlRegex, (match) => {
        const isSysLink = match.includes("/easycube/preview");
        return `<a href="${match}" target="_blank" ${isSysLink && 'rel="opener"'}>${match}</a>`;
      });
      el.innerHTML = purify.sanitize(htmlText);
    }
  }
};

// src/directives/vSelect.ts
var vSelect = {
  mounted(el, binding) {
    var _a, _b;
    const defaultSelect = (binding == null ? void 0 : binding.value) ?? true;
    if (!defaultSelect) {
      return;
    }
    if ((el == null ? void 0 : el.tagName) !== "INPUT") {
      (_a = el == null ? void 0 : el.querySelector("input")) == null ? void 0 : _a.focus();
      (_b = el == null ? void 0 : el.querySelector("input")) == null ? void 0 : _b.select();
      return;
    }
    el == null ? void 0 : el.focus();
    el == null ? void 0 : el.select();
  }
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
  apis: {},
  useLoadConfig: {
    pageKey: "page",
    pageSizekey: "size"
  }
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
  app.directive("focus", vFocus);
  app.directive("copy", vCopy);
  app.directive("view", vView);
  app.directive("select", vSelect);
  app.directive("link-transform", vLinkTransform);
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
/*! Bundled license information:

viewerjs/dist/viewer.esm.js:
  (*!
   * Viewer.js v1.11.7
   * https://fengyuanchen.github.io/viewerjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2024-11-24T04:32:19.116Z
   *)

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
*/
//# sourceMappingURL=speed-components.js.map
