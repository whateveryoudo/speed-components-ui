import{d as g,p,C as k,b as y,o as E,w as v,j as a,G as n,_ as f,c as b,aL as F,a as u}from"./chunks/framework.CUeqSQHK.js";const _={class:"demo-wrapper"},x={class:"demo-item"},C={class:"demo-item"},w={class:"demo-item"},A=`<template>
  <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-api-select
          class="w-[300px]"
          v-model:value="value"
          :fetch-func="fetchData"
          placeholder="请选择用户"
          :search="{key: 'userName'}"
          allow-clear
        />
      </div>

      <div class="demo-item">
        <h3>多选模式</h3>
        <s-api-select
          v-model:value="multipleValue"
          :fetch-func="fetchData"
          placeholder="请选择多个用户"
          mode="multiple"
          :search="{key: 'userName'}"
          allow-clear
          class="w-[300px]"
        />
      </div>

      <div class="demo-item">
        <h3>自定义字段名:label: 'username', value: 'userId'</h3>
        <s-api-select
          v-model:value="customValue"
          :fetch-func="fetchData"
          :field-names="{ label: 'username', value: 'userId' }"
          placeholder="请选择用户"
          show-search
          class="w-[300px]"
          allow-clear
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 单选值
const value = ref()

// 多选值
const multipleValue = ref<string[]>([])

// 自定义字段值
const customValue = ref<string>()

// 模拟接口请求
const fetchData = async (params: any) => {
  const { searchVal = '' } = params
  // 模拟接口延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const list = Array.from({ length: 10 }, (_, index) => ({
    id: \`\${index + 1}\`,
    name: \`用户\${index + 1}\`,
    username: \`user\${index + 1}\`,
    userId: \`U\${index + 1}\`
  }))

  // 模拟搜索过滤
  const filteredList = searchVal
    ? list.filter(item => 
        item.name.includes(searchVal) || 
        item.username.includes(searchVal)
      )
    : list

  return {
    success: true,
    data: {
      data: filteredList
    }
  }
}
<\/script>
<style scoped lang="less">
.demo-wrapper {
  width: 100%;
}

.demo-item {
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>`,B=g({__name:"Basic",setup(m){const d=p(),e=p([]),r=p(),h=async o=>{const{searchVal:s=""}=o;await new Promise(t=>setTimeout(t,500));const i=Array.from({length:10},(t,l)=>({id:`${l+1}`,name:`用户${l+1}`,username:`user${l+1}`,userId:`U${l+1}`}));return{success:!0,data:s?i.filter(t=>t.name.includes(s)||t.username.includes(s)):i}};return(o,s)=>{const i=k("s-api-select"),c=k("Demo");return E(),y(c,{code:A},{default:v(()=>[a("div",_,[a("div",x,[s[3]||(s[3]=a("h3",null,"基础用法",-1)),n(i,{class:"w-[300px]",value:d.value,"onUpdate:value":s[0]||(s[0]=t=>d.value=t),"fetch-func":h,placeholder:"请选择用户","allow-clear":"",search:{key:"userName"}},null,8,["value"])]),a("div",C,[s[4]||(s[4]=a("h3",null,"多选模式",-1)),n(i,{value:e.value,"onUpdate:value":s[1]||(s[1]=t=>e.value=t),"fetch-func":h,placeholder:"请选择多个用户",mode:"multiple","allow-clear":"",class:"w-[300px]",search:{key:"userName"}},null,8,["value"])]),a("div",w,[s[5]||(s[5]=a("h3",null,"自定义字段名：{label: 'username', value: 'userId'}",-1)),n(i,{value:r.value,"onUpdate:value":s[2]||(s[2]=t=>r.value=t),"fetch-func":h,"field-names":{label:"username",value:"userId"},placeholder:"请选择用户","show-search":"",class:"w-[300px]","allow-clear":""},null,8,["value"])])])]),_:1})}}}),D=f(B,[["__scopeId","data-v-ae7b98e6"]]),N=JSON.parse('{"title":"ApiSelect 搜索选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/api-select/index.md","filePath":"components/api-select/index.md"}'),V={name:"components/api-select/index.md"},I=Object.assign(V,{setup(m){return(d,e)=>(E(),b("div",null,[e[0]||(e[0]=a("h1",{id:"apiselect-搜索选择器",tabindex:"-1"},[u("ApiSelect 搜索选择器 "),a("a",{class:"header-anchor",href:"#apiselect-搜索选择器","aria-label":'Permalink to "ApiSelect 搜索选择器"'},"​")],-1)),e[1]||(e[1]=a("p",null,"基于 antd Select 封装的搜索选择器组件，支持远程搜索和数据加载。",-1)),e[2]||(e[2]=a("h2",{id:"示例",tabindex:"-1"},[u("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1)),n(D),e[3]||(e[3]=F(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>当前选中的值</td><td><code>string | string[]</code></td><td>-</td></tr><tr><td>fetchFunc</td><td>获取选项数据的函数</td><td><code>(params:any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label: string, value: string }</code></td><td><code>{ label: &#39;name&#39;, value: &#39;id&#39; }</code></td></tr><tr><td>fetchOptions</td><td>请求配置</td><td><code>{ params?: Record&lt;string, any&gt;, afterRes?: Function }</code></td><td>-</td></tr><tr><td>mode</td><td>设置 Select 的模式(multiple为多选)</td><td><code>&#39;multiple&#39;</code></td><td>-</td></tr><tr><td>search</td><td>搜索配置(开启后会携带搜索字段到请求中)</td><td><code>{key: string}</code></td><td>-</td></tr><tr><td>placeholder</td><td>选择框默认文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中值变化时触发</td><td><code>(value: string | string[], option: any)</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><code>fetchFunc</code> 函数需要返回符合以下格式的数据：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="2"><li>如果后端返回的数据格式与默认格式不一致，可以通过 <code>fetchOptions.afterRes</code> 进行转换：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetchOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    afterRes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 转换数据格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: item.label,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: item.value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>可以通过 <code>fieldNames</code> 自定义选项的标签和值的字段名：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fieldNames</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显示的文本字段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userId&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 选项的值字段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14))]))}});export{N as __pageData,I as default};
