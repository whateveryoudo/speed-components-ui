<template>
  <Demo :code="code">
    <s-query-filter
      :fields="fields"
      :values="lettleSearchMode ? searchValues2 : searchValues"
      @search="handleSearch"
      mode="simple"
      :showOpt="!lettleSearchMode"
      :search-when-change="true"
    />
    <a-flex vertical :gap="10">
      <a-space v-if="lettleSearchMode"> 搜索值： {{ searchValues2 }} </a-space>
      <a-space v-else> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        某些少量搜索场景
        <a-switch v-model:checked="lettleSearchMode" />
      </a-space>
    </a-flex>
  </Demo>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const lettleSearchMode = ref(false);
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  if (lettleSearchMode.value) {
    // 一些少量搜素
    return [
      {
        label: "状态",
        fieldKey: "status",
        fieldType: "select",
        props: {
          options: [
            { label: "处理中", value: "1" },
            { label: "已完成", value: "2" },
            { label: "已取消", value: "3" },
          ],
        },
      },
      {
        label: "姓名",
        fieldKey: "name",
        fieldType: "input",
        props: {
          placeholder: "请输入姓名",
          itemWidth: 200,
          hasSearchIcon: true,
          whenChangeTrigger: "input", // 修改触发方式为输入
        },
      },
    ];
  }
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
        options: [
          { label: "处理中", value: "1" },
          { label: "已完成", value: "2" },
          { label: "已取消", value: "3" },
        ],
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
            pageSize: 10,
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
      label: "日期",
      fieldKey: "date",
      fieldType: "date",
    },
    {
      label: "时间",
      fieldKey: "time",
      fieldType: "time",
      props: {
        valueFormat: "HH:mm:ss",
      },
    },
    {
      fieldKey: "datetime",
      label: "日期时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "dateTimeRange",
      label: "日期时间范围",
      fieldType: "dateTimeRange",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
        transform2Params: ["dateTimeRangeStart", "dateTimeRangeEnd"],
      },
    },
    {
      fieldKey: "multiple",
      label: "多选",
      fieldType: "select",
      props: {
        mode: "multiple",
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
          { label: "选项3", value: "3" },
        ],
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
  date: "",
  time: "",
  datetime: "",
  multiple: [],
  dateTimeRangeStart: "",
  dateTimeRangeEnd: "",
});
const searchValues2 = ref<Record<string, any>>({
  name: "",
  status: undefined,
  user: undefined,
});
// 搜索回调
const handleSearch = (values: Record<string, any>) => {
  console.log("搜索条件:", values);
  if (lettleSearchMode.value) {
    searchValues2.value = values;
  } else {
    searchValues.value = values;
  }
  // TODO: 搜索逻辑
  message.success("触发搜素");
};

const code = `<template>
 <s-query-filter
      :fields="fields"
      :values="lettleSearchMode ? searchValues2 : searchValues"
      @search="handleSearch"
      mode="simple"
      :showOpt="!lettleSearchMode"
      :search-when-change="true"
    />
    <a-flex vertical :gap="10">
      <a-space v-if="lettleSearchMode"> 搜索值： {{ searchValues2 }} </a-space>
      <a-space v-else> 搜索值： {{ searchValues }} </a-space>
      <a-space>
        某些少量搜索场景
        <a-switch v-model:checked="lettleSearchMode" />
      </a-space>
    </a-flex>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IFieldType } from "@/components/QueryFilter/type";
import { message } from "ant-design-vue";
const lettleSearchMode = ref(false);
// 搜索配置
const fields = computed<IFieldType[]>(() => {
  if (lettleSearchMode.value) {
    // 一些少量搜素
    return [
      {
        label: "状态",
        fieldKey: "status",
        fieldType: "select",
        props: {
          options: [
            { label: "处理中", value: "1" },
            { label: "已完成", value: "2" },
            { label: "已取消", value: "3" },
          ],
        },
      },
      {
        label: "姓名",
        fieldKey: "name",
        fieldType: "input",
        props: {
          placeholder: "请输入姓名",
          itemWidth: 200,
          hasSearchIcon: true,
          whenChangeTrigger: "input", // 修改触发方式为输入
        },
      },
    ];
  }
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
        options: [
          { label: "处理中", value: "1" },
          { label: "已完成", value: "2" },
          { label: "已取消", value: "3" },
        ],
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
            pageSize: 10,
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
      label: "日期",
      fieldKey: "date",
      fieldType: "date",
    },
    {
      label: "时间",
      fieldKey: "time",
      fieldType: "time",
      props: {
        valueFormat: "HH:mm:ss",
      },
    },
    {
      fieldKey: "datetime",
      label: "日期时间",
      fieldType: "dateTime",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
      },
    },
    {
      fieldKey: "dateTimeRange",
      label: "日期时间范围",
      fieldType: "dateTimeRange",
      props: {
        valueFormat: "YYYY-MM-DD HH:mm:ss",
        transform2Params: ["dateTimeRangeStart", "dateTimeRangeEnd"],
      },
    },
    {
      fieldKey: "multiple",
      label: "多选",
      fieldType: "select",
      props: {
        mode: "multiple",
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
          { label: "选项3", value: "3" },
        ],
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
  date: "",
  time: "",
  datetime: "",
  multiple: [],
  dateTimeRangeStart: "",
  dateTimeRangeEnd: "",
});
const searchValues2 = ref<Record<string, any>>({
  name: "",
  status: undefined,
  user: undefined,
});
// 搜索回调
const handleSearch = (values: Record<string, any>) => {
  console.log("搜索条件:", values);
  if (lettleSearchMode.value) {
    searchValues2.value = values;
  } else {
    searchValues.value = values;
  }
  // TODO: 搜索逻辑
  message.success("触发搜素");
};
<\/script>`;
</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
}
</style>
