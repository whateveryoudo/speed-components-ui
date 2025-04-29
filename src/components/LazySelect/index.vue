<!-- 带有分页请求的多选，这里采用popover, 值为默认 { value,label}，用于跨页回显，如果后端只能存入一个值，不建议使用，建议使用select -->
<script setup lang="ts">
  import { CheckOutlined } from '@ant-design/icons-vue';
  import { computed, nextTick, ref, watch } from 'vue';

  import { useLoadMore } from '@/hooks';
  import { debounce } from 'lodash-es';
  // eslint-disable-next-line no-undef
  defineOptions({
    name: 'SLazySelect',
  });
  interface IValueItem {
    label: string;
    value: string;
    [prop: string]: any;
  }
  const props = withDefaults(
    defineProps<{
      disabled?: boolean;
      allowDisplayEmpty?: boolean;
      placeholder?: string;
      value: IValueItem | IValueItem[];
      mode?: 'single' | 'multiple';
      fieldNames?: { label: string; value: string };
      maxCount?: number;
      search?: any;
      allowClear?: boolean;
      fetchFunc: Function;
      fetchParams?: any;
      afterFetch?: (data: any, res?: any) => any;
    }>(),
    {
      allowDisplayEmpty: true, // 是否显示清空
      value: () => ({ label: '', value: '' }),
      mode: 'single',
      placeholder: '请选择',
      disabled: false,
      fieldNames: () => ({ label: 'name', value: 'id' }),
      maxCount: 3,
      fetchParams: () => ({}),
      allowClear: true,
    },
  );
  const triggerSelect = ref(null);
  const emits = defineEmits(['update:value']);
  const overlayWidth = ref(0);
  const scrollRef = ref();
  const visible = ref(false);
  // 唯一标识
  const valueKey = computed(() => {
    return props.fieldNames['value'];
  });
  const labelKey = computed(() => {
    return props.fieldNames['label'];
  });
  // 选中keys
  const selectedKeys = computed(() => {
    if (props.mode === 'single') {
      return props.value ? [(props.value as IValueItem).value] : [];
    } else {
      const tempVal = props.value as IValueItem[];
      return tempVal && tempVal.length > 0 ? tempVal.map((item: IValueItem) => item.value) : [];
    }
  });
  const searchVal = ref('');
  // 区分单选多选
  const handleMenuClick = (item: any) => {
    const key = item[valueKey.value];
    const tempItem = {};
    // 生成单行结果值
    Object.keys(props.fieldNames).forEach((key) => {
      tempItem[key] = item[props.fieldNames[key]] || '';
    });
    if (props.mode === 'single') {
      // 单选
      emits('update:value', tempItem);
      // 单选点击完成就关闭
      visible.value = false;
    } else {
      // 多选
      if (selectedKeys.value.includes(key)) {
        emits(
          'update:value',
          (props.value as IValueItem[]).filter((item: IValueItem) => {
            return item.value !== key;
          }),
        );
      } else {
        emits('update:value', [...(props.value as IValueItem[]), tempItem]);
      }
    }
  };
  // 清除操作
  const handleClear = () => {
    return emits('update:value', props.mode === 'single' ? undefined : []);
  };
  const handleDel = (id: string) => {};
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
  const { noMore, initLoad, initLoading, loading, onLoadMore, list } = useLoadMore(
    props.fetchFunc,
    fetchOptions,
  );
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
          overlayWidth.value = (triggerSelect.value as HTMLElement)?.offsetWidth ?? 150;
        }
        setTimeout(() => {
          if (scrollRef.value) {
            scrollRef.value.addEventListener('scroll', (e: any) => {
              const { target } = e;
              // target.scrollTop + target.offsetHeight === target.scrollHeight  判断是否滑动到底部
              if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                // 在这里调用接口
                console.log('到底了');
                // bottomFlag.value = true;
                onLoadMore();
              }
            });
          }
        }, 1000);
        // 重新加载
        searchVal.value = '';
        initLoad();
      }
    },
    {
      immediate: true,
    },
  );
</script>

<template>
  <div class="lazy-select-wrapper">
    <APopover
      :open="visible"
      placement="bottomLeft"
      trigger="click"
      :title="false"
      overlay-class-name="lazy-select-list-wrapper"
      :overlayStyle="{ width: overlayWidth + 'px' }"
      @visibleChange="handleVisibleChange"
    >
      <template #content>
        <!-- 是否显示顶部search -->
        <a-input
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
        </a-input>
        <div
          ref="scrollRef"
          class="inner-wrapper"
        >
          <a-spin :spinning="initLoading">
            <div
              v-if="list.length > 0"
              class="scroll-list"
            >
              <AMenu :selectedKeys="selectedKeys">
                <AMenuItem
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
                  <span
                    v-else
                    class="text"
                  >
                    {{ item[labelKey] }}
                  </span>
                  <CheckOutlined
                    v-if="mode === 'multiple' && selectedKeys.includes(item[valueKey])"
                  />
                </AMenuItem>
              </AMenu>
              <!-- 提示语 -->
              <p class="status">
                <span
                  v-if="noMore"
                  class="no-more"
                >
                  没有更多数据了~
                </span>
                <span v-if="!noMore && loading">
                  数据加载中...
                  <a-spin
                    :spinning="loading"
                    style="margin-left: 5px"
                    size="small"
                  />
                </span>
              </p>
            </div>

            <SEmpty v-else />
          </a-spin>
        </div>
      </template>

      <!-- 采用antd样式模拟:区分单选和多选,暂不支持回填slot -->
      <div
        ref="triggerSelect"
        :class="['ant-input-simulate', disabled && 'ant-input-disabled']"
      >
        <!-- 支持外界传入是否显示空操作，某些场景下删除后仅会显示默认值 -->
        <span
          v-if="
            allowDisplayEmpty &&
            (!(value as IValueItem)?.value || (Array.isArray(value) && value.length === 0))
          "
          style="color: #ccc"
        >
          {{ placeholder }}
        </span>
        <template v-else>
          <template v-if="Array.isArray(value) && mode === 'multiple'">
            <ATag
              v-for="item in value"
              :key="item.value"
              closable
              @close="handleDel(item.value)"
            >
              {{ item.label }}
            </ATag>
          </template>
          <template v-else>
            {{ (value as IValueItem).label }}
          </template>
        </template>

        <SIconFont
          v-if="(value as IValueItem)?.value || (Array.isArray(value) && value.length > 0)"
          title="点击清除"
          class="clear-icon"
          color="#bbb"
          type="icon-close-circle-fill"
          @click.stop="handleClear"
        />
      </div>
    </APopover>
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
  .lazy-select-wrapper {
    .ant-input {
      min-height: 32px;
      padding-right: 30px;
      cursor: pointer;
    }
    .clear-icon {
      position: absolute;
      right: 10px;
      top: 8px;
      cursor: pointer;
    }
  }
</style>
