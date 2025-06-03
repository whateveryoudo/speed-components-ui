import{a as l}from"./chunks/theme.C70DuU-c.js";import{d as f,a3 as b,C as s,b as k,o as c,w as r,j as e,G as n,a as p,_ as T,c as v,aL as P}from"./chunks/framework.CUeqSQHK.js";const C={class:"demo-wrapper"},I={class:"demo-item"},q={class:"demo-item"},U={class:"demo-item"},y=`<template>
  <!-- 基础用法 -->
  <s-toggle-input
    text="点击修改"
    :update-text="handleUpdate"
  />

  <!-- 自定义宽度 -->
  <s-toggle-input
    text="点击修改"
    input-width="300px"
    :update-text="handleUpdate"
  />

  <!-- 二次确认 -->
  <s-toggle-input
    text="点击修改"
    need-confirm
    :update-text="handleUpdate"
  />

  <!-- 自定义触发 -->
  <s-toggle-input
    text="点击修改"
    :update-text="handleUpdate"
  >
    <template #trigger="{ info }">
      <a-button type="link">
        {{ info.text }}
      </a-button>
    </template>
  </s-toggle-input>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

const handleUpdate = (state: any) => {
  message.success(\`修改成功：\${state.text}\`)
}
<\/script>`,V=f({__name:"Basic",setup(u){const o=b({text1:"测试内容1",text2:"测试内容2",text3:"测试内容3"}),d=t=>{o.text1=t.text,t.flag=!1,l.success(`修改成功：${t.text}`)},x=t=>{setTimeout(()=>{l.success(`修改成功：${t.text}`),o.text2=t.text,t.flag=!1},500)},h=t=>{o.text3=t.text,t.flag=!1,l.success(`修改成功：${t.text}`)};return(t,a)=>{const i=s("s-toggle-input"),g=s("a-button"),m=s("Demo");return c(),k(m,{code:y},{default:r(()=>[e("div",C,[e("div",I,[a[0]||(a[0]=e("h3",null,"基础用法",-1)),n(i,{"input-width":"300px",text:o.text1,"update-text":d},null,8,["text"])]),e("div",q,[a[1]||(a[1]=e("h3",null,"二次确认",-1)),n(i,{text:o.text2,"need-confirm":"","update-text":x},null,8,["text"])]),e("div",U,[a[3]||(a[3]=e("h3",null,"自定义触发",-1)),n(i,{text:o.text3,"update-text":h},{trigger:r(({info:_})=>[n(g,{type:"link",onClick:$=>_.flag=!0},{default:r(()=>a[2]||(a[2]=[p(" 点击修改 ")])),_:2,__:[2]},1032,["onClick"])]),_:1},8,["text"])])])]),_:1})}}}),B=T(V,[["__scopeId","data-v-054aedb2"]]),S=JSON.parse('{"title":"ToggleInput 快捷文字修改","description":"","frontmatter":{},"headers":[],"relativePath":"components/toggle-input/index.md","filePath":"components/toggle-input/index.md"}'),N={name:"components/toggle-input/index.md"},D=Object.assign(N,{setup(u){return(o,d)=>(c(),v("div",null,[d[0]||(d[0]=e("h1",{id:"toggleinput-快捷文字修改",tabindex:"-1"},[p("ToggleInput 快捷文字修改 "),e("a",{class:"header-anchor",href:"#toggleinput-快捷文字修改","aria-label":'Permalink to "ToggleInput 快捷文字修改"'},"​")],-1)),d[1]||(d[1]=e("p",null,"基于 antd Input 封装的快捷文字修改组件，支持二次确认、自定义触发等功能。",-1)),d[2]||(d[2]=e("h2",{id:"基础用法",tabindex:"-1"},[p("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(B),d[3]||(d[3]=P('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>显示文本</td><td><code>string</code></td><td><code>&#39;未命名&#39;</code></td></tr><tr><td>inputWidth</td><td>输入框宽度</td><td><code>string</code></td><td><code>&#39;200px&#39;</code></td></tr><tr><td>needConfirm</td><td>是否需要二次确认</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>updateText</td><td>更新文本回调</td><td><code>(state: { text: string }) =&gt; void</code></td><td><code>() =&gt; {}</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>trigger</td><td>自定义触发元素</td><td><code>{ text: string }</code></td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>默认情况下，失去焦点时自动保存修改</li><li>设置 <code>needConfirm</code> 为 <code>true</code> 时，需要点击确认按钮才会保存修改</li><li>可以通过 <code>inputWidth</code> 自定义输入框宽度</li><li>支持通过 <code>trigger</code> 插槽自定义触发元素</li><li>修改成功后会触发 <code>updateText</code> 回调</li></ol>',7))]))}});export{S as __pageData,D as default};
