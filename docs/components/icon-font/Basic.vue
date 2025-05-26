<template>
  <Demo :code="code">
    <div class="icon-demo">
      <div class="demo-item">
        <div class="title">Iconfont 图标</div>
        <div class="icons">
          <s-icon-font type="user" />
          <s-icon-font type="home" />
          <s-icon-font type="setting" />
        </div>
      </div>
      <div class="demo-item">
        <div class="title">自定义大小和颜色</div>
        <div class="icons">
          <s-icon-font type="user" :size="20" color="#1890ff" />
          <s-icon-font type="home" :size="24" color="#52c41a" />
          <s-icon-font type="setting" :size="28" color="#faad14" />
        </div>
      </div>
    </div>
  </Demo>
</template>

<script setup>
const code = `
<template>
  <div class="icon-demo">
    <div class="demo-item">
      <div class="title">Iconfont 图标</div>
      <div class="icons">
        <s-icon-font type="user" />
        <s-icon-font type="home" />
        <s-icon-font type="setting" />
      </div>
    </div>
    <div class="demo-item">
      <div class="title">自定义大小和颜色</div>
      <div class="icons">
        <s-icon-font type="user" :size="20" color="#1890ff" />
        <s-icon-font type="home" :size="24" color="#52c41a" />
        <s-icon-font type="setting" :size="28" color="#faad14" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
`
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
