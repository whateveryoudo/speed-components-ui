import{d as x,p as i,C as r,b as g,o as p,w as d,G as t,j as l,_ as b,c as h,aL as N,a as c}from"./chunks/framework.CUeqSQHK.js";const P=`<template>
  <a-flex vertical :gap="10">
    <a-flex vertical :gap="5">
      基础用法
      <s-range-num
        v-model:value="value1"
      />
    </a-flex>

    <a-flex vertical :gap="5">
      <a-space>
        设置最大值最小值:
        <span class="text-[12px] text-[#999]">最小值10，最大值100</span>
      </a-space>
      <s-range-num
        v-model:value="value2"
        :min-num="10"
        :max-num="100"
      />
    </a-flex>

    <a-flex vertical :gap="5">
      设置后缀
      <s-range-num
        v-model:value="value3"
        suffix="%"
      />
    </a-flex>
  </a-flex>
</template>`,k=x({__name:"Basic",setup(v){const s=i([]),a=i([]),m=i([]);return(B,e)=>{const u=r("s-range-num"),o=r("a-flex"),_=r("a-space"),f=r("Demo");return p(),g(f,{code:P},{default:d(()=>[t(o,{vertical:"",gap:10},{default:d(()=>[t(o,{vertical:"",gap:5},{default:d(()=>[e[3]||(e[3]=l("div",{class:"title"},"基础用法",-1)),t(u,{value:s.value,"onUpdate:value":e[0]||(e[0]=n=>s.value=n)},null,8,["value"])]),_:1,__:[3]}),t(o,{vertical:"",gap:5},{default:d(()=>[t(_,null,{default:d(()=>e[4]||(e[4]=[l("div",{class:"title"},"设置最大值最小值",-1),l("span",{class:"desc"},"最小值10，最大值100",-1)])),_:1,__:[4]}),t(u,{value:a.value,"onUpdate:value":e[1]||(e[1]=n=>a.value=n),"min-num":10,"max-num":100},null,8,["value"])]),_:1}),t(o,{vertical:"",gap:5},{default:d(()=>[e[5]||(e[5]=l("div",{class:"title"},"设置后缀",-1)),t(u,{value:m.value,"onUpdate:value":e[2]||(e[2]=n=>m.value=n),suffix:"%"},null,8,["value"])]),_:1,__:[5]})]),_:1})]),_:1})}}}),T=b(k,[["__scopeId","data-v-665c8ebe"]]),I=JSON.parse('{"title":"RangeNum 数字区间","description":"","frontmatter":{},"headers":[],"relativePath":"components/range-num/index.md","filePath":"components/range-num/index.md"}'),q={name:"components/range-num/index.md"},V=Object.assign(q,{setup(v){return(s,a)=>(p(),h("div",null,[a[0]||(a[0]=l("h1",{id:"rangenum-数字区间",tabindex:"-1"},[c("RangeNum 数字区间 "),l("a",{class:"header-anchor",href:"#rangenum-数字区间","aria-label":'Permalink to "RangeNum 数字区间"'},"​")],-1)),a[1]||(a[1]=l("p",null,"基于 antd InputNumber 封装的数字区间组件，支持前后缀、最大值最小值设定。",-1)),a[2]||(a[2]=l("h2",{id:"用法示例",tabindex:"-1"},[c("用法示例 "),l("a",{class:"header-anchor",href:"#用法示例","aria-label":'Permalink to "用法示例"'},"​")],-1)),t(T),a[3]||(a[3]=N("",5))]))}});export{I as __pageData,V as default};
