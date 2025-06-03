import{p as m,C as u,b as k,o as w,w as e,j as o,G as n,a as d,_ as M,c as S,aL as P}from"./chunks/framework.CUeqSQHK.js";const F=`<template>
   <div>
      <a-button type="primary" @click="showModal = true">打开弹框</a-button>
      <s-full-modal allowFullScreen v-model:open="showModal" title="标题" @ok="handleOk" @cancel="handleCancel">
        内容区域
      </s-full-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const handleOk = () => {
  console.log("点击确定");
  showModal.value = false;
};

const handleCancel = () => {
  console.log("点击取消");
  showModal.value = false;
};
<\/script>`,O={__name:"Basic",setup(g){const s=m(!1),l=()=>{console.log("点击确定"),s.value=!1},h=()=>{console.log("点击取消"),s.value=!1};return(c,a)=>{const p=u("a-button"),v=u("s-full-modal"),i=u("Demo");return w(),k(i,{code:F},{default:e(()=>[o("div",null,[n(p,{type:"primary",onClick:a[0]||(a[0]=f=>s.value=!0)},{default:e(()=>a[2]||(a[2]=[d("打开弹框")])),_:1,__:[2]}),n(v,{allowFullScreen:"",open:s.value,"onUpdate:open":a[1]||(a[1]=f=>s.value=f),title:"标题",onOk:l,onCancel:h},{default:e(()=>a[3]||(a[3]=[d(" 内容区域 ")])),_:1,__:[3]},8,["open"])])]),_:1})}}},q={class:"trigger-btns"},$={__name:"CustomRender",setup(g){const s=m(`
<template>
    <div>
      <div class="trigger-btns">
        <a-button type="primary" @click="showModal1 = true">打开弹框(完全自定义头)</a-button>
        <a-button type="primary" @click="showModal2 = true">打开弹框(自定义头部左/右侧)</a-button>
        <a-button type="primary" @click="showModal3 = true">打开弹框(自定义底部左/右侧)</a-button>
        <a-button type="primary" @click="showModal4 = true">打开弹框(完全自定义底)</a-button>
      </div>
      <s-full-modal v-model:open="showModal1" allowFullScreen @cancel="handleCancel1">
        <template #title>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal2" allowFullScreen @cancel="handleCancel2">
        <template #title-left>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        <template #title-right>
          <span class="bg-[red] text-[#fff]">我是右侧自定义区域</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal3" allowFullScreen title="标题" @cancel="handleCancel3">
        <!-- 自定义底部左右侧 -->
        <template #footer-left>
          <span class="text-[12px]">左侧内容</span>
        </template>
        <template #footer-right>
          <a-space>
            <a-button type="text" @click="handleCancel3">取消</a-button>
            <a-button type="primary" @click="handleOk3">确定</a-button>
          </a-space>
        </template>
      </s-full-modal>
      <s-full-modal v-model:open="showModal4" title="自定义底部示例" allowFullScreen @cancel="handleCancel4">
        <div>这里是弹框内容</div>
        <!-- 自定义底部内容 -->
        <template #footer>
          我是自定义底部内容。
        </template>
      </s-full-modal>
    </div>
</template>
<script setup>
  const handleCancel1 = () => {
    showModal1.value = false;
  };
  const showModal2 = ref(false);


  const handleCancel2 = () => {
    showModal2.value = false;
  };

  const showModal3 = ref(false);


  const handleCancel3 = () => {
    showModal3.value = false;
  };

  const showModal4 = ref(false);

  const handleCancel4 = () => {
    showModal4.value = false;
  };
<\/script>
`),l=m(!1),h=()=>{l.value=!1},c=m(!1),a=()=>{c.value=!1},p=m(!1),v=()=>{p.value=!1},i=m(!1),f=()=>{i.value=!1};return(C,t)=>{const b=u("a-button"),_=u("s-full-modal"),x=u("a-space"),y=u("Demo");return w(),k(y,{code:s.value},{default:e(()=>[o("div",null,[o("div",q,[n(b,{type:"primary",onClick:t[0]||(t[0]=r=>l.value=!0)},{default:e(()=>t[8]||(t[8]=[d("打开弹框(完全自定义头)")])),_:1,__:[8]}),n(b,{type:"primary",onClick:t[1]||(t[1]=r=>c.value=!0)},{default:e(()=>t[9]||(t[9]=[d("打开弹框(自定义头部左/右侧)")])),_:1,__:[9]}),n(b,{type:"primary",onClick:t[2]||(t[2]=r=>p.value=!0)},{default:e(()=>t[10]||(t[10]=[d("打开弹框(自定义底部左/右侧)")])),_:1,__:[10]}),n(b,{type:"primary",onClick:t[3]||(t[3]=r=>i.value=!0)},{default:e(()=>t[11]||(t[11]=[d("打开弹框(完全自定义底)")])),_:1,__:[11]})]),n(_,{open:l.value,"onUpdate:open":t[4]||(t[4]=r=>l.value=r),allowFullScreen:"",onCancel:h},{title:e(()=>t[12]||(t[12]=[o("span",{class:"bg-[red] text-[#fff]"},"我是自定义标题",-1)])),default:e(()=>[t[13]||(t[13]=d(" 内容区域 "))]),_:1,__:[13]},8,["open"]),n(_,{open:c.value,"onUpdate:open":t[5]||(t[5]=r=>c.value=r),allowFullScreen:"",onCancel:a},{"title-left":e(()=>t[14]||(t[14]=[o("span",{class:"bg-[red] text-[#fff]"},"我是自定义标题",-1)])),"title-right":e(()=>t[15]||(t[15]=[o("span",{class:"bg-[red] text-[#fff]"},"我是右侧自定义区域",-1)])),default:e(()=>[t[16]||(t[16]=d(" 内容区域 "))]),_:1,__:[16]},8,["open"]),n(_,{open:p.value,"onUpdate:open":t[6]||(t[6]=r=>p.value=r),allowFullScreen:"",title:"标题",onCancel:v},{"footer-left":e(()=>t[17]||(t[17]=[o("span",{class:"text-[12px]"},"左侧内容",-1)])),"footer-right":e(()=>[n(x,null,{default:e(()=>[n(b,{type:"text",onClick:v},{default:e(()=>t[18]||(t[18]=[d("取消")])),_:1,__:[18]}),n(b,{type:"primary",onClick:C.handleOk3},{default:e(()=>t[19]||(t[19]=[d("确定")])),_:1,__:[19]},8,["onClick"])]),_:1})]),_:1},8,["open"]),n(_,{open:i.value,"onUpdate:open":t[7]||(t[7]=r=>i.value=r),title:"自定义底部示例",allowFullScreen:"",onCancel:f},{footer:e(()=>t[20]||(t[20]=[d(" 我是自定义底部内容。 ")])),default:e(()=>[t[21]||(t[21]=o("div",null,"这里是弹框内容",-1))]),_:1,__:[21]},8,["open"])])]),_:1},8,["code"])}}},D=M($,[["__scopeId","data-v-532a7504"]]),T=`<template>
   <div>
      <a-button type="primary" @click="showModal = true">打开弹框</a-button>
      <s-full-modal allowFullScreen draggable v-model:open="showModal" title="标题" @ok="handleOk" @cancel="handleCancel">
        内容区域
      </s-full-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const handleOk = () => {
  console.log("点击确定");
  showModal.value = false;
};

const handleCancel = () => {
  console.log("点击取消");
  showModal.value = false;
};
<\/script>`,N={__name:"Drag",setup(g){const s=m(!1),l=()=>{console.log("点击确定"),s.value=!1},h=()=>{console.log("点击取消"),s.value=!1};return(c,a)=>{const p=u("a-button"),v=u("s-full-modal"),i=u("Demo");return w(),k(i,{code:T},{default:e(()=>[o("div",null,[n(p,{type:"primary",onClick:a[0]||(a[0]=f=>s.value=!0)},{default:e(()=>a[2]||(a[2]=[d("拖拽弹框")])),_:1,__:[2]}),n(v,{allowFullScreen:"",draggable:"",open:s.value,"onUpdate:open":a[1]||(a[1]=f=>s.value=f),title:"标题",onOk:l,onCancel:h},{default:e(()=>a[3]||(a[3]=[d(" 内容区域 ")])),_:1,__:[3]},8,["open"])])]),_:1})}}},A=JSON.parse('{"title":"FullModal 全屏弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"components/full-modal/index.md","filePath":"components/full-modal/index.md"}'),U={name:"components/full-modal/index.md"},B=Object.assign(U,{setup(g){return(s,l)=>(w(),S("div",null,[l[0]||(l[0]=o("h1",{id:"fullmodal-全屏弹窗",tabindex:"-1"},[d("FullModal 全屏弹窗 "),o("a",{class:"header-anchor",href:"#fullmodal-全屏弹窗","aria-label":'Permalink to "FullModal 全屏弹窗"'},"​")],-1)),l[1]||(l[1]=o("p",null,"全屏弹窗组件，支持全屏拖拽。",-1)),l[2]||(l[2]=o("h3",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(O),l[3]||(l[3]=o("h3",{id:"自定义渲染-slot使用",tabindex:"-1"},[d("自定义渲染(slot使用) "),o("a",{class:"header-anchor",href:"#自定义渲染-slot使用","aria-label":'Permalink to "自定义渲染(slot使用)"'},"​")],-1)),n(D),l[4]||(l[4]=o("h3",{id:"拖拽支持",tabindex:"-1"},[d("拖拽支持 "),o("a",{class:"header-anchor",href:"#拖拽支持","aria-label":'Permalink to "拖拽支持"'},"​")],-1)),l[5]||(l[5]=o("p",null,"沿用了官网的示例，这里仅需要配置 draggable 即可。",-1)),n(N),l[6]||(l[6]=P("",8))]))}});export{A as __pageData,B as default};
