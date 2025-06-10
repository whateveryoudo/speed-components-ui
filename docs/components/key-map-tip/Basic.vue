<script setup lang="ts">
const code = `<script setup lang="ts"><\/script>
<template>
    <s-keymap-tip title="放大" keyMap="Ctrl +">
      <a-button>+</a-button>
    </s-keymap-tip>
</template>`;
</script>

<template>
  <Demo :code="code">
    <s-keymap-tip title="放大" keyMap="Ctrl +">
      <a-button>+</a-button>
    </s-keymap-tip>
  </Demo>
</template>
