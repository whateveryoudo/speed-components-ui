import{u as C,a as q}from"./chunks/theme.C70DuU-c.js";import{d as U,p,C as d,b as v,o as m,w as a,j as z,G as t,n as j,c as w,F as D,B as F,k as h,K as V,a as o,_ as B,aL as g}from"./chunks/framework.CUeqSQHK.js";const A=`<template>
  <div class="attachment-wrapper">
    <s-file-preview-item
      v-for="fItem in files"
      :key="fItem.id"
      :canIdel="canIdel"
      :getPreviewUrl="getPreviewUrl"
      :onPreview="onPreview"
      @on-delete="handleDelFile"
      v-bind="fItem"
    />
  </div>
  <a-flex vertical class="mt-2">
    <a-space>
      是否允许删除
      <a-switch v-model:checked="canIdel" />
    </a-space>
  </a-flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { useCustomUpload } from "speed-components/hooks/useCustomUpload";

const canIdel = ref(false);
const token = ref("speed-test-token");
const { files, handleDelFile } = useCustomUpload();
files.value = [
  {
    id: "test1",
    fileName: "test1.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test2",
    fileName: "test2.jpg",
    fileType: "image/jpeg",
    fileSize: 1024,
  },
  {
    id: "test3",
    fileName: "test3.xlsx",
    fileType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    fileSize: 1024,
  },
  {
    id: "test4",
    fileName: "test4.docx",
    fileType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileSize: 1024,
  },
];
// 模拟预览地址拼接（需启动后端服务）
const getPreviewUrl = (fieldId: string) => {
  return "//localhost:4000/preview/" + fieldId + "?token=" + token.value;
};
// TODO: 文件类型预览需自行实现
const onPreview = (fieldId: string) => {
  console.log(fieldId);
  message.warning("文件类型预览需自行实现");
};
<\/script>
<style lang="less">
.attachment-wrapper {
  padding: 5px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  // 设置不缩放
  :deep(.file-preview-item-wrapper) {
    margin: 0 5px;
    flex-shrink: 0;
  }
}
</style>`,E=U({__name:"Basic",setup(x){const r=p(!1),l=p("card"),b=p("speed-test-token"),f=p("horizontal"),{files:u,handleDelFile:k}=C();u.value=[{id:"test1",fileName:"test1.jpg",fileType:"image/jpeg",fileSize:1024},{id:"test2",fileName:"test2.jpg",fileType:"image/jpeg",fileSize:1024},{id:"test3",fileName:"test3.xlsx",fileType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileSize:1024},{id:"test4",fileName:"test4.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:1024}];const P=n=>"//localhost:4000/attachment/preview/"+n+"?token="+b.value,I=n=>{console.log(n),q.warning("文件类型预览需自行实现")};return(n,e)=>{const T=d("s-file-preview-item"),y=d("a-switch"),c=d("a-space"),s=d("a-radio"),_=d("a-radio-group"),S=d("a-flex"),N=d("Demo");return m(),v(N,{code:A},{default:a(()=>[z("div",{class:j(["attachment-wrapper",f.value])},[(m(!0),w(D,null,F(h(u),i=>(m(),v(T,V({key:i.id,canIdel:r.value,getPreviewUrl:P,onPreview:I,mode:l.value,onOnDelete:h(k)},{ref_for:!0},i),null,16,["canIdel","mode","onOnDelete"]))),128))],2),t(S,{vertical:"",class:"mt-2",gap:10},{default:a(()=>[t(c,null,{default:a(()=>[e[3]||(e[3]=o(" 是否允许删除 ")),t(y,{checked:r.value,"onUpdate:checked":e[0]||(e[0]=i=>r.value=i)},null,8,["checked"])]),_:1,__:[3]}),t(c,null,{default:a(()=>[e[7]||(e[7]=o(" 展示样式 ")),t(_,{value:l.value,"onUpdate:value":e[1]||(e[1]=i=>l.value=i)},{default:a(()=>[t(s,{value:"card"},{default:a(()=>e[4]||(e[4]=[o("卡片")])),_:1,__:[4]}),t(s,{value:"list"},{default:a(()=>e[5]||(e[5]=[o("列表")])),_:1,__:[5]}),t(s,{value:"list-simple"},{default:a(()=>e[6]||(e[6]=[o("列表-简洁")])),_:1,__:[6]})]),_:1},8,["value"])]),_:1,__:[7]}),t(c,null,{default:a(()=>[e[10]||(e[10]=o(" 方向 ")),t(_,{value:f.value,"onUpdate:value":e[2]||(e[2]=i=>f.value=i)},{default:a(()=>[t(s,{value:"horizontal"},{default:a(()=>e[8]||(e[8]=[o("水平")])),_:1,__:[8]}),t(s,{value:"vertical"},{default:a(()=>e[9]||(e[9]=[o("垂直")])),_:1,__:[9]})]),_:1},8,["value"])]),_:1,__:[10]})]),_:1})]),_:1})}}}),O=B(E,[["__scopeId","data-v-a688cd72"]]),G=JSON.parse('{"title":"FilePreviewItem 文件预览项","description":"","frontmatter":{},"headers":[],"relativePath":"components/file-preview-item/index.md","filePath":"components/file-preview-item/index.md"}'),L={name:"components/file-preview-item/index.md"},J=Object.assign(L,{setup(x){return(r,l)=>(m(),w("div",null,[l[0]||(l[0]=g('<h1 id="filepreviewitem-文件预览项" tabindex="-1">FilePreviewItem 文件预览项 <a class="header-anchor" href="#filepreviewitem-文件预览项" aria-label="Permalink to &quot;FilePreviewItem 文件预览项&quot;">​</a></h1><p>用于单个文件的预览展示，支持图片、文档、音视频等多种类型，支持预览、下载、删除等操作。默认采用卡片模式，也支持列表模式。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>1、演示示例依赖了公共hook的<a href="/components/useCustomUpload/index.html">useCustomUpload</a>,你也可以自行实现。<br> 2、部分示例需结合后端运行<a href="https://gitee.com/ykxstore/speed-apis" target="_blank" rel="noreferrer">后端示例</a></p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>列表显示（你可以自定义组的样式，注：此处的删除未请求接口）</p>',5)),t(O),l[1]||(l[1]=g('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td>文件唯一标识</td><td>string</td><td>-</td></tr><tr><td>fileName</td><td>文件名</td><td>string</td><td>-</td></tr><tr><td>fileType</td><td>文件类型</td><td>string</td><td>-</td></tr><tr><td>fileSize</td><td>文件大小</td><td>string</td><td>-</td></tr><tr><td>previewUrl</td><td>文件预览地址</td><td>string</td><td>-</td></tr><tr><td>mode</td><td>展示模式</td><td>&#39;card&#39; | &#39;list&#39; | &#39;list-simple&#39;</td><td>&#39;card&#39;</td></tr><tr><td>canIdel</td><td>是否允许删除</td><td>boolean</td><td>true</td></tr><tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-delete</td><td>删除文件时触发</td><td>(id: string)</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>无</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>组件会根据文件后缀自动显示对应的占位图标或图片预览。</li><li>仅支持通过文件名后缀简单判断类型，未做 MIME 校验。</li><li>依赖 <code>viewerjs</code> 实现图片预览，需提前安装依赖。</li><li>下载、预览等功能需后端接口支持。</li><li>支持三种模式：卡片（默认）、列表、简洁列表。</li></ol><hr><blockquote><p>如需批量文件预览，请结合列表循环使用。</p></blockquote>',10))]))}});export{G as __pageData,J as default};
