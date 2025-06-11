<template>
  <Demo :code="code">
    <a-button @click="changeTheme" type="primary" class="mb-2"
      >将文档全体组件主题色变红</a-button
    >
    <div class="text-[var(--ant-color-primary)]">
      我是使用--ant-color-primary的文字
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const themeConfig = ref({
  token: {
    colorPrimary: "red",
  },
});
const injectChangeTheme = inject("changeTheme") as (config: any) => void;
const changeTheme = () => {
  if (injectChangeTheme) {
    injectChangeTheme(themeConfig.value);
  }
};

const code = ref(`
<template>
    <Demo :code="code">
  <a-button @click="changeTheme" type="primary" class="mb-2">将文档组件主题色变红</a-button>
  <div class="text-[var(--ant-color-primary)]">
    我是使用--ant-color-primary的文字
  </div>
  </Demo>
</template>
<script setup lang="ts">
import { ref, inject } from "vue";

const themeConfig = ref({
  token: {
    colorPrimary: "red",
  },
});
const injectChangeTheme = inject("changeTheme") as (config: any) => void;
const changeTheme = () => {
  if (injectChangeTheme) {
    injectChangeTheme(themeConfig.value);
  }
};
<\/script>
`);
</script>

<style scoped lang="less"></style>
