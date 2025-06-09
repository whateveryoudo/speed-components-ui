<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>最大条数40</h3>
        <div class="list-container">
          <div v-for="(item, index) in list" :key="index" class="list-item">
            {{ item.name }}
          </div>
        </div>
        <div class="load-more-container">
          <a-button 
            type="primary" 
            :loading="loading" 
            @click="onLoadMore"
            v-if="!noMore"
          >
            加载更多
          </a-button>
          <span v-else>没有更多数据了</span>
        </div>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoadMore } from "@/hooks/useLoad";

// 模拟接口请求
const mockFetch = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { page, size } = params;
      const total = 40;
      const data = Array.from({ length: size }, (_, index) => ({
        id: (page - 1) * size + index + 1,
        name: `列表项 ${(page - 1) * size + index + 1}`
      }));
      
      resolve({
        success: true,
        data,
        totalCount: total,
        totalPages: Math.ceil(total / size)
      });
    }, 500);
  });
};

const { list, loading, noMore, initLoad, onLoadMore } = useLoadMore(mockFetch);

onMounted(() => {
  initLoad();
});

const code = ref(`
<template>
  <div class="demo-wrapper">
    <div class="demo-item">
      <h3>基础用法</h3>
      <div class="mb-2">点击加载更多按钮获取更多数据</div>
      <div class="list-container">
        <div v-for="(item, index) in list" :key="index" class="list-item">
          {{ item.name }}
        </div>
      </div>
      <div class="load-more-container">
        <a-button 
          type="primary" 
          :loading="loading" 
          @click="onLoadMore"
          v-if="!noMore"
        >
          加载更多
        </a-button>
        <span v-else>没有更多数据了</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoadMore } from "@/hooks/useLoad";

// 模拟接口请求
const mockFetch = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { page, size } = params;
      const total = 50;
      const data = Array.from({ length: size }, (_, index) => ({
        id: (page - 1) * size + index + 1,
        name: \`列表项 \${(page - 1) * size + index + 1}\`
      }));
      
      resolve({
        success: true,
        data,
        totalCount: total,
        totalPages: Math.ceil(total / size)
      });
    }, 500);
  });
};

const { list, loading, noMore, initLoad, onLoadMore } = useLoadMore(mockFetch);

onMounted(() => {
  initLoad();
});
<\/script>

<style scoped lang="less">
.demo-wrapper {
  .demo-item {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 16px;
      margin-top: 0;
      font-weight: 500;
    }
  }
  .list-container {
    margin-bottom: 16px;
    .list-item {
      padding: 8px 16px;
      border-bottom: 1px solid #f0f0f0;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .load-more-container {
    text-align: center;
  }
}
</style>
`);
</script>

<style scoped lang="less">
.demo-wrapper {
  .demo-item {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 16px;
      margin-top: 0;
      font-weight: 500;
    }
  }
  .list-container {
    margin-bottom: 16px;
    max-height: 300px;
    overflow-y: auto;
    .list-item {
      padding: 8px 16px;
      border-bottom: 1px solid #f0f0f0;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .load-more-container {
    text-align: center;
  }
}
</style> 