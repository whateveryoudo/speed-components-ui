<template>
  <Demo :code="code">
    <div>
      <a-button type="primary" @click="showModal = true">拖拽弹框</a-button>
      <s-full-modal allowFullScreen draggable v-model:open="showModal" title="标题" @ok="handleOk" @cancel="handleCancel">
        内容区域
      </s-full-modal>
    </div>
  </Demo>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const code = `<template>
   <div>
      <a-button type="primary" @click="showModal = true">打开弹框</a-button>
      <s-full-modal allowFullScreen draggable v-model:open="showModal" title="标题" @ok="handleOk" @cancel="handleCancel">
        内容区域
      </s-full-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const handleOk = () => {
  console.log("点击确定");
  showModal.value = false;
};

const handleCancel = () => {
  console.log("点击取消");
  showModal.value = false;
};
<\/script>`;

const handleOk = () => {
  console.log("点击确定");
  showModal.value = false;
};

const handleCancel = () => {
  console.log("点击取消");
  showModal.value = false;
};
</script>
