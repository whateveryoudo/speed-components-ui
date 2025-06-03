<template>
  <Demo :code="code">
    <div class="icon-demo">
      <div class="demo-item">
        <div class="title">自定义渲染函数</div>
        <div class="icons">
          <s-icon-font :icon-render="AlertOutlined" />
          <s-icon-font :icon-render="CustomIcon1" />
        </div>
      </div>
      <div class="demo-item">
        <div class="title">图片模块</div>
        <div class="icons">
          <s-icon-font
            img-module="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            :img-style="{ width: '24px' }"
          />
          <s-icon-font
            img-module="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
            :img-style="{ width: '24px' }"
          />
        </div>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="tsx">
// antd 图标
import { AlertOutlined } from '@ant-design/icons-vue'
const code = `
<template>
  <div class="icon-demo">
    <div class="demo-item">
      <div class="title">自定义渲染函数</div>
      <div class="icons">
        <s-icon-font :icon-render="AlertOutlined" />
        <s-icon-font :icon-render="CustomIcon1" />
      </div>
    </div>
    <div class="demo-item">
      <div class="title">图片模块</div>
      <div class="icons">
        <s-icon-font
          img-module="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          :img-style="{ width: '24px' }"
        />
        <s-icon-font
          img-module="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
          :img-style="{ width: '24px' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">

// antd 图标

import { AlertOutlined } from '@ant-design/icons-vue'

// 自定义图标组件

const CustomIcon1 = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
);
<\/script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 24px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.title {
  font-size: 14px;
  color: #666;
}
.icons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
`;


// 自定义图标
const CustomIcon1 = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
);
</script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 24px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.title {
  font-size: 14px;
  color: #666;
}
.icons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
