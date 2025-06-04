<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>只读模式</h3>
        <s-content-editor
          v-model:value="content3"
          placeholder="请输入内容..."
        />
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content1 = ref('<p>基础用法示例</p>')
const content2 = ref('<p>自定义高度示例</p>')
const content3 = ref('<p>只读模式示例</p>')
const content4 = ref('<p>完整工具栏示例</p>')

const code = `<template>
  <!-- 基础用法 -->
  <s-content-editor
    v-model:value="content1"
    placeholder="请输入内容..."
  />

  <!-- 自定义高度 -->
  <s-content-editor
    v-model:value="content2"
    height="200px"
    placeholder="请输入内容..."
  />

  <!-- 只读模式 -->
  <s-content-editor
    v-model:value="content3"
    read-only
    placeholder="请输入内容..."
  />

  <!-- 完整工具栏 -->
  <s-content-editor
    v-model:value="content4"
    mode="default"
    placeholder="请输入内容..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content1 = ref('<p>基础用法示例</p>')
const content2 = ref('<p>自定义高度示例</p>')
const content3 = ref('<p>只读模式示例</p>')
const content4 = ref('<p>完整工具栏示例</p>')
<\/script>`
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
      margin-bottom: 16px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style> 