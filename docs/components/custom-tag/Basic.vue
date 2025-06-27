<template>
  <Demo :code="code">
    <a-flex align="center" :gap="16">
      <STag text="默认标签" />
      <STag text="自定义颜色" color="#fff" bgColor="#1890ff" />
      <STag bgColor="#1890ff">
        <template #default>
          <SIconFont type="user" color="#fff"></SIconFont>
          <span style="color: #fff">自定义插槽内容</span>
        </template>
      </STag>
    </a-flex>
  </Demo>
</template>
<script setup lang="ts">
const code = `<template>
    <a-flex align="center" :gap="16">
      <STag text="默认标签" />
      <STag text="自定义颜色" color="#fff" bgColor="#1890ff" />
      <STag bgColor="#1890ff">
        <template #default>
          <SIconFont type="user" color="#fff"></s-icon-font>
          <span style="color: #fff">自定义插槽内容</span>
        </template>
      </STag>
    </a-flex>
</template>
<script setup lang="ts">
<\/script>

<style scoped>

</style>
`;
</script>

<style scoped></style>
