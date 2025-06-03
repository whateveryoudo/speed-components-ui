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
<\/script>`,P=q({__name:"Complex",setup(m){const l=o(!1),t=C(()=>[{label:"姓名",fieldKey:"name",fieldType:"input",fieldRel:"search",props:{placeholder:"请输入姓名"}},{label:"状态",fieldKey:"status",fieldType:"select",props:{options:[{label:"处理中",value:"1"},{label:"已完成",value:"2"},{label:"已取消",value:"3"}]}},{label:"年龄",fieldKey:"age",fieldType:"inputNumber",props:{placeholder:"请输入年龄"}},{label:"用户",fieldKey:"user",fieldType:"apiSelect",props:{placeholder:"请选择用户",fetchOptions:{params:{page:1,pageSize:10},search:{key:"name"},afterRes:e=>e.data.map(s=>({label:s.name,value:s.id}))},fetchFunc:async e=>new Promise(s=>{setTimeout(()=>{s({data:e!=null&&e.name?[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}].filter(a=>a.name.includes(e.name)):[{name:"用户1",id:"1"},{name:"用户2",id:"2"},{name:"用户3",id:"3"}]})},500)}),fieldNames:{label:"label",value:"value"}}},{label:"日期",fieldKey:"date",fieldType:"date"},{label:"时间",fieldKey:"time",fieldType:"time",props:{valueFormat:"HH:mm:ss"}},{fieldKey:"datetime",label:"日期时间",fieldType:"dateTime",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"dateTimeRange",label:"日期时间范围",fieldType:"dateTimeRange",props:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{fieldKey:"multiple",label:"多选",fieldType:"select",props:{mode:"multiple",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]}}]),h=o([]),k=e=>{console.log("搜索条件:",e),h.value=e,v.success("触发搜素")};return(e,s)=>{const a=n("s-query-filter"),d=n("a-space"),r=n("a-flex"),E=n("Demo");return c(),y(E,{code:V},{default:p(()=>[i(a,{fields:t.value,values:h.value,col:8,onSearch:k,mode:"complex","search-when-change":l.value},null,8,["fields","values","search-when-change"]),i(r,{vertical:"",gap:10},{default:p(()=>[i(d,null,{default:p(()=>[u(" 搜索值： "+g(h.value),1)]),_:1})]),_:1})]),_:1})}}}),M=T(P,[["__scopeId","data-v-d0b54c37"]]),N=JSON.parse('{"title":"QueryFilter 查询过滤器","description":"","frontmatter":{},"headers":[],"relativePath":"components/query-filter/index.md","filePath":"components/query-filter/index.md"}'),H={name:"components/query-filter/index.md"},O=Object.assign(H,{setup(m){return(l,t)=>(c(),_("div",null,[t[0]||(t[0]=b('<h1 id="queryfilter-查询过滤器" tabindex="-1">QueryFilter 查询过滤器 <a class="header-anchor" href="#queryfilter-查询过滤器" aria-label="Permalink to &quot;QueryFilter 查询过滤器&quot;">​</a></h1><p>一个基于配置的查询过滤器组件，支持多种类型的查询条件。</p><h2 id="功能特点" tabindex="-1">功能特点 <a class="header-anchor" href="#功能特点" aria-label="Permalink to &quot;功能特点&quot;">​</a></h2><ul><li>支持多种查询类型：<code>input</code>(输入框)、<code>inputNumber</code>(数字范围)、<code>date</code>(日期)、<code>dateTime</code>(日期时间)、<code>dateRange</code>(日期范围)、<code>dateTimeRange</code>(日期时间范围)、<code>select</code>(选择器)、<code>apiSelect</code>(远程搜索选择器)</li><li>支持自定义查询条件布局</li><li>支持展开/收起功能</li><li>支持重置和查询操作</li><li>支持自定义样式和宽度</li></ul><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>文档中宽度可能会显示挤压。容器宽度合适下不会出现此情况</p>',6)),i(K),t[1]||(t[1]=D("h2",{id:"简洁版",tabindex:"-1"},[u("简洁版 "),D("a",{class:"header-anchor",href:"#简洁版","aria-label":'Permalink to "简洁版"'},"​")],-1)),i(x),t[2]||(t[2]=b('<h2 id="复合版-特定场景" tabindex="-1">复合版(特定场景) <a class="header-anchor" href="#复合版-特定场景" aria-label="Permalink to &quot;复合版(特定场景)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">提示</p><p>此模式下，参数配置相对固定(最好与后端协商字段)。与普通搜索组件有以下区别<br> 1.内置了组件连接符类型匹配（<a href="/components/query-filter/index.html#内置连接匹配规则">见尾部</a>）<br> 2.搜索出参/默认参数设置结构为对象数组形式。<code>{fieldKey: 字段名, fieldVal: 字段值,fieldRel: 连接条件}[]</code></p></div>',2)),i(M),t[3]||(t[3]=b(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fields</td><td>查询字段配置</td><td><code>IFieldType[]</code></td><td><code>[]</code></td></tr><tr><td>values</td><td>查询值</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr><tr><td>col</td><td>每行显示的列数（24的约数）,简易模式下无效</td><td><code>number</code></td><td><code>6</code></td></tr><tr><td>gutter</td><td>列间距</td><td><code>number</code></td><td><code>20</code></td></tr><tr><td>showOpt</td><td>是否显示操作按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="ifieldtype-类型" tabindex="-1">IFieldType 类型 <a class="header-anchor" href="#ifieldtype-类型" aria-label="Permalink to &quot;IFieldType 类型&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IFieldType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字段标签</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fieldKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字段标识</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fieldRel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 条件连接符</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fieldType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;input&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;time&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;inputNumber&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;select&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;apiSearch&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dateRange&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dateTimeRange&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dateTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字段类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IPropType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字段属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="iproptype-类型" tabindex="-1">IPropType 类型 <a class="header-anchor" href="#iproptype-类型" aria-label="Permalink to &quot;IPropType 类型&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IFetchOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  afterRes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IPropType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 占位符</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefaultOptionType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 选项列表（select类型）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  searchWhenChange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 值变化时是否触发搜索</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  itemWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表单项宽度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  showSearch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否显示搜索框（select类型）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  transform2Params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 值转换（范围类型）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  valueFormat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 日期格式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;multiple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// select 的模式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  whenChangeTrigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发方式(input生效)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  hasSearchIcon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否显示搜索图标</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fieldNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字段映射（selectSearch类型）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fetchOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IFetchOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 远程搜索配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetchFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 远程搜索方法（selectSearch类型）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  search</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 搜索字段名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击查询按钮时触发</td><td><code>(values: Record&lt;string, any&gt;)</code></td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><code>col</code> 属性必须是 24 的约数（如：6、8、12、24）</li><li>日期类型支持自定义格式，默认格式： <ul><li>日期：<code>YYYY-MM-DD</code></li><li>日期时间：<code>YYYY-MM-DD HH:mm:ss</code></li></ul></li><li>范围类型（日期范围、数字范围）支持值转换（如果后端是采用的两个值存储），通过 <code>transform2Params</code> 配置，如：<code>createTime =&gt; [&#39;createTimeStart&#39;,&#39;createTimeEnd&#39;]</code></li><li>选择器类型支持远程搜索，通过 <code>fetchFunc</code> 和 <code>fetchOptions</code> 配置</li></ol><h3 id="内置连接匹配规则" tabindex="-1">内置连接匹配规则 <a class="header-anchor" href="#内置连接匹配规则" aria-label="Permalink to &quot;内置连接匹配规则&quot;">​</a></h3><p>组件内置了以下类型的连接符匹配规则：</p><h4 id="文本类型-input" tabindex="-1">文本类型 (input) <a class="header-anchor" href="#文本类型-input" aria-label="Permalink to &quot;文本类型 (input)&quot;">​</a></h4><ul><li>包含 (search)</li><li>等于 (eq)</li><li>不等于 (neq)</li><li>开头是 (startWith)</li></ul><h4 id="数字类型-inputnumber" tabindex="-1">数字类型 (inputNumber) <a class="header-anchor" href="#数字类型-inputnumber" aria-label="Permalink to &quot;数字类型 (inputNumber)&quot;">​</a></h4><ul><li>范围 (scope)</li><li>等于 (eq)</li><li>不等于 (neq)</li><li>大于 (gt)</li><li>小于 (lt)</li><li>大于等于 (gte)</li><li>小于等于 (lte)</li></ul><h4 id="日期类型-date-datetime-time" tabindex="-1">日期类型 (date, dateTime, time) <a class="header-anchor" href="#日期类型-date-datetime-time" aria-label="Permalink to &quot;日期类型 (date, dateTime, time)&quot;">​</a></h4><ul><li>范围 (scope)</li><li>等于 (eq)</li><li>不等于 (neq)</li><li>早于 (gt)</li><li>晚于 (lt)</li></ul><h4 id="日期范围类型-daterange-datetimerange-timerange" tabindex="-1">日期范围类型 (dateRange, dateTimeRange, timeRange) <a class="header-anchor" href="#日期范围类型-daterange-datetimerange-timerange" aria-label="Permalink to &quot;日期范围类型 (dateRange, dateTimeRange, timeRange)&quot;">​</a></h4><ul><li>等于 (eq)</li><li>不等于 (neq)</li></ul><h4 id="单选类型-select-apiselect" tabindex="-1">单选类型 (select, apiSelect) <a class="header-anchor" href="#单选类型-select-apiselect" aria-label="Permalink to &quot;单选类型 (select, apiSelect)&quot;">​</a></h4><ul><li>等于 (eq)</li><li>不等于 (neq)</li></ul><h4 id="多选类型-selectmultiple" tabindex="-1">多选类型 (selectMultiple) <a class="header-anchor" href="#多选类型-selectmultiple" aria-label="Permalink to &quot;多选类型 (selectMultiple)&quot;">​</a></h4><ul><li>等于任意一个 (in)</li><li>不等于任意一个 (nin)</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>1.你可以通过传入props下relOptions对内置连接项进行覆盖（这里仅支持包含在已有连接项的选项传入，自定义项无效）<br>2. 对于 <code>select</code> 和 <code>apiSelect</code> 类型，当设置 <code>props.mode=&quot;multiple&quot;</code> 时，会自动使用多选类型的连接符规则<br>3. number,select 传入的relOptions 需添加defaultValue,</p></div><p>完整的relOptions:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;input&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;包含&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;startWith&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;开头是&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // [&quot;inputNumber&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;范围&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;大于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;小于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gte&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;大于等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lte&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;小于等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // [&quot;selectMultiple&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // [&quot;date&quot;, &quot;dateTime&quot;, &quot;time&quot;], 这里需要传入defaultValue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;范围&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;早于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;晚于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // [&quot;select&quot;, &quot;apiSelect&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //[&quot;dateRange&quot;, &quot;dateTimeRange&quot;, &quot;timeRange&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不等于&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ];</span></span></code></pre></div>`,28))]))}});export{N as __pageData,O as default};
