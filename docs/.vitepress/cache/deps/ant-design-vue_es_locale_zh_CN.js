import {
  _extends,
  zh_CN_default
} from "./chunk-2RBTTVNF.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.16_typescript@5.8.3_/node_modules/ant-design-vue/es/vc-picker/locale/zh_CN.js
var locale = {
  locale: "zh_CN",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "确定",
  timeSelect: "选择时间",
  dateSelect: "选择日期",
  weekSelect: "选择周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上个月 (翻页上键)",
  nextMonth: "下个月 (翻页下键)",
  monthSelect: "选择月份",
  yearSelect: "选择年份",
  decadeSelect: "选择年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
  previousYear: "上一年 (Control键加左方向键)",
  nextYear: "下一年 (Control键加右方向键)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世纪",
  nextCentury: "下一世纪"
};
var zh_CN_default2 = locale;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.16_typescript@5.8.3_/node_modules/ant-design-vue/es/time-picker/locale/zh_CN.js
var locale2 = {
  placeholder: "请选择时间",
  rangePlaceholder: ["开始时间", "结束时间"]
};
var zh_CN_default3 = locale2;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.16_typescript@5.8.3_/node_modules/ant-design-vue/es/date-picker/locale/zh_CN.js
var locale3 = {
  lang: _extends({
    placeholder: "请选择日期",
    yearPlaceholder: "请选择年份",
    quarterPlaceholder: "请选择季度",
    monthPlaceholder: "请选择月份",
    weekPlaceholder: "请选择周",
    rangePlaceholder: ["开始日期", "结束日期"],
    rangeYearPlaceholder: ["开始年份", "结束年份"],
    rangeMonthPlaceholder: ["开始月份", "结束月份"],
    rangeQuarterPlaceholder: ["开始季度", "结束季度"],
    rangeWeekPlaceholder: ["开始周", "结束周"]
  }, zh_CN_default2),
  timePickerLocale: _extends({}, zh_CN_default3)
};
locale3.lang.ok = "确定";
var zh_CN_default4 = locale3;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.16_typescript@5.8.3_/node_modules/ant-design-vue/es/calendar/locale/zh_CN.js
var zh_CN_default5 = zh_CN_default4;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.16_typescript@5.8.3_/node_modules/ant-design-vue/es/locale/zh_CN.js
var typeTemplate = "${label}不是一个有效的${type}";
var localeValues = {
  locale: "zh-cn",
  Pagination: zh_CN_default,
  DatePicker: zh_CN_default4,
  TimePicker: zh_CN_default3,
  Calendar: zh_CN_default5,
  // locales for all components
  global: {
    placeholder: "请选择"
  },
  Table: {
    filterTitle: "筛选",
    filterConfirm: "确定",
    filterReset: "重置",
    filterEmptyText: "无筛选项",
    filterCheckall: "全选",
    filterSearchPlaceholder: "在筛选项中搜索",
    selectAll: "全选当页",
    selectInvert: "反选当页",
    selectNone: "清空所有",
    selectionAll: "全选所有",
    sortTitle: "排序",
    expand: "展开行",
    collapse: "关闭行",
    triggerDesc: "点击降序",
    triggerAsc: "点击升序",
    cancelSort: "取消排序"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "结束导览"
  },
  Modal: {
    okText: "确定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Popconfirm: {
    cancelText: "取消",
    okText: "确定"
  },
  Transfer: {
    searchPlaceholder: "请输入搜索内容",
    itemUnit: "项",
    itemsUnit: "项",
    remove: "删除",
    selectCurrent: "全选当页",
    removeCurrent: "删除当页",
    selectAll: "全选所有",
    removeAll: "删除全部",
    selectInvert: "反选当页"
  },
  Upload: {
    uploading: "文件上传中",
    removeFile: "删除文件",
    uploadError: "上传错误",
    previewFile: "预览文件",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "暂无数据"
  },
  Icon: {
    icon: "图标"
  },
  Text: {
    edit: "编辑",
    copy: "复制",
    copied: "复制成功",
    expand: "展开"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    optional: "（可选）",
    defaultValidateMessages: {
      default: "字段验证错误${label}",
      required: "请输入${label}",
      enum: "${label}必须是其中一个[${enum}]",
      whitespace: "${label}不能为空字符",
      date: {
        format: "${label}日期格式无效",
        parse: "${label}不能转换为日期",
        invalid: "${label}是一个无效日期"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label}须为${len}个字符",
        min: "${label}最少${min}个字符",
        max: "${label}最多${max}个字符",
        range: "${label}须在${min}-${max}字符之间"
      },
      number: {
        len: "${label}必须等于${len}",
        min: "${label}最小值为${min}",
        max: "${label}最大值为${max}",
        range: "${label}须在${min}-${max}之间"
      },
      array: {
        len: "须为${len}个${label}",
        min: "最少${min}个${label}",
        max: "最多${max}个${label}",
        range: "${label}数量须在${min}-${max}之间"
      },
      pattern: {
        mismatch: "${label}与模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "预览"
  },
  QRCode: {
    expired: "二维码已过期",
    refresh: "点击刷新",
    scanned: "已扫描"
  }
};
var zh_CN_default6 = localeValues;
export {
  zh_CN_default6 as default
};
//# sourceMappingURL=ant-design-vue_es_locale_zh_CN.js.map
