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
`);return(d,t)=>{const l=o("s-query-filter"),k=o("a-checkbox"),p=o("a-spin"),x=o("a-space"),N=o("a-button"),T=o("a-flex"),C=o("a-tag"),I=o("a-table"),J=o("Demo");return f(),K(J,{code:_.value},{default:r(()=>[n(l,{fields:a.value,values:y.value,col:8,onSearch:t[0]||(t[0]=j=>e(L)(!0))},null,8,["fields","values"]),n(T,{justify:"space-between",class:"my-2"},{default:r(()=>[n(x,null,{default:r(()=>[n(k,{disabled:e(i).totalRows.length===0,checked:e(u).checkAll,indeterminate:e(u).indeterminate,onChange:e(M)},{default:r(()=>t[2]||(t[2]=[c("全选")])),_:1,__:[2]},8,["disabled","checked","indeterminate","onChange"]),n(p,{size:"small",spinning:e(F)},null,8,["spinning"]),e(i).hasSelectedRows.length?(f(),G("span",Z,[t[3]||(t[3]=c(" 已选择 ")),s("strong",null,E(e(i).hasSelectedRows.length),1),t[4]||(t[4]=c(" 条数据 "))])):B("",!0)]),_:1}),n(x,null,{default:r(()=>[n(N,{type:"primary",onClick:t[1]||(t[1]=()=>e(U).info("新增用户"))},{default:r(()=>t[5]||(t[5]=[c("新增用户")])),_:1,__:[5]})]),_:1})]),_:1}),n(I,{columns:S,"data-source":e(P),loading:e(A),"row-key":"id",pagination:e(b),onChange:e(g),"row-selection":{selectedRowKeys:e(i).selectedRowKeys,onChange:e(h)}},{bodyCell:r(({column:j,record:V})=>{var $;return[j.dataIndex==="status"?(f(),K(C,{key:0,color:($=m.find(w=>w.value===V.status))==null?void 0:$.color},{default:r(()=>{var w;return[c(E((w=m.find(Q=>Q.value===V.status))==null?void 0:w.label),1)]}),_:2},1032,["color"])):B("",!0)]}),_:1},8,["data-source","loading","pagination","onChange","row-selection"])]),_:1},8,["code"])}}}),ot=JSON.parse('{"title":"useTable","description":"","frontmatter":{},"headers":[],"relativePath":"components/useTable/index.md","filePath":"components/useTable/index.md"}'),et={name:"components/useTable/index.md"},nt=Object.assign(et,{setup(q){return(m,a)=>(f(),G("div",null,[a[0]||(a[0]=s("h1",{id:"usetable",tabindex:"-1"},[c("useTable "),s("a",{class:"header-anchor",href:"#usetable","aria-label":'Permalink to "useTable"'},"​")],-1)),a[1]||(a[1]=s("p",null,"表格通用 Hook，支持分页、搜索、全选、跨页勾选等功能。",-1)),a[2]||(a[2]=s("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a[3]||(a[3]=s("p",null,"结合a-table",-1)),n(X),a[4]||(a[4]=s("h2",{id:"复合示例",tabindex:"-1"},[c("复合示例 "),s("a",{class:"header-anchor",href:"#复合示例","aria-label":'Permalink to "复合示例"'},"​")],-1)),a[5]||(a[5]=s("p",null,"一个包含，翻页，全选，排序，勾选，筛选的综合示例",-1)),n(tt),a[6]||(a[6]=W('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ajaxFn</td><td>请求数据的函数</td><td><code>Function</code></td><td>-</td></tr><tr><td>extraOptions</td><td>额外配置选项</td><td><code>Ref&lt;OptionsType&gt; | ComputedRef&lt;OptionsType&gt;</code></td><td>-</td></tr></tbody></table><h3 id="extraoptions-配置项" tabindex="-1">extraOptions 配置项 <a class="header-anchor" href="#extraoptions-配置项" aria-label="Permalink to &quot;extraOptions 配置项&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>extraParams</td><td>额外请求参数(不包含page,size)</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr><tr><td>rowKey</td><td>行数据的 Key</td><td><code>string</code></td><td><code>&#39;id&#39;</code></td></tr><tr><td>beforeFetch</td><td>请求前回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>transformAfterFetch</td><td>请求后处理函数（可用于转换data数据结构）</td><td><code>(data: any ) =&gt; any</code></td><td>-</td></tr><tr><td>afterFetch</td><td>请求后回调函数</td><td><code>(res: any) =&gt; void</code></td><td>-</td></tr><tr><td>handleMultiRes</td><td>处理多选结果(可用于过滤一些可勾选的rowKey)</td><td><code>(res: any) =&gt; string[]</code></td><td>-</td></tr><tr><td>fullRowsAjax</td><td>获取全量数据的请求函数</td><td><code>Function</code></td><td>-</td></tr><tr><td>emit</td><td>事件发射器</td><td><code>Function</code></td><td>-</td></tr><tr><td>needFullSelect</td><td>是否需要全选功能(配套fullRowsAjax传入)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sortFieldKey</td><td>排序字段key</td><td><code>string</code></td><td><code>sortField</code></td></tr><tr><td>sortOrderKey</td><td>排序方式key</td><td><code>string</code></td><td><code>sortOrder</code></td></tr><tr><td>hasPagination</td><td>是否启用分页（false下会隐藏分页，且去掉page,size参数）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hasSelectedRows</td><td>已选择的行数据（这里是全量数据集，包含跨页选择）</td><td><code>any[]</code></td><td><code>[]</code></td></tr></tbody></table><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>state</td><td>表格状态对象</td><td><code>Object</code></td></tr><tr><td>state.curPageKeys</td><td>当前页的 key 列表</td><td><code>string[]</code></td></tr><tr><td>state.selectedRowKeys</td><td>已选中的 key 列表</td><td><code>string[]</code></td></tr><tr><td>state.selectedRows</td><td>已选中的行数据</td><td><code>Record&lt;string, any&gt;[]</code></td></tr><tr><td>state.totalRows</td><td>全量数据</td><td><code>any[]</code></td></tr><tr><td>state.hasSelectedRows</td><td>已选择的行数据</td><td><code>any[]</code></td></tr><tr><td>totalCheckStatus</td><td>全选状态</td><td><code>Object</code></td></tr><tr><td>totalCheckStatus.checkAll</td><td>是否全选</td><td><code>boolean</code></td></tr><tr><td>totalCheckStatus.indeterminate</td><td>是否半选</td><td><code>boolean</code></td></tr><tr><td>loading</td><td>加载状态</td><td><code>Ref&lt;boolean&gt;</code></td></tr><tr><td>selectAllLoading</td><td>全选加载状态</td><td><code>Ref&lt;boolean&gt;</code></td></tr><tr><td>pagination</td><td>分页配置</td><td><code>Ref&lt;Object&gt;</code></td></tr><tr><td>dataSource</td><td>表格数据源</td><td><code>Ref&lt;any[]&gt;</code></td></tr><tr><td>getList</td><td>获取列表数据</td><td><code>(isSearch: boolean, listOptions: ListOption) =&gt; void</code></td></tr><tr><td>onSelectChange</td><td>选择变化处理函数</td><td><code>Function</code></td></tr><tr><td>handleTableChange</td><td>表格变化处理函数(用于处理分页，表头筛选，排序)</td><td><code>Function</code></td></tr><tr><td>handleResizeColumn</td><td>处理列宽变化</td><td><code>Function</code></td></tr><tr><td>onCheckAllChange</td><td>全选变化处理函数</td><td><code>Function</code></td></tr></tbody></table><h3 id="getlist-参数说明" tabindex="-1">getList 参数说明 <a class="header-anchor" href="#getlist-参数说明" aria-label="Permalink to &quot;getList 参数说明&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>isSearch</td><td>是否为筛选请求（内部会重置页码为1）</td><td><code>boolean</code></td><td>true</td></tr><tr><td>ListOption</td><td>needResetChecked(是否重置勾选，会清除所有已有勾选态)，backLoad（递归调用时使用，无需传入）</td><td><code>{ needResetChecked:boolean; backLoad?:boolean }</code></td><td><code>{ needResetChecked:false, backLoad:false }</code></td></tr></tbody></table>',9))]))}});export{ot as __pageData,nt as default};
