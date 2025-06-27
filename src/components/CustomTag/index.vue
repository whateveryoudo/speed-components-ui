<script setup lang="ts">
defineOptions({
  name: "STag",
});

withDefaults(
  defineProps<{
    text?: string;
    color?: string;
    bgColor?: string;
  }>(),
  {
    text: "",
    color: "#333",
    bgColor: "#fff",
  }
);
</script>

<template>
  <span
    class="custom-tag"
    :style="{
      color: color,
      backgroundColor: bgColor,
    }"
  >
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<style scoped>
.custom-tag {
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
