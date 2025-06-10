<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-toggle-input
          input-width="300px"
          :text="infoValues.text1"
          :update-text="handleUpdate1"
        />
      </div>

      <div class="demo-item">
        <h3>二次确认(常用于ajax请求后更新)</h3>
        <s-toggle-input
          :text="infoValues.text2"
          need-confirm
          :update-text="handleUpdate2"
        />
      </div>

      <div class="demo-item">
        <h3>自定义触发</h3>
        <s-toggle-input :text="infoValues.text3" :update-text="handleUpdate3">
          <template #trigger="{ info }">
            <a-button type="link" @click="info.flag = true">
              点击修改
            </a-button>
          </template>
        </s-toggle-input>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
import { reactive } from "vue";

const infoValues = reactive({
  text1: "测试内容1",
  text2: "测试内容2",
  text3: "测试内容3",
});
const handleUpdate1 = (state: { text: string; flag: boolean }) => {
  infoValues.text1 = state.text;
  state.flag = false;
  message.success(`修改成功：${state.text}`);
};
const handleUpdate2 = (state: any) => {
  // 模拟异步请求
  setTimeout(() => {
    message.success(`修改成功：${state.text}`);
    infoValues.text2 = state.text;
    state.flag = false;
  }, 500);
};

const handleUpdate3 = (state: any) => {
  infoValues.text3 = state.text;
  state.flag = false;
  message.success(`修改成功：${state.text}`);
};

const code = `<template>
   <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-toggle-input
          input-width="300px"
          :text="infoValues.text1"
          :update-text="handleUpdate1"
        />
      </div>

      <div class="demo-item">
        <h3>二次确认(常用于ajax请求后更新)</h3>
        <s-toggle-input
          :text="infoValues.text2"
          need-confirm
          :update-text="handleUpdate2"
        />
      </div>

      <div class="demo-item">
        <h3>自定义触发</h3>
        <s-toggle-input
          :text="infoValues.text3"
          :update-text="handleUpdate3"
        >
          <template #trigger="{ info }">
            <a-button type="link" @click="info.flag = true">
              点击修改
            </a-button>
          </template>
        </s-toggle-input>
      </div>
    </div>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
import { reactive } from "vue";

const infoValues = reactive({
  text1: "测试内容1",
  text2: "测试内容2",
  text3: "测试内容3",
});
const handleUpdate1 = (state: { text: string; flag: boolean }) => {
  infoValues.text1 = state.text;
  state.flag = false;
  message.success(\`修改成功：\${state.text}\`);
};
const handleUpdate2 = (state: any) => {
  // 模拟异步请求
  setTimeout(() => {
    message.success(\`修改成功：\${state.text}\`);
    infoValues.text2 = state.text;
    state.flag = false;
  }, 500);
};

const handleUpdate3 = (state: any) => {
  infoValues.text3 = state.text;
  state.flag = false;
  message.success(\`修改成功：\${state.text}\`);
};
<\/script>`;
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
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
