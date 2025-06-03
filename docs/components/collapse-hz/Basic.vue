<template>
  <Demo :code="code">
    <div class="flex h-[300px]" v-if="expandDir === 'left'">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        :triggerMode="triggerMode"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
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
    <div class="flex h-[300px]" v-else>
      <SCollapseHz
        expandDir="right"
        :triggerMode="triggerMode"
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
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
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是右侧内容
      </div>
    </div>
    <a-flex vertical class="mt-2">
      <a-space>
        展开方向
        <a-radio-group v-model:value="expandDir">
          <a-radio value="left">向左</a-radio>
          <a-radio value="right">向右</a-radio>
        </a-radio-group>
      </a-space>
      <a-space class="mt-2">
        悬停显示
        <a-radio-group v-model:value="triggerMode">
          <a-radio value="default">默认显示</a-radio>
          <a-radio value="hover">悬停显示</a-radio>
        </a-radio-group>
      </a-space>
    </a-flex>
  </Demo>
</template>
<script setup>
import { ref } from "vue";
const code = `<template>
     <div class="flex h-[300px]" v-if="expandDir === 'left'">
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是左侧内容
      </div>
      <SCollapseHz
        v-model:open="open"
        :triggerMode="triggerMode"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
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
    <div class="flex h-[300px]" v-else>
      <SCollapseHz
        expandDir="right"
        :triggerMode="triggerMode"
        v-model:open="open"
        expandAttrBefore="flex: 0 0 64px"
        expandAttrAfter="flex: 0 0 200px"
      >
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
      <div class="flex-1 border-1 border-solid border-[#efefef]">
        我是右侧内容
      </div>
    </div>
    <a-space class="mt-2">
      展开方向
      <a-radio-group v-model:value="expandDir">
        <a-radio value="left">向左</a-radio>
        <a-radio value="right">向右</a-radio>
      </a-radio-group>
    </a-space>
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
</style>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const expandDir = ref("left");

const triggerMode = ref("default");
<\/script>`;

const open = ref(false);

const expandDir = ref("left");

const triggerMode = ref("default");

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
</style>
