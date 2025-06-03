import{b as Y,a as U}from"./chunks/theme.C70DuU-c.js";import{d as H,h as O,p as z,C as o,b as K,o as f,w as r,G as n,k as e,c as G,e as B,a as c,j as s,t as E,aL as W}from"./chunks/framework.CUeqSQHK.js";const X=H({__name:"Basic",setup(q){const m=async b=>{console.log("请求参数:",b),await new Promise(_=>setTimeout(_,500));const{page:i=1,size:h=10}=b,g=100,u=(i-1)*h,M=Math.min(u+h,g),F=new Date(Date.now()+(Math.random()*40-20)*24*60*60*1e3);return{success:!0,data:Array.from({length:M-u},(_,d)=>({id:u+d+1,name:`用户${u+d+1}`,age:Math.floor(Math.random()*50)+18,createTime:F.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/\//g,"-")})),totalCount:g}},a=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"创建时间",dataIndex:"createTime",key:"createTime"}],y=O(()=>({beforeFetch:()=>{console.log("请求前处理")}})),{dataSource:v,loading:D,pagination:S,handleTableChange:R,getList:P}=Y(m,y);P();const A=z(`<template>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    />
</template>
<script setup lang="ts">
import { useTable } from "@/hooks/useLoad";
import { computed, ref } from "vue";

// 模拟请求数据
const fetchData = async (params: any) => {
  console.log('请求参数:', params);
  // 模拟接口请求延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 模拟分页数据
  const { page = 1, size = 10 } = params;
  const total = 100; // 总数据量
  const start = (page - 1) * size;
  const end = Math.min(start + size, total);
  
  const mockData = Array.from({ length: end - start }, (_, index) => ({
    id: start + index + 1,
    name: \`用户\${start + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 18,
    createTime: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
  }));

  return {
    success: true,
    data: mockData,
    totalCount: total,
  };
};

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  }
];

const options = computed(() => ({
  beforeFetch: () => {
    console.log("请求前处理");
  },
}));

const { dataSource, loading, pagination, handleTableChange, getList } = useTable(
  fetchData,
  options
);

// 初始化加载数据
getList();
<\/script>
`);return(b,i)=>{const h=o("a-table"),g=o("Demo");return f(),K(g,{code:A.value},{default:r(()=>[n(h,{columns:a,"data-source":e(v),loading:e(D),pagination:e(S),onChange:e(R)},null,8,["data-source","loading","pagination","onChange"])]),_:1},8,["code"])}}}),Z={key:0},tt=H({__name:"Complex",setup(q){const m=[{label:"处理中",value:"1",color:"blue"},{label:"已完成",value:"2",color:"green"},{label:"已取消",value:"3",color:"red"}],a=O(()=>[{label:"姓名",fieldKey:"name",fieldType:"input",props:{placeholder:"请输入姓名"}},{label:"状态",fieldKey:"status",fieldType:"select",props:{options:m}},{label:"年龄",fieldKey:"age",fieldType:"inputNumber",props:{placeholder:"请输入年龄"}},{label:"用户",fieldKey:"user",fieldType:"apiSelect",props:{placeholder:"请选择用户",fetchOptions:{params:{page:1,size:10},search:{key:"name"},afterRes:d=>d.data.map(t=>({label:t.name,value:t.id}))},fetchFunc:async d=>new Promise(t=>{setTimeout(()=>{t({data:d!=null&&d.name?[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}].filter(l=>l.name.includes(d.name)):[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}]})},500)}),fieldNames:{label:"label",value:"value"}}},{fieldKey:"createTime",label:"创建时间",fieldType:"dateTime",props:{valueFormat:"YYYY-MM-DD HH:mm:ss",transform2Params:["createTimeStart","createTimeEnd"]}}]),y=z({name:"",age:[],status:void 0,user:void 0,createTimeStart:"",createTimeEnd:""}),v=async d=>{console.log("请求参数:",d),await new Promise(T=>setTimeout(T,500));const{page:t=1,size:l=10}=d,k=100,p=(t-1)*l,x=Math.min(p+l,k);return{success:!0,data:Array.from({length:x-p},(T,C)=>{const I=new Date(Date.now()+(Math.random()*40-20)*24*60*60*1e3);return{id:p+C+1,name:`用户${p+C+1}`,status:String(Math.floor(Math.random()*3)+1),createTime:I.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/\//g,"-"),age:Math.floor(Math.random()*50)+18}}),totalCount:k}},D=async()=>(await new Promise(t=>setTimeout(t,500)),{success:!0,data:Array.from({length:100},(t,l)=>({id:l+1}))}),S=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:!0},{title:"状态",dataIndex:"status",key:"status",filters:[{text:"处理中",value:"1"},{text:"已完成",value:"2"},{text:"已取消",value:"3"}],filterMultiple:!1},{title:"创建时间",dataIndex:"createTime",key:"createTime",sorter:!0}],R=O(()=>({needFullSelect:!0,extraParams:{...y.value,appId:"1"},fullRowsAjax:D,beforeFetch:()=>{console.log("请求前处理")}})),{dataSource:P,loading:A,pagination:b,state:i,onSelectChange:h,handleTableChange:g,totalCheckStatus:u,onCheckAllChange:M,selectAllLoading:F,getList:L}=Y(v,R);L();const _=z(`<template>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    />
</template>
<script setup lang="ts">
import { useTable } from "@/hooks/useLoad";
import { computed, ref } from "vue";

// 模拟请求数据
const fetchData = async (params: any) => {
  console.log('请求参数:', params);
  // 模拟接口请求延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 模拟分页数据
  const { page = 1, size = 10 } = params;
  const total = 100; // 总数据量
  const start = (page - 1) * size;
  const end = Math.min(start + size, total);
  
  const mockData = Array.from({ length: end - start }, (_, index) => ({
    id: start + index + 1,
    name: \`用户\${start + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 18,
  }));

  return {
    success: true,
    data: mockData,
    totalCount: total,
  };
};


const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
];

const options = computed(() => ({
  beforeFetch: () => {
    console.log("请求前处理");
  },
}));

const { dataSource, loading, pagination, handleTableChange, getList } =
  useTable(fetchData, options);

// 初始化加载数据
getList();
<\/script>
`);return(d,t)=>{const l=o("s-query-filter"),k=o("a-checkbox"),p=o("a-spin"),x=o("a-space"),N=o("a-button"),T=o("a-flex"),C=o("a-tag"),I=o("a-table"),J=o("Demo");return f(),K(J,{code:_.value},{default:r(()=>[n(l,{fields:a.value,values:y.value,col:8,onSearch:t[0]||(t[0]=j=>e(L)(!0))},null,8,["fields","values"]),n(T,{justify:"space-between",class:"my-2"},{default:r(()=>[n(x,null,{default:r(()=>[n(k,{disabled:e(i).totalRows.length===0,checked:e(u).checkAll,indeterminate:e(u).indeterminate,onChange:e(M)},{default:r(()=>t[2]||(t[2]=[c("全选")])),_:1,__:[2]},8,["disabled","checked","indeterminate","onChange"]),n(p,{size:"small",spinning:e(F)},null,8,["spinning"]),e(i).hasSelectedRows.length?(f(),G("span",Z,[t[3]||(t[3]=c(" 已选择 ")),s("strong",null,E(e(i).hasSelectedRows.length),1),t[4]||(t[4]=c(" 条数据 "))])):B("",!0)]),_:1}),n(x,null,{default:r(()=>[n(N,{type:"primary",onClick:t[1]||(t[1]=()=>e(U).info("新增用户"))},{default:r(()=>t[5]||(t[5]=[c("新增用户")])),_:1,__:[5]})]),_:1})]),_:1}),n(I,{columns:S,"data-source":e(P),loading:e(A),"row-key":"id",pagination:e(b),onChange:e(g),"row-selection":{selectedRowKeys:e(i).selectedRowKeys,onChange:e(h)}},{bodyCell:r(({column:j,record:V})=>{var $;return[j.dataIndex==="status"?(f(),K(C,{key:0,color:($=m.find(w=>w.value===V.status))==null?void 0:$.color},{default:r(()=>{var w;return[c(E((w=m.find(Q=>Q.value===V.status))==null?void 0:w.label),1)]}),_:2},1032,["color"])):B("",!0)]}),_:1},8,["data-source","loading","pagination","onChange","row-selection"])]),_:1},8,["code"])}}}),ot=JSON.parse('{"title":"useTable","description":"","frontmatter":{},"headers":[],"relativePath":"components/useTable/index.md","filePath":"components/useTable/index.md"}'),et={name:"components/useTable/index.md"},nt=Object.assign(et,{setup(q){return(m,a)=>(f(),G("div",null,[a[0]||(a[0]=s("h1",{id:"usetable",tabindex:"-1"},[c("useTable "),s("a",{class:"header-anchor",href:"#usetable","aria-label":'Permalink to "useTable"'},"​")],-1)),a[1]||(a[1]=s("p",null,"表格通用 Hook，支持分页、搜索、全选、跨页勾选等功能。",-1)),a[2]||(a[2]=s("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a[3]||(a[3]=s("p",null,"结合a-table",-1)),n(X),a[4]||(a[4]=s("h2",{id:"复合示例",tabindex:"-1"},[c("复合示例 "),s("a",{class:"header-anchor",href:"#复合示例","aria-label":'Permalink to "复合示例"'},"​")],-1)),a[5]||(a[5]=s("p",null,"一个包含，翻页，全选，排序，勾选，筛选的综合示例",-1)),n(tt),a[6]||(a[6]=W("",9))]))}});export{ot as __pageData,nt as default};
