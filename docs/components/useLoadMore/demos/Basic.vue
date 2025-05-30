<!--
 * @Author: ykx
 * @Date: 2024-03-21 10:00:00
 * @LastEditTime: 2024-03-21 10:00:00
 * @LastEditors: ykx
 * @Description: useLoadMore 基础示例
-->
<template>
  <div>
    <div v-for="item in list" :key="item.id" class="item">
      {{ item.name }}
    </div>
    <a-button 
      :loading="loading" 
      :disabled="noMore"
      @click="onLoadMore"
      class="mt-4"
    >
      {{ noMore ? '没有更多了' : '加载更多' }}
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { useLoadMore } from '@/hooks/useLoad'

// 模拟请求数据
const fetchData = async (params: any) => {
  // 这里模拟接口请求
  return {
    success: true,
    data: {
      records: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
      ],
      total: 10
    }
  }
}

const { list, loading, noMore, onLoadMore } = useLoadMore(fetchData)
</script>

<style scoped>
.item {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
</style> 