<!-- 这里单选 -->
<template>
  <div class="tag-group-wrapper">
    <a-space :size="10">
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
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { type VNode } from 'vue';
export type TagItem = {
  label: string;
  icon?: string | VNode;
  iconColor?: string;
  value: string;
  [prop: string]: any;
};

// eslint-disable-next-line no-undef
defineOptions({
  name: 'STagGroup',
});
const props = withDefaults(
  defineProps<{
    label?: string;
    tags: TagItem[];
    value: string | string[];
    totalConfig?: {
      show: boolean;
      value: any;
    };
    mode?: 'single' | 'multiple';
  }>(),
  {
    totalConfig: () => ({
      show: true,
      value: '',
    }),
    tags: () => [],
    value: () => [],
    needTotal: false,
    mode: 'single',
  }
);
const emits = defineEmits(['update:value']);

const getItemChecked = (val: string) => {
  return props.mode === 'single'
    ? val === props.value
    : props.value.includes(val);
};
const handleSelectAll = (checked: boolean) => {
  if (checked) {
    if (props.mode === 'single') {
      emits('update:value', props.totalConfig?.value ?? '');
    }
  } else {
    emits('update:value', '');
  }
};
const handleChange = (val: string, checked: boolean) => {
  if (checked) {
    emits(
      'update:value',
      props.mode === 'single' ? val : [...props.value, val]
    );
  } else {
    emits(
      'update:value',
      props.mode === 'single'
        ? ''
        : [...props.value].filter((v: string) => v !== val)
    );
  }
};
</script>

<style scoped lang="less">
.tag-group-wrapper {
  .tag-item {
    padding: 5px 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.2s;
    &.tag-item-checked {
      border-color: @primary-color;
      &::after {
        content: '';
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
