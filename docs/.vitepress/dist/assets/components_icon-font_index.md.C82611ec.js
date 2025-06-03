import{_ as r,C as i,b as p,o as c,w as m,j as t,G as e,d as f,k as v,c as u,aL as l,a as h}from"./chunks/framework.CUeqSQHK.js";import{A as g}from"./chunks/theme.C70DuU-c.js";const x={class:"icon-demo"},y={class:"demo-item"},b={class:"icons"},C={class:"demo-item"},z={class:"icons"},I=`
<template>
  <div class="icon-demo">
    <div class="demo-item">
      <div class="title">Iconfont 图标</div>
      <div class="icons">
        <s-icon-font type="user" />
        <s-icon-font type="home" />
        <s-icon-font type="setting" />
      </div>
    </div>
    <div class="demo-item">
      <div class="title">自定义大小和颜色</div>
      <div class="icons">
        <s-icon-font type="user" :size="20" color="#1890ff" />
        <s-icon-font type="home" :size="24" color="#52c41a" />
        <s-icon-font type="setting" :size="28" color="#faad14" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 24px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.title {
  font-size: 14px;
  color: #666;
}
.icons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
`,w={__name:"Basic",setup(a){return(n,o)=>{const s=i("s-icon-font"),d=i("Demo");return c(),p(d,{code:I},{default:m(()=>[t("div",x,[t("div",y,[o[0]||(o[0]=t("div",{class:"title"},"Iconfont 图标",-1)),t("div",b,[e(s,{type:"user"}),e(s,{type:"home"}),e(s,{type:"setting"})])]),t("div",C,[o[1]||(o[1]=t("div",{class:"title"},"自定义大小和颜色",-1)),t("div",z,[e(s,{type:"user",size:20,color:"#1890ff"}),e(s,{type:"home",size:24,color:"#52c41a"}),e(s,{type:"setting",size:28,color:"#faad14"})])])])]),_:1})}}},P=r(w,[["__scopeId","data-v-35f76e6c"]]),k={class:"icon-demo"},T={class:"demo-item"},S={class:"icons"},A={class:"demo-item"},N={class:"icons"},j=`
<template>
  <div class="icon-demo">
    <div class="demo-item">
      <div class="title">自定义渲染函数</div>
      <div class="icons">
        <s-icon-font :icon-render="AlertOutlined" />
        <s-icon-font :icon-render="CustomIcon1" />
      </div>
    </div>
    <div class="demo-item">
      <div class="title">图片模块</div>
      <div class="icons">
        <s-icon-font
          img-module="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          :img-style="{ width: '24px' }"
        />
        <s-icon-font
          img-module="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
          :img-style="{ width: '24px' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">

// antd 图标

import { AlertOutlined } from '@ant-design/icons-vue'

// 自定义图标组件

const CustomIcon1 = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
);
<\/script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 24px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.title {
  font-size: 14px;
  color: #666;
}
.icons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
`,q=f({__name:"CustomRender",setup(a){const n=()=>e("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor"},[e("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null)]);return(o,s)=>{const d=i("s-icon-font"),_=i("Demo");return c(),p(_,{code:j},{default:m(()=>[t("div",k,[t("div",T,[s[0]||(s[0]=t("div",{class:"title"},"自定义渲染函数",-1)),t("div",S,[e(d,{"icon-render":v(g)},null,8,["icon-render"]),e(d,{"icon-render":n})])]),t("div",A,[s[1]||(s[1]=t("div",{class:"title"},"图片模块",-1)),t("div",N,[e(d,{"img-module":"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg","img-style":{width:"24px"}}),e(d,{"img-module":"https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg","img-style":{width:"24px"}})])])])]),_:1})}}}),D=r(q,[["__scopeId","data-v-d1af8a71"]]),L=JSON.parse('{"title":"IconFont 图标组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon-font/index.md","filePath":"components/icon-font/index.md"}'),B={name:"components/icon-font/index.md"},M=Object.assign(B,{setup(a){return(n,o)=>(c(),u("div",null,[o[0]||(o[0]=l('<h1 id="iconfont-图标组件" tabindex="-1">IconFont 图标组件 <a class="header-anchor" href="#iconfont-图标组件" aria-label="Permalink to &quot;IconFont 图标组件&quot;">​</a></h1><p>基于 <code>@ant-design/icons-vue</code> 的 <code>createFromIconfontCN</code> 封装的图标渲染器，支持iconfont图标（常用）、antd内置图标、自定义传入图片等功能。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你可以在 <a href="/guide/quickstart.html#在-main-ts-中引入组件库">全局配置</a> 中传入iconfontUrl</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>支持 iconfont 和 antd 图标</p>',5)),e(P),o[1]||(o[1]=t("h2",{id:"自定义渲染",tabindex:"-1"},[h("自定义渲染 "),t("a",{class:"header-anchor",href:"#自定义渲染","aria-label":'Permalink to "自定义渲染"'},"​")],-1)),o[2]||(o[2]=t("p",null,"支持自定义图标渲染和图片模块",-1)),e(D),o[3]||(o[3]=l('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>图标类型(iconfont渲染时用到)</td><td><code>string</code></td><td>-</td></tr><tr><td>prefix</td><td>图标样式前缀</td><td><code>string</code></td><td>&#39;icon-&#39;</td></tr><tr><td>color</td><td>图标颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td><code>string | number</code></td><td>14</td></tr><tr><td>scriptUrl</td><td>自定义 iconfont 脚本地址(支持全局配置)</td><td><code>string[]</code></td><td>[]</td></tr><tr><td>imgModule</td><td>图片模块地址</td><td><code>string</code></td><td>-</td></tr><tr><td>imgStyle</td><td>图片样式</td><td><code>object</code></td><td>{}</td></tr><tr><td>iconRender</td><td>自定义图标渲染函数</td><td><code>Function</code></td><td>-</td></tr></tbody></table>',2))]))}});export{L as __pageData,M as default};
