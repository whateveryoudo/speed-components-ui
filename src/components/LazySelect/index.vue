<!-- 带有分页请求的多选，这里采用popover, 值为默认 { value,label}，用于跨页回显，如果后端只能存入一个值，不建议使用，建议使用select -->
<script setup lang="ts">
import { CheckOutlined } from "@ant-design/icons-vue";
import { computed, nextTick, ref, watch } from "vue";
import { useLoadMore } from "@/hooks";
import { debounce } from "lodash-es";
import { Popover, Input, Spin, Empty, Form, Menu, MenuItem, Tag } from "ant-design-vue";
// eslint-disable-next-line no-undef
defineOptions({
  name: "SLazySelect",
});
interface IValueItem {
  label: string;
  value: string;
  [prop: string]: any;
}
const formItemContext = Form.useInjectFormItemContext();

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    placeholder?: string;
    value: IValueItem | IValueItem[];
    mode?: "single" | "multiple";
    fieldNames?: { label: string; value: string };
    maxCount?: number;
    maxTagTextLength?: number;
    search?: any;
    allowClear?: boolean;
    fetchFunc: Function;
    fetchParams?: any;
    emptyText?: string;
    afterFetch?: (data: any, res?: any) => any;
  }>(),
  {
    value: () => ({ label: "", value: "" }),
    mode: "single",
    placeholder: "请选择",
    disabled: false,
    fieldNames: () => ({ label: "name", value: "id" }),
    maxCount: 10,
    fetchParams: () => ({}),
    allowClear: true,
    emptyText: "暂无数据",
  }
);
const triggerSelect = ref(null);
const emits = defineEmits(["update:value"]);
const overlayWidth = ref(0);
const scrollRef = ref();
const visible = ref(false);
// 唯一标识
const valueKey = computed(() => {
  return props.fieldNames["value"];
});
const labelKey = computed(() => {
  return props.fieldNames["label"];
});
// 是否显示placeholder
const showPlaceholder = computed(() => {
  if (props.mode === "single") {
    return !(props.value as IValueItem)?.value;
  } else {
    return (props.value as IValueItem[]).length === 0;
  }
});
// 选中keys
const selectedKeys = computed(() => {
  if (props.mode === "single") {
    return props.value ? [(props.value as IValueItem).value] : [];
  } else {
    const tempVal = props.value as IValueItem[];
    return tempVal && tempVal.length > 0
      ? tempVal.map((item: IValueItem) => item.value)
      : [];
  }
});
const searchVal = ref("");
// 区分单选多选
const handleMenuClick = (item: any) => {
  const key = item[valueKey.value];
  const tempItem = {};
  // 生成单行结果值
  Object.keys(props.fieldNames).forEach((key) => {
    tempItem[key] = item[props.fieldNames[key]] || "";
  });
  if (props.mode === "single") {
    // 单选
    emits("update:value", tempItem);
    formItemContext.onFieldChange();
    // 单选点击完成就关闭
    visible.value = false;
  } else {
    // 多选
    if (selectedKeys.value.includes(key)) {
      emits(
        "update:value",
        (props.value as IValueItem[]).filter((item: IValueItem) => {
          return item.value !== key;
        })
      );
     
      formItemContext.onFieldChange();
    } else {
      emits("update:value", [...(props.value as IValueItem[]), tempItem]);
     
      formItemContext.onFieldChange();
    }
  }
};
// 清除操作
const handleClear = () => {
  emits("update:value", props.mode === "single" ? undefined : []);

  formItemContext.onFieldChange();

};
const handleDel = (id: string) => {
  emits('update:value', (props.value as IValueItem[]).filter((item: IValueItem) => {
    return item.value !== id;
  }));
  formItemContext.onFieldChange();
};
// 构造额外参数
const fetchOptions = computed(() => ({
  extraParams:
    props.search && props.search.key
      ? {
          ...props.fetchParams,
          [props.search.key]: searchVal.value,
        }
      : props.fetchParams,
  afterFetch: props.afterFetch,
}));
const { noMore, initLoad, initLoading, loading, onLoadMore, list } =
  useLoadMore(props.fetchFunc, fetchOptions);
// 搜索
const handleSearchList = debounce(initLoad, 500);
const handleVisibleChange = (flag: boolean) => {
  if (props.disabled) {
    return;
  }
  visible.value = flag;
};

