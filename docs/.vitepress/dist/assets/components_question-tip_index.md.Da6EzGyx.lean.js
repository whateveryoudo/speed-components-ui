import{d as m,C as i,b as h,o as n,w as a,j as e,G as o,_ as u,c as _,aL as b,a as s}from"./chunks/framework.CUeqSQHK.js";const v={class:"demo-wrapper"},f={class:"demo-item"},q={class:"demo-item"},g={class:"demo-item"},x={class:"demo-item"},k={class:"demo-item"},T=`<template>
  <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-question-tip
          label="标签文本"
          tip="这是一段提示文本这是一段提示文本这是一段提示文本这是一段提示文本"
        />
      </div>

      <div class="demo-item">
        <h3>多行提示</h3>
        <s-question-tip
          label="标签文本"
          :tip="['第一行提示文本', '第二行提示文本', '第三行提示文本']"
        />
      </div>

      <div class="demo-item">
        <h3>白色主题</h3>
        <s-question-tip
          label="标签文本"
          tip="这是一段提示文本"
          theme="white"
        />
      </div>

      <div class="demo-item">
        <h3>自定义位置或样式</h3>
        <s-question-tip
          label="标签文本"
          tip="这是一段提示文本"
          placement="bottom"
          :overlayInnerStyle="{ backgroundColor: 'red', color: 'green' }"
        />
      </div>

      <div class="demo-item">
        <h3>当成普通快捷提示</h3>
        <s-question-tip
          tip="我是自定义提示"
        >
          <AlertOutlined />
        </s-question-tip>
      </div>
    </div>
</template>`,P=m({__name:"Basic",setup(l){return(r,t)=>{const d=i("s-question-tip"),p=i("AlertOutlined"),c=i("Demo");return n(),h(c,{code:T},{default:a(()=>[e("div",v,[e("div",f,[t[0]||(t[0]=e("h3",null,"基础用法",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本这是一段提示文本这是一段提示文本这是一段提示文本"})]),e("div",q,[t[1]||(t[1]=e("h3",null,"多行提示",-1)),o(d,{label:"标签文本",tip:["第一行提示文本","第二行提示文本","第三行提示文本"]})]),e("div",g,[t[2]||(t[2]=e("h3",null,"白色主题",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本",theme:"white"})]),e("div",x,[t[3]||(t[3]=e("h3",null,"自定义位置或样式",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本",placement:"bottom",overlayInnerStyle:{backgroundColor:"red",color:"green"}})]),e("div",k,[t[4]||(t[4]=e("h3",null,"当成普通快捷提示",-1)),o(d,{tip:"我是自定义提示"},{default:a(()=>[o(p)]),_:1})])])]),_:1})}}}),w=u(P,[["__scopeId","data-v-12c81115"]]),C=JSON.parse('{"title":"QuestionTip 快捷提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/question-tip/index.md","filePath":"components/question-tip/index.md"}'),A={name:"components/question-tip/index.md"},S=Object.assign(A,{setup(l){return(r,t)=>(n(),_("div",null,[t[0]||(t[0]=e("h1",{id:"questiontip-快捷提示",tabindex:"-1"},[s("QuestionTip 快捷提示 "),e("a",{class:"header-anchor",href:"#questiontip-快捷提示","aria-label":'Permalink to "QuestionTip 快捷提示"'},"​")],-1)),t[1]||(t[1]=e("p",null,"基于 antd Tooltip/Popover 封装的快捷提示组件，支持字符串、字符串数组形式的提示内容。（注：本组件意在快速添加提示，如果你需要自定义复杂的提示，请结合a-tooltip自行封装。）",-1)),t[2]||(t[2]=e("h2",{id:"用法示例",tabindex:"-1"},[s("用法示例 "),e("a",{class:"header-anchor",href:"#用法示例","aria-label":'Permalink to "用法示例"'},"​")],-1)),o(w),t[3]||(t[3]=b("",4))]))}});export{C as __pageData,S as default};
