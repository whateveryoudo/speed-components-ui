<template>
  <Demo :code="code">
    <div>
      <div class="trigger-btns">
        <a-button type="primary" @click="showModal1 = true">打开弹框(完全自定义头)</a-button>
        <a-button type="primary" @click="showModal2 = true">打开弹框(自定义头部左/右侧)</a-button>
        <a-button type="primary" @click="showModal3 = true">打开弹框(自定义底部左/右侧)</a-button>
        <a-button type="primary" @click="showModal4 = true">打开弹框(完全自定义底)</a-button>
      </div>
      <s-full-modal v-model:open="showModal1" allowFullScreen @cancel="handleCancel1">
        <template #title>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal2" allowFullScreen @cancel="handleCancel2">
        <template #title-left>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        <template #title-right>
          <span class="bg-[red] text-[#fff]">我是右侧自定义区域</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal3" allowFullScreen title="标题" @cancel="handleCancel3">
        <!-- 自定义底部左右侧 -->
        <template #footer-left>
          <span class="text-[12px]">左侧内容</span>
        </template>
        <template #footer-right>
          <a-space>
            <a-button type="text" @click="handleCancel3">取消</a-button>
            <a-button type="primary" @click="handleOk3">确定</a-button>
          </a-space>
        </template>
      </s-full-modal>
      <s-full-modal v-model:open="showModal4" title="自定义底部示例" allowFullScreen @cancel="handleCancel4">
        <div>这里是弹框内容</div>
        <!-- 自定义底部内容 -->
        <template #footer>
          我是自定义底部内容。
        </template>
      </s-full-modal>
    </div>
  </Demo>
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`
<template>
    <div>
      <div class="trigger-btns">
        <a-button type="primary" @click="showModal1 = true">打开弹框(完全自定义头)</a-button>
        <a-button type="primary" @click="showModal2 = true">打开弹框(自定义头部左/右侧)</a-button>
        <a-button type="primary" @click="showModal3 = true">打开弹框(自定义底部左/右侧)</a-button>
        <a-button type="primary" @click="showModal4 = true">打开弹框(完全自定义底)</a-button>
      </div>
      <s-full-modal v-model:open="showModal1" allowFullScreen @cancel="handleCancel1">
        <template #title>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal2" allowFullScreen @cancel="handleCancel2">
        <template #title-left>
          <span class="bg-[red] text-[#fff]">我是自定义标题</span>
        </template>
        <template #title-right>
          <span class="bg-[red] text-[#fff]">我是右侧自定义区域</span>
        </template>
        内容区域
      </s-full-modal>
      <s-full-modal v-model:open="showModal3" allowFullScreen title="标题" @cancel="handleCancel3">
        <!-- 自定义底部左右侧 -->
        <template #footer-left>
          <span class="text-[12px]">左侧内容</span>
        </template>
        <template #footer-right>
          <a-space>
            <a-button type="text" @click="handleCancel3">取消</a-button>
            <a-button type="primary" @click="handleOk3">确定</a-button>
          </a-space>
        </template>
      </s-full-modal>
      <s-full-modal v-model:open="showModal4" title="自定义底部示例" allowFullScreen @cancel="handleCancel4">
        <div>这里是弹框内容</div>
        <!-- 自定义底部内容 -->
        <template #footer>
          我是自定义底部内容。
        </template>
      </s-full-modal>
    </div>
</template>
<script setup>
  const handleCancel1 = () => {
    showModal1.value = false;
  };
  const showModal2 = ref(false);


  const handleCancel2 = () => {
    showModal2.value = false;
  };

  const showModal3 = ref(false);


  const handleCancel3 = () => {
    showModal3.value = false;
  };

  const showModal4 = ref(false);

  const handleCancel4 = () => {
    showModal4.value = false;
  };
<\/script>
`)
const showModal1 = ref(false)

// 定义一个名为 handleCancel1 的箭头函数
const handleCancel1 = () => {
  // 将 showModal1 的值设置为 false，用于关闭模态框
  showModal1.value = false;
};


// 用于控制模态框2的显示/隐藏状态
const showModal2 = ref(false);



const handleCancel2 = () => {
  showModal2.value = false;
};

const showModal3 = ref(false);


const handleCancel3 = () => {
  showModal3.value = false;
};

const showModal4 = ref(false);

const handleCancel4 = () => {
  showModal4.value = false;
};


</script>
<style lang="less" scoped>
.trigger-btns {
  .ant-btn {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>