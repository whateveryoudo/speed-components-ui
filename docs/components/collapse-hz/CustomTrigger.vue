<template>
  <Demo :code="code">
    <div class="flex h-[300px]">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
        <template #trigger-render>
          <div class="custom-trigger" @click="open = !open">
            <RightOutlined class="text-[#fff]"/>
          </div>
        </template>
        <template #expand-render>
          <div>我是展开的流程日志</div>
        </template>
        <template #collapse-render>
          <div class="collapse-wrapper">
            <div class="tab-item" @click="open = true">
              <audit-outlined style="font-size: 16px" />
              <span class="text">流程日志</span>
            </div>
          </div>
        </template>
      </SCollapseHz>
    </div>
  </Demo>
</template>
<script setup>
import { ref } from "vue";
const code = `<template>
    <div class="flex h-[300px]">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
        <template #trigger-render>
          <div class="custom-trigger">
            <RightOutlined class="text-[#fff]"/>
          </div>
        </template>
        <template #expand-render>
          <div>我是展开的流程日志</div>
        </template>
        <template #collapse-render>
          <div class="collapse-wrapper">
            <div class="tab-item" @click="open = true">
              <audit-outlined style="font-size: 16px" />
              <span class="text">流程日志</span>
            </div>
          </div>
        </template>
      </SCollapseHz>
    </div>
</template>

<style scoped lang="less">
.collapse-wrapper {
  .tab-item {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.1s;
    cursor: pointer;
    :deep(.ant-icon) {
      margin-bottom: 5px;
    }
    .text {
      font-size: 12px;
    }
    &:hover {
      background-color: #f5f6f8;
    }
  }
}
.custom-trigger {
  position: absolute;
  top: 50%;
  height: 48px;
  transform: translateY(-50%);
  border: 1px solid #ebecee;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  background-color: red;
  color: #666 !important;
  left: -11px;
  z-index: 10;
}
</style>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const expandDir = ref("left");
<\/script>`;

const open = ref(false);

</script>

<style scoped lang="less">
.collapse-wrapper {
  .tab-item {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.1s;
    cursor: pointer;
    :deep(.ant-icon) {
      margin-bottom: 5px;
    }
    .text {
      font-size: 12px;
    }
    &:hover {
      background-color: #f5f6f8;
    }
  }
}
.custom-trigger {
  position: absolute;
  top: 50%;
  height: 48px;
  transform: translateY(-50%);
  border: 1px solid #ebecee;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  background-color: red;
  color: #666 !important;
  left: -11px;
  z-index: 10;
}
</style>
