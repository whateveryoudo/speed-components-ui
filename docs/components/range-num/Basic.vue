<template>
  <Demo :code="code">
    <a-flex vertical :gap="10">
      <a-flex vertical :gap="5">
        <div class="title">基础用法</div>
        <s-range-num v-model:value="value1" />
      </a-flex>
      <a-flex vertical :gap="5">
        <a-space>
          <div class="title">设置最大值最小值</div>
          <span class="desc">最小值10，最大值100</span>
        </a-space>
        <s-range-num v-model:value="value2" :min-num="10" :max-num="100" />
      </a-flex>
      <a-flex vertical :gap="5">
        <div class="title">设置后缀</div>
        <s-range-num v-model:value="value3" suffix="%" />
      </a-flex>
    </a-flex>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 基础用法
const value1 = ref<number[]>([]);

// 设置最大值最小值
const value2 = ref<number[]>([]);

// 设置后缀
const value3 = ref<number[]>([]);

const code = `<template>
  <a-flex vertical :gap="10">
    <a-flex vertical :gap="5">
      基础用法
      <s-range-num
        v-model:value="value1"
      />
    </a-flex>

    <a-flex vertical :gap="5">
      <a-space>
        设置最大值最小值:
        <span class="text-[12px] text-[#999]">最小值10，最大值100</span>
      </a-space>
      <s-range-num
        v-model:value="value2"
        :min-num="10"
        :max-num="100"
      />
    </a-flex>

    <a-flex vertical :gap="5">
      设置后缀
      <s-range-num
        v-model:value="value3"
        suffix="%"
      />
    </a-flex>
  </a-flex>
</template>`;
</script>

<style scoped lang="less">
.title {
  font-size: 14px;
  color: #666;
}

.desc {
  font-size: 12px;
  color: #999;
}
</style>
