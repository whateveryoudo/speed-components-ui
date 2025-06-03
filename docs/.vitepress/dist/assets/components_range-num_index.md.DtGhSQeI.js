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
</template>`,k=x({__name:"Basic",setup(v){const s=i([]),a=i([]),m=i([]);return(B,e)=>{const u=r("s-range-num"),o=r("a-flex"),_=r("a-space"),f=r("Demo");return p(),g(f,{code:P},{default:d(()=>[t(o,{vertical:"",gap:10},{default:d(()=>[t(o,{vertical:"",gap:5},{default:d(()=>[e[3]||(e[3]=l("div",{class:"title"},"基础用法",-1)),t(u,{value:s.value,"onUpdate:value":e[0]||(e[0]=n=>s.value=n)},null,8,["value"])]),_:1,__:[3]}),t(o,{vertical:"",gap:5},{default:d(()=>[t(_,null,{default:d(()=>e[4]||(e[4]=[l("div",{class:"title"},"设置最大值最小值",-1),l("span",{class:"desc"},"最小值10，最大值100",-1)])),_:1,__:[4]}),t(u,{value:a.value,"onUpdate:value":e[1]||(e[1]=n=>a.value=n),"min-num":10,"max-num":100},null,8,["value"])]),_:1}),t(o,{vertical:"",gap:5},{default:d(()=>[e[5]||(e[5]=l("div",{class:"title"},"设置后缀",-1)),t(u,{value:m.value,"onUpdate:value":e[2]||(e[2]=n=>m.value=n),suffix:"%"},null,8,["value"])]),_:1,__:[5]})]),_:1})]),_:1})}}}),T=b(k,[["__scopeId","data-v-665c8ebe"]]),I=JSON.parse('{"title":"RangeNum 数字区间","description":"","frontmatter":{},"headers":[],"relativePath":"components/range-num/index.md","filePath":"components/range-num/index.md"}'),q={name:"components/range-num/index.md"},V=Object.assign(q,{setup(v){return(s,a)=>(p(),h("div",null,[a[0]||(a[0]=l("h1",{id:"rangenum-数字区间",tabindex:"-1"},[c("RangeNum 数字区间 "),l("a",{class:"header-anchor",href:"#rangenum-数字区间","aria-label":'Permalink to "RangeNum 数字区间"'},"​")],-1)),a[1]||(a[1]=l("p",null,"基于 antd InputNumber 封装的数字区间组件，支持前后缀、最大值最小值设定。",-1)),a[2]||(a[2]=l("h2",{id:"用法示例",tabindex:"-1"},[c("用法示例 "),l("a",{class:"header-anchor",href:"#用法示例","aria-label":'Permalink to "用法示例"'},"​")],-1)),t(T),a[3]||(a[3]=N('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前选中的值</td><td><code>number[]</code></td><td><code>[]</code></td></tr><tr><td>maxNum</td><td>最大值设定</td><td><code>number</code></td><td>-</td></tr><tr><td>minNum</td><td>最小值设定</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>suffix</td><td>后缀文本</td><td><code>string</code></td><td>-</td></tr><tr><td>autoWidth</td><td>是否自适应宽度(开启后会按照父元素均分)</td><td><code>boolean</code></td><td>false</td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>组件会在输入框失焦时触发值更新</li><li>当输入值超过最大值时，会自动设置为最大值</li><li>当输入值小于最小值时，会自动设置为最小值</li><li>当起始值大于结束值时，会自动调整两个值相等</li><li>当结束值小于起始值时，会自动调整两个值相等</li><li>当两个值都为空时，会返回空数组</li></ol>',5))]))}});export{I as __pageData,V as default};
