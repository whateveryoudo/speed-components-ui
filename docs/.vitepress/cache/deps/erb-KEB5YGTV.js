import {
  ruby_default
} from "./chunk-VZJ3JWDN.js";
import "./chunk-7G7YMSHO.js";
import "./chunk-YSSF77IG.js";
import "./chunk-26LVTX77.js";
import "./chunk-JPSCPABQ.js";
import "./chunk-VSHLRQXF.js";
import "./chunk-KBQWZYAS.js";
import "./chunk-BLZTJRDQ.js";
import "./chunk-MSM26URQ.js";
import "./chunk-U6FYEZZY.js";
import "./chunk-4QQXAEU7.js";
import "./chunk-5HHYF3U6.js";
import "./chunk-JX6VHC7H.js";
import "./chunk-APNQ4B62.js";
import "./chunk-NU7UGQFE.js";
import "./chunk-XSXUDUC4.js";
import {
  html_default
} from "./chunk-SKXMUW4C.js";
import "./chunk-TTGNGA2T.js";
import "./chunk-7Q4HLG7W.js";
import "./chunk-B4Q33VKO.js";

// node_modules/.pnpm/@shikijs+langs@3.4.0/node_modules/@shikijs/langs/dist/erb.mjs
var lang = Object.freeze(JSON.parse('{"displayName":"ERB","fileTypes":["erb","rhtml","html.erb"],"injections":{"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)":{"patterns":[{"begin":"^(\\\\s*)(?=<%+#(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.comment.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.comment.trailing.erb"}},"patterns":[{"include":"#comment"}]},{"begin":"^(\\\\s*)(?=<%(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.embedded.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.embedded.trailing.erb"}},"patterns":[{"include":"#tags"}]},{"include":"#comment"},{"include":"#tags"}]}},"name":"erb","patterns":[{"include":"text.html.basic"}],"repository":{"comment":{"patterns":[{"begin":"<%+#","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.erb"}},"end":"%>","endCaptures":{"0":{"name":"punctuation.definition.comment.end.erb"}},"name":"comment.block.erb"}]},"tags":{"patterns":[{"begin":"<%+(?!>)[-=]?(?![^%]*%>)","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.block.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]},{"begin":"<%+(?!>)[-=]?","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.line.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]}]}},"scopeName":"text.html.erb","embeddedLangs":["html","ruby"]}'));
var erb_default = [
  ...html_default,
  ...ruby_default,
  lang
];
export {
  erb_default as default
};
//# sourceMappingURL=erb-KEB5YGTV.js.map
