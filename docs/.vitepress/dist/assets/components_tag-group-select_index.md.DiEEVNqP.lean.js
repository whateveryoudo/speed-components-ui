import{C as k}from"./chunks/theme.C70DuU-c.js";import{d as E,G as e,p as n,C as v,b as C,o as b,w as F,j as t,t as o,_ as A,c as T,aL as m}from"./chunks/framework.CUeqSQHK.js";const D={class:"demo-wrapper"},I={class:"demo-item"},x={class:"mt-4"},B={class:"demo-item"},q={class:"mt-4"},P={class:"demo-item"},w={class:"mt-4"},S={class:"demo-item"},N={class:"mt-4"},V={class:"demo-item"},U={class:"mt-4"},W={class:"demo-item"},G={class:"mt-4"},O=`<template>
  <!-- 基础用法（单选） -->
  <s-tag-group
    v-model:value="value1"
    :tags="tags"
  />

  <!-- 多选模式 -->
  <s-tag-group
    v-model:value="value2"
    :tags="tags"
    mode="multiple"
  />

  <!-- 带图标 -->
  <s-tag-group
    v-model:value="value3"
    :tags="tagsWithIcon"
  />

  <!-- 自定义图标颜色 -->
  <s-tag-group
    v-model:value="value4"
    :tags="tagsWithIconColor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TagItem } from '@/components/TagGroup/type'

// 基础标签数据
const tags: TagItem[] = [
  { label: '标签1', value: '1' },
  { label: '标签2', value: '2' },
  { label: '标签3', value: '3' },
  { label: '标签4', value: '4' }
]

// 带图标的标签数据
const tagsWithIcon: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star' },
  { label: '标签2', value: '2', icon: 'icon-star' },
  { label: '标签3', value: '3', icon: 'icon-star' },
  { label: '标签4', value: '4', icon: 'icon-star' }
]

// 自定义图标颜色的标签数据
const tagsWithIconColor: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star', iconColor: '#f5222d' },
  { label: '标签2', value: '2', icon: 'icon-star', iconColor: '#fa8c16' },
  { label: '标签3', value: '3', icon: 'icon-star', iconColor: '#52c41a' },
  { label: '标签4', value: '4', icon: 'icon-star', iconColor: '#1890ff' }
]

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref<string[]>([])

// 带图标的值
const value3 = ref('')

// 自定义图标颜色的值
const value4 = ref('')
<\/script>`,j=E({__name:"Basic",setup(y){const d=[{label:"标签1",value:"1"},{label:"标签2",value:"2"},{label:"标签3",value:"3"},{label:"标签4",value:"4"}],l=[{label:"标签1",value:"1",icon:"icon-flow-team"},{label:"标签2",value:"2",icon:"icon-aside-rules"},{label:"标签3",value:"3",icon:e(k,null,null)}],_=[{label:"标签1",value:"1",icon:"icon-flow-team",iconColor:"#f5222d"},{label:"标签2",value:"2",icon:"icon-aside-rules",iconColor:"#fa8c16"},{label:"标签3",value:"3",icon:e(k,null,null),iconColor:"#52c41a"}],r=n(""),p=n([]),h=n(""),u=n(""),c=n(""),g=n([]);return(L,a)=>{const i=v("s-tag-group"),f=v("Demo");return b(),C(f,{code:O},{default:F(()=>[t("div",D,[t("div",I,[a[6]||(a[6]=t("h3",null,"基础用法（单选）",-1)),e(i,{value:r.value,"onUpdate:value":a[0]||(a[0]=s=>r.value=s),tags:d,"total-config":{show:!0,value:"total"}},null,8,["value"]),t("div",x,"值："+o(r.value),1)]),t("div",B,[a[7]||(a[7]=t("h3",null,"多选模式",-1)),e(i,{"total-config":{show:!0},value:p.value,"onUpdate:value":a[1]||(a[1]=s=>p.value=s),tags:d,mode:"multiple"},null,8,["value"]),t("div",q,"值："+o(p.value),1)]),t("div",P,[a[8]||(a[8]=t("h3",null,"带图标",-1)),e(i,{value:h.value,"onUpdate:value":a[2]||(a[2]=s=>h.value=s),tags:l},null,8,["value"]),t("div",w,"值："+o(h.value),1)]),t("div",S,[a[9]||(a[9]=t("h3",null,"自定义图标颜色",-1)),e(i,{value:u.value,"onUpdate:value":a[3]||(a[3]=s=>u.value=s),tags:_},null,8,["value"]),t("div",N,"值："+o(u.value),1)]),t("div",V,[a[10]||(a[10]=t("h3",null,"antd tag显示(单选)(此模式不支持使用图标定义)",-1)),e(i,{value:c.value,"onUpdate:value":a[4]||(a[4]=s=>c.value=s),tags:d,"display-type":"antd-tag","total-config":{show:!0,value:"total"}},null,8,["value"]),t("div",U,"值："+o(c.value),1)]),t("div",W,[a[11]||(a[11]=t("h3",null,"antd tag显示(此模式不支持使用图标定义)",-1)),e(i,{value:g.value,"onUpdate:value":a[5]||(a[5]=s=>g.value=s),tags:d,"display-type":"antd-tag","total-config":{show:!0,value:"total"},mode:"multiple"},null,8,["value"]),t("div",G,"值："+o(g.value),1)])])]),_:1})}}}),R=A(j,[["__scopeId","data-v-a87fc453"]]),H=JSON.parse('{"title":"TagGroup 标签组","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag-group-select/index.md","filePath":"components/tag-group-select/index.md"}'),J={name:"components/tag-group-select/index.md"},K=Object.assign(J,{setup(y){return(d,l)=>(b(),T("div",null,[l[0]||(l[0]=m("",4)),e(R),l[1]||(l[1]=m("",10))]))}});export{H as __pageData,K as default};
