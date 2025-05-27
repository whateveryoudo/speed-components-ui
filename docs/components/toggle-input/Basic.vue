<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-toggle-input
          text="点击修改"
          :update-text="handleUpdate"
        />
      </div>

      <div class="demo-item">
        <h3>自定义宽度</h3>
        <s-toggle-input
          text="点击修改"
          input-width="300px"
          :update-text="handleUpdate"
        />
      </div>

      <div class="demo-item">
        <h3>二次确认</h3>
        <s-toggle-input
          text="点击修改"
          need-confirm
          :update-text="handleUpdate"
        />
      </div>

      <div class="demo-item">
        <h3>自定义触发</h3>
        <s-toggle-input
          text="点击修改"
          :update-text="handleUpdate"
        >
          <template #trigger="{ info }">
            <a-button type="link">
              {{ info.text }}
            </a-button>
          </template>
        </s-toggle-input>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

const handleUpdate = (state: any) => {
  message.success(`修改成功：${state.text}`)
}

const code = `<template>
  <!-- 基础用法 -->
  <s-toggle-input
    text="点击修改"
    :update-text="handleUpdate"
  />

  <!-- 自定义宽度 -->
  <s-toggle-input
    text="点击修改"
    input-width="300px"
    :update-text="handleUpdate"
  />

  <!-- 二次确认 -->
  <s-toggle-input
    text="点击修改"
    need-confirm
    :update-text="handleUpdate"
  />

  <!-- 自定义触发 -->
  <s-toggle-input
    text="点击修改"
    :update-text="handleUpdate"
  >
    <template #trigger="{ info }">
      <a-button type="link">
        {{ info.text }}
      </a-button>
    </template>
  </s-toggle-input>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

const handleUpdate = (state: any) => {
  message.success(\`修改成功：\${state.text}\`)
}
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