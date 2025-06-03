<template>
  <Demo :code="code">
    <h4 v-if="!withQueryFilter">
      内置查询<span class="text-[#999] ml-2 font-normal text-sm"
        >此方式下，最外层无法获取到搜索字段</span
      >
    </h4>
    <h4 v-else>结合query-filter使用</h4>
    <s-query-filter
      v-if="withQueryFilter"
      :fields="fields"
      :values="searchValues"
      @search="handleSearch"
    />
    <s-simple-table
      ref="tableRef"
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="withQueryFilter ? searchValues : {}"
      bordered
      :need-query-filter="!withQueryFilter"
    >
      <!-- 整行的slot -->
      <template #optBar>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-左 -->
      <template #optBarLeft>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-右 -->
      <template #optBarRight>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
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
      <a-space v-if="withQueryFilter"> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        结合query-filter组件使用
        <a-switch v-model:checked="withQueryFilter" />
      </a-space>
    </a-flex>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
const withQueryFilter = ref(false);
const searchValues = ref({
  name: "",
  age: [],
  address: "",
});
const tableRef = ref<any>(null);
const fields = ref<IFieldType[]>([
  {
    label: "姓名",
    fieldKey: "name",
    fieldType: "input",
  },
  {
    label: "年龄",
    fieldKey: "age",
    fieldType: "inputNumber",
  },
  {
    label: "地址",
    fieldKey: "address",
    fieldType: "input",
  },
]);

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    queryConfig: "input",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    queryConfig: "inputNumber",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    queryConfig: "input",
  },
];

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
const handleSearch = (values: any) => {
  searchValues.value = values;
  tableRef.value.getList(); // 调用表格搜索
};
const code = `<template>
  <h4 v-if="!withQueryFilter">
      内置查询<span class="text-[#999] ml-2 font-normal text-sm"
        >此方式下，最外层无法获取到搜索字段</span
      >
    </h4>
    <h4 v-else>结合query-filter使用</h4>
    <s-query-filter
      v-if="withQueryFilter"
      :fields="fields"
      :values="searchValues"
      @search="handleSearch"
    />
    <s-simple-table
      ref="tableRef"
      :fetch-func="fetchData"
      :columns="columns"
      :fetch-params="withQueryFilter ? searchValues : {}"
      bordered
      :need-query-filter="!withQueryFilter"
    >
    <!-- 整行的slot -->
      <template #optBar>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-左 -->
      <template #optBarLeft>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
      <!-- 单独的slot-右 -->
      <template #optBarRight>
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="primary">导出</a-button>
        </a-space>
      </template>
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
      <a-space v-if="withQueryFilter"> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        结合query-filter组件使用
        <a-switch v-model:checked="withQueryFilter" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
const withQueryFilter = ref(false);
const searchValues = ref({
  name: "",
  age: [],
  address: "",
});
const tableRef = ref<any>(null);
const fields = ref<IFieldType[]>([
  {
    label: "姓名",
    fieldKey: "name",
    fieldType: "input",
  },
  {
    label: "年龄",
    fieldKey: "age",
    fieldType: "inputNumber",
  },
  {
    label: "地址",
    fieldKey: "address",
    fieldType: "input",
  },
]);

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    queryConfig: "input",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    queryConfig: "inputNumber",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    queryConfig: "input",
  },
];

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
const handleSearch = (values: any) => {
  searchValues.value = values;
  tableRef.value.getList(); // 调用表格搜索
};
</style>`;
</script>

<style scoped lang="less">
h4 {
  margin: 0;
  margin-bottom: 10px;
}
.selected-info {
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>
