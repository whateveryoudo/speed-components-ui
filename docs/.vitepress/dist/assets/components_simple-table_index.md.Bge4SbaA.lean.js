import{d as F,p as y,C as n,b as _,o as c,w as e,c as b,e as h,G as a,a as d,t as w,_ as z,j as x,aL as R}from"./chunks/framework.CUeqSQHK.js";const D={key:0,class:"selected-info"},A={key:0,style:{color:"#1890ff"}},B=`<template>
  <div class="selected-info" v-if="hasSelectedRows.length">
      已选择 {{ hasSelectedRows.length }} 项
      <a-button type="link" @click="hasSelectedRows = []">清空</a-button>
    </div>

    <s-simple-table
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="{ type: 'user' }"
      :row-selection="{
        type: 'checkbox',
      }"
      :has-pagination="hasPagination"
      v-model:hasSelectedRows="hasSelectedRows"
      bordered
    >
      <!-- 自定义单元格 -->
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'age'">
          <a-tag :color="record.age > 40 ? 'red' : 'green'">
            {{ text }}
          </a-tag>
        </template>
      </template>

      <!-- 自定义列标题 -->
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'address'">
          <span style="color: #1890ff">详细地址</span>
        </template>
      </template>
    </s-simple-table>

    <a-flex vertical :gap="10">
      <a-space>
        <a-button @click="selectSpecialRows()">初始化选中第二、第三行</a-button>
      </a-space>
      <a-space>
        允许翻页
        <a-switch v-model:checked="hasPagination" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hasSelectedRows = ref<any[]>([]); // 勾选条目
const hasPagination = ref(true);
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
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
];
// 这里需要传入rowKey的项
const selectSpecialRows = () => {
  hasSelectedRows.value = [{ id: 2 }, { id: 3 }];
};
const fetchData = async (params: any) => {
  // 模拟接口请求
  const { page = 1, size = 10 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: \`用户\${(page - 1) * size + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 20,
    address: \`北京市朝阳区xxx街道\${(page - 1) * size + index + 1}号\`,
  }));

  return {
    success: true,
    data: list,
    totalCount: 100,
    totalPages: 10
  };
};
<\/script>

<style scoped>

.selected-info {
  margin-bottom: 16px;
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>`,N=F({__name:"Basic",setup(P){const s=y([]),o=y(!0),v=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"地址",dataIndex:"address",key:"address"}],S=()=>{s.value=[{id:2},{id:3}]},I=async k=>{const{page:l=1,size:i=10}=k;return{success:!0,data:Array.from({length:i},(u,r)=>({id:(l-1)*i+r+1,name:`用户${(l-1)*i+r+1}`,age:Math.floor(Math.random()*50)+20,address:`北京市朝阳区xxx街道${(l-1)*i+r+1}号`})),totalCount:100,totalPages:10}};return(k,l)=>{const i=n("a-button"),t=n("a-tag"),u=n("s-simple-table"),r=n("a-space"),m=n("a-switch"),f=n("a-flex"),q=n("Demo");return c(),_(q,{code:B},{default:e(()=>[s.value.length?(c(),b("div",D,[d(" 已选择 "+w(s.value.length)+" 项 ",1),a(i,{type:"link",onClick:l[0]||(l[0]=p=>s.value=[])},{default:e(()=>l[4]||(l[4]=[d("清空")])),_:1,__:[4]})])):h("",!0),a(u,{"fetch-func":I,columns:v,"fetch-params":{type:"user"},"row-selection":{type:"checkbox"},"has-pagination":o.value,hasSelectedRows:s.value,"onUpdate:hasSelectedRows":l[1]||(l[1]=p=>s.value=p)},{bodyCell:e(({column:p,text:C,record:T})=>[p.dataIndex==="age"?(c(),_(t,{key:0,color:T.age>40?"red":"green"},{default:e(()=>[d(w(C),1)]),_:2},1032,["color"])):h("",!0)]),headerCell:e(({column:p})=>[p.dataIndex==="address"?(c(),b("span",A,"详细地址")):h("",!0)]),_:1},8,["has-pagination","hasSelectedRows"]),a(f,{vertical:"",gap:10},{default:e(()=>[a(r,null,{default:e(()=>[a(i,{onClick:l[2]||(l[2]=p=>S())},{default:e(()=>l[5]||(l[5]=[d("初始化选中第二、第三行")])),_:1,__:[5]})]),_:1}),a(r,null,{default:e(()=>[l[6]||(l[6]=d(" 允许翻页 ")),a(m,{checked:o.value,"onUpdate:checked":l[3]||(l[3]=p=>o.value=p)},null,8,["checked"])]),_:1,__:[6]})]),_:1})]),_:1})}}}),Q=z(N,[["__scopeId","data-v-4d0a0908"]]),K={key:0},L={key:1},M={key:0,style:{color:"#1890ff"}},E=`<template>
  <h4 v-if="!withQueryFilter">
      内置查询<span class="text-[#999] ml-2 font-normal text-sm"
        >此方式下，最外层无法获取到搜索字段</span
      >
    </h4>
    <h4 v-else>结合query-filter使用</h4>
    <s-query-filter
      v-if="withQueryFilter"
      :fields="fields"
      :values="searchValues"
      @search="handleSearch"
    />
    <s-simple-table
      ref="tableRef"
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="withQueryFilter ? searchValues : {}"
      bordered
      :need-query-filter="!withQueryFilter"
    >
    <!-- 整行的slot -->
      <template #optBar>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-左 -->
      <template #optBarLeft>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-右 -->
      <template #optBarRight>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 自定义单元格 -->
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'age'">
          <a-tag :color="record.age > 40 ? 'red' : 'green'">
            {{ text }}
          </a-tag>
        </template>
      </template>

      <!-- 自定义列标题 -->
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'address'">
          <span style="color: #1890ff">详细地址</span>
        </template>
      </template>
    </s-simple-table>

    <a-flex vertical :gap="10">
      <a-space v-if="withQueryFilter"> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        结合query-filter组件使用
        <a-switch v-model:checked="withQueryFilter" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
const withQueryFilter = ref(false);
const searchValues = ref({
  name: "",
  age: [],
  address: "",
});
const tableRef = ref<any>(null);
const fields = ref<IFieldType[]>([
  {
    label: "姓名",
    fieldKey: "name",
    fieldType: "input",
  },
  {
    label: "年龄",
    fieldKey: "age",
    fieldType: "inputNumber",
  },
  {
    label: "地址",
    fieldKey: "address",
    fieldType: "input",
  },
]);

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    queryConfig: "input",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    queryConfig: "inputNumber",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    queryConfig: "input",
  },
];

const fetchData = async (params: any) => {
  // 模拟接口请求
  console.log("搜索了，搜索参数为", params);
  const { page = 1, size = 10 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: \`用户\${(page - 1) * size + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 20,
    address: \`北京市朝阳区xxx街道\${(page - 1) * size + index + 1}号\`,
  }));

  return {
    success: true,
    data: list,
    totalCount: 100,
    totalPages: 10
  };
};
const handleSearch = (values: any) => {
  searchValues.value = values;
  tableRef.value.getList(); // 调用表格搜索
};
</style>`,U=F({__name:"WithQuery",setup(P){const s=y(!1),o=y({name:"",age:[],address:""}),v=y(null),S=y([{label:"姓名",fieldKey:"name",fieldType:"input"},{label:"年龄",fieldKey:"age",fieldType:"inputNumber"},{label:"地址",fieldKey:"address",fieldType:"input"}]),I=[{title:"姓名",dataIndex:"name",key:"name",queryConfig:"input"},{title:"年龄",dataIndex:"age",key:"age",queryConfig:"inputNumber"},{title:"地址",dataIndex:"address",key:"address",queryConfig:"input"}],k=async i=>{console.log("搜索了，搜索参数为",i);const{page:t=1,size:u=10}=i;return{success:!0,data:Array.from({length:u},(m,f)=>({id:(t-1)*u+f+1,name:`用户${(t-1)*u+f+1}`,age:Math.floor(Math.random()*50)+20,address:`北京市朝阳区xxx街道${(t-1)*u+f+1}号`})),totalCount:100,totalPages:10}},l=i=>{o.value=i,v.value.getList()};return(i,t)=>{const u=n("s-query-filter"),r=n("a-button"),m=n("a-space"),f=n("a-tag"),q=n("s-simple-table"),p=n("a-switch"),C=n("a-flex"),T=n("Demo");return c(),_(T,{code:E},{default:e(()=>[s.value?(c(),b("h4",L,"结合query-filter使用")):(c(),b("h4",K,t[1]||(t[1]=[d(" 内置查询"),x("span",{class:"text-[#999] ml-2 font-normal text-sm"},"此方式下，最外层无法获取到搜索字段",-1)]))),s.value?(c(),_(u,{key:2,fields:S.value,values:o.value,onSearch:l},null,8,["fields","values"])):h("",!0),a(q,{ref_key:"tableRef",ref:v,"fetch-func":k,columns:I,"fetch-params":s.value?o.value:{},bordered:"","need-query-filter":!s.value},{optBar:e(()=>[a(m,null,{default:e(()=>[a(r,{type:"primary"},{default:e(()=>t[2]||(t[2]=[d("新增")])),_:1,__:[2]}),a(r,{type:"primary"},{default:e(()=>t[3]||(t[3]=[d("导出")])),_:1,__:[3]})]),_:1})]),optBarLeft:e(()=>[a(m,null,{default:e(()=>[a(r,{type:"primary"},{default:e(()=>t[4]||(t[4]=[d("新增")])),_:1,__:[4]}),a(r,{type:"primary"},{default:e(()=>t[5]||(t[5]=[d("导出")])),_:1,__:[5]})]),_:1})]),optBarRight:e(()=>[a(m,null,{default:e(()=>[a(r,{type:"primary"},{default:e(()=>t[6]||(t[6]=[d("新增")])),_:1,__:[6]}),a(r,{type:"primary"},{default:e(()=>t[7]||(t[7]=[d("导出")])),_:1,__:[7]})]),_:1})]),bodyCell:e(({column:g,text:V,record:$})=>[g.dataIndex==="age"?(c(),_(f,{key:0,color:$.age>40?"red":"green"},{default:e(()=>[d(w(V),1)]),_:2},1032,["color"])):h("",!0)]),headerCell:e(({column:g})=>[g.dataIndex==="address"?(c(),b("span",M,"详细地址")):h("",!0)]),_:1},8,["fetch-params","need-query-filter"]),a(C,{vertical:"",gap:10},{default:e(()=>[s.value?(c(),_(m,{key:0},{default:e(()=>[d(" 搜索值： "+w(o.value),1)]),_:1})):h("",!0),a(m,null,{default:e(()=>[t[8]||(t[8]=d(" 结合query-filter组件使用 ")),a(p,{checked:s.value,"onUpdate:checked":t[0]||(t[0]=g=>s.value=g)},null,8,["checked"])]),_:1,__:[8]})]),_:1})]),_:1})}}}),j=z(U,[["__scopeId","data-v-6ed587bf"]]),G=JSON.parse('{"title":"SimpleTable 简单表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/simple-table/index.md","filePath":"components/simple-table/index.md"}'),O={name:"components/simple-table/index.md"},J=Object.assign(O,{setup(P){return(s,o)=>(c(),b("div",null,[o[0]||(o[0]=R("",5)),a(Q),o[1]||(o[1]=x("h2",{id:"包含搜索的示例",tabindex:"-1"},[d("包含搜索的示例 "),x("a",{class:"header-anchor",href:"#包含搜索的示例","aria-label":'Permalink to "包含搜索的示例"'},"​")],-1)),o[2]||(o[2]=x("p",null,[d("整合"),x("a",{href:"/components/query-filter/index.html"},"QueryFilter"),d("组件,支持部分插槽定义(注：可内置使用，也可以自行使用query-filter配合使用)")],-1)),a(j),o[3]||(o[3]=R("",6))]))}});export{G as __pageData,J as default};
