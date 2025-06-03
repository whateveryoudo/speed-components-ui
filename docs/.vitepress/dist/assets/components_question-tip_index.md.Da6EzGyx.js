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
</template>`,P=m({__name:"Basic",setup(l){return(r,t)=>{const d=i("s-question-tip"),p=i("AlertOutlined"),c=i("Demo");return n(),h(c,{code:T},{default:a(()=>[e("div",v,[e("div",f,[t[0]||(t[0]=e("h3",null,"基础用法",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本这是一段提示文本这是一段提示文本这是一段提示文本"})]),e("div",q,[t[1]||(t[1]=e("h3",null,"多行提示",-1)),o(d,{label:"标签文本",tip:["第一行提示文本","第二行提示文本","第三行提示文本"]})]),e("div",g,[t[2]||(t[2]=e("h3",null,"白色主题",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本",theme:"white"})]),e("div",x,[t[3]||(t[3]=e("h3",null,"自定义位置或样式",-1)),o(d,{label:"标签文本",tip:"这是一段提示文本",placement:"bottom",overlayInnerStyle:{backgroundColor:"red",color:"green"}})]),e("div",k,[t[4]||(t[4]=e("h3",null,"当成普通快捷提示",-1)),o(d,{tip:"我是自定义提示"},{default:a(()=>[o(p)]),_:1})])])]),_:1})}}}),w=u(P,[["__scopeId","data-v-12c81115"]]),C=JSON.parse('{"title":"QuestionTip 快捷提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/question-tip/index.md","filePath":"components/question-tip/index.md"}'),A={name:"components/question-tip/index.md"},S=Object.assign(A,{setup(l){return(r,t)=>(n(),_("div",null,[t[0]||(t[0]=e("h1",{id:"questiontip-快捷提示",tabindex:"-1"},[s("QuestionTip 快捷提示 "),e("a",{class:"header-anchor",href:"#questiontip-快捷提示","aria-label":'Permalink to "QuestionTip 快捷提示"'},"​")],-1)),t[1]||(t[1]=e("p",null,"基于 antd Tooltip/Popover 封装的快捷提示组件，支持字符串、字符串数组形式的提示内容。（注：本组件意在快速添加提示，如果你需要自定义复杂的提示，请结合a-tooltip自行封装。）",-1)),t[2]||(t[2]=e("h2",{id:"用法示例",tabindex:"-1"},[s("用法示例 "),e("a",{class:"header-anchor",href:"#用法示例","aria-label":'Permalink to "用法示例"'},"​")],-1)),o(w),t[3]||(t[3]=b('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>tip</td><td>提示内容，支持字符串或字符串数组</td><td><code>string | string[]</code></td><td><code>[]</code></td></tr><tr><td>placement</td><td>提示框位置</td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>theme</td><td>提示框主题</td><td><code>&#39;dark&#39; | &#39;white&#39;</code></td><td><code>&#39;dark&#39;</code></td></tr><tr><td>blocked</td><td>是否块级显示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>cardStyle</td><td>提示框样式</td><td><code>object</code></td><td><code>{}</code></td></tr></tbody></table><p>antv的tooltip剩余 <a href="https://www.antdv.com/components/tooltip-cn#api" target="_blank" rel="noreferrer">props</a> 均能使用。</p>',4))]))}});export{C as __pageData,S as default};
