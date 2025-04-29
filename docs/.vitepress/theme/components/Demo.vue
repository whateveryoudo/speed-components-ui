<template>
  <div class="demo-block">
    <div class="demo-content">
      <slot />
    </div>
    <div class="demo-code-control" @click="toggleCode">
      <a-icon :type="expanded ? 'up' : 'down'" />
      <span class="control-text">{{ expanded ? '收起代码' : '查看代码' }}</span>
    </div>
    <div v-show="expanded" class="demo-code">
      <div class="code-actions">
        <a-button type="text" size="small" @click="copyCode">
          <template #icon>
            <a-icon type="copy" />
          </template>
          复制代码
        </a-button>
      </div>
      <slot name="code" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const expanded = ref(false);

const toggleCode = () => {
  expanded.value = !expanded.value;
};

const copyCode = async () => {
  const code = document.querySelector('.demo-code pre')?.textContent;
  if (code) {
    try {
      await navigator.clipboard.writeText(code);
      message.success('代码已复制到剪贴板');
    } catch (err) {
      message.error('复制失败');
    }
  }
};
</script>

<style scoped>
.demo-block {
  border: 1px solid #ebedf1;
  border-radius: 2px;
  margin: 16px 0;
}

.demo-content {
  padding: 24px;
}

.demo-code-control {
  border-top: 1px solid #ebedf1;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  text-align: center;
  margin-top: -1px;
  color: #909399;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s;
}

.demo-code-control:hover {
  color: #1677ff;
  background-color: #f9fafc;
}

.control-text {
  margin-left: 8px;
  font-size: 14px;
}

.demo-code {
  background-color: #fafafa;
  border-top: 1px solid #ebedf1;
  padding: 16px;
}

.code-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}
</style> 