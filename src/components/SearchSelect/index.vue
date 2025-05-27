<template>
  <a-select
    v-model:value="innerValue"
    :show-search="showSearch"
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
    v-on="
      showSearch
        ? {
            search: handleSearch,
          }
        : {}
    "
  >
    <template v-if="fetching" #notFoundContent>
      <a-spin size="small" />
    </template>
  </a-select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { debounce } from "lodash-es";
// eslint-disable-next-line no-undef
defineOptions({
  name: "SSelectSearch",
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
    value?: any;
    mode?: "multiple";
    showSearch?: boolean;
  }>(),
  {
    placeholder: "请选择",
    fieldNames: () => ({ label: "name", value: "id" }),
  }
);
const emits = defineEmits(["update:value"]);
let innerValue = ref();
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
    searchVal: searchVal.value,
  });
  fetching.value = false;
  if (res) {
    if (props?.fetchOptions?.afterRes) {
      data.value = props.fetchOptions.afterRes(res.data?.data);
    } else {
      data.value = res.data?.data ?? [];
    }
  }
});

const handleSearch = (val: string) => {
  if (props.showSearch) {
    searchVal.value = val;
    fetch();
  }
};
const handleChange = (val: string | any[], option: any) => {
  emits("update:value", val, option);
};
fetch();
watch(
  () => props.value,
  (val: any) => {
    innerValue.value = val;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="less"></style>