watch(
  visible,
  async (val: boolean) => {
    if (val) {
      await nextTick();
      if (triggerSelect.value) {
        overlayWidth.value =
          (triggerSelect.value as HTMLElement)?.offsetWidth ?? 150;
      }
      setTimeout(() => {
        if (scrollRef.value) {
          scrollRef.value.addEventListener("scroll", (e: any) => {
            const { target } = e;
            // target.scrollTop + target.offsetHeight === target.scrollHeight  判断是否滑动到底部
            if (
              target.scrollTop + target.offsetHeight ===
              target.scrollHeight
            ) {
              // 在这里调用接口
              console.log("到底了");
              // bottomFlag.value = true;
              onLoadMore();
            }
          });
        }
      }, 1000);
      // 重新加载
      searchVal.value = "";
      initLoad();
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="lazy-select-wrapper">
    <Popover
      :open="visible"
      placement="bottomLeft"
      trigger="click"
      :title="false"
      overlay-class-name="lazy-select-list-wrapper"
      :overlayStyle="{ width: overlayWidth + 'px' }"
      @openChange="handleVisibleChange"
    >
      <template #content>
        <!-- 是否显示顶部search -->
        <Input
          v-if="search"
          v-model:value="searchVal"
          class="search-wrapper"
          :bordered="false"
          allow-clear
          :placeholder="search?.placeholder ?? '请输入关键字'"
          @change="handleSearchList"
        >
          <template #prefix>
            <search-outlined />
          </template>
        </Input>
        <div ref="scrollRef" class="inner-wrapper">
          <Spin :spinning="initLoading">
            <div v-if="list.length > 0" class="scroll-list">
              <Menu :selectedKeys="selectedKeys">
                <MenuItem
                  v-for="item in list"
                  :key="item[valueKey]"
                  class="option-item"
                  @click="handleMenuClick(item)"
                >
                  <slot
                    v-if="$slots['render-option']"
                    name="render-option"
                    :data="item"
                  />
                  <span v-else class="text">
                    {{ item[labelKey] }}
                  </span>
                  <CheckOutlined
                    v-if="
                      mode === 'multiple' &&
                      selectedKeys.includes(item[valueKey])
                    "
                  />
                </MenuItem>
              </Menu>
              <!-- 提示语 -->
              <div class="status">
                <span v-if="noMore" class="no-more"> 没有更多数据了~ </span>
                <span v-if="!noMore && loading">
                  数据加载中...
                  <Spin
                    :spinning="loading"
                    style="margin-left: 5px"
                    size="small"
                  />
                </span>
              </div>
            </div>

            <Empty v-else :description="emptyText" />
          </Spin>
        </div>
      </template>
      <!-- 采用antd样式模拟:区分单选和多选,暂不支持回填slot -->
      <div
        ref="triggerSelect"
        :class="['ant-input-simulate', disabled && 'ant-input-disabled']"
      >
        <span
          v-if="showPlaceholder"
          style="color: #ccc"
        >
          {{ placeholder }}
        </span>
        <template v-else>
          <template v-if="Array.isArray(value) && mode === 'multiple'">
            <Tag
              v-for="(item, index) in value.slice(0, maxCount)"
              :key="item.value"
              closable
              @close="handleDel(item.value)"
            >
              <span class="tag-text" :title="item.label">
                {{ maxTagTextLength && item.label.length > maxTagTextLength ? item.label.slice(0, maxTagTextLength) + '...' : item.label }}
              </span>
            </Tag>
            <Tag v-if="value.length > maxCount" color="blue">
              +{{ value.length - maxCount }}...
            </Tag>
          </template>
          <template v-else>
            <span class="tag-text" :title="(value as IValueItem).label">
              {{ maxTagTextLength && (value as IValueItem).label.length > maxTagTextLength ? (value as IValueItem).label.slice(0, maxTagTextLength) + '...' : (value as IValueItem).label }}
            </span>
          </template>
        </template>

        <SIconFont
          v-if="
            allowClear &&
            ((value as IValueItem)?.value ||
              (Array.isArray(value) && value.length > 0))
          "
          title="点击清除"
          class="clear-icon"
          color="#bbb"
          type="icon-close-circle-fill"
          @click.stop="handleClear"
        />
      </div>
    </Popover>
  </div>
</template>

<style lang="less">
.lazy-select-list-wrapper {
  display: flex;
  flex-direction: column;
  .search-wrapper {
    padding: 10px 15px;
    padding-top: 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    border-radius: 0;
    &:hover {
      border-bottom: 1px solid #ccc !important;
    }
  }
  .ant-popover-inner-content {
    padding: 10px 0;
  }
  // 暂时不处理加载满一屏得情况
  .inner-wrapper {
    max-height: 300px;
    flex: 1;
    overflow-y: auto;
  }
  .status {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .no-more {
      color: #666;
    }
  }
  .ant-menu-vertical > .ant-menu-item {
    height: 32px;
    line-height: 32px;
    margin: 0 !important;
    &.option-item .ant-menu-title-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .ant-menu-vertical > .ant-menu-item:not(.ant-menu-item-selected) {
    &:hover {
      color: inherit;
      background-color: #f5f5f5;
    }
  }
}
</style>
<style lang="less" scoped>
.tag-text {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

:deep(.ant-tag) {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 4px;
  
  .anticon-close {
    margin-left: 4px;
  }
}
</style>
