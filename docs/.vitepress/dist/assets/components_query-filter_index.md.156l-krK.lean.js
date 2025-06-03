import{a as v}from"./chunks/theme.C70DuU-c.js";import{d as q,p as o,h as C,C as n,b as y,o as c,w as p,G as i,a as u,t as g,_ as T,c as _,aL as b,j as D}from"./chunks/framework.CUeqSQHK.js";const B=`<template>
 <s-query-filter
      :fields="fields"
      :values="searchValues"
      :col="8"
      @search="handleSearch"
      :search-when-change="searchWhenChange"
    />
    <a-flex vertical :gap="10">
      <a-space> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        改为切换/enter搜索
        <a-switch v-model:checked="searchWhenChange" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const searchWhenChange = ref(false);
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  return [
    {
      label: "姓名",
      fieldKey: "name",
      fieldType: "input",
      props: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "状态",
      fieldKey: "status",
      fieldType: "select",
      props: {
        options: [
          { label: "处理中", value: "1" },
          { label: "已完成", value: "2" },
          { label: "已取消", value: "3" },
        ],
      },
    },
    {
      label: "年龄",
      fieldKey: "age",
      fieldType: "inputNumber",
      props: {
        placeholder: "请输入年龄",
      },
    },
    {
      label: "用户",
      fieldKey: "user",
      fieldType: "apiSelect",
      props: {
        placeholder: "请选择用户",
        fetchOptions: {
          params: {
            page: 1,
            pageSize: 10,
          },
          // key为必须值
          search: {
            key: "name",
          },
          // 支持自行处理结构
          afterRes: (res: any) => {
            return res.data.map((item: any) => ({
              label: item.name,
              value: item.id,
            }));
          },
        },
        fetchFunc: async (params: any) => {
          // 模拟远程搜索(默认会处理 { data: []},这种响应)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: params?.name
                  ? [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ].filter((item) => item.name.includes(params.name))
                  : [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ],
              });
            }, 500);
          });
        },
        fieldNames: {
          label: "label",
          value: "value",
        },
      },
    },
    {
      label: "日期",
      fieldKey: "date",
      fieldType: "date",
    },
    {
      label: "时间",
      fieldKey: "time",
      fieldType: "time",
      props: {
        valueFormat: "HH:mm:ss",
      },
    },
    {
      fieldKey: "datetime",
      label: "日期时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "dateTimeRange",
      label: "日期时间范围",
      fieldType: "dateTimeRange",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "multiple",
      label: "多选",
      fieldType: "select",
      props: {
        mode: "multiple",
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
          { label: "选项3", value: "3" },
        ],
      },
    },
  ];
});

// 默认搜索条件
const searchValues = ref<Record<string, any>>({
  name: "",
  age: [],
  status: undefined,
  user: undefined,
  date: "",
  time: "",
  datetime: "",
  multiple: [],
  dateTimeRange: [],
});

// 搜索回调
const handleSearch = (values: Record<string, any>) => {
  console.log("搜索条件:", values);
  searchValues.value = values;
  // TODO: 搜索逻辑
  message.success("触发搜素");
};
<\/script>`,S=q({__name:"Basic",setup(m){const l=o(!1),t=C(()=>[{label:"姓名",fieldKey:"name",fieldType:"input",props:{placeholder:"请输入姓名"}},{label:"状态",fieldKey:"status",fieldType:"select",props:{options:[{label:"处理中",value:"1"},{label:"已完成",value:"2"},{label:"已取消",value:"3"}]}},{label:"年龄",fieldKey:"age",fieldType:"inputNumber",props:{placeholder:"请输入年龄"}},{label:"用户",fieldKey:"user",fieldType:"apiSelect",props:{placeholder:"请选择用户",fetchOptions:{params:{page:1,pageSize:10},search:{key:"name"},afterRes:e=>e.data.map(s=>({label:s.name,value:s.id}))},fetchFunc:async e=>new Promise(s=>{setTimeout(()=>{s({data:e!=null&&e.name?[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}].filter(a=>a.name.includes(e.name)):[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}]})},500)}),fieldNames:{label:"label",value:"value"}}},{label:"日期",fieldKey:"date",fieldType:"date"},{label:"时间",fieldKey:"time",fieldType:"time",props:{valueFormat:"HH:mm:ss"}},{fieldKey:"datetime",label:"日期时间",fieldType:"dateTime",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"dateTimeRange",label:"日期时间范围",fieldType:"dateTimeRange",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"multiple",label:"多选",fieldType:"select",props:{mode:"multiple",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]}}]),h=o({name:"",age:[],status:void 0,user:void 0,date:"",time:"",datetime:"",multiple:[],dateTimeRange:[]}),k=e=>{console.log("搜索条件:",e),h.value=e,v.success("触发搜素")};return(e,s)=>{const a=n("s-query-filter"),d=n("a-space"),r=n("a-switch"),E=n("a-flex"),F=n("Demo");return c(),y(F,{code:B},{default:p(()=>[i(a,{fields:t.value,values:h.value,col:8,onSearch:k,"search-when-change":l.value},null,8,["fields","values","search-when-change"]),i(E,{vertical:"",gap:10},{default:p(()=>[i(d,null,{default:p(()=>[u(" 搜索值： "+g(h.value),1)]),_:1}),i(d,null,{default:p(()=>[s[1]||(s[1]=u(" 改为切换/enter搜索 ")),i(r,{checked:l.value,"onUpdate:checked":s[0]||(s[0]=f=>l.value=f)},null,8,["checked"])]),_:1,__:[1]})]),_:1})]),_:1})}}}),K=T(S,[["__scopeId","data-v-455b73b8"]]),R=`<template>
 <s-query-filter
      :fields="fields"
      :values="lettleSearchMode ? searchValues2 : searchValues"
      @search="handleSearch"
      mode="simple"
      :showOpt="!lettleSearchMode"
      :search-when-change="true"
    />
    <a-flex vertical :gap="10">
      <a-space v-if="lettleSearchMode"> 搜索值： {{ searchValues2 }} </a-space>
      <a-space v-else> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        某些少量搜索场景
        <a-switch v-model:checked="lettleSearchMode" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const lettleSearchMode = ref(false);
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  if (lettleSearchMode.value) {
    // 一些少量搜素
    return [
      {
        label: "状态",
        fieldKey: "status",
        fieldType: "select",
        props: {
          options: [
            { label: "处理中", value: "1" },
            { label: "已完成", value: "2" },
            { label: "已取消", value: "3" },
          ],
        },
      },
      {
        label: "姓名",
        fieldKey: "name",
        fieldType: "input",
        props: {
          placeholder: "请输入姓名",
          itemWidth: 200,
          hasSearchIcon: true,
          whenChangeTrigger: "input", // 修改触发方式为输入
        },
      },
    ];
  }
  return [
    {
      label: "姓名",
      fieldKey: "name",
      fieldType: "input",
      props: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "状态",
      fieldKey: "status",
      fieldType: "select",
      props: {
        options: [
          { label: "处理中", value: "1" },
          { label: "已完成", value: "2" },
          { label: "已取消", value: "3" },
        ],
      },
    },
    {
      label: "年龄",
      fieldKey: "age",
      fieldType: "inputNumber",
      props: {
        placeholder: "请输入年龄",
      },
    },
    {
      label: "用户",
      fieldKey: "user",
      fieldType: "apiSelect",
      props: {
        placeholder: "请选择用户",
        fetchOptions: {
          params: {
            page: 1,
            pageSize: 10,
          },
          // key为必须值
          search: {
            key: "name",
          },
          // 支持自行处理结构
          afterRes: (res: any) => {
            return res.data.map((item: any) => ({
              label: item.name,
              value: item.id,
            }));
          },
        },
        fetchFunc: async (params: any) => {
          // 模拟远程搜索(默认会处理 { data: []},这种响应)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: params?.name
                  ? [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ].filter((item) => item.name.includes(params.name))
                  : [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ],
              });
            }, 500);
          });
        },
        fieldNames: {
          label: "label",
          value: "value",
        },
      },
    },
    {
      label: "日期",
      fieldKey: "date",
      fieldType: "date",
    },
    {
      label: "时间",
      fieldKey: "time",
      fieldType: "time",
      props: {
        valueFormat: "HH:mm:ss",
      },
    },
    {
      fieldKey: "datetime",
      label: "日期时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "dateTimeRange",
      label: "日期时间范围",
      fieldType: "dateTimeRange",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
        transform2Params: ["dateTimeRangeStart", "dateTimeRangeEnd"],
      },
    },
    {
      fieldKey: "multiple",
      label: "多选",
      fieldType: "select",
      props: {
        mode: "multiple",
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
          { label: "选项3", value: "3" },
        ],
      },
    },
  ];
});

// 默认搜索条件
const searchValues = ref<Record<string, any>>({
  name: "",
  age: [],
  status: undefined,
  user: undefined,
  date: "",
  time: "",
  datetime: "",
  multiple: [],
  dateTimeRangeStart: "",
  dateTimeRangeEnd: "",
});
const searchValues2 = ref<Record<string, any>>({
  name: "",
  status: undefined,
  user: undefined,
});
// 搜索回调
const handleSearch = (values: Record<string, any>) => {
  console.log("搜索条件:", values);
  if (lettleSearchMode.value) {
    searchValues2.value = values;
  } else {
    searchValues.value = values;
  }
  // TODO: 搜索逻辑
  message.success("触发搜素");
};
<\/script>`,Y=q({__name:"Simple",setup(m){const l=o(!1),t=C(()=>l.value?[{label:"状态",fieldKey:"status",fieldType:"select",props:{options:[{label:"处理中",value:"1"},{label:"已完成",value:"2"},{label:"已取消",value:"3"}]}},{label:"姓名",fieldKey:"name",fieldType:"input",props:{placeholder:"请输入姓名",itemWidth:200,hasSearchIcon:!0,whenChangeTrigger:"input"}}]:[{label:"姓名",fieldKey:"name",fieldType:"input",props:{placeholder:"请输入姓名"}},{label:"状态",fieldKey:"status",fieldType:"select",props:{options:[{label:"处理中",value:"1"},{label:"已完成",value:"2"},{label:"已取消",value:"3"}]}},{label:"年龄",fieldKey:"age",fieldType:"inputNumber",props:{placeholder:"请输入年龄"}},{label:"用户",fieldKey:"user",fieldType:"apiSelect",props:{placeholder:"请选择用户",fetchOptions:{params:{page:1,pageSize:10},search:{key:"name"},afterRes:s=>s&&s.length>0?s.map(a=>({label:a.name,value:a.id})):[]},fetchFunc:async s=>new Promise(a=>{setTimeout(()=>{a({data:s!=null&&s.name?[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}].filter(d=>d.name.includes(s.name)):[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}]})},500)}),fieldNames:{label:"label",value:"value"}}},{label:"日期",fieldKey:"date",fieldType:"date"},{label:"时间",fieldKey:"time",fieldType:"time",props:{valueFormat:"HH:mm:ss"}},{fieldKey:"datetime",label:"日期时间",fieldType:"dateTime",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"dateTimeRange",label:"日期时间范围",fieldType:"dateTimeRange",props:{valueFormat:"YYYY-MM-DD HH:mm:ss",transform2Params:["dateTimeRangeStart","dateTimeRangeEnd"]}},{fieldKey:"multiple",label:"多选",fieldType:"select",props:{mode:"multiple",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]}}]),h=o({name:"",age:[],status:void 0,user:void 0,date:"",time:"",datetime:"",multiple:[],dateTimeRangeStart:"",dateTimeRangeEnd:""}),k=o({name:"",status:void 0,user:void 0}),e=s=>{console.log("搜索条件:",s),l.value?k.value=s:h.value=s,v.success("触发搜素")};return(s,a)=>{const d=n("s-query-filter"),r=n("a-space"),E=n("a-switch"),F=n("a-flex"),f=n("Demo");return c(),y(f,{code:R},{default:p(()=>[i(d,{fields:t.value,values:l.value?k.value:h.value,onSearch:e,mode:"simple",showOpt:!l.value,"search-when-change":!0},null,8,["fields","values","showOpt"]),i(F,{vertical:"",gap:10},{default:p(()=>[l.value?(c(),y(r,{key:0},{default:p(()=>[u(" 搜索值： "+g(k.value),1)]),_:1})):(c(),y(r,{key:1},{default:p(()=>[u(" 搜索值： "+g(h.value),1)]),_:1})),i(r,null,{default:p(()=>[a[1]||(a[1]=u(" 某些少量搜索场景 ")),i(E,{checked:l.value,"onUpdate:checked":a[0]||(a[0]=A=>l.value=A)},null,8,["checked"])]),_:1,__:[1]})]),_:1})]),_:1})}}}),x=T(Y,[["__scopeId","data-v-a62b0ee8"]]),V=`<template>
 <s-query-filter
      :fields="fields"
      :values="searchValues"
      :col="8"
      @search="handleSearch"
      mode="complex"
      :search-when-change="searchWhenChange"
    />
    <a-flex vertical :gap="10">
      <a-space> 搜索值： {{ searchValues }} </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const searchWhenChange = ref(false);
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  return [
    {
      label: "姓名",
      fieldKey: "name",
      fieldType: "input",
      fieldRel: "search",
      props: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "状态",
      fieldKey: "status",
      fieldType: "select",
      props: {
        options: [
          { label: "处理中", value: "1" },
          { label: "已完成", value: "2" },
          { label: "已取消", value: "3" },
        ],
      },
    },
    {
      label: "年龄",
      fieldKey: "age",
      fieldType: "inputNumber",
      props: {
        placeholder: "请输入年龄",
      },
    },
    {
      label: "用户",
      fieldKey: "user",
      fieldType: "apiSelect",
      props: {
        placeholder: "请选择用户",
        fetchOptions: {
          params: {
            page: 1,
            pageSize: 10,
          },
          // key为必须值
          search: {
            key: "name",
          },
          // 支持自行处理结构
          afterRes: (res: any) => {
            return res.data.map((item: any) => ({
              label: item.name,
              value: item.id,
            }));
          },
        },
        fetchFunc: async (params: any) => {
          // 模拟远程搜索(默认会处理 { data: []},这种响应)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: params?.name
                  ? [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ].filter((item) => item.name.includes(params.name))
                  : [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ],
              });
            }, 500);
          });
        },
        fieldNames: {
          label: "label",
          value: "value",
        },
      },
    },
    {
      label: "日期",
      fieldKey: "date",
      fieldType: "date",
    },
    {
      label: "时间",
      fieldKey: "time",
      fieldType: "time",
      props: {
        valueFormat: "HH:mm:ss",
      },
    },
    {
      fieldKey: "datetime",
      label: "日期时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "dateTimeRange",
      label: "日期时间范围",
      fieldType: "dateTimeRange",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "multiple",
      label: "多选",
      fieldType: "select",
      props: {
        mode: "multiple",
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
          { label: "选项3", value: "3" },
        ],
      },
    },
  ];
});

// 搜索条件
const searchValues = ref<Record<string, any>>([]);

// 搜索回调
const handleSearch = (values: Record<string, any>) => {
  console.log("搜索条件:", values);
  searchValues.value = values;
  // TODO: 搜索逻辑
  message.success("触发搜素");
};
<\/script>`,P=q({__name:"Complex",setup(m){const l=o(!1),t=C(()=>[{label:"姓名",fieldKey:"name",fieldType:"input",fieldRel:"search",props:{placeholder:"请输入姓名"}},{label:"状态",fieldKey:"status",fieldType:"select",props:{options:[{label:"处理中",value:"1"},{label:"已完成",value:"2"},{label:"已取消",value:"3"}]}},{label:"年龄",fieldKey:"age",fieldType:"inputNumber",props:{placeholder:"请输入年龄"}},{label:"用户",fieldKey:"user",fieldType:"apiSelect",props:{placeholder:"请选择用户",fetchOptions:{params:{page:1,pageSize:10},search:{key:"name"},afterRes:e=>e.data.map(s=>({label:s.name,value:s.id}))},fetchFunc:async e=>new Promise(s=>{setTimeout(()=>{s({data:e!=null&&e.name?[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}].filter(a=>a.name.includes(e.name)):[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}]})},500)}),fieldNames:{label:"label",value:"value"}}},{label:"日期",fieldKey:"date",fieldType:"date"},{label:"时间",fieldKey:"time",fieldType:"time",props:{valueFormat:"HH:mm:ss"}},{fieldKey:"datetime",label:"日期时间",fieldType:"dateTime",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"dateTimeRange",label:"日期时间范围",fieldType:"dateTimeRange",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"multiple",label:"多选",fieldType:"select",props:{mode:"multiple",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]}}]),h=o([]),k=e=>{console.log("搜索条件:",e),h.value=e,v.success("触发搜素")};return(e,s)=>{const a=n("s-query-filter"),d=n("a-space"),r=n("a-flex"),E=n("Demo");return c(),y(E,{code:V},{default:p(()=>[i(a,{fields:t.value,values:h.value,col:8,onSearch:k,mode:"complex","search-when-change":l.value},null,8,["fields","values","search-when-change"]),i(r,{vertical:"",gap:10},{default:p(()=>[i(d,null,{default:p(()=>[u(" 搜索值： "+g(h.value),1)]),_:1})]),_:1})]),_:1})}}}),M=T(P,[["__scopeId","data-v-d0b54c37"]]),N=JSON.parse('{"title":"QueryFilter 查询过滤器","description":"","frontmatter":{},"headers":[],"relativePath":"components/query-filter/index.md","filePath":"components/query-filter/index.md"}'),H={name:"components/query-filter/index.md"},O=Object.assign(H,{setup(m){return(l,t)=>(c(),_("div",null,[t[0]||(t[0]=b("",6)),i(K),t[1]||(t[1]=D("h2",{id:"简洁版",tabindex:"-1"},[u("简洁版 "),D("a",{class:"header-anchor",href:"#简洁版","aria-label":'Permalink to "简洁版"'},"​")],-1)),i(x),t[2]||(t[2]=b("",2)),i(M),t[3]||(t[3]=b("",28))]))}});export{N as __pageData,O as default};
