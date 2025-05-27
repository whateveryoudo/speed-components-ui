<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <s-drag-list
          v-model:list="list1"
          :item-key="'id'"
          @update:list="handleListChange"
        >
          <template #itemRender="{ record }">
            <div class="list-item">
              {{ record.name }}
            </div>
          </template>
        </s-drag-list>
      </div>

      <div class="demo-item">
        <h3>自定义高度</h3>
        <s-drag-list
          v-model:list="list2"
          :item-key="'id'"
          :height="50"
        >
          <template #itemRender="{ record }">
            <div class="list-item">
              {{ record.name }}
            </div>
          </template>
        </s-drag-list>
      </div>

      <div class="demo-item">
        <h3>隐藏添加按钮</h3>
        <s-drag-list
          v-model:list="list3"
          :item-key="'id'"
          :show-add-icon="false"
        >
          <template #itemRender="{ record }">
            <div class="list-item">
              {{ record.name }}
            </div>
          </template>
        </s-drag-list>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 基础用法
const list1 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 自定义高度
const list2 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 隐藏添加按钮
const list3 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 列表变化回调
const handleListChange = (list: any[], type?: string, item?: any) => {
  console.log('列表变化:', list)
  console.log('操作类型:', type)
  console.log('操作项:', item)
}

const code = `<template>
  <!-- 基础用法 -->
  <s-drag-list
    v-model:list="list1"
    :item-key="'id'"
    @update:list="handleListChange"
  >
    <template #itemRender="{ record }">
      <div class="list-item">
        {{ record.name }}
      </div>
    </template>
  </s-drag-list>

  <!-- 自定义高度 -->
  <s-drag-list
    v-model:list="list2"
    :item-key="'id'"
    :height="50"
  >
    <template #itemRender="{ record }">
      <div class="list-item">
        {{ record.name }}
      </div>
    </template>
  </s-drag-list>

  <!-- 隐藏添加按钮 -->
  <s-drag-list
    v-model:list="list3"
    :item-key="'id'"
    :show-add-icon="false"
  >
    <template #itemRender="{ record }">
      <div class="list-item">
        {{ record.name }}
      </div>
    </template>
  </s-drag-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 基础用法
const list1 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 自定义高度
const list2 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 隐藏添加按钮
const list3 = ref([
  { id: 1, name: '选项1' },
  { id: 2, name: '选项2' },
  { id: 3, name: '选项3' }
])

// 列表变化回调
const handleListChange = (list: any[], type?: string, item?: any) => {
  console.log('列表变化:', list)
  console.log('操作类型:', type)
  console.log('操作项:', item)
}
<\/script>

<style scoped lang="less">
.list-item {
  width: 100%;
  height: 100%;
  padding: 0 8px;
  line-height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
</style>`
</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
  padding: 24px;
  background: #fff;
  border-radius: 4px;

  .demo-item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style> 