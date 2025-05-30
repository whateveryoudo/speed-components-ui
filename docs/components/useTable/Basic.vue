<!--
 * @Author: ykx
 * @Date: 2024-03-21 10:00:00
 * @LastEditTime: 2024-03-21 10:00:00
 * @LastEditors: ykx
 * @Description: useTable 基础示例
-->
<template>
  <Demo :code="code">
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    />
  </Demo>
</template>

<script setup lang="ts">
import { useTable } from "@/hooks/useLoad";
import { computed, ref } from "vue";

// 模拟请求数据
const fetchData = async (params: any) => {
  console.log("请求参数:", params);
  // 模拟接口请求延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 模拟分页数据
  const { page = 1, size = 10 } = params;
  const total = 100; // 总数据量
  const start = (page - 1) * size;
  const end = Math.min(start + size, total);
  // 生成当前时间前后20天范围内的随机日期
  const randomDate = new Date(
    Date.now() + (Math.random() * 40 - 20) * 24 * 60 * 60 * 1000
  );
  const mockData = Array.from({ length: end - start }, (_, index) => ({
    id: start + index + 1,
    name: `用户${start + index + 1}`,
    age: Math.floor(Math.random() * 50) + 18,
    createTime: randomDate
      .toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-"),
  }));
  return {
    success: true,
    data: mockData,
    totalCount: total,
  };
};

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
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
];

const options = computed(() => ({
  beforeFetch: () => {
    console.log("请求前处理");
  },
}));

const { dataSource, loading, pagination, handleTableChange, getList } =
  useTable(fetchData, options);

// 初始化加载数据
getList();

const code = ref(`<template>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    />
</template>
<script setup lang="ts">
import { useTable } from "@/hooks/useLoad";
import { computed, ref } from "vue";

// 模拟请求数据
const fetchData = async (params: any) => {
  console.log('请求参数:', params);
  // 模拟接口请求延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 模拟分页数据
  const { page = 1, size = 10 } = params;
  const total = 100; // 总数据量
  const start = (page - 1) * size;
  const end = Math.min(start + size, total);
  
  const mockData = Array.from({ length: end - start }, (_, index) => ({
    id: start + index + 1,
    name: \`用户\${start + index + 1}\`,
    age: Math.floor(Math.random() * 50) + 18,
    createTime: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
  }));

  return {
    success: true,
    data: mockData,
    totalCount: total,
  };
};

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
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  }
];

const options = computed(() => ({
  beforeFetch: () => {
    console.log("请求前处理");
  },
}));

const { dataSource, loading, pagination, handleTableChange, getList } = useTable(
  fetchData,
  options
);

// 初始化加载数据
getList();
<\/script>
`);
</script>
