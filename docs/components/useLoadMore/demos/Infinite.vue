<!--
 * @Author: ykx
 * @Date: 2024-03-21 10:00:00
 * @LastEditTime: 2024-03-21 10:00:00
 * @LastEditors: ykx
 * @Description: useLoadMore 无限滚动示例
-->
<template>
  <div class="infinite-list" @scroll="handleScroll">
    <div v-for="item in list" :key="item.id" class="item">
      {{ item.name }}
    </div>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-if="noMore" class="no-more">没有更多了</div>
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

const handleScroll = (e: Event) => {
  const target = e.target as HTMLElement
  const { scrollHeight, scrollTop, clientHeight } = target
  if (scrollHeight - scrollTop - clientHeight < 50 && !loading.value && !noMore.value) {
    onLoadMore()
  }
}
</script>

<style scoped>
.infinite-list {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
}

.item {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.loading,
.no-more {
  text-align: center;
  padding: 16px;
  color: #999;
}
</style> 