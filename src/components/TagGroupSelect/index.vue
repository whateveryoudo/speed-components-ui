<!-- 这里单选 -->
<template>
  <div class="tag-group-wrapper">
    <Space :size="gutter" wrap v-if="displayType === 'default'">
      <div
        class="tag-item"
        :class="['tag-item', { 'tag-item-checked': getItemCheckedAll() }]"
        @click="handleSelectAll(!getItemCheckedAll())"
        v-if="totalConfig?.show"
      >
        全部
      </div>
      <div
        v-for="tag in tags"
        :key="tag.value"
        :class="['tag-item', { 'tag-item-checked': getItemChecked(tag.value) }]"
        @click="handleChange(tag.value, !getItemChecked(tag.value))"
      >
        <template v-if="tag.icon">
          <s-icon-font
            v-if="typeof tag.icon === 'string'"
            :type="tag.icon"
            :color="tag.iconColor || '#5e76b5'"
          />
          <s-icon-font
            v-else
            :color="tag.iconColor || '#5e76b5'"
            :icon-render="tag.icon"
          />
        </template>
        {{ tag.label }}
      </div>
    </Space>

    <!-- antd tag显示 -->
    <Space v-else :size="gutter" wrap>
      <CheckableTag
        :checked="getItemCheckedAll()"
        @update:checked="handleSelectAll"
        v-if="totalConfig?.show"
      >
        全部
      </CheckableTag>
      <CheckableTag
        v-for="tag in tags"
        :key="tag.value"
        :checked="getItemChecked(tag.value)"
        @update:checked="(checked: boolean) => handleChange(tag.value, checked)"
      >
        {{ tag.label }}
      </CheckableTag>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { type VNode } from "vue";
import { Form, Space, Tag } from "ant-design-vue";
const { CheckableTag } = Tag;

export type TagItem = {
  icon?: string | VNode;
  iconColor?: string;
  value: string;
  [prop: string]: any;
};

// eslint-disable-next-line no-undef
defineOptions({
  name: "STagGroup",
});
const formItemContext = Form.useInjectFormItemContext();
const props = withDefaults(
  defineProps<{
    displayType?: "default" | "antd-tag";
    gutter?: [number, number];
    tags: TagItem[];
    value: string | string[];
    totalConfig?: {
      show: boolean;
      value: any;
    };
    mode?: "single" | "multiple";
  }>(),
  {
    displayType: "default",
    gutter: () => [8, 8] as [number, number],
    totalConfig: () => ({
      show: false,
      value: "",
    }),
    tags: () => [],
    value: () => [],
    mode: "single",
  }
);
const emits = defineEmits(["update:value"]);
const getItemCheckedAll = () => {
  return props.mode === "single"
    ? props.value === props?.totalConfig?.value
    : props.value.length === props.tags.length;
};
const getItemChecked = (val: string) => {
  return props.mode === "single"
    ? val === props.value
    : props.value.includes(val);
};
const triggerChange = (val: string | string[]) => {
  emits("update:value", val);
  formItemContext?.onFieldChange();
};
const handleSelectAll = (checked: boolean) => {
  if (checked) {
    if (props.mode === "single") {
      triggerChange(props.totalConfig?.value ?? "");
    } else {
      triggerChange(props.tags.map((tag) => tag.value));
    }
  } else {
    if (props.mode === "single") {
      emits("update:value", "");
    } else {
      emits("update:value", []);
    }
  }
};
const handleChange = (val: string, checked: boolean) => {
  if (checked) {
    triggerChange(props.mode === "single" ? val : [...props.value, val]);
  } else {
    triggerChange(
      props.mode === "single"
        ? ""
        : [...props.value].filter((v: string) => v !== val)
    );
  }
};
</script>

<style scoped lang="less">
.tag-group-wrapper {
  .tag-item {
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.2s;
    &.tag-item-checked {
      border-color: var(--ant-primary-color);
      &::after {
        content: "";
        position: absolute;
        right: -7px;
        transform: rotateZ(45deg);

        top: -8px;
        background-color: #5680ed;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
