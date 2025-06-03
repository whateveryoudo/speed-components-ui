<template>
  <Demo :code="code">
    <s-lazy-select
      v-model:value="selectValue"
      :fetch-func="fetchData"
      :fetch-params="{ type: 'user' }"
      :field-names="{ label: 'userName', value: 'userId' }"
      :maxCount="maxCount"
      :maxTagTextLength="maxTagTextLength"
      :search="{
        placeholder: '请输入用户名称',
        key: 'userName',
      }"
      :mode="mode"
      placeholder="请选择用户"
    />
    <a-flex class="mt-2" vertical :gap="10">
      <a-space
        >当前选择的值: <span>{{ selectValue }}</span></a-space
      >
      <a-space
        >模式
        <a-radio-group v-model:value="mode" @change="handleModeChange">
          <a-radio value="single">单选</a-radio>
          <a-radio value="multiple">多选</a-radio>
        </a-radio-group>
      </a-space>
      <a-space v-show="mode === 'multiple'">
        最大显示数 <a-input-number v-model:value="maxCount" />
      </a-space>
      <a-space v-show="mode === 'multiple'">
        最大单个回填项长度 <a-input-number v-model:value="maxTagTextLength" />
      </a-space>
    </a-flex>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectValue = ref();
const mode = ref("single");
const maxCount = ref();
const maxTagTextLength = ref();
const handleModeChange = (mode: "single" | "multiple") => {
  // 清空下值
  selectValue.value = mode === "single" ? undefined : [];
};
const fetchData = async (params: any) => {
  // 模拟接口请求(注意这里响应数据格式)
  const { size = 10, page = 1 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    userId: (page - 1) * size + index + 1,
    userName: `用户${(page - 1) * size + index + 1}`,
  }));

  return {
    data: list,
    totalCount: 40,
    totalPages: 4,
    success: true,
  };
};

const code = `<template>
    <s-lazy-select
      v-model:value="value"
      :fetch-func="fetchData"
      :fetch-params="{ type: 'user' }"
      :search="{
        placeholder: '请输入用户名称',
        key: 'name',
      }"
      mode="single"
      placeholder="请选择用户"
    />
    <div class="mt-2">
      当前选择的值：{{ value }}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref({ label: "", value: "" });
const fetchData = async (params: any) => {
  // 模拟接口请求(注意这里响应数据格式)
  const { size = 10, page = 1 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: \`用户\${(page - 1) * size + index + 1}\`,
  }));

  return {
    data: {
      records: list,
      pages: 4, // 固定总页数
      total: 40, // 固定总条数
    },
    success: true
  };
};
<\/script>`;
</script>

<style scoped></style>
