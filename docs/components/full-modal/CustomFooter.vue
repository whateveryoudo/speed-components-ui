<template>
  <div>
    <a-button type="primary" @click="showModal = true">打开弹框</a-button>
    <s-full-modal
      v-model:visible="showModal"
      title="标题"
      @cancel="handleCancel"
    >
      <template #default>
        <div style="height: 200px; padding: 20px;">内容区域</div>
      </template>
      <template #footer>
        <div style="text-align: right;">
          <a-button @click="handleCancel">取消</a-button>
          <a-button
            type="primary"
            @click="handleSubmit"
            style="margin-left: 8px;"
          >
            提交
          </a-button>
        </div>
      </template>
    </s-full-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const handleSubmit = () => {
  console.log('点击提交');
  showModal.value = false;
};

const handleCancel = () => {
  console.log('点击取消');
  showModal.value = false;
};
</script> 