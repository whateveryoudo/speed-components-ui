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
</style>`,B=g({__name:"Basic",setup(m){const d=p(),e=p([]),r=p(),h=async o=>{const{searchVal:s=""}=o;await new Promise(t=>setTimeout(t,500));const i=Array.from({length:10},(t,l)=>({id:`${l+1}`,name:`用户${l+1}`,username:`user${l+1}`,userId:`U${l+1}`}));return{success:!0,data:s?i.filter(t=>t.name.includes(s)||t.username.includes(s)):i}};return(o,s)=>{const i=k("s-api-select"),c=k("Demo");return E(),y(c,{code:A},{default:v(()=>[a("div",_,[a("div",x,[s[3]||(s[3]=a("h3",null,"基础用法",-1)),n(i,{class:"w-[300px]",value:d.value,"onUpdate:value":s[0]||(s[0]=t=>d.value=t),"fetch-func":h,placeholder:"请选择用户","allow-clear":"",search:{key:"userName"}},null,8,["value"])]),a("div",C,[s[4]||(s[4]=a("h3",null,"多选模式",-1)),n(i,{value:e.value,"onUpdate:value":s[1]||(s[1]=t=>e.value=t),"fetch-func":h,placeholder:"请选择多个用户",mode:"multiple","allow-clear":"",class:"w-[300px]",search:{key:"userName"}},null,8,["value"])]),a("div",w,[s[5]||(s[5]=a("h3",null,"自定义字段名：{label: 'username', value: 'userId'}",-1)),n(i,{value:r.value,"onUpdate:value":s[2]||(s[2]=t=>r.value=t),"fetch-func":h,"field-names":{label:"username",value:"userId"},placeholder:"请选择用户","show-search":"",class:"w-[300px]","allow-clear":""},null,8,["value"])])])]),_:1})}}}),D=f(B,[["__scopeId","data-v-ae7b98e6"]]),N=JSON.parse('{"title":"ApiSelect 搜索选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/api-select/index.md","filePath":"components/api-select/index.md"}'),V={name:"components/api-select/index.md"},I=Object.assign(V,{setup(m){return(d,e)=>(E(),b("div",null,[e[0]||(e[0]=a("h1",{id:"apiselect-搜索选择器",tabindex:"-1"},[u("ApiSelect 搜索选择器 "),a("a",{class:"header-anchor",href:"#apiselect-搜索选择器","aria-label":'Permalink to "ApiSelect 搜索选择器"'},"​")],-1)),e[1]||(e[1]=a("p",null,"基于 antd Select 封装的搜索选择器组件，支持远程搜索和数据加载。",-1)),e[2]||(e[2]=a("h2",{id:"示例",tabindex:"-1"},[u("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1)),n(D),e[3]||(e[3]=F("",14))]))}});export{N as __pageData,I as default};
