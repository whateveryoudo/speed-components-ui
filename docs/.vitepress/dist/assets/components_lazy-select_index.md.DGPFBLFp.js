import{d as k,p,C as o,b as S,o as y,w as d,G as e,a7 as f,a as s,j as A,t as N,ac as g,c as q,aL as b}from"./chunks/framework.CUeqSQHK.js";const D=`<template>
    <s-lazy-select
      v-model:value="value"
      :fetch-func="fetchData"
      :fetch-params="{ type: 'user' }"
      :search="{
        placeholder: '请输入用户名称',
        key: 'name',
      }"
      mode="single"
      placeholder="请选择用户"
    />
    <div class="mt-2">
      当前选择的值：{{ value }}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref({ label: "", value: "" });
const fetchData = async (params: any) => {
  // 模拟接口请求(注意这里响应数据格式)
  const { size = 10, page = 1 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: \`用户\${(page - 1) * size + index + 1}\`,
  }));

  return {
    data: {
      records: list,
      pages: 4, // 固定总页数
      total: 40, // 固定总条数
    },
    success: true
  };
};
<\/script>`,L=k({__name:"Basic",setup(x){const r=p(),a=p("single"),m=p(),_=p(),T=u=>{r.value=u==="single"?void 0:[]},P=async u=>{const{size:t=10,page:c=1}=u;return{data:Array.from({length:t},(h,i)=>({userId:(c-1)*t+i+1,userName:`用户${(c-1)*t+i+1}`})),totalCount:40,totalPages:4,success:!0}};return(u,t)=>{const c=o("s-lazy-select"),n=o("a-space"),h=o("a-radio"),i=o("a-radio-group"),v=o("a-input-number"),z=o("a-flex"),C=o("Demo");return y(),S(C,{code:D},{default:d(()=>[e(c,{value:r.value,"onUpdate:value":t[0]||(t[0]=l=>r.value=l),"fetch-func":P,"fetch-params":{type:"user"},"field-names":{label:"userName",value:"userId"},maxCount:m.value,maxTagTextLength:_.value,search:{placeholder:"请输入用户名称",key:"userName"},mode:a.value,placeholder:"请选择用户"},null,8,["value","maxCount","maxTagTextLength","mode"]),e(z,{class:"mt-2",vertical:"",gap:10},{default:d(()=>[e(n,null,{default:d(()=>[t[4]||(t[4]=s("当前选择的值: ")),A("span",null,N(r.value),1)]),_:1,__:[4]}),e(n,null,{default:d(()=>[t[7]||(t[7]=s("模式 ")),e(i,{value:a.value,"onUpdate:value":t[1]||(t[1]=l=>a.value=l),onChange:T},{default:d(()=>[e(h,{value:"single"},{default:d(()=>t[5]||(t[5]=[s("单选")])),_:1,__:[5]}),e(h,{value:"multiple"},{default:d(()=>t[6]||(t[6]=[s("多选")])),_:1,__:[6]})]),_:1},8,["value"])]),_:1,__:[7]}),f(e(n,null,{default:d(()=>[t[8]||(t[8]=s(" 最大显示数 ")),e(v,{value:m.value,"onUpdate:value":t[2]||(t[2]=l=>m.value=l)},null,8,["value"])]),_:1,__:[8]},512),[[g,a.value==="multiple"]]),f(e(n,null,{default:d(()=>[t[9]||(t[9]=s(" 最大单个回填项长度 ")),e(v,{value:_.value,"onUpdate:value":t[3]||(t[3]=l=>_.value=l)},null,8,["value"])]),_:1,__:[9]},512),[[g,a.value==="multiple"]])]),_:1})]),_:1})}}}),w=JSON.parse('{"title":"LazySelect 懒加载选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/lazy-select/index.md","filePath":"components/lazy-select/index.md"}'),V={name:"components/lazy-select/index.md"},B=Object.assign(V,{setup(x){return(r,a)=>(y(),q("div",null,[a[0]||(a[0]=b('<h1 id="lazyselect-懒加载选择器" tabindex="-1">LazySelect 懒加载选择器 <a class="header-anchor" href="#lazyselect-懒加载选择器" aria-label="Permalink to &quot;LazySelect 懒加载选择器&quot;">​</a></h1><p>带有分页请求的多选组件，采用 popover 实现，值为默认 <code>{ value, label }</code>(批量为<code>[{value, label}]</code>)，用于跨页回显。（注：组件需要存入label字段，请确保后端能够存储值和文字。）</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>演示示例请求逻辑依赖了公共hook的useLoad的useLoadMore。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',4)),e(L),a[1]||(a[1]=b('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>选中的值</td><td><code>{ label: string, value: string }</code> | <code>Array&lt;{ label: string, value: string }&gt;</code></td><td>-</td></tr><tr><td>mode</td><td>选择模式</td><td><code>&#39;single&#39;</code> | <code>&#39;multiple&#39;</code></td><td><code>&#39;single&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td>string</td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td>boolean</td><td><code>true</code></td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label: string, value: string }</code></td><td><code>{ label: &#39;name&#39;, value: &#39;id&#39; }</code></td></tr><tr><td>maxCount</td><td>多选模式下最多显示标签数</td><td>number</td><td><code>10</code></td></tr><tr><td>maxTagTextLength</td><td>多选模式下标签最大字符数</td><td>number</td><td><code>10</code></td></tr><tr><td>search</td><td>搜索配置</td><td><code>{ key: string, placeholder?: string }</code></td><td>-</td></tr><tr><td>fetchFunc</td><td>获取数据的函数</td><td><code>(params: any) =&gt; Promise&lt;{ data: {records: any[], total: number, pages: number },list: success: boolean }&gt;</code></td><td>-</td></tr><tr><td>fetchParams</td><td>额外请求参数(如果配置了search,这里可以不用再设置)</td><td>any</td><td><code>{}</code></td></tr><tr><td>afterFetch</td><td>数据获取后的回调(可处理为hook需要的数据结构)</td><td><code>(data: any, res?: any) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>render-option</td><td>自定义选项内容</td><td><code>{ data: any }</code>(当前行数据)</td></tr></tbody></table>',5))]))}});export{w as __pageData,B as default};
