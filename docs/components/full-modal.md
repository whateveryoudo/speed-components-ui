# FullModal 全局弹框

支持全屏拖拽的弹框组件。

## 基础用法

<Demo>
  <div>
    <a-button type="primary" @click="showModal = true">打开弹框</a-button>
    <s-full-modal
      v-model:visible="showModal"
      title="标题"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #default>
        <div style="height: 200px; padding: 20px;">
          内容区域
        </div>
      </template>
    </s-full-modal>
  </div>

 
</Demo>

## 自定义标题

<Demo>
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

  <template #code>
```vue
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
import { ref } from 'vue';

const showModal = ref(false);

const handleOk = () => {
  console.log('点击确定');
  showModal.value = false;
};

const handleCancel = () => {
  console.log('点击取消');
  showModal.value = false;
};
</script>
```
  </template>
</Demo>

## 自定义底部

<Demo>
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

  <template #code>
```vue
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
```
  </template>
</Demo>

## API

### Props

| 参数           | 说明                  | 类型               | 默认值  |
| -------------- | --------------------- | ------------------ | ------- |
| visible        | 是否显示弹框          | `boolean`          | `false` |
| title          | 弹框标题              | `string`           | -       |
| width          | 弹框宽度              | `string \| number` | `'80%'` |
| height         | 弹框高度              | `string \| number` | `'80%'` |
| draggable      | 是否可拖拽            | `boolean`          | `true`  |
| mask           | 是否显示遮罩          | `boolean`          | `true`  |
| maskClosable   | 点击遮罩是否关闭      | `boolean`          | `true`  |
| keyboard       | 是否支持键盘 esc 关闭 | `boolean`          | `true`  |
| destroyOnClose | 关闭时销毁子元素      | `boolean`          | `false` |

### Events

| 事件名         | 说明                    | 参数                         |
| -------------- | ----------------------- | ---------------------------- |
| ok             | 点击确定按钮时触发      | -                            |
| cancel         | 点击取消按钮时触发      | -                            |
| update:visible | 更新 visible 状态时触发 | `(visible: boolean) => void` |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 弹框内容   |
| title   | 自定义标题 |
| footer  | 自定义底部 |
