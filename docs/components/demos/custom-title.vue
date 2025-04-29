<template>
  <div>
    <a-button type="primary" @click="showModal = true">打开弹框</a-button>
    <s-full-modal
      v-model:visible="showModal"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title>
        <div style="display: flex; align-items: center;">
          <a-icon type="info-circle" style="margin-right: 8px;" />
          <span>自定义标题</span>
        </div>
      </template>
      <template #default>
        <div style="height: 200px; padding: 20px;">内容区域</div>
      </template>
    </s-full-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const handleOk = () => {
  console.log("点击确定");
  showModal.value = false;
};

const handleCancel = () => {
  console.log("点击取消");
  showModal.value = false;
};
</script> 