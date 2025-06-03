<!--
 * @Author: ykx
 * @Date: 2023-04-14 09:30:59
 * @LastEditTime: 2023-06-15 10:07:59
 * @LastEditors: your name
 * @Description: 快捷文字修改操作,支持slot触发, 默认是blur触发，也可设置needConfirm 二次确认
 * @FilePath: \easycube-apps\packages\components\src\globalComponents\ToggleInput.vue
-->
<template>
  <div class="toggle-input-wrapper">
    <span v-if="state.flag">
      <a-input
        v-model:value="state.text"
        v-focus
        :style="{ width: inputWidth }"
        allow-clear
        @blur="handleBlur"
        @click.stop
        @pressEnter="handleBlur"
      />
      <!-- 是否需要二次确认 -->
      <span
        v-if="needConfirm"
        class="confirm-wrapper"
      >
        <s-icon-font
          type="icon-check"
          title="确认"
          @click.stop="setTitle"
        />
        <s-icon-font
          title="取消"
          type="icon-close"
          @click.stop="cancel"
        />
      </span>
    </span>
    <slot
      v-else
      name="trigger"
      :info="state"
    >
      <span title="点击修改">{{ text }}
        <s-icon-font
          type="icon-caozuo-bianji"
          style="margin-left: 5px"
          @click.stop="state.flag = true"
        />
      </span>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { message } from 'ant-design-vue';
/*eslint no-undef: "off"*/
defineOptions({
  name: 'SToggleInput',
});
const props = withDefaults(
  defineProps<{
    inputWidth?: string;
    needConfirm?: boolean;
    text?: string;
    updateText?: (state?: any) => void;
  }>(),
  {
    inputWidth: '200px',
    needConfirm: false,
    text: '未命名',
    updateText: () => {},
  }
);
const state = reactive({
  flag: false,
  text: '',
});
const handleBlur = () => {
  if (props.needConfirm) {
    return;
  }
  setTitle();
};
const setTitle = () => {
  // 值还原
  if (!state.text) {
    state.text = props.text;
    state.flag = false;
    return;
  }
  // 值未更改
  if (state.text === props.text) {
    state.flag = false;
    return;
  }
  if (props.updateText) {
    props.updateText(state);
  }
};
// 取消
const cancel = () => {
  state.flag = false;
  state.text = props.text; // 还原数据
};
watch(
  () => props.text,
  (val: string) => {
    state.text = val;
  },
  {
    immediate: true,
  }
);
</script>
<style lang="less" scoped>
.toggle-input-wrapper {
  display: inline-flex;
  align-items: center;
  .confirm-wrapper {
    margin-left: 5px;
    span {
      margin: 0 5px;
    }
  }
}
</style>
