<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-api-select
          class="w-[300px]"
          v-model:value="value"
          :fetch-func="fetchData"
          placeholder="请选择用户"
          show-search
          allow-clear
        />
      </div>

      <div class="demo-item">
        <h3>多选模式</h3>
        <s-api-select
          v-model:value="multipleValue"
          :fetch-func="fetchData"
          placeholder="请选择多个用户"
          mode="multiple"
          show-search
          allow-clear
          class="w-[300px]"
        />
      </div>

      <div class="demo-item">
        <h3>自定义字段名：{label: 'username', value: 'userId'}</h3>
        <s-api-select
          v-model:value="customValue"
          :fetch-func="fetchData"
          :field-names="{ label: 'username', value: 'userId' }"
          placeholder="请选择用户"
          show-search
          class="w-[300px]"
          allow-clear
        />
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 单选值
const value = ref();

// 多选值
const multipleValue = ref<string[]>([]);

// 自定义字段值
const customValue = ref<string>();

// 模拟接口请求
const fetchData = async (params: any) => {
  const { searchVal = "" } = params;
  // 模拟接口延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  const list = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    name: `用户${index + 1}`,
    username: `user${index + 1}`,
    userId: `U${index + 1}`,
  }));

  // 模拟搜索过滤
  const filteredList = searchVal
    ? list.filter(
        (item) =>
          item.name.includes(searchVal) || item.username.includes(searchVal)
      )
    : list;

  return {
    success: true,
    data: {
      data: filteredList,
    },
  };
};

const code = `<template>
  <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-api-select
          class="w-[300px]"
          v-model:value="value"
          :fetch-func="fetchData"
          placeholder="请选择用户"
          show-search
          allow-clear
        />
      </div>

      <div class="demo-item">
        <h3>多选模式</h3>
        <s-api-select
          v-model:value="multipleValue"
          :fetch-func="fetchData"
          placeholder="请选择多个用户"
          mode="multiple"
          show-search
          allow-clear
          class="w-[300px]"
        />
      </div>

      <div class="demo-item">
        <h3>自定义字段名:label: 'username', value: 'userId'</h3>
        <s-api-select
          v-model:value="customValue"
          :fetch-func="fetchData"
          :field-names="{ label: 'username', value: 'userId' }"
          placeholder="请选择用户"
          show-search
          class="w-[300px]"
          allow-clear
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 单选值
const value = ref()

// 多选值
const multipleValue = ref<string[]>([])

// 自定义字段值
const customValue = ref<string>()

// 模拟接口请求
const fetchData = async (params: any) => {
  const { searchVal = '' } = params
  // 模拟接口延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const list = Array.from({ length: 10 }, (_, index) => ({
    id: \`$\{index + 1}\`,
    name: \`用户$\{index + 1}\`,
    username: \`user$\{index + 1}\`,
    userId: \`U$\{index + 1}\`
  }))

  // 模拟搜索过滤
  const filteredList = searchVal
    ? list.filter(item => 
        item.name.includes(searchVal) || 
        item.username.includes(searchVal)
      )
    : list

  return {
    success: true,
    data: {
      data: filteredList
    }
  }
}
<\/script>
<style scoped lang="less">
.demo-wrapper {
  width: 100%;
}

.demo-item {
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>`;
</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
}

.demo-item {
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
