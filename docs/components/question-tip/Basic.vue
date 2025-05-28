<template>
  <Demo :code="code">
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
        <h3>自定义位置</h3>
        <s-question-tip
          label="标签文本"
          tip="这是一段提示文本"
          placement="bottom"
        />
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
const code = `<template>
  <!-- 基础用法 -->
  <s-question-tip
    label="标签文本"
    tip="这是一段提示文本"
  />

  <!-- 多行提示 -->
  <s-question-tip
    label="标签文本"
    :tip="['第一行提示文本', '第二行提示文本', '第三行提示文本']"
  />

  <!-- 白色主题 -->
  <s-question-tip
    label="标签文本"
    tip="这是一段提示文本"
    theme="white"
  />

  <!-- 自定义位置 -->
  <s-question-tip
    label="标签文本"
    tip="这是一段提示文本"
    placement="bottom"
  />

  <!-- 块级显示 -->
  <s-question-tip
    label="标签文本"
    tip="这是一段提示文本"
    blocked
  />
</template>`
</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
  padding: 24px;
  background: #fff;
  border-radius: 4px;

  .demo-item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin-top: 0px;
      margin-bottom: 16px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style> 