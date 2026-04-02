import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  isRef,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys
} from "./chunk-2YTPUVVG.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/vue-color@3.3.3_vue@3.5.24_typescript@5.9.3_/node_modules/vue-color/dist/vue-color.js
function be(e) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, be(e);
}
var ze = /^\s+/;
var je = /\s+$/;
function g(e, a) {
  if (e = e || "", a = a || {}, e instanceof g)
    return e;
  if (!(this instanceof g))
    return new g(e, a);
  var t = Xe(e);
  this._originalInput = e, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = Math.round(100 * this._a) / 100, this._format = a.format || t.format, this._gradientType = a.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = t.ok;
}
g.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var a = this.toRgb();
    return (a.r * 299 + a.g * 587 + a.b * 114) / 1e3;
  },
  getLuminance: function() {
    var a = this.toRgb(), t, r, l, n, i, o;
    return t = a.r / 255, r = a.g / 255, l = a.b / 255, t <= 0.03928 ? n = t / 12.92 : n = Math.pow((t + 0.055) / 1.055, 2.4), r <= 0.03928 ? i = r / 12.92 : i = Math.pow((r + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * i + 0.0722 * o;
  },
  setAlpha: function(a) {
    return this._a = Te(a), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var a = Re(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      v: a.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var a = Re(this._r, this._g, this._b), t = Math.round(a.h * 360), r = Math.round(a.s * 100), l = Math.round(a.v * 100);
    return this._a == 1 ? "hsv(" + t + ", " + r + "%, " + l + "%)" : "hsva(" + t + ", " + r + "%, " + l + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var a = Me(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      l: a.l,
      a: this._a
    };
  },
  toHslString: function() {
    var a = Me(this._r, this._g, this._b), t = Math.round(a.h * 360), r = Math.round(a.s * 100), l = Math.round(a.l * 100);
    return this._a == 1 ? "hsl(" + t + ", " + r + "%, " + l + "%)" : "hsla(" + t + ", " + r + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function(a) {
    return He(this._r, this._g, this._b, a);
  },
  toHexString: function(a) {
    return "#" + this.toHex(a);
  },
  toHex8: function(a) {
    return Ze(this._r, this._g, this._b, this._a, a);
  },
  toHex8String: function(a) {
    return "#" + this.toHex8(a);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(L(this._r, 255) * 100) + "%",
      g: Math.round(L(this._g, 255) * 100) + "%",
      b: Math.round(L(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(L(this._r, 255) * 100) + "%, " + Math.round(L(this._g, 255) * 100) + "%, " + Math.round(L(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(L(this._r, 255) * 100) + "%, " + Math.round(L(this._g, 255) * 100) + "%, " + Math.round(L(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? false : ut[He(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function(a) {
    var t = "#" + Ve(this._r, this._g, this._b, this._a), r = t, l = this._gradientType ? "GradientType = 1, " : "";
    if (a) {
      var n = g(a);
      r = "#" + Ve(n._r, n._g, n._b, n._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + l + "startColorstr=" + t + ",endColorstr=" + r + ")";
  },
  toString: function(a) {
    var t = !!a;
    a = a || this._format;
    var r = false, l = this._a < 1 && this._a >= 0, n = !t && l && (a === "hex" || a === "hex6" || a === "hex3" || a === "hex4" || a === "hex8" || a === "name");
    return n ? a === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (a === "rgb" && (r = this.toRgbString()), a === "prgb" && (r = this.toPercentageRgbString()), (a === "hex" || a === "hex6") && (r = this.toHexString()), a === "hex3" && (r = this.toHexString(true)), a === "hex4" && (r = this.toHex8String(true)), a === "hex8" && (r = this.toHex8String()), a === "name" && (r = this.toName()), a === "hsl" && (r = this.toHslString()), a === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  },
  clone: function() {
    return g(this.toString());
  },
  _applyModification: function(a, t) {
    var r = a.apply(null, [this].concat([].slice.call(t)));
    return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
  },
  lighten: function() {
    return this._applyModification(tt, arguments);
  },
  brighten: function() {
    return this._applyModification(at, arguments);
  },
  darken: function() {
    return this._applyModification(lt, arguments);
  },
  desaturate: function() {
    return this._applyModification(Je, arguments);
  },
  saturate: function() {
    return this._applyModification(Qe, arguments);
  },
  greyscale: function() {
    return this._applyModification(et, arguments);
  },
  spin: function() {
    return this._applyModification(nt, arguments);
  },
  _applyCombination: function(a, t) {
    return a.apply(null, [this].concat([].slice.call(t)));
  },
  analogous: function() {
    return this._applyCombination(st, arguments);
  },
  complement: function() {
    return this._applyCombination(rt, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(it, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(ot, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Be, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Be, [4]);
  }
};
g.fromRatio = function(e, a) {
  if (be(e) == "object") {
    var t = {};
    for (var r in e)
      e.hasOwnProperty(r) && (r === "a" ? t[r] = e[r] : t[r] = ue(e[r]));
    e = t;
  }
  return g(e, a);
};
function Xe(e) {
  var a = {
    r: 0,
    g: 0,
    b: 0
  }, t = 1, r = null, l = null, n = null, i = false, o = false;
  return typeof e == "string" && (e = ht(e)), be(e) == "object" && (Y(e.r) && Y(e.g) && Y(e.b) ? (a = Ye(e.r, e.g, e.b), i = true, o = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Y(e.h) && Y(e.s) && Y(e.v) ? (r = ue(e.s), l = ue(e.v), a = We(e.h, r, l), i = true, o = "hsv") : Y(e.h) && Y(e.s) && Y(e.l) && (r = ue(e.s), n = ue(e.l), a = qe(e.h, r, n), i = true, o = "hsl"), e.hasOwnProperty("a") && (t = e.a)), t = Te(t), {
    ok: i,
    format: e.format || o,
    r: Math.min(255, Math.max(a.r, 0)),
    g: Math.min(255, Math.max(a.g, 0)),
    b: Math.min(255, Math.max(a.b, 0)),
    a: t
  };
}
function Ye(e, a, t) {
  return {
    r: L(e, 255) * 255,
    g: L(a, 255) * 255,
    b: L(t, 255) * 255
  };
}
function Me(e, a, t) {
  e = L(e, 255), a = L(a, 255), t = L(t, 255);
  var r = Math.max(e, a, t), l = Math.min(e, a, t), n, i, o = (r + l) / 2;
  if (r == l)
    n = i = 0;
  else {
    var f = r - l;
    switch (i = o > 0.5 ? f / (2 - r - l) : f / (r + l), r) {
      case e:
        n = (a - t) / f + (a < t ? 6 : 0);
        break;
      case a:
        n = (t - e) / f + 2;
        break;
      case t:
        n = (e - a) / f + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: i,
    l: o
  };
}
function qe(e, a, t) {
  var r, l, n;
  e = L(e, 360), a = L(a, 100), t = L(t, 100);
  function i(s, u, b) {
    return b < 0 && (b += 1), b > 1 && (b -= 1), b < 1 / 6 ? s + (u - s) * 6 * b : b < 1 / 2 ? u : b < 2 / 3 ? s + (u - s) * (2 / 3 - b) * 6 : s;
  }
  if (a === 0)
    r = l = n = t;
  else {
    var o = t < 0.5 ? t * (1 + a) : t + a - t * a, f = 2 * t - o;
    r = i(f, o, e + 1 / 3), l = i(f, o, e), n = i(f, o, e - 1 / 3);
  }
  return {
    r: r * 255,
    g: l * 255,
    b: n * 255
  };
}
function Re(e, a, t) {
  e = L(e, 255), a = L(a, 255), t = L(t, 255);
  var r = Math.max(e, a, t), l = Math.min(e, a, t), n, i, o = r, f = r - l;
  if (i = r === 0 ? 0 : f / r, r == l)
    n = 0;
  else {
    switch (r) {
      case e:
        n = (a - t) / f + (a < t ? 6 : 0);
        break;
      case a:
        n = (t - e) / f + 2;
        break;
      case t:
        n = (e - a) / f + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: i,
    v: o
  };
}
function We(e, a, t) {
  e = L(e, 360) * 6, a = L(a, 100), t = L(t, 100);
  var r = Math.floor(e), l = e - r, n = t * (1 - a), i = t * (1 - l * a), o = t * (1 - (1 - l) * a), f = r % 6, s = [t, i, n, n, o, t][f], u = [o, t, t, i, n, n][f], b = [n, n, o, t, t, i][f];
  return {
    r: s * 255,
    g: u * 255,
    b: b * 255
  };
}
function He(e, a, t, r) {
  var l = [z(Math.round(e).toString(16)), z(Math.round(a).toString(16)), z(Math.round(t).toString(16))];
  return r && l[0].charAt(0) == l[0].charAt(1) && l[1].charAt(0) == l[1].charAt(1) && l[2].charAt(0) == l[2].charAt(1) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) : l.join("");
}
function Ze(e, a, t, r, l) {
  var n = [z(Math.round(e).toString(16)), z(Math.round(a).toString(16)), z(Math.round(t).toString(16)), z(Ie(r))];
  return l && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) && n[3].charAt(0) == n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}
function Ve(e, a, t, r) {
  var l = [z(Ie(r)), z(Math.round(e).toString(16)), z(Math.round(a).toString(16)), z(Math.round(t).toString(16))];
  return l.join("");
}
g.equals = function(e, a) {
  return !e || !a ? false : g(e).toRgbString() == g(a).toRgbString();
};
g.random = function() {
  return g.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function Je(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = g(e).toHsl();
  return t.s -= a / 100, t.s = ge(t.s), g(t);
}
function Qe(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = g(e).toHsl();
  return t.s += a / 100, t.s = ge(t.s), g(t);
}
function et(e) {
  return g(e).desaturate(100);
}
function tt(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = g(e).toHsl();
  return t.l += a / 100, t.l = ge(t.l), g(t);
}
function at(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = g(e).toRgb();
  return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(a / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(a / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(a / 100)))), g(t);
}
function lt(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = g(e).toHsl();
  return t.l -= a / 100, t.l = ge(t.l), g(t);
}
function nt(e, a) {
  var t = g(e).toHsl(), r = (t.h + a) % 360;
  return t.h = r < 0 ? 360 + r : r, g(t);
}
function rt(e) {
  var a = g(e).toHsl();
  return a.h = (a.h + 180) % 360, g(a);
}
function Be(e, a) {
  if (isNaN(a) || a <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var t = g(e).toHsl(), r = [g(e)], l = 360 / a, n = 1; n < a; n++)
    r.push(g({
      h: (t.h + n * l) % 360,
      s: t.s,
      l: t.l
    }));
  return r;
}
function ot(e) {
  var a = g(e).toHsl(), t = a.h;
  return [g(e), g({
    h: (t + 72) % 360,
    s: a.s,
    l: a.l
  }), g({
    h: (t + 216) % 360,
    s: a.s,
    l: a.l
  })];
}
function st(e, a, t) {
  a = a || 6, t = t || 30;
  var r = g(e).toHsl(), l = 360 / t, n = [g(e)];
  for (r.h = (r.h - (l * a >> 1) + 720) % 360; --a; )
    r.h = (r.h + l) % 360, n.push(g(r));
  return n;
}
function it(e, a) {
  a = a || 6;
  for (var t = g(e).toHsv(), r = t.h, l = t.s, n = t.v, i = [], o = 1 / a; a--; )
    i.push(g({
      h: r,
      s: l,
      v: n
    })), n = (n + o) % 1;
  return i;
}
g.mix = function(e, a, t) {
  t = t === 0 ? 0 : t || 50;
  var r = g(e).toRgb(), l = g(a).toRgb(), n = t / 100, i = {
    r: (l.r - r.r) * n + r.r,
    g: (l.g - r.g) * n + r.g,
    b: (l.b - r.b) * n + r.b,
    a: (l.a - r.a) * n + r.a
  };
  return g(i);
};
g.readability = function(e, a) {
  var t = g(e), r = g(a);
  return (Math.max(t.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(t.getLuminance(), r.getLuminance()) + 0.05);
};
g.isReadable = function(e, a, t) {
  var r = g.readability(e, a), l, n;
  switch (n = false, l = vt(t), l.level + l.size) {
    case "AAsmall":
    case "AAAlarge":
      n = r >= 4.5;
      break;
    case "AAlarge":
      n = r >= 3;
      break;
    case "AAAsmall":
      n = r >= 7;
      break;
  }
  return n;
};
g.mostReadable = function(e, a, t) {
  var r = null, l = 0, n, i, o, f;
  t = t || {}, i = t.includeFallbackColors, o = t.level, f = t.size;
  for (var s = 0; s < a.length; s++)
    n = g.readability(e, a[s]), n > l && (l = n, r = g(a[s]));
  return g.isReadable(e, r, {
    level: o,
    size: f
  }) || !i ? r : (t.includeFallbackColors = false, g.mostReadable(e, ["#fff", "#000"], t));
};
var xe = g.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var ut = g.hexNames = dt(xe);
function dt(e) {
  var a = {};
  for (var t in e)
    e.hasOwnProperty(t) && (a[e[t]] = t);
  return a;
}
function Te(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function L(e, a) {
  ct(e) && (e = "100%");
  var t = ft(e);
  return e = Math.min(a, Math.max(0, parseFloat(e))), t && (e = parseInt(e * a, 10) / 100), Math.abs(e - a) < 1e-6 ? 1 : e % a / parseFloat(a);
}
function ge(e) {
  return Math.min(1, Math.max(0, e));
}
function P(e) {
  return parseInt(e, 16);
}
function ct(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function ft(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function z(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function ue(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function Ie(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Le(e) {
  return P(e) / 255;
}
var K = function() {
  var e = "[-\\+]?\\d+%?", a = "[-\\+]?\\d*\\.\\d+%?", t = "(?:" + a + ")|(?:" + e + ")", r = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?", l = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(t),
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + l),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + l),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + l),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Y(e) {
  return !!K.CSS_UNIT.exec(e);
}
function ht(e) {
  e = e.replace(ze, "").replace(je, "").toLowerCase();
  var a = false;
  if (xe[e])
    e = xe[e], a = true;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var t;
  return (t = K.rgb.exec(e)) ? {
    r: t[1],
    g: t[2],
    b: t[3]
  } : (t = K.rgba.exec(e)) ? {
    r: t[1],
    g: t[2],
    b: t[3],
    a: t[4]
  } : (t = K.hsl.exec(e)) ? {
    h: t[1],
    s: t[2],
    l: t[3]
  } : (t = K.hsla.exec(e)) ? {
    h: t[1],
    s: t[2],
    l: t[3],
    a: t[4]
  } : (t = K.hsv.exec(e)) ? {
    h: t[1],
    s: t[2],
    v: t[3]
  } : (t = K.hsva.exec(e)) ? {
    h: t[1],
    s: t[2],
    v: t[3],
    a: t[4]
  } : (t = K.hex8.exec(e)) ? {
    r: P(t[1]),
    g: P(t[2]),
    b: P(t[3]),
    a: Le(t[4]),
    format: a ? "name" : "hex8"
  } : (t = K.hex6.exec(e)) ? {
    r: P(t[1]),
    g: P(t[2]),
    b: P(t[3]),
    format: a ? "name" : "hex"
  } : (t = K.hex4.exec(e)) ? {
    r: P(t[1] + "" + t[1]),
    g: P(t[2] + "" + t[2]),
    b: P(t[3] + "" + t[3]),
    a: Le(t[4] + "" + t[4]),
    format: a ? "name" : "hex8"
  } : (t = K.hex3.exec(e)) ? {
    r: P(t[1] + "" + t[1]),
    g: P(t[2] + "" + t[2]),
    b: P(t[3] + "" + t[3]),
    format: a ? "name" : "hex"
  } : false;
}
function vt(e) {
  var a, t;
  return e = e || {
    level: "AA",
    size: "small"
  }, a = (e.level || "AA").toUpperCase(), t = (e.size || "small").toLowerCase(), a !== "AA" && a !== "AAA" && (a = "AA"), t !== "small" && t !== "large" && (t = "small"), {
    level: a,
    size: t
  };
}
var Ee = (e, a, t = false) => {
  if (t)
    switch (a) {
      case "rgb":
        return e.toRgb();
      case "prgb":
        return e.toPercentageRgb();
      case "hsl":
        return e.toHsl();
      case "hsv":
        return e.toHsv();
      default:
        return null;
    }
  else {
    let r = a;
    a === "hex" && e.getAlpha() < 1 && (r = "hex8");
    let l = e.toString(r);
    try {
      l = JSON.parse(l);
    } catch {
    }
    return l;
  }
};
var ye = (e, a) => !!(Object.prototype.hasOwnProperty.call(e, a) && typeof e[a] < "u");
var ve = (e) => typeof e > "u";
var I = ["update:tinyColor", "update:modelValue", "input"];
function U(e, a, t) {
  let r, l;
  const n = computed({
    get: () => {
      const { modelValue: o, tinyColor: f, value: s } = e, u = f ?? o ?? s;
      return ve(l) && (ve(s) || (l = g(s).getFormat()), ve(o) || (l = g(o).getFormat())), ve(r) && (typeof s == "object" && !(s instanceof g) && (r = true), typeof o == "object" && (r = true)), g(u);
    },
    set: (o) => {
      i(o);
    }
  }), i = (o) => {
    const f = g(o);
    if (ye(e, "tinyColor") && a("update:tinyColor", f), ye(e, "modelValue")) {
      const s = Ee(f, l, r);
      a("update:modelValue", s);
    }
    if (ye(e, "value")) {
      const s = Ee(f, l, r);
      a("input", s);
    }
  };
  return n;
}
var Ue = (e) => {
  var _a2, _b, _c, _d;
  const a = { x: 0, y: 0 };
  return e instanceof MouseEvent && (a.x = e.pageX, a.y = e.pageY), typeof TouchEvent < "u" && e instanceof TouchEvent && (a.x = ((_a2 = e.touches) == null ? void 0 : _a2[0]) ? e.touches[0].pageX : ((_b = e.changedTouches) == null ? void 0 : _b[0]) ? e.changedTouches[0].pageX : 0, a.y = ((_c = e.touches) == null ? void 0 : _c[0]) ? e.touches[0].pageY : ((_d = e.changedTouches) == null ? void 0 : _d[0]) ? e.changedTouches[0].pageY : 0), a;
};
var bt = () => {
  const e = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || 0, a = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  return { x: e, y: a };
};
var Pe = (e) => {
  const { x: a, y: t } = bt(), r = e.getBoundingClientRect();
  return {
    x: r.left + a,
    y: r.top + t
  };
};
var Fe = (e) => e.code === "ArrowUp" || e.keyCode === 38 ? "up" : e.code === "ArrowDown" || e.keyCode === 40 ? "down" : e.code === "ArrowLeft" || e.keyCode === 37 ? "left" : e.code === "ArrowRight" || e.keyCode === 39 ? "right" : null;
function pt(e) {
  const a = e.toString();
  return a.indexOf(".") !== -1 ? a.split(".")[1].length : 0;
}
function Ce(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
var Ge = (e, a = 20) => {
  let t, r, l;
  return (...n) => {
    t ? (clearTimeout(r), r = setTimeout(() => {
      Date.now() - l >= a && (e(...n), l = Date.now());
    }, Math.max(a - (Date.now() - l), 0))) : (e(...n), l = Date.now(), t = true);
  };
};
var gt = ["aria-valuetext"];
var mt = defineComponent({
  __name: "SaturationSlider",
  props: {
    hue: {},
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: ["change"].concat(I),
  setup(e, { emit: a }) {
    const t = a, r = e, l = ref(0), n = U(r, t), i = computed(() => n.value.toHsv()), o = computed(() => r.hue ?? i.value.h), f = computed(() => `hsl(${o.value}, 100%, 50%)`), s = computed(() => -(i.value.v * 100) + 1 + 100 + "%"), u = computed(() => i.value.v <= 0.01 ? l.value * 100 + "%" : i.value.s * 100 + "%"), b = ref(null);
    function _(h) {
      const v = b.value;
      if (!v)
        return;
      const B = v.clientWidth, Z = v.clientHeight, { x: ne, y: R } = Pe(v), { x, y: F } = Ue(h), he = Ce(x - ne, 0, B), ie = Ce(F - R, 0, Z), Ae = he / B, Oe = Ce(1 - ie / Z, 0, 1);
      l.value = Ae;
      let me = Math.round(Ae * 100), _e = Math.round(Oe * 100);
      me === 1 && (me = 0.01), _e === 1 && (_e = 0.01), m({
        h: o.value,
        s: me,
        v: _e,
        a: i.value.a
      });
    }
    function m(h) {
      n.value = h;
    }
    const c = Ge(_, 20);
    function S(h) {
      h.preventDefault(), h.type.startsWith("mouse") ? (window.addEventListener("mousemove", c), window.addEventListener("mouseup", c), window.addEventListener("mouseup", k)) : h.type.startsWith("touch") && (window.addEventListener("touchmove", c), window.addEventListener("touchend", c), window.addEventListener("touchend", k));
    }
    function k() {
      V();
    }
    function V() {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", c), window.removeEventListener("mouseup", k), window.removeEventListener("touchmove", c), window.removeEventListener("touchend", c), window.removeEventListener("touchend", k);
    }
    function $(h) {
      switch (h.preventDefault(), Fe(h)) {
        case "left": {
          const B = i.value.s - 0.01;
          m({
            ...i.value,
            s: B >= 0 ? B : 0
          });
          break;
        }
        case "right": {
          const B = i.value.s + 0.01;
          m({
            ...i.value,
            s: B > 1 ? 1 : B
          });
          break;
        }
        case "up": {
          const B = i.value.v + 0.01;
          m({
            ...i.value,
            v: B > 1 ? 1 : B
          });
          break;
        }
        case "down": {
          const B = i.value.v - 0.01;
          m({
            ...i.value,
            v: B < 0 ? 0 : B
          });
          break;
        }
      }
    }
    return onUnmounted(() => {
      V();
    }), (h, v) => (openBlock(), createElementBlock("div", {
      class: "vc-saturation-slider bg",
      style: normalizeStyle({ background: f.value }),
      ref_key: "containerRef",
      ref: b,
      onMousedown: S,
      onTouchstart: S,
      role: "application",
      "aria-label": "Saturation and brightness picker"
    }, [
      v[1] || (v[1] = createBaseVNode("div", { class: "bg white" }, null, -1)),
      v[2] || (v[2] = createBaseVNode("div", { class: "bg black" }, null, -1)),
      createBaseVNode("div", {
        class: "picker-wrap",
        style: normalizeStyle({ top: s.value, left: u.value }),
        role: "slider",
        tabindex: "0",
        "aria-valuemin": "0",
        "aria-valuemax": "1",
        "aria-label": "press arrow to change saturation or brightness",
        "aria-valuenow": "?",
        "aria-valuetext": `saturation: ${i.value.s.toFixed(0)}%, brightness: ${i.value.v.toFixed(0)}%`,
        onKeydown: $
      }, v[0] || (v[0] = [
        createBaseVNode("div", { class: "picker" }, null, -1)
      ]), 44, gt)
    ], 36));
  }
});
var N = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [r, l] of a)
    t[r] = l;
  return t;
};
var Se = N(mt, [["__scopeId", "data-v-4d048d6e"]]);
var $e = (e) => typeof e < "u";
var _t = { class: "vc-base-slider" };
var yt = {
  key: 0,
  class: "background"
};
var Ct = ["aria-label", "aria-valuemax", "aria-valuenow"];
var kt = defineComponent({
  __name: "BaseSlider",
  props: {
    direction: { default: "horizontal" },
    modelValue: { default: 0 },
    value: { default: 0 },
    max: { default: 100 },
    step: {},
    ariaLabel: { default: "slider" }
  },
  emits: ["input", "update:modelValue"],
  setup(e, { emit: a }) {
    const t = e, r = a, l = computed(() => t.modelValue ?? t.value), n = computed(() => {
      let c = l.value / t.max;
      return t.direction === "vertical" && (c = 1 - c), 100 * c + "%";
    }), i = ref(null);
    function o(c) {
      $e(c) && (r("input", c), r("update:modelValue", c));
    }
    function f(c) {
      const { direction: S, max: k } = t, V = i.value;
      if (!V)
        return;
      const $ = V.clientWidth, h = V.clientHeight, { x: v, y: B } = Pe(V), { x: Z, y: ne } = Ue(c), R = Z - v, x = ne - B;
      let F;
      S === "vertical" ? x < 0 ? F = k : x > h ? F = 0 : F = (1 - x / h) * k : R < 0 ? F = 0 : R > $ ? F = k : F = R / $ * k, o(F);
    }
    const s = Ge(f);
    function u(c) {
      f(c), c.type.startsWith("mouse") ? (window.addEventListener("mousemove", s), window.addEventListener("mouseup", b)) : (window.addEventListener("touchmove", s), window.addEventListener("touchend", b));
    }
    function b() {
      _();
    }
    function _() {
      window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", b), window.removeEventListener("touchmove", s), window.removeEventListener("touchend", b);
    }
    function m(c) {
      c.preventDefault();
      const { direction: S, max: k } = t, V = Fe(c), $ = t.step ?? k / 100, h = l.value;
      let v;
      switch (V) {
        case "left": {
          if (S !== "horizontal")
            return;
          v = h - $ < 0 ? 0 : h - $;
          break;
        }
        case "right": {
          if (S !== "horizontal")
            return;
          v = h + $ > k ? k : h + $;
          break;
        }
        case "down": {
          if (S !== "vertical")
            return;
          v = h - $ < 0 ? 0 : h - $;
          break;
        }
        case "up": {
          if (S !== "vertical")
            return;
          v = h + $ > k ? k : h + $;
          break;
        }
      }
      o(v);
    }
    return onUnmounted(() => {
      _();
    }), (c, S) => (openBlock(), createElementBlock("div", _t, [
      c.$slots.background ? (openBlock(), createElementBlock("div", yt, [
        renderSlot(c.$slots, "background", {}, void 0, true)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass({
          slider: true,
          horizontal: c.direction === "horizontal",
          vertical: c.direction === "vertical"
        }),
        ref_key: "containerRef",
        ref: i,
        onMousedown: u,
        onTouchstart: u,
        role: "slider",
        "aria-label": c.ariaLabel,
        "aria-valuemax": c.max,
        "aria-valuemin": "0",
        "aria-valuenow": l.value.toFixed(1),
        tabindex: "0",
        onKeydown: m
      }, [
        createBaseVNode("div", {
          class: "picker-wrap",
          style: normalizeStyle({
            left: c.direction === "horizontal" ? n.value : 0,
            top: c.direction === "vertical" ? n.value : 0
          }),
          role: "presentation"
        }, [
          renderSlot(c.$slots, "picker", {}, () => [
            S[0] || (S[0] = createBaseVNode("div", { class: "picker" }, null, -1))
          ], true)
        ], 4)
      ], 42, Ct)
    ]));
  }
});
var q = N(kt, [["__scopeId", "data-v-972b0fad"]]);
var wt = defineComponent({
  __name: "HueSlider",
  props: {
    direction: { default: "horizontal" },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    useCssVars((u) => ({
      "2f44f39d": l.value
    }));
    const t = e, r = a, l = computed(() => `linear-gradient(to ${t.direction === "horizontal" ? "right" : "top"}, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`), n = computed(() => {
      const u = Number(t.modelValue);
      return Number.isNaN(u) ? 0 : u;
    }), i = ref();
    watch(n, (u, b) => {
      u !== 0 && u - b > 0 && (i.value = "right"), u !== 0 && u - b < 0 && (i.value = "left");
    });
    const o = computed(() => t.direction === "vertical" ? n.value === 0 && i.value === "right" ? 0 : n.value : t.direction === "horizontal" ? n.value === 0 && i.value === "right" ? 360 : n.value : 0);
    function f(u) {
      s(Math.round(u));
    }
    function s(u) {
      r("update:modelValue", u);
    }
    return (u, b) => (openBlock(), createBlock(q, {
      class: "vc-hue-slider",
      max: 360,
      step: 1,
      modelValue: o.value,
      direction: u.direction,
      "onUpdate:modelValue": f,
      "aria-label": "Hue"
    }, {
      background: withCtx(() => b[0] || (b[0] = [
        createBaseVNode("div", { class: "gradient" }, null, -1)
      ])),
      picker: withCtx(() => [
        renderSlot(u.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["modelValue", "direction"]));
  }
});
var le = N(wt, [["__scopeId", "data-v-5367c985"]]);
var xt = defineComponent({
  __name: "CheckerboardBG",
  props: {
    size: { default: 8 },
    white: { default: "#fff" },
    grey: { default: "#e6e6e6" }
  },
  setup(e) {
    const a = e;
    function t(n, i, o) {
      if (typeof document > "u")
        return null;
      var f = document.createElement("canvas");
      f.width = f.height = o * 2;
      var s = f.getContext("2d");
      return s ? (s.fillStyle = n, s.fillRect(0, 0, f.width, f.height), s.fillStyle = i, s.fillRect(0, 0, o, o), s.translate(o, o), s.fillRect(0, 0, o, o), f.toDataURL()) : null;
    }
    function r(n, i, o) {
      return t(n, i, o);
    }
    const l = computed(() => `url(${r(a.white, a.grey, a.size)})`);
    return (n, i) => (openBlock(), createElementBlock("div", {
      class: "vc-checkerboard",
      style: normalizeStyle({ backgroundImage: l.value })
    }, null, 4));
  }
});
var pe = N(xt, [["__scopeId", "data-v-37d61ccd"]]);
var $t = defineComponent({
  __name: "AlphaSlider",
  props: {
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const l = U(e, a), n = computed(() => {
      const f = l.value.toRgb(), s = [f.r, f.g, f.b].join(",");
      return "linear-gradient(to right, rgba(" + s + ", 0) 0%, rgba(" + s + ", 1) 100%)";
    }), i = computed(() => l.value.getAlpha());
    function o(f) {
      l.value = l.value.setAlpha(f).clone();
    }
    return (f, s) => (openBlock(), createBlock(q, {
      class: "vc-alpha-slider",
      modelValue: i.value,
      max: 1,
      "aria-label": "Transparency",
      "onUpdate:modelValue": o
    }, {
      background: withCtx(() => [
        createVNode(pe),
        createBaseVNode("div", {
          class: "gradient",
          style: normalizeStyle({ background: n.value })
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
var oe = N($t, [["__scopeId", "data-v-07dd346b"]]);
var Ft = { class: "vc-editable-input" };
var St = ["value", "aria-label"];
var At = {
  key: 0,
  class: "vc-input-desc",
  "aria-hidden": "true"
};
var Mt = defineComponent({
  __name: "EditableInput",
  props: {
    value: {},
    label: {},
    desc: {},
    max: {},
    min: {},
    step: { default: 1 },
    a11y: {}
  },
  emits: ["change", "blur"],
  setup(e, { emit: a }) {
    var _a2;
    const t = e, r = a, l = ((_a2 = t.a11y) == null ? void 0 : _a2.label) ?? t.label, n = `input__label__${l}__${Math.random().toString().slice(2, 5)}`;
    function i(u) {
      const { min: b, max: _ } = t;
      if ($e(_) && +u > _) {
        r("change", _);
        return;
      }
      if ($e(b) && +u < b) {
        r("change", b);
        return;
      }
      r("change", u);
    }
    function o(u) {
      var _a3;
      i((_a3 = u.target) == null ? void 0 : _a3.value);
    }
    function f(u) {
      r("blur", u);
    }
    function s(u) {
      let b = Number(t.value);
      if (!isNaN(b)) {
        let _ = t.step;
        const m = pt(_), c = Fe(u);
        c === "up" && (i((b + _).toFixed(m)), u.preventDefault()), c === "down" && (i((b - _).toFixed(m)), u.preventDefault());
      }
    }
    return (u, b) => (openBlock(), createElementBlock("div", Ft, [
      createBaseVNode("input", {
        class: "vc-input-input",
        value: t.value,
        onKeydown: s,
        onInput: o,
        onBlur: f,
        "aria-label": unref(l),
        id: n
      }, null, 40, St),
      createBaseVNode("label", {
        for: n,
        class: "vc-input-label",
        "aria-hidden": "true"
      }, toDisplayString(t.label), 1),
      u.desc ? (openBlock(), createElementBlock("span", At, toDisplayString(u.desc), 1)) : createCommentVNode("", true)
    ]));
  }
});
var M = N(Mt, [["__scopeId", "data-v-9c267b2b"]]);
var De = (e) => g(e).isValid();
var Rt = (e) => g(e).getAlpha() === 0;
var fe = defineComponent({
  __name: "HexInput",
  props: {
    value: {},
    label: {},
    desc: {},
    a11y: {},
    type: { default: "hex" },
    withHash: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(e, { emit: a }) {
    const t = e, r = a, l = {
      label: t.type === "hex" ? "Hex" : "Hex with transparency",
      ...t.a11y
    }, n = (s, u = "hex") => {
      let b = "";
      return u === "hex" && (b = g(s).toHexString()), u === "hex8" && (b = g(s).toHex8String()), t.withHash !== true && (b = b.replace("#", "")), b;
    }, i = ref(n(t.value, t.type));
    watch(
      () => t.value,
      (s) => {
        g.equals(s, i.value) || (i.value = n(s, t.type));
      }
    );
    const o = (s) => {
      if (!s)
        return;
      i.value = s;
      let u = s.length;
      s[0] === "#" && (u = u - 1), !(t.type === "hex" && u % 3 !== 0 && u !== 8) && (t.type === "hex8" && u !== 8 || De(s) && r("change", s));
    }, f = () => {
      let s = i.value.length;
      i.value[0] === "#" && (s = s - 1), !(De(i.value) && (t.type === "hex" && s === 6 || t.type === "hex8" && s === 8)) && (i.value = n(t.value, t.type));
    };
    return (s, u) => (openBlock(), createBlock(M, {
      label: t.label,
      a11y: l,
      value: i.value,
      onChange: o,
      onBlur: f
    }, null, 8, ["label", "value"]));
  }
});
function Ht() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return e.charAt(Math.floor(Math.random() * e.length)) + e.charAt(Math.floor(Math.random() * e.length));
}
var se = (e) => {
  const a = ref(0), t = `__from__vc__hue__${Ht()}`;
  return watch(e, (l) => {
    if (l[t])
      return;
    const n = l.toHsl().h;
    n === 0 && a.value !== 0 || (a.value = n);
  }, { immediate: true }), { hueRef: a, updateHueRef: (l) => {
    const n = g({
      ...e.value.toHsl(),
      h: l
    });
    n[t] = true, e.value = n, a.value = l;
  } };
};
var Vt = { class: "saturation" };
var Bt = { class: "body" };
var Lt = { class: "controls" };
var Et = { class: "color-wrap" };
var Dt = ["aria-label"];
var Nt = { class: "sliders" };
var Tt = { class: "hue-wrap" };
var It = {
  key: 0,
  class: "alpha-wrap"
};
var Ut = {
  key: 0,
  class: "fieldsWrap",
  "data-testid": "fields"
};
var Pt = {
  key: 0,
  class: "fields"
};
var Gt = { class: "field" };
var Ot = { class: "field" };
var Kt = { class: "field" };
var zt = {
  key: 0,
  class: "field"
};
var jt = {
  key: 1,
  class: "fields"
};
var Xt = { class: "field" };
var Yt = {
  key: 2,
  class: "fields"
};
var qt = { class: "field" };
var Wt = { class: "field" };
var Zt = { class: "field" };
var Jt = {
  key: 0,
  class: "field"
};
var Qt = {
  class: "toggle-icon",
  role: "presentation"
};
var ea = {
  style: { width: "24px", height: "24px" },
  viewBox: "0 0 24 24"
};
var ta = {
  class: "toggle-icon_highlighted",
  role: "presentation"
};
var aa = defineComponent({
  __name: "ChromePicker",
  props: {
    disableAlpha: { type: Boolean },
    disableFields: { type: Boolean },
    formats: { default: () => ["rgb", "hex", "hsl"] },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const t = e, l = U(t, a), { hueRef: n, updateHueRef: i } = se(l), o = ref(0);
    let f = ref(false);
    const s = computed(() => {
      const R = l.value.toRgb();
      return "rgba(" + [R.r, R.g, R.b, l.value.getAlpha()].join(",") + ")";
    }), u = computed(() => {
      const { h: R, s: x, l: F } = l.value.toHsl();
      return {
        h: R.toFixed(),
        s: `${(x * 100).toFixed()}%`,
        l: `${(F * 100).toFixed()}%`
      };
    }), b = computed(() => l.value.toRgb()), _ = computed(() => Number(l.value.getAlpha().toFixed(2))), m = /* @__PURE__ */ new Set(["hex", "hsl", "rgb"]), c = computed(() => {
      const R = /* @__PURE__ */ new Set(), x = [], F = t.formats;
      for (const he of F)
        if (m.has(he)) {
          const ie = he;
          R.has(ie) || (R.add(ie), x.push(ie));
        }
      return x;
    }), S = computed(() => {
      const { disableFields: R, formats: x } = t;
      return !(R === true || !Array.isArray(x) || c.value.length === 0);
    }), k = (R) => c.value.includes(R), V = (R) => c.value.indexOf(R), $ = (R) => {
      l.value = R;
    }, h = (R, x) => {
      if (!x || isNaN(Number(x)))
        return;
      const F = { [R]: x };
      l.value = {
        ...b.value,
        a: _.value,
        ...F
      };
    }, v = (R, x) => {
      if (!x)
        return;
      const F = { [R]: +x };
      (R === "s" || R === "l") && (F[R] = +x.replace("%", "") / 100), l.value = {
        ...l.value.toHsl(),
        a: _.value,
        ...F
      };
    }, B = () => {
      if (o.value === c.value.length - 1) {
        o.value = 0;
        return;
      }
      o.value++;
    }, Z = () => {
      f.value = true;
    }, ne = () => {
      f.value = false;
    };
    return (R, x) => (openBlock(), createElementBlock("div", {
      role: "application",
      "aria-label": "Chrome Color Picker",
      class: normalizeClass(["vc-chrome-picker", R.disableAlpha ? "alpha-disabled" : ""])
    }, [
      createBaseVNode("div", Vt, [
        createVNode(Se, {
          tinyColor: unref(l),
          "onUpdate:tinyColor": x[0] || (x[0] = (F) => isRef(l) ? l.value = F : null),
          hue: unref(n)
        }, null, 8, ["tinyColor", "hue"])
      ]),
      createBaseVNode("div", Bt, [
        createBaseVNode("div", Lt, [
          createBaseVNode("div", Et, [
            createBaseVNode("div", {
              class: "active-color",
              style: normalizeStyle({ backgroundColor: s.value }),
              role: "presentation",
              "aria-live": "polite",
              "aria-label": `Current color is ${s.value}`
            }, null, 12, Dt),
            t.disableAlpha ? createCommentVNode("", true) : (openBlock(), createBlock(pe, { key: 0 }))
          ]),
          createBaseVNode("div", Nt, [
            createBaseVNode("div", Tt, [
              createVNode(le, {
                modelValue: unref(n),
                "onUpdate:modelValue": unref(i)
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            t.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", It, [
              createVNode(oe, {
                tinyColor: unref(l),
                "onUpdate:tinyColor": x[1] || (x[1] = (F) => isRef(l) ? l.value = F : null)
              }, null, 8, ["tinyColor"])
            ]))
          ])
        ]),
        S.value ? (openBlock(), createElementBlock("div", Ut, [
          k("rgb") ? withDirectives((openBlock(), createElementBlock("div", Pt, [
            createBaseVNode("div", Gt, [
              createVNode(M, {
                label: "r",
                value: b.value.r,
                onChange: x[2] || (x[2] = (F) => h("r", F)),
                a11y: { label: "Red" }
              }, null, 8, ["value"])
            ]),
            createBaseVNode("div", Ot, [
              createVNode(M, {
                label: "g",
                value: b.value.g,
                onChange: x[3] || (x[3] = (F) => h("g", F)),
                a11y: { label: "Green" }
              }, null, 8, ["value"])
            ]),
            createBaseVNode("div", Kt, [
              createVNode(M, {
                label: "b",
                value: b.value.b,
                onChange: x[4] || (x[4] = (F) => h("b", F)),
                a11y: { label: "Blue" }
              }, null, 8, ["value"])
            ]),
            R.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", zt, [
              createVNode(M, {
                label: "a",
                value: _.value,
                step: 0.01,
                max: 1,
                onChange: x[5] || (x[5] = (F) => h("a", F)),
                a11y: { label: "Transparency" }
              }, null, 8, ["value"])
            ]))
          ], 512)), [
            [vShow, o.value === V("rgb")]
          ]) : createCommentVNode("", true),
          k("hex") ? withDirectives((openBlock(), createElementBlock("div", jt, [
            createBaseVNode("div", Xt, [
              createVNode(fe, {
                type: _.value === 1 ? "hex" : "hex8",
                label: "hex",
                value: unref(l).toHex8String(),
                onChange: $,
                "with-hash": true
              }, null, 8, ["type", "value"])
            ])
          ], 512)), [
            [vShow, o.value === V("hex")]
          ]) : createCommentVNode("", true),
          k("hsl") ? withDirectives((openBlock(), createElementBlock("div", Yt, [
            createBaseVNode("div", qt, [
              createVNode(M, {
                label: "h",
                value: unref(n).toFixed(),
                onChange: x[6] || (x[6] = (F) => v("h", F)),
                a11y: { label: "Hue" }
              }, null, 8, ["value"])
            ]),
            createBaseVNode("div", Wt, [
              createVNode(M, {
                label: "s",
                value: u.value.s,
                onChange: x[7] || (x[7] = (F) => v("s", F)),
                a11y: { label: "Saturation" }
              }, null, 8, ["value"])
            ]),
            createBaseVNode("div", Zt, [
              createVNode(M, {
                label: "l",
                value: u.value.l,
                onChange: x[8] || (x[8] = (F) => v("l", F)),
                a11y: { label: "Lightness" }
              }, null, 8, ["value"])
            ]),
            R.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Jt, [
              createVNode(M, {
                label: "a",
                value: _.value,
                step: 0.01,
                max: 1,
                onChange: x[9] || (x[9] = (F) => v("a", F)),
                a11y: { label: "Transparency" }
              }, null, 8, ["value"])
            ]))
          ], 512)), [
            [vShow, o.value === V("hsl")]
          ]) : createCommentVNode("", true),
          c.value.length > 1 ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "toggle-btn",
            onClick: B,
            onKeydown: [
              withKeys(B, ["enter"]),
              withKeys(B, ["space"])
            ],
            onMouseover: Z,
            onMouseenter: Z,
            onMouseout: ne,
            onFocus: Z,
            onBlur: ne,
            role: "button",
            "aria-label": "Change color format",
            tabindex: "0"
          }, [
            createBaseVNode("div", Qt, [
              (openBlock(), createElementBlock("svg", ea, x[10] || (x[10] = [
                createBaseVNode("path", {
                  fill: "currentColor",
                  d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
                }, null, -1)
              ])))
            ]),
            withDirectives(createBaseVNode("div", ta, null, 512), [
              [vShow, unref(f)]
            ])
          ], 32)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])
    ], 2));
  }
});
var gn = N(aa, [["__scopeId", "data-v-dfdde7e0"]]);
var la = {
  class: "vc-compact-picker",
  role: "application",
  "aria-label": "Compact color picker",
  tabindex: "0"
};
var na = {
  class: "colors",
  role: "listbox",
  "aria-label": "Pick a color"
};
var ra = ["onClick", "aria-label", "aria-selected", "title", "onKeydown"];
var oa = { class: "dot" };
var sa = [
  "#4D4D4D",
  "#999999",
  "#FFFFFF",
  "#F44E3B",
  "#FE9200",
  "#FCDC00",
  "#DBDF00",
  "#A4DD00",
  "#68CCCA",
  "#73D8FF",
  "#AEA1FF",
  "#FDA1FF",
  "#333333",
  "#808080",
  "#CCCCCC",
  "#D33115",
  "#E27300",
  "#FCC400",
  "#B0BC00",
  "#68BC00",
  "#16A5A5",
  "#009CE0",
  "#7B64FF",
  "#FA28FF",
  "#000000",
  "#666666",
  "#B3B3B3",
  "#9F0500",
  "#C45100",
  "#FB9E00",
  "#808900",
  "#194D33",
  "#0C797D",
  "#0062B1",
  "#653294",
  "#AB149E"
];
var ia = defineComponent({
  __name: "CompactPicker",
  props: {
    palette: { default: () => sa },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: ["change"].concat(I),
  setup(e, { emit: a }) {
    const t = e, l = U(t, a), n = computed(() => l.value.toHexString().toUpperCase()), i = (o) => {
      l.value = o;
    };
    return (o, f) => (openBlock(), createElementBlock("div", la, [
      createBaseVNode("ul", na, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.palette, (s) => (openBlock(), createElementBlock("li", {
          key: s,
          class: normalizeClass({ "color-item_white": s === "#FFFFFF", "color-item": true }),
          style: normalizeStyle({ background: s }),
          onClick: (u) => i(s),
          role: "option",
          "aria-label": "color:" + s,
          "aria-selected": s.toUpperCase() === n.value,
          title: s,
          onKeydown: withKeys((u) => i(s), ["space"]),
          tabindex: "0"
        }, [
          withDirectives(createBaseVNode("div", oa, null, 512), [
            [vShow, s.toUpperCase() === n.value]
          ])
        ], 46, ra))), 128))
      ])
    ]));
  }
});
var mn = N(ia, [["__scopeId", "data-v-91d11fa7"]]);
var ua = {
  role: "application",
  "aria-label": "Grayscale color picker",
  class: "vc-grayscale-picker"
};
var da = {
  class: "colors",
  role: "listbox",
  "aria-label": "Select a grayscale color",
  tabindex: "0"
};
var ca = ["onClick", "aria-label", "aria-selected", "title", "onKeydown"];
var fa = { class: "dot" };
var ha = [
  "#FFFFFF",
  "#F2F2F2",
  "#E6E6E6",
  "#D9D9D9",
  "#CCCCCC",
  "#BFBFBF",
  "#B3B3B3",
  "#A6A6A6",
  "#999999",
  "#8C8C8C",
  "#808080",
  "#737373",
  "#666666",
  "#595959",
  "#4D4D4D",
  "#404040",
  "#333333",
  "#262626",
  "#0D0D0D",
  "#000000"
];
var va = defineComponent({
  __name: "GrayscalePicker",
  props: {
    palette: { default: () => ha },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: ["change"].concat(I),
  setup(e, { emit: a }) {
    const l = U(e, a), n = computed(() => l.value.toHexString().toUpperCase()), i = (o) => {
      l.value = o;
    };
    return (o, f) => (openBlock(), createElementBlock("div", ua, [
      createBaseVNode("ul", da, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.palette, (s) => (openBlock(), createElementBlock("li", {
          key: s,
          class: normalizeClass({ "color-item_white": s === "#FFFFFF", "color-item": true }),
          style: normalizeStyle({ background: s }),
          onClick: (u) => i(s),
          role: "option",
          "aria-label": "color:" + s,
          "aria-selected": s.toUpperCase() === n.value,
          title: s,
          onKeydown: withKeys((u) => i(s), ["space"]),
          tabindex: "0"
        }, [
          withDirectives(createBaseVNode("div", fa, null, 512), [
            [vShow, s.toUpperCase() === n.value]
          ])
        ], 46, ca))), 128))
      ])
    ]));
  }
});
var _n = N(va, [["__scopeId", "data-v-631223a5"]]);
var ba = {
  role: "application",
  "aria-label": "Material color inputs",
  class: "vc-material-picker"
};
var pa = { class: "rgb" };
var ga = { class: "color" };
var ma = { class: "color" };
var _a = { class: "color" };
var ya = defineComponent({
  __name: "MaterialPicker",
  props: {
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const l = U(e, a), n = computed(() => l.value.toRgb());
    function i(f) {
      l.value = f;
    }
    function o(f, s) {
      l.value = {
        ...n.value,
        [f]: s
      };
    }
    return (f, s) => (openBlock(), createElementBlock("div", ba, [
      createVNode(fe, {
        class: "hex",
        label: "hex",
        value: unref(l).toHexString(),
        style: normalizeStyle({ borderColor: unref(l).toHexString() }),
        onChange: i,
        "with-hash": true
      }, null, 8, ["value", "style"]),
      createBaseVNode("div", pa, [
        createBaseVNode("div", ga, [
          createVNode(M, {
            label: "r",
            value: n.value.r,
            onChange: s[0] || (s[0] = (u) => o("r", u)),
            a11y: { label: "Red" }
          }, null, 8, ["value"])
        ]),
        createBaseVNode("div", ma, [
          createVNode(M, {
            label: "g",
            value: n.value.g,
            onChange: s[1] || (s[1] = (u) => o("g", u)),
            a11y: { label: "Green" }
          }, null, 8, ["value"])
        ]),
        createBaseVNode("div", _a, [
          createVNode(M, {
            label: "b",
            value: n.value.b,
            onChange: s[2] || (s[2] = (u) => o("b", u)),
            a11y: { label: "Blue" }
          }, null, 8, ["value"])
        ])
      ])
    ]));
  }
});
var yn = N(ya, [["__scopeId", "data-v-8f86229c"]]);
var Ca = {
  class: "title",
  "aria-hidden": "true"
};
var ka = { class: "body" };
var wa = { class: "saturation" };
var xa = { class: "hue" };
var $a = { class: "preview" };
var Fa = {
  class: "preview-label",
  "aria-hidden": "true"
};
var Sa = { class: "preview-swatches" };
var Aa = ["aria-label"];
var Ma = ["aria-label"];
var Ra = {
  class: "preview-label",
  "aria-hidden": "true"
};
var Ha = {
  key: 0,
  class: "actions"
};
var Va = ["aria-label"];
var Ba = { class: "fields" };
var La = ["aria-label"];
var Ea = defineComponent({
  __name: "PhotoshopPicker",
  props: {
    title: { default: "Color picker" },
    disableFields: { type: Boolean, default: false },
    hasResetButton: { type: Boolean, default: false },
    okLabel: { default: "OK" },
    cancelLabel: { default: "Cancel" },
    resetLabel: { default: "Reset" },
    newLabel: { default: "new" },
    currentLabel: { default: "current" },
    currentColor: { default: "#fff" },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I.concat(["ok", "cancel", "reset"]),
  setup(e, { emit: a }) {
    const t = e, r = a, l = U(t, r), { hueRef: n, updateHueRef: i } = se(l), o = ref(t.currentColor), f = computed(() => l.value.toHsv()), s = computed(() => {
      const $ = l.value.toHexString();
      return $ && $.replace("#", "");
    }), u = computed(() => l.value.toRgb()), b = () => {
      l.value = o.value;
    }, _ = ($) => {
      l.value = $;
    }, m = ($, h) => {
      if (!h || isNaN(Number(h)))
        return;
      const v = { [$]: h };
      l.value = {
        ...u.value,
        ...v
      };
    }, c = ($, h) => {
      if (!h || isNaN(Number(h)))
        return;
      const v = { [$]: Number(h) };
      l.value = {
        ...f.value,
        ...v
      };
    }, S = () => {
      r("ok");
    }, k = () => {
      r("cancel");
    }, V = () => {
      r("reset");
    };
    return ($, h) => (openBlock(), createElementBlock("div", {
      role: "application",
      "aria-label": "PhotoShop color picker",
      class: normalizeClass(["vc-photoshop-picker", $.disableFields ? "fields_disabled" : ""])
    }, [
      createBaseVNode("div", Ca, toDisplayString($.title), 1),
      createBaseVNode("div", ka, [
        createBaseVNode("div", wa, [
          createVNode(Se, {
            tinyColor: unref(l),
            "onUpdate:tinyColor": h[0] || (h[0] = (v) => isRef(l) ? l.value = v : null),
            hue: unref(n)
          }, null, 8, ["tinyColor", "hue"])
        ]),
        createBaseVNode("div", xa, [
          createVNode(le, {
            direction: "vertical",
            modelValue: unref(n),
            "onUpdate:modelValue": unref(i)
          }, {
            default: withCtx(() => h[7] || (h[7] = [
              createBaseVNode("div", { class: "hue-picker" }, [
                createBaseVNode("i", { class: "hue-picker-left" }),
                createBaseVNode("i", { class: "hue-picker-right" })
              ], -1)
            ])),
            _: 1,
            __: [7]
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["controls", $.disableFields ? "controls_fields_disabled" : ""])
        }, [
          createBaseVNode("div", $a, [
            createBaseVNode("div", Fa, toDisplayString($.newLabel), 1),
            createBaseVNode("div", Sa, [
              createBaseVNode("div", {
                class: "preview-color",
                "aria-label": `New color is #${s.value}`,
                style: normalizeStyle({ background: `#${s.value}` })
              }, null, 12, Aa),
              createBaseVNode("div", {
                class: "preview-color",
                style: normalizeStyle({ background: o.value }),
                onClick: b,
                role: "button",
                "aria-label": `Current color is ${o.value}`,
                onKeydown: withKeys(b, ["space"]),
                tabindex: "0"
              }, null, 44, Ma)
            ]),
            createBaseVNode("div", Ra, toDisplayString($.currentLabel), 1)
          ]),
          $.disableFields ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ha, [
            createBaseVNode("div", {
              class: "action-btn",
              role: "button",
              "aria-label": "Click to apply new color",
              onClick: S,
              onKeydown: withKeys(b, ["space"]),
              tabindex: "0"
            }, toDisplayString($.okLabel), 33),
            createBaseVNode("div", {
              class: "action-btn",
              role: "button",
              "aria-label": $.cancelLabel,
              onClick: k,
              onKeydown: withKeys(b, ["space"]),
              tabindex: "0"
            }, toDisplayString($.cancelLabel), 41, Va),
            createBaseVNode("div", Ba, [
              createVNode(M, {
                label: "h",
                desc: "°",
                value: f.value.h.toFixed(),
                onChange: h[1] || (h[1] = (v) => c("h", v)),
                a11y: { label: "Hue" }
              }, null, 8, ["value"]),
              createVNode(M, {
                label: "s",
                desc: "%",
                value: (f.value.s * 100).toFixed(),
                min: 0,
                max: 100,
                onChange: h[2] || (h[2] = (v) => c("s", v)),
                a11y: { label: "Saturation" }
              }, null, 8, ["value"]),
              createVNode(M, {
                label: "v",
                desc: "%",
                value: (f.value.v * 100).toFixed(),
                min: 0,
                max: 100,
                onChange: h[3] || (h[3] = (v) => c("v", v)),
                a11y: { label: "Value" }
              }, null, 8, ["value"]),
              h[8] || (h[8] = createBaseVNode("div", { class: "fields-divider" }, null, -1)),
              createVNode(M, {
                label: "r",
                value: u.value.r,
                onChange: h[4] || (h[4] = (v) => m("r", v)),
                a11y: { label: "Red" }
              }, null, 8, ["value"]),
              createVNode(M, {
                label: "g",
                value: u.value.g,
                onChange: h[5] || (h[5] = (v) => m("g", v)),
                a11y: { label: "Green" }
              }, null, 8, ["value"]),
              createVNode(M, {
                label: "b",
                value: u.value.b,
                onChange: h[6] || (h[6] = (v) => m("b", v)),
                a11y: { label: "Blue" }
              }, null, 8, ["value"]),
              h[9] || (h[9] = createBaseVNode("div", { class: "fields-divider" }, null, -1)),
              createVNode(fe, {
                label: "#",
                class: "hex",
                value: s.value,
                onChange: _
              }, null, 8, ["value"])
            ]),
            $.hasResetButton ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "action-btn",
              onClick: V,
              role: "button",
              "aria-label": $.resetLabel,
              onKeydown: withKeys(V, ["space"]),
              tabindex: "0"
            }, toDisplayString($.resetLabel), 41, La)) : createCommentVNode("", true)
          ]))
        ], 2)
      ])
    ], 2));
  }
});
var Cn = N(Ea, [["__scopeId", "data-v-b69df0e5"]]);
var Da = { class: "saturation" };
var Na = { class: "controls" };
var Ta = { class: "sliders" };
var Ia = { class: "hue" };
var Ua = {
  key: 0,
  class: "alpha"
};
var Pa = { class: "color" };
var Ga = ["aria-label"];
var Oa = {
  key: 0,
  class: "field"
};
var Ka = { class: "field_double" };
var za = { class: "field_single" };
var ja = { class: "field_single" };
var Xa = { class: "field_single" };
var Ya = {
  key: 0,
  class: "field_single"
};
var qa = {
  class: "presets",
  role: "listbox",
  "aria-label": "A color preset, pick one to set as current color"
};
var Wa = ["onClick", "title", "aria-label", "aria-selected", "onKeydown"];
var Za = ["onClick", "aria-selected", "title", "onKeydown"];
var Ja = [
  "#D0021B",
  "#F5A623",
  "#F8E71C",
  "#8B572A",
  "#7ED321",
  "#417505",
  "#BD10E0",
  "#9013FE",
  "#4A90E2",
  "#50E3C2",
  "#B8E986",
  "#000000",
  "#4A4A4A",
  "#9B9B9B",
  "#FFFFFF",
  "rgba(0,0,0,0)"
];
var Qa = defineComponent({
  __name: "SketchPicker",
  props: {
    presetColors: { default: () => Ja },
    disableAlpha: { type: Boolean, default: false },
    disableFields: { type: Boolean, default: false },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: ["change"].concat(I),
  setup(e, { emit: a }) {
    const t = e, l = U(t, a), { hueRef: n, updateHueRef: i } = se(l), o = computed(() => Number(l.value.getAlpha().toFixed(2))), f = computed(() => {
      let c;
      return o.value < 1 ? c = l.value.toHex8String() : c = l.value.toHexString(), c.replace("#", "");
    }), s = computed(() => l.value.toRgb()), u = (c) => {
      l.value = c;
    }, b = (c, S) => {
      if (!S || isNaN(Number(S)))
        return;
      const k = { [c]: S };
      l.value = {
        ...s.value,
        ...k
      };
    }, _ = (c) => {
      !c || isNaN(Number(c)) || (l.value = l.value.setAlpha(c).clone());
    }, m = (c) => {
      l.value = c;
    };
    return (c, S) => (openBlock(), createElementBlock("div", {
      role: "application",
      "aria-label": "Sketch color picker",
      class: normalizeClass(["vc-sketch-picker", c.disableAlpha ? "alpha-disabled" : ""])
    }, [
      createBaseVNode("div", Da, [
        createVNode(Se, {
          hue: unref(n),
          tinyColor: unref(l),
          "onUpdate:tinyColor": S[0] || (S[0] = (k) => isRef(l) ? l.value = k : null)
        }, null, 8, ["hue", "tinyColor"])
      ]),
      createBaseVNode("div", Na, [
        createBaseVNode("div", Ta, [
          createBaseVNode("div", Ia, [
            createVNode(le, {
              modelValue: unref(n),
              "onUpdate:modelValue": unref(i)
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          c.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ua, [
            createVNode(oe, {
              tinyColor: unref(l),
              "onUpdate:tinyColor": S[1] || (S[1] = (k) => isRef(l) ? l.value = k : null)
            }, null, 8, ["tinyColor"])
          ]))
        ]),
        createBaseVNode("div", Pa, [
          createBaseVNode("div", {
            "aria-label": `Current color is ${unref(l).toRgbString()}`,
            class: "active-color",
            style: normalizeStyle({ background: unref(l).toRgbString() })
          }, null, 12, Ga),
          createVNode(pe)
        ])
      ]),
      c.disableFields ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Oa, [
        createBaseVNode("div", Ka, [
          createVNode(fe, {
            label: "hex",
            value: f.value,
            onChange: u,
            type: o.value < 1 ? "hex8" : "hex"
          }, null, 8, ["value", "type"])
        ]),
        createBaseVNode("div", za, [
          createVNode(M, {
            label: "r",
            value: s.value.r,
            onChange: S[2] || (S[2] = (k) => b("r", k)),
            a11y: { label: "Red" }
          }, null, 8, ["value"])
        ]),
        createBaseVNode("div", ja, [
          createVNode(M, {
            label: "g",
            value: s.value.g,
            onChange: S[3] || (S[3] = (k) => b("g", k)),
            a11y: { label: "Green" }
          }, null, 8, ["value"])
        ]),
        createBaseVNode("div", Xa, [
          createVNode(M, {
            label: "b",
            value: s.value.b,
            onChange: S[4] || (S[4] = (k) => b("b", k)),
            a11y: { label: "Blue" }
          }, null, 8, ["value"])
        ]),
        c.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ya, [
          createVNode(M, {
            label: "a",
            value: o.value,
            step: 0.01,
            max: 1,
            onChange: _,
            a11y: { label: "Transparency" }
          }, null, 8, ["value"])
        ]))
      ])),
      createBaseVNode("div", qa, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.presetColors, (k) => (openBlock(), createElementBlock(Fragment, null, [
          unref(Rt)(k) ? (openBlock(), createElementBlock("div", {
            key: k,
            class: "preset-color",
            onClick: (V) => m(k),
            "aria-label": "Color: transparency",
            "aria-selected": o.value === 0,
            role: "option",
            tabindex: "0",
            title: k,
            onKeydown: withKeys((V) => m(k), ["space"])
          }, [
            createVNode(pe)
          ], 40, Za)) : (openBlock(), createElementBlock("div", {
            class: "preset-color",
            key: k + "-color",
            style: normalizeStyle({ background: k }),
            onClick: (V) => m(k),
            title: k,
            "aria-label": "Color:" + k,
            "aria-selected": `#${f.value.toLowerCase()}` === k.toLowerCase(),
            role: "option",
            tabindex: "0",
            onKeydown: withKeys((V) => m(k), ["space"])
          }, null, 44, Wa))
        ], 64))), 256))
      ])
    ], 2));
  }
});
var kn = N(Qa, [["__scopeId", "data-v-fdb7d989"]]);
var el = {
  role: "application",
  "aria-label": "Slider color picker",
  class: "vc-slider-picker"
};
var tl = { class: "hue" };
var al = {
  key: 0,
  class: "alpha"
};
var ll = {
  key: 1,
  class: "swatches",
  role: "listbox",
  "aria-label": "Color segments in different shades of one color",
  tabindex: "0"
};
var nl = ["onClick", "aria-label", "title", "onKeydown", "aria-selected"];
var re = 0.5;
var rl = [
  { s: re, l: 0.8 },
  { s: re, l: 0.65 },
  { s: re, l: 0.5 },
  { s: re, l: 0.35 },
  { s: re, l: 0.2 }
];
var ol = defineComponent({
  __name: "SliderPicker",
  props: {
    swatches: { default: () => rl },
    alpha: { type: Boolean },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const t = e, l = U(t, a), { hueRef: n, updateHueRef: i } = se(l), o = computed(() => l.value.toHsl()), f = computed(() => l.value.toHexString()), s = computed(() => t.swatches.map((m) => typeof m == "string" ? {
      s: re,
      l: Number(m)
    } : m)), u = (_) => o.value.l === 1 && _.l === 1 || o.value.l === 0 && _.l === 0 ? true : Math.abs(o.value.l - _.l) < 0.01 && Math.abs(o.value.s - _.s) < 0.01, b = (_) => {
      l.value = {
        h: o.value.h,
        s: _.s,
        l: _.l
      };
    };
    return (_, m) => (openBlock(), createElementBlock("div", el, [
      createBaseVNode("div", tl, [
        createVNode(le, {
          modelValue: unref(n),
          "onUpdate:modelValue": unref(i)
        }, null, 8, ["modelValue", "onUpdate:modelValue"])
      ]),
      t.alpha ? (openBlock(), createElementBlock("div", al, [
        createVNode(oe, {
          tinyColor: unref(l),
          "onUpdate:tinyColor": m[0] || (m[0] = (c) => isRef(l) ? l.value = c : null)
        }, null, 8, ["tinyColor"])
      ])) : createCommentVNode("", true),
      s.value.length > 0 ? (openBlock(), createElementBlock("div", ll, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (c, S) => (openBlock(), createElementBlock("div", {
          class: "swatch",
          key: S,
          "data-index": "index",
          onClick: (k) => b(c),
          role: "option",
          "aria-label": "Color:" + f.value,
          title: f.value,
          onKeydown: withKeys((k) => b(c), ["space"]),
          "aria-selected": u(c),
          tabindex: "0"
        }, [
          createBaseVNode("div", {
            class: normalizeClass({
              picker: true,
              picker_active: u(c),
              picker_white: c.l === 1
            }),
            style: normalizeStyle({ background: "hsl(" + o.value.h + ", " + c.s * 100 + "%, " + c.l * 100 + "%)" })
          }, null, 6)
        ], 40, nl))), 128))
      ])) : createCommentVNode("", true)
    ]));
  }
});
var wn = N(ol, [["__scopeId", "data-v-675d6988"]]);
var sl = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" };
var il = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" };
var ul = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" };
var dl = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" };
var cl = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" };
var fl = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" };
var hl = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" };
var vl = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" };
var bl = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" };
var pl = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" };
var gl = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" };
var ml = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" };
var _l = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" };
var yl = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" };
var Cl = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" };
var kl = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" };
var wl = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" };
var xl = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" };
var $l = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" };
var Fl = { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)", dividers: "rgba(0, 0, 0, 0.12)" };
var Sl = { primary: "rgba(255, 255, 255, 1)", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", dividers: "rgba(255, 255, 255, 0.12)" };
var Al = { active: "rgba(0, 0, 0, 0.54)", inactive: "rgba(0, 0, 0, 0.38)" };
var Ml = { active: "rgba(255, 255, 255, 1)", inactive: "rgba(255, 255, 255, 0.5)" };
var Rl = "#ffffff";
var Hl = "#000000";
var Vl = {
  red: sl,
  pink: il,
  purple: ul,
  deepPurple: dl,
  indigo: cl,
  blue: fl,
  lightBlue: hl,
  cyan: vl,
  teal: bl,
  green: pl,
  lightGreen: gl,
  lime: ml,
  yellow: _l,
  amber: yl,
  orange: Cl,
  deepOrange: kl,
  brown: wl,
  grey: xl,
  blueGrey: $l,
  darkText: Fl,
  lightText: Sl,
  darkIcons: Al,
  lightIcons: Ml,
  white: Rl,
  black: Hl
};
var Bl = ["data-pick"];
var Ll = {
  class: "box",
  role: "listbox",
  "aria-label": "Pick a color",
  tabindex: "0"
};
var El = ["data-color", "onClick", "aria-label", "aria-selected", "title", "onKeydown"];
var Dl = { class: "picker" };
var Nl = {
  style: { width: "24px", height: "24px" },
  viewBox: "0 0 24 24"
};
var Tl = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "blueGrey",
  "black"
];
var Il = ["900", "700", "500", "300", "100"];
var Ul = (() => {
  const e = [];
  return Tl.forEach((a) => {
    let t = [];
    a.toLowerCase() === "black" || a.toLowerCase() === "white" ? t = t.concat(["#000000", "#FFFFFF"]) : Il.forEach((r) => {
      const l = Vl[a][r];
      t.push(l.toUpperCase());
    }), e.push(t);
  }), e;
})();
var Pl = defineComponent({
  __name: "SwatchesPicker",
  props: {
    palette: { default: () => Ul },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const l = U(e, a), n = computed(() => l.value.toHexString()), i = (f) => f.toLowerCase() === n.value.toLowerCase(), o = (f) => {
      l.value = f;
    };
    return (f, s) => (openBlock(), createElementBlock("div", {
      role: "application",
      "aria-label": "Swatches color picker",
      class: "vc-swatches-picker",
      "data-pick": n.value
    }, [
      createBaseVNode("div", Ll, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.palette, (u, b) => (openBlock(), createElementBlock("div", {
          class: "colorGroup",
          key: b
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(u, (_) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["color", { color_white: _ === "#FFFFFF" }]),
            key: _,
            "data-color": _,
            style: normalizeStyle({ background: _ }),
            onClick: (m) => o(_),
            role: "option",
            "aria-label": "Color:" + _,
            "aria-selected": i(_),
            title: _,
            onKeydown: withKeys((m) => o(_), ["space"]),
            tabindex: "0"
          }, [
            withDirectives(createBaseVNode("div", Dl, [
              (openBlock(), createElementBlock("svg", Nl, s[0] || (s[0] = [
                createBaseVNode("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, null, -1)
              ])))
            ], 512), [
              [vShow, i(_)]
            ])
          ], 46, El))), 128))
        ]))), 128))
      ])
    ], 8, Bl));
  }
});
var xn = N(Pl, [["__scopeId", "data-v-3427cb2a"]]);
var Gl = {
  class: "body",
  role: "listbox",
  tabindex: "0",
  "aria-label": "Select a color"
};
var Ol = ["onClick", "aria-label", "title", "aria-selected", "onKeydown"];
var Kl = [
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#0693E3",
  "#ABB8C3",
  "#EB144C",
  "#F78DA7",
  "#9900EF"
];
var zl = defineComponent({
  __name: "TwitterPicker",
  props: {
    width: { default: 276 },
    presetColors: { default: () => Kl },
    triangle: { default: "top-left" },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    const t = e, l = U(t, a), n = computed(() => l.value.toHexString()), i = (s) => s.toLowerCase() === n.value.toLowerCase(), o = (s) => {
      l.value = s;
    }, f = (s) => {
      l.value = s;
    };
    return (s, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vc-twitter-picker", {
        tri_hide: t.triangle === "hide",
        tri_top_left: t.triangle === "top-left",
        tri_top_right: t.triangle === "top-right"
      }]),
      style: normalizeStyle({
        width: typeof t.width == "number" ? `${t.width}px` : t.width
      }),
      role: "application",
      "aria-label": "Twitter color picker"
    }, [
      u[2] || (u[2] = createBaseVNode("div", { class: "triangle_shadow" }, null, -1)),
      u[3] || (u[3] = createBaseVNode("div", { class: "triangle" }, null, -1)),
      createBaseVNode("div", Gl, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.presetColors, (b, _) => (openBlock(), createElementBlock("span", {
          key: _,
          class: "swatch",
          style: normalizeStyle({
            background: b,
            boxShadow: `0 0 4px ${i(b) ? b : "transparent"}`
          }),
          onClick: (m) => o(b),
          role: "option",
          "aria-label": "color:" + b,
          title: b,
          "aria-selected": i(b),
          onKeydown: withKeys((m) => o(b), ["space"]),
          tabindex: "0"
        }, null, 44, Ol))), 128)),
        u[0] || (u[0] = createBaseVNode("div", {
          class: "hash",
          "aria-hidden": "true"
        }, "#", -1)),
        createVNode(fe, {
          value: n.value,
          onChange: f
        }, null, 8, ["value"]),
        u[1] || (u[1] = createBaseVNode("div", { class: "clear" }, null, -1))
      ])
    ], 6));
  }
});
var $n = N(zl, [["__scopeId", "data-v-e74ac697"]]);
var jl = defineComponent({
  __name: "HueSlider",
  props: {
    modelValue: {},
    value: {}
  },
  emits: ["input", "update:modelValue"],
  setup(e, { emit: a }) {
    useCssVars((o) => ({
      "46ac36b6": i.value
    }));
    const t = a, r = e, l = computed(() => r.modelValue ?? r.value ?? 0), n = (o) => {
      t("input", o), t("update:modelValue", o);
    }, i = computed(() => `hsl(${l.value}, 100%, 50%)`);
    return (o, f) => (openBlock(), createBlock(le, mergeProps({ class: "vc-hue-wrap" }, o.$attrs, {
      modelValue: l.value,
      "onUpdate:modelValue": n
    }), null, 16, ["modelValue"]));
  }
});
var Fn = N(jl, [["__scopeId", "data-v-b3ac1ab2"]]);
var Xl = { class: "vc-hsl-sliders" };
var Yl = { class: "slider-wrap h-slider" };
var ql = { class: "slider-wrap s-slider" };
var Wl = { class: "slider-wrap l-slider" };
var Zl = {
  key: 0,
  class: "slider-wrap a-slider"
};
function Jl(e, a) {
  return `linear-gradient(to right,
    hsl(${e} 0% ${a}%),
    hsl(${e} 50% ${a}%),
    hsl(${e} 100% ${a}%)
  )`;
}
function Ql(e, a) {
  return `linear-gradient(to right,
    hsl(${e} ${a}% 0%),
    hsl(${e} ${a}% 10%),
    hsl(${e} ${a}% 20%),
    hsl(${e} ${a}% 30%),
    hsl(${e} ${a}% 40%),
    hsl(${e} ${a}% 50%),
    hsl(${e} ${a}% 60%),
    hsl(${e} ${a}% 70%),
    hsl(${e} ${a}% 80%),
    hsl(${e} ${a}% 90%),
    hsl(${e} ${a}% 100%)
  )`;
}
var en = defineComponent({
  __name: "HSLSliders",
  props: {
    disableAlpha: { type: Boolean, default: false },
    disableFields: { type: Boolean, default: false },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    useCssVars((h) => ({
      "41b5b6d0": V.value,
      "05fbe691": $.value
    }));
    const l = U(e, a), { hueRef: n, updateHueRef: i } = se(l), o = computed(() => l.value.toHsl()), f = computed(() => l.value.getAlpha()), s = ref(o.value.s * 100), u = ref(o.value.l * 100);
    watch(o, () => {
      s.value = o.value.s * 100, u.value = o.value.l * 100;
    });
    const b = (h) => {
      h && i(Number(h));
    }, _ = (h) => {
      const v = Number(h);
      s.value = v, l.value = {
        ...o.value,
        s: v / 100
      };
    }, m = (h) => {
      const v = Number(h);
      u.value = v, l.value = {
        ...o.value,
        l: v / 100
      };
    }, c = (h) => {
      const v = Number(h);
      l.value = {
        ...o.value,
        a: v
      };
    }, S = computed(
      () => Jl(n.value, u.value)
    ), k = computed(
      () => Ql(n.value, s.value)
    ), V = computed(() => `hsl(${n.value}, 100%, 50%)`), $ = computed(() => `hsl(${n.value}, ${s.value}%, ${u.value}%)`);
    return (h, v) => (openBlock(), createElementBlock("div", Xl, [
      createBaseVNode("div", Yl, [
        v[1] || (v[1] = createBaseVNode("span", { class: "label" }, "H", -1)),
        createVNode(le, {
          modelValue: unref(n),
          "onUpdate:modelValue": unref(i)
        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: Number(unref(n)).toFixed(),
          onChange: b,
          a11y: { label: "hue" }
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", ql, [
        v[2] || (v[2] = createBaseVNode("span", { class: "label" }, "S", -1)),
        createVNode(q, {
          "aria-label": "saturation",
          modelValue: s.value,
          "onUpdate:modelValue": _
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: S.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: s.value.toFixed(),
          onChange: _,
          a11y: { label: "saturation" },
          min: 0,
          max: 100
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", Wl, [
        v[3] || (v[3] = createBaseVNode("span", { class: "label" }, "L", -1)),
        createVNode(q, {
          "aria-label": "lightness",
          modelValue: u.value,
          "onUpdate:modelValue": m
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: k.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: u.value.toFixed(),
          onChange: m,
          a11y: { label: "lightness" },
          min: 0,
          max: 100
        }, null, 8, ["value"]))
      ]),
      h.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Zl, [
        v[4] || (v[4] = createBaseVNode("span", { class: "label" }, "A", -1)),
        createVNode(oe, {
          tinyColor: unref(l),
          "onUpdate:tinyColor": v[0] || (v[0] = (B) => isRef(l) ? l.value = B : null)
        }, null, 8, ["tinyColor"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: f.value.toFixed(2),
          onChange: c,
          a11y: { label: "alpha" },
          min: 0,
          max: 1,
          step: 0.01
        }, null, 8, ["value"]))
      ]))
    ]));
  }
});
var Sn = N(en, [["__scopeId", "data-v-2e071f54"]]);
var tn = { class: "vc-hsv-sliders" };
var an = { class: "slider-wrap h-slider" };
var ln = { class: "slider-wrap s-slider" };
var nn = { class: "slider-wrap b-slider" };
var rn = {
  key: 0,
  class: "slider-wrap"
};
function on(e, a) {
  const r = [];
  for (let l = 0; l <= 10; l++) {
    let n = l / 10;
    const i = { h: e, s: n, v: a / 100 }, o = g(i).toRgb();
    if (o) {
      const f = Math.round(o.r), s = Math.round(o.g), u = Math.round(o.b);
      r.push(`rgb(${f} ${s} ${u})`);
    }
  }
  return `linear-gradient(to right, ${r.join(", ")})`;
}
function sn(e, a) {
  const r = [];
  for (let l = 0; l <= 10; l++) {
    let n = l / 10;
    const i = { h: e, s: a / 100, v: n }, o = g(i).toRgb();
    if (o) {
      const f = Math.round(o.r), s = Math.round(o.g), u = Math.round(o.b);
      r.push(`rgb(${f} ${s} ${u})`);
    }
  }
  return `linear-gradient(to right, ${r.join(", ")})`;
}
var un = defineComponent({
  __name: "HSVSliders",
  props: {
    disableAlpha: { type: Boolean, default: false },
    disableFields: { type: Boolean, default: false },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    useCssVars((h) => ({
      f666f450: V.value,
      "46b90cce": $.value
    }));
    const l = U(e, a), { hueRef: n, updateHueRef: i } = se(l), o = computed(() => l.value.toHsv()), f = computed(() => l.value.getAlpha()), s = ref(o.value.s * 100), u = ref(o.value.v * 100);
    watch(o, () => {
      s.value = o.value.s * 100, u.value = o.value.v * 100;
    });
    const b = computed(() => on(n.value, u.value)), _ = computed(() => sn(n.value, s.value)), m = (h) => {
      h && i(Number(h));
    }, c = (h) => {
      const v = Number(h);
      s.value = v, l.value = {
        ...o.value,
        s: v / 100
      };
    }, S = (h) => {
      const v = Number(h);
      u.value = v, l.value = {
        ...o.value,
        v: v / 100
      };
    }, k = (h) => {
      const v = Number(h);
      l.value = {
        ...o.value,
        a: v
      };
    }, V = computed(() => `hsl(${n.value}, 100%, 50%)`), $ = computed(() => g({
      ...o.value,
      a: 1
    }).toHslString());
    return (h, v) => (openBlock(), createElementBlock("div", tn, [
      createBaseVNode("div", an, [
        v[1] || (v[1] = createBaseVNode("span", { class: "label" }, "H", -1)),
        createVNode(le, {
          modelValue: unref(n),
          "onUpdate:modelValue": unref(i)
        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: Number(unref(n)).toFixed(),
          onChange: m,
          a11y: { label: "hue" }
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", ln, [
        v[2] || (v[2] = createBaseVNode("span", { class: "label" }, "S", -1)),
        createVNode(q, {
          "aria-label": "saturation",
          modelValue: s.value,
          "onUpdate:modelValue": c
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: b.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: s.value.toFixed(),
          onChange: c,
          a11y: { label: "saturation" },
          min: 0,
          max: 100
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", nn, [
        v[3] || (v[3] = createBaseVNode("span", { class: "label" }, "V", -1)),
        createVNode(q, {
          "aria-label": "brightness",
          modelValue: u.value,
          "onUpdate:modelValue": S
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: _.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: u.value.toFixed(),
          onChange: S,
          a11y: { label: "brightness" },
          min: 0,
          max: 100
        }, null, 8, ["value"]))
      ]),
      h.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", rn, [
        v[4] || (v[4] = createBaseVNode("span", { class: "label" }, "A", -1)),
        createVNode(oe, {
          tinyColor: unref(l),
          "onUpdate:tinyColor": v[0] || (v[0] = (B) => isRef(l) ? l.value = B : null)
        }, null, 8, ["tinyColor"]),
        h.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: f.value.toFixed(2),
          onChange: k,
          a11y: { label: "alpha" },
          min: 0,
          max: 1,
          step: 0.01
        }, null, 8, ["value"]))
      ]))
    ]));
  }
});
var An = N(un, [["__scopeId", "data-v-d6cfe1d9"]]);
var dn = { class: "vc-rgb-sliders" };
var cn = { class: "slider-wrap" };
var fn = { class: "slider-wrap" };
var hn = { class: "slider-wrap" };
var vn = {
  key: 0,
  class: "slider-wrap a-slider"
};
var ke = (e, a) => {
  const r = [];
  for (let l = 1; l <= 255; l++) {
    const { r: n, g: i, b: o } = {
      ...a,
      [e]: l
    };
    r.push(`rgb(${n}, ${i}, ${o})`);
  }
  return `linear-gradient(to right, ${r.join(", ")})`;
};
var bn = defineComponent({
  __name: "RGBSliders",
  props: {
    disableAlpha: { type: Boolean, default: false },
    disableFields: { type: Boolean, default: false },
    tinyColor: {},
    modelValue: {},
    value: {}
  },
  emits: I,
  setup(e, { emit: a }) {
    useCssVars((_) => ({
      "5f730604": b.value
    }));
    const l = U(e, a), n = computed(() => l.value.toRgb()), i = computed(() => l.value.getAlpha()), o = computed(() => ke("r", n.value)), f = computed(() => ke("g", n.value)), s = computed(() => ke("b", n.value)), u = (_, m) => {
      const c = Number(m);
      l.value = {
        ...n.value,
        [_]: c
      };
    }, b = computed(() => `#${l.value.toHex()}`);
    return (_, m) => (openBlock(), createElementBlock("div", dn, [
      createBaseVNode("div", cn, [
        m[8] || (m[8] = createBaseVNode("span", { class: "label" }, "R", -1)),
        createVNode(q, {
          "aria-label": "red",
          modelValue: n.value.r,
          "onUpdate:modelValue": m[0] || (m[0] = (c) => u("r", c)),
          max: 255
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: o.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: n.value.r,
          onChange: m[1] || (m[1] = (c) => u("r", c)),
          a11y: { label: "red" },
          min: 0,
          max: 255
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", fn, [
        m[9] || (m[9] = createBaseVNode("span", { class: "label" }, "G", -1)),
        createVNode(q, {
          "aria-label": "green",
          modelValue: n.value.g,
          "onUpdate:modelValue": m[2] || (m[2] = (c) => u("g", c)),
          max: 255
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: f.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: n.value.g,
          onChange: m[3] || (m[3] = (c) => u("g", c)),
          a11y: { label: "green" },
          min: 0,
          max: 255
        }, null, 8, ["value"]))
      ]),
      createBaseVNode("div", hn, [
        m[10] || (m[10] = createBaseVNode("span", { class: "label" }, "B", -1)),
        createVNode(q, {
          "aria-label": "blue",
          modelValue: n.value.b,
          "onUpdate:modelValue": m[4] || (m[4] = (c) => u("b", c)),
          max: 255
        }, {
          background: withCtx(() => [
            createBaseVNode("div", {
              class: "gradient",
              style: normalizeStyle({ background: s.value })
            }, null, 4)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: n.value.b,
          onChange: m[5] || (m[5] = (c) => u("b", c)),
          a11y: { label: "blue" },
          min: 0,
          max: 255
        }, null, 8, ["value"]))
      ]),
      _.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", vn, [
        m[11] || (m[11] = createBaseVNode("span", { class: "label" }, "A", -1)),
        createVNode(oe, {
          tinyColor: unref(l),
          "onUpdate:tinyColor": m[6] || (m[6] = (c) => isRef(l) ? l.value = c : null)
        }, null, 8, ["tinyColor"]),
        _.disableFields ? createCommentVNode("", true) : (openBlock(), createBlock(M, {
          key: 0,
          value: i.value.toFixed(2),
          onChange: m[7] || (m[7] = (c) => u("a", c)),
          a11y: { label: "alpha" },
          min: 0,
          max: 1,
          step: 0.01
        }, null, 8, ["value"]))
      ]))
    ]));
  }
});
var Mn = N(bn, [["__scopeId", "data-v-98b3b212"]]);
export {
  oe as AlphaSlider,
  gn as ChromePicker,
  mn as CompactPicker,
  _n as GrayscalePicker,
  Sn as HSLSliders,
  An as HSVSliders,
  Fn as HueSlider,
  yn as MaterialPicker,
  Cn as PhotoshopPicker,
  Mn as RGBSliders,
  kn as SketchPicker,
  wn as SliderPicker,
  xn as SwatchesPicker,
  $n as TwitterPicker,
  g as tinycolor
};
//# sourceMappingURL=vue-color.js.map
