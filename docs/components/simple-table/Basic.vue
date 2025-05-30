<template>
  <Demo :code="code">
    <div class="selected-info" v-if="hasSelectedRows.length">
      已选择 {{ hasSelectedRows.length }} 项
      <a-button type="link" @click="hasSelectedRows = []">清空</a-button>
    </div>

    <s-simple-table
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="{ type: 'user' }"
      :row-selection="{
        type: 'checkbox',
      }"
      :has-pagination="hasPagination"
      v-model:hasSelectedRows="hasSelectedRows"
    >
      <!-- 自定义单元格 -->
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'age'">
          <a-tag :color="record.age > 40 ? 'red' : 'green'">
            {{ text }}
          </a-tag>
        </template>
      </template>

      <!-- 自定义列标题 -->
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'address'">
          <span style="color: #1890ff">详细地址</span>
        </template>
      </template>
    </s-simple-table>

    <a-flex vertical :gap="10">
      <a-space>
        <a-button @click="selectSpecialRows()">初始化选中第二、第三行</a-button>
      </a-space>
      <a-space>
        允许翻页
        <a-switch v-model:checked="hasPagination" />
      </a-space>
    </a-flex>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hasSelectedRows = ref<any[]>([]); // 勾选条目
const hasPagination = ref(true);
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
];
// 这里需要传入rowKey的项
const selectSpecialRows = () => {
  hasSelectedRows.value = [{ id: 2 }, { id: 3 }];
};
const fetchData = async (params: any) => {
  // 模拟接口请求
  const { page = 1, size = 10 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: `用户${(page - 1) * size + index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    address: `北京市朝阳区xxx街道${(page - 1) * size + index + 1}号`,
  }));

  return {
    success: true,
    data: list,
    totalCount: 100,
    totalPages: 10
  };
};

const code = `<template>
  <div class="selected-info" v-if="hasSelectedRows.length">
      已选择 {{ hasSelectedRows.length }} 项
      <a-button type="link" @click="hasSelectedRows = []">清空</a-button>
    </div>

    <s-simple-table
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="{ type: 'user' }"
      :row-selection="{
        type: 'checkbox',
      }"
      :has-pagination="hasPagination"
      v-model:hasSelectedRows="hasSelectedRows"
      bordered
    >
      <!-- 自定义单元格 -->
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'age'">
          <a-tag :color="record.age > 40 ? 'red' : 'green'">
            {{ text }}
          </a-tag>
        </template>
      </template>

      <!-- 自定义列标题 -->
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'address'">
          <span style="color: #1890ff">详细地址</span>
        </template>
      </template>
    </s-simple-table>

    <a-flex vertical :gap="10">
      <a-space>
        <a-button @click="selectSpecialRows()">初始化选中第二、第三行</a-button>
      </a-space>
      <a-space>
        允许翻页
        <a-switch v-model:checked="hasPagination" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hasSelectedRows = ref<any[]>([]); // 勾选条目
const hasPagination = ref(true);
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
];
// 这里需要传入rowKey的项
const selectSpecialRows = () => {
  hasSelectedRows.value = [{ id: 2 }, { id: 3 }];
};
const fetchData = async (params: any) => {
  // 模拟接口请求
  const { page = 1, size = 10 } = params;
  const list = Array.from({ length: size }, (_, index) => ({
    id: (page - 1) * size + index + 1,
    name: \`用户\${(page - 1) * size + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 20,
    address: \`北京市朝阳区xxx街道\${(page - 1) * size + index + 1}号\`,
  }));

  return {
    success: true,
    data: list,
    totalCount: 100,
    totalPages: 10
  };
};
<\/script>

<style scoped>

.selected-info {
  margin-bottom: 16px;
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>`;
</script>

<style scoped>
.selected-info {
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>
