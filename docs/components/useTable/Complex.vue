<!--
 * @Author: ykx
 * @Date: 2024-03-21 10:00:00
 * @LastEditTime: 2024-03-21 10:00:00
 * @LastEditors: ykx
 * @Description: useTable 复合示例
-->
<template>
  <Demo :code="code">
    <s-query-filter
      :fields="fields"
      :values="searchValues"
      :col="8"
      @search="getList(true)"
    ></s-query-filter>
    <a-flex justify="space-between" class="my-2">
      <a-space>
        <a-checkbox
          :disabled="state.totalRows.length === 0"
          :checked="totalCheckStatus.checkAll"
          :indeterminate="totalCheckStatus.indeterminate"
          @change="onCheckAllChange"
          >全选</a-checkbox
        ><a-spin size="small" :spinning="selectAllLoading" />
        <span v-if="state.hasSelectedRows.length">
          已选择
          <strong>{{ state.hasSelectedRows.length }}</strong> 条数据
        </span>
      </a-space>
      <a-space>
        <a-button type="primary" @click="() => message.info('新增用户')"
          >新增用户</a-button
        >
      </a-space>
    </a-flex>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="loading"
      row-key="id"
      :pagination="pagination"
      @change="handleTableChange"
      :row-selection="{
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'status'">
          <a-tag
            :color="
              statusOptions.find((item) => item.value === record.status)?.color
            "
          >
            {{
              statusOptions.find((item) => item.value === record.status)?.label
            }}
          </a-tag>
        </template>
      </template>
    </a-table>
  </Demo>
</template>

<script setup lang="ts">
import { useTable } from "@/hooks/useLoad";
import { computed, ref } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const statusOptions = [
  { label: "处理中", value: "1", color: "blue" },
  { label: "已完成", value: "2", color: "green" },
  { label: "已取消", value: "3", color: "red" },
];
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  return [
    {
      label: "姓名",
      fieldKey: "name",
      fieldType: "input",
      props: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "状态",
      fieldKey: "status",
      fieldType: "select",
      props: {
        options: statusOptions,
      },
    },
    {
      label: "年龄",
      fieldKey: "age",
      fieldType: "inputNumber",
      props: {
        placeholder: "请输入年龄",
      },
    },
    {
      label: "用户",
      fieldKey: "user",
      fieldType: "apiSelect",
      props: {
        placeholder: "请选择用户",
        fetchOptions: {
          params: {
            page: 1,
            size: 10,
          },
          // key为必须值
          search: {
            key: "name",
          },
          // 支持自行处理结构
          afterRes: (res: any) => {
            return res.data.map((item: any) => ({
              label: item.name,
              value: item.id,
            }));
          },
        },
        fetchFunc: async (params: any) => {
          // 模拟远程搜索(默认会处理 { data: []},这种响应)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: params?.name
                  ? [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ].filter((item) => item.name.includes(params.name))
                  : [
                      { name: "用户1", id: "1" },
                      { name: "用户2", id: "2" },
                      { name: "用户3", id: "3" },
                    ],
              });
            }, 500);
          });
        },
        fieldNames: {
          label: "label",
          value: "value",
        },
      },
    },
    {
      fieldKey: "createTime",
      label: "创建时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
        transform2Params: ["createTimeStart", "createTimeEnd"],
      },
    },
  ];
});

// 默认搜索条件
const searchValues = ref<Record<string, any>>({
  name: "",
  age: [],
  status: undefined,
  user: undefined,
  createTimeStart: "",
  createTimeEnd: "",
});

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

  const mockData = Array.from({ length: end - start }, (_, index) => {
    // 生成当前时间前后20天范围内的随机日期
    const randomDate = new Date(
      Date.now() + (Math.random() * 40 - 20) * 24 * 60 * 60 * 1000
    );
    return {
      id: start + index + 1,
      name: `用户${start + index + 1}`,
      // 随机生成1、2、3中的一个值
      status: String(Math.floor(Math.random() * 3) + 1),
      // 直接返回格式化的日期字符串
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
      age: Math.floor(Math.random() * 50) + 18,
    };
  });

  return {
    success: true,
    data: mockData,
    totalCount: total,
  };
};
// 模拟全选接口(注：后端返回数据中需包含唯一键，其余属性结合需求决定[如：你需要从全选的数据中获取一些其他字段]，此接口可能造成性能问题，视情况考虑使用)
const fetchAllDataIds = async () => {
  // 模拟接口请求延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 生成1-100的数据对象
  const mockAllData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
  }));

  return {
    success: true,
    data: mockAllData,
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
    sorter: true,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    filters: [
      {
        text: "处理中",
        value: "1",
      },
      {
        text: "已完成",
        value: "2",
      },
      {
        text: "已取消",
        value: "3",
      },
    ],
    filterMultiple: false,
  },
  // 实际后端可能会返回日期格式，需要自行结合dayjs添加转换方法
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    sorter: true,
  },
];

const options = computed(() => ({
  needFullSelect: true, // 需要全选
  extraParams: {
    ...searchValues.value,
    // 你可以加入一些固定参数
    appId: "1",
  },
  // 全量数据api
  fullRowsAjax: fetchAllDataIds,
  beforeFetch: () => {
    console.log("请求前处理");
  },
}));

const {
  dataSource,
  loading,
  pagination,
  state,
  onSelectChange,
  handleTableChange,
  totalCheckStatus,
  onCheckAllChange,
  selectAllLoading,
  getList,
} = useTable(fetchData, options);

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
    name: \`用户$\{start + index + 1\}\`,
    age: Math.floor(Math.random() * 50) + 18,
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
<\/script>
`);
</script>
