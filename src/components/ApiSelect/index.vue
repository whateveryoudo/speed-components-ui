<template>
  <Select
    v-model:value="innerValue"
    :show-search="!!search"
    :mode="mode"
    :placeholder="placeholder"
    :default-active-first-option="false"
    :show-arrow="false"
    :filter-option="false"
    :field-names="fieldNames"
    :not-found-content="fetching ? undefined : null"
    :options="data"
    @change="handleChange"
    v-bind="$attrs"
    v-on="search
        ? {
            search: handleSearch,
          }
        : {}
    "
  >
    <template v-if="fetching" #notFoundContent>
      <Spin size="small" />
    </template>
  </Select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { debounce } from "lodash-es";
import { Select, Spin } from "ant-design-vue";
import type { SelectValue, DefaultOptionType } from 'ant-design-vue/es/select';
// eslint-disable-next-line no-undef
defineOptions({
  name: "SApiSelect",
});
export type IFetchOptions = {
  params?: Record<string, any>;
  afterRes?: Function;
};
const props = withDefaults(
  defineProps<{
    placeholder?: string;
    fetchFunc: Function;
    fieldNames?: { label: string; value: string };
    fetchOptions?: IFetchOptions;
    value?: SelectValue;
    mode?: "multiple";
    search?: {
      key: string;
    };
  }>(),
  {
    placeholder: "请选择",
    fieldNames: () => ({label: 'name', value: 'id'})
  }
);
const emits = defineEmits(["update:value"]);
let innerValue = ref<SelectValue>();
const searchVal = ref("");
const fetching = ref(false);
const data = ref<any[]>([]);
const fetch = debounce(async () => {
  if (!props.fetchFunc) {
    return;
  }
  fetching.value = true;
  const res = await props.fetchFunc({
    ...(props?.fetchOptions?.params ?? {}),
    ...(props.search?.key ? { [props.search.key]: searchVal.value } : {}),
  });
  fetching.value = false;
  if (res) {
    if (props?.fetchOptions?.afterRes) {
      data.value = props.fetchOptions.afterRes(res.data);
    } else {
      data.value = res.data || [];
    }
  }
});

const handleSearch = (val: string) => {
  if (props.search) {
    searchVal.value = val;
    fetch();
  }
};
const handleChange = (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => {
  emits("update:value", value, option);
};
fetch();
watch(
  () => props.value,
  (val: SelectValue) => {
    innerValue.value = val;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="less"></style>
