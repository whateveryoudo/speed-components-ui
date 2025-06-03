import{_ as A,p as v,C as s,b as z,o as f,w as a,c,G as l,j as t,a as i,aL as h}from"./chunks/framework.CUeqSQHK.js";const y={key:0,class:"flex h-[300px]"},S={class:"collapse-wrapper"},P={key:1,class:"flex h-[300px]"},D={class:"collapse-wrapper"},T=`<template>
     <div class="flex h-[300px]" v-if="expandDir === 'left'">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        :triggerMode="triggerMode"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
        <template #expand-render>
          <div>我是展开的流程日志</div>
        </template>
        <template #collapse-render>
          <div class="collapse-wrapper">
            <div class="tab-item" @click="open = true">
              <audit-outlined style="font-size: 16px" />
              <span class="text">流程日志</span>
            </div>
          </div>
        </template>
      </SCollapseHz>
    </div>
    <div class="flex h-[300px]" v-else>
      <SCollapseHz
        expandDir="right"
        :triggerMode="triggerMode"
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
        <template #expand-render>
          <div>我是展开的流程日志</div>
        </template>
        <template #collapse-render>
          <div class="collapse-wrapper">
            <div class="tab-item" @click="open = true">
              <audit-outlined style="font-size: 16px" />
              <span class="text">流程日志</span>
            </div>
          </div>
        </template>
      </SCollapseHz>
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是右侧内容
      </div>
    </div>
    <a-space class="mt-2">
      展开方向
      <a-radio-group v-model:value="expandDir">
        <a-radio value="left">向左</a-radio>
        <a-radio value="right">向右</a-radio>
      </a-radio-group>
    </a-space>
</template>

<style scoped lang="less">
.collapse-wrapper {
  .tab-item {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.1s;
    cursor: pointer;
    :deep(.ant-icon) {
      margin-bottom: 5px;
    }
    .text {
      font-size: 12px;
    }
    &:hover {
      background-color: #f5f6f8;
    }
  }
}
</style>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const expandDir = ref("left");

const triggerMode = ref("default");
<\/script>`,B={__name:"Basic",setup(m){const o=v(!1),d=v("left"),r=v("default");return(g,e)=>{const x=s("audit-outlined"),u=s("SCollapseHz"),p=s("a-radio"),_=s("a-radio-group"),b=s("a-space"),C=s("a-flex"),k=s("Demo");return f(),z(k,{code:T},{default:a(()=>[d.value==="left"?(f(),c("div",y,[e[8]||(e[8]=t("div",{class:"flex-1 border-1 border-solid border-[#efefef]"}," 我是左侧内容 ",-1)),l(u,{open:o.value,"onUpdate:open":e[1]||(e[1]=n=>o.value=n),triggerMode:r.value,expandAttrBefore:"flex: 0 0 64px",expandAttrAfter:"flex: 0 0 200px"},{"expand-render":a(()=>e[6]||(e[6]=[t("div",null,"我是展开的流程日志",-1)])),"collapse-render":a(()=>[t("div",S,[t("div",{class:"tab-item",onClick:e[0]||(e[0]=n=>o.value=!0)},[l(x,{style:{"font-size":"16px"}}),e[7]||(e[7]=t("span",{class:"text"},"流程日志",-1))])])]),_:1},8,["open","triggerMode"])])):(f(),c("div",P,[l(u,{expandDir:"right",triggerMode:r.value,open:o.value,"onUpdate:open":e[3]||(e[3]=n=>o.value=n),expandAttrBefore:"flex: 0 0 64px",expandAttrAfter:"flex: 0 0 200px"},{"expand-render":a(()=>e[9]||(e[9]=[t("div",null,"我是展开的流程日志",-1)])),"collapse-render":a(()=>[t("div",D,[t("div",{class:"tab-item",onClick:e[2]||(e[2]=n=>o.value=!0)},[l(x,{style:{"font-size":"16px"}}),e[10]||(e[10]=t("span",{class:"text"},"流程日志",-1))])])]),_:1},8,["triggerMode","open"]),e[11]||(e[11]=t("div",{class:"flex-1 border-1 border-solid border-[#efefef]"}," 我是右侧内容 ",-1))])),l(C,{vertical:"",class:"mt-2"},{default:a(()=>[l(b,null,{default:a(()=>[e[14]||(e[14]=i(" 展开方向 ")),l(_,{value:d.value,"onUpdate:value":e[4]||(e[4]=n=>d.value=n)},{default:a(()=>[l(p,{value:"left"},{default:a(()=>e[12]||(e[12]=[i("向左")])),_:1,__:[12]}),l(p,{value:"right"},{default:a(()=>e[13]||(e[13]=[i("向右")])),_:1,__:[13]})]),_:1},8,["value"])]),_:1,__:[14]}),l(b,{class:"mt-2"},{default:a(()=>[e[17]||(e[17]=i(" 悬停显示 ")),l(_,{value:r.value,"onUpdate:value":e[5]||(e[5]=n=>r.value=n)},{default:a(()=>[l(p,{value:"default"},{default:a(()=>e[15]||(e[15]=[i("默认显示")])),_:1,__:[15]}),l(p,{value:"hover"},{default:a(()=>e[16]||(e[16]=[i("悬停显示")])),_:1,__:[16]})]),_:1},8,["value"])]),_:1,__:[17]})]),_:1})]),_:1})}}},H=A(B,[["__scopeId","data-v-e6940ded"]]),q={class:"flex h-[300px]"},w={class:"collapse-wrapper"},M=`<template>
    <div class="flex h-[300px]">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
        <template #trigger-render>
          <div class="custom-trigger">
            <RightOutlined class="text-[#fff]"/>
          </div>
        </template>
        <template #expand-render>
          <div>我是展开的流程日志</div>
        </template>
        <template #collapse-render>
          <div class="collapse-wrapper">
            <div class="tab-item" @click="open = true">
              <audit-outlined style="font-size: 16px" />
              <span class="text">流程日志</span>
            </div>
          </div>
        </template>
      </SCollapseHz>
    </div>
</template>

<style scoped lang="less">
.collapse-wrapper {
  .tab-item {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.1s;
    cursor: pointer;
    :deep(.ant-icon) {
      margin-bottom: 5px;
    }
    .text {
      font-size: 12px;
    }
    &:hover {
      background-color: #f5f6f8;
    }
  }
}
.custom-trigger {
  position: absolute;
  top: 50%;
  height: 48px;
  transform: translateY(-50%);
  border: 1px solid #ebecee;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  background-color: red;
  color: #666 !important;
  left: -11px;
  z-index: 10;
}
</style>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const expandDir = ref("left");
<\/script>`,$={__name:"CustomTrigger",setup(m){const o=v(!1);return(d,r)=>{const g=s("RightOutlined"),e=s("audit-outlined"),x=s("SCollapseHz"),u=s("Demo");return f(),z(u,{code:M},{default:a(()=>[t("div",q,[r[5]||(r[5]=t("div",{class:"flex-1 border-1 border-solid border-[#efefef]"}," 我是左侧内容 ",-1)),l(x,{open:o.value,"onUpdate:open":r[2]||(r[2]=p=>o.value=p),expandAttrBefore:"flex: 0 0 64px",expandAttrAfter:"flex: 0 0 200px"},{"trigger-render":a(()=>[t("div",{class:"custom-trigger",onClick:r[0]||(r[0]=p=>o.value=!o.value)},[l(g,{class:"text-[#fff]"})])]),"expand-render":a(()=>r[3]||(r[3]=[t("div",null,"我是展开的流程日志",-1)])),"collapse-render":a(()=>[t("div",w,[t("div",{class:"tab-item",onClick:r[1]||(r[1]=p=>o.value=!0)},[l(e,{style:{"font-size":"16px"}}),r[4]||(r[4]=t("span",{class:"text"},"流程日志",-1))])])]),_:1},8,["open"])])]),_:1})}}},I=A($,[["__scopeId","data-v-001992be"]]),O=JSON.parse('{"title":"CollapseHz 横向的展开收起","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse-hz/index.md","filePath":"components/collapse-hz/index.md"}'),V={name:"components/collapse-hz/index.md"},R=Object.assign(V,{setup(m){return(o,d)=>(f(),c("div",null,[d[0]||(d[0]=h('<h1 id="collapsehz-横向的展开收起" tabindex="-1">CollapseHz 横向的展开收起 <a class="header-anchor" href="#collapsehz-横向的展开收起" aria-label="Permalink to &quot;CollapseHz 横向的展开收起&quot;">​</a></h1><p>用于横向的展开收起（基于flex布局,你可以快速生成一个展开收起的面板)，纵向展开收起推荐 <a href="https://vue-collapsed.pages.dev" target="_blank" rel="noreferrer">vue-collapsed</a>,比起antd自带的collapsed更具定制性; 如果你需要支持横纵项拖拽大小，推荐使用 <a href="https://github.com/PanJiaChen/vue-split-pane?tab=readme-ov-file#readme" target="_blank" rel="noreferrer">vue-split-pane</a> ；</p><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',3)),l(H),d[1]||(d[1]=t("h3",{id:"自定义触发器-注-需要自己控制展开收起",tabindex:"-1"},[i("自定义触发器(注：需要自己控制展开收起) "),t("a",{class:"header-anchor",href:"#自定义触发器-注-需要自己控制展开收起","aria-label":'Permalink to "自定义触发器(注：需要自己控制展开收起)"'},"​")],-1)),l(I),d[2]||(d[2]=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open(v-model)</td><td>外部控制展开收起状态</td><td>boolean</td><td>false</td></tr><tr><td>expandAttrBefore</td><td>收起时的样式属性</td><td>string</td><td>&#39;flex: 0&#39;</td></tr><tr><td>expandAttrAfter</td><td>展开时的样式属性</td><td>string</td><td>&#39;flex: 0 0 320px&#39;</td></tr><tr><td>transitionAttr</td><td>过渡动画属性</td><td>string</td><td>&#39;flex&#39;</td></tr><tr><td>triggerMode</td><td>触发方式</td><td>&#39;default&#39;-默认显示触发器 | &#39;hover&#39;-移动上去显示触发器</td><td>&#39;default&#39;</td></tr><tr><td>expandDir</td><td>展开方向</td><td>&#39;left&#39; | &#39;right&#39;</td><td>&#39;left&#39;</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>trigger-render</td><td>自定义触发器</td></tr><tr><td>expand-render</td><td>展开时显示的内容</td></tr><tr><td>collapse-render</td><td>收起时显示的内容</td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>组件默认使用 flex 布局，需要父容器设置 <code>display: flex</code></li><li>展开时内容会延迟显示，避免宽度挤压导致的视觉问题</li></ol>',7))]))}});export{O as __pageData,R as default};
