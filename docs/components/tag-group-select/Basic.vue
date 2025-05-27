<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法（单选）</h3>
        <s-tag-group
          v-model:value="value1"
          :tags="tags"
        />
      </div>

      <div class="demo-item">
        <h3>多选模式</h3>
        <s-tag-group
          v-model:value="value2"
          :tags="tags"
          mode="multiple"
        />
      </div>

      <div class="demo-item">
        <h3>带图标</h3>
        <s-tag-group
          v-model:value="value3"
          :tags="tagsWithIcon"
        />
      </div>

      <div class="demo-item">
        <h3>自定义图标颜色</h3>
        <s-tag-group
          v-model:value="value4"
          :tags="tagsWithIconColor"
        />
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TagItem } from '@/components/TagGroup/type'

// 基础标签数据
const tags: TagItem[] = [
  { label: '标签1', value: '1' },
  { label: '标签2', value: '2' },
  { label: '标签3', value: '3' },
  { label: '标签4', value: '4' }
]

// 带图标的标签数据
const tagsWithIcon: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star' },
  { label: '标签2', value: '2', icon: 'icon-star' },
  { label: '标签3', value: '3', icon: 'icon-star' },
  { label: '标签4', value: '4', icon: 'icon-star' }
]

// 自定义图标颜色的标签数据
const tagsWithIconColor: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star', iconColor: '#f5222d' },
  { label: '标签2', value: '2', icon: 'icon-star', iconColor: '#fa8c16' },
  { label: '标签3', value: '3', icon: 'icon-star', iconColor: '#52c41a' },
  { label: '标签4', value: '4', icon: 'icon-star', iconColor: '#1890ff' }
]

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref<string[]>([])

// 带图标的值
const value3 = ref('')

// 自定义图标颜色的值
const value4 = ref('')

const code = `<template>
  <!-- 基础用法（单选） -->
  <s-tag-group
    v-model:value="value1"
    :tags="tags"
  />

  <!-- 多选模式 -->
  <s-tag-group
    v-model:value="value2"
    :tags="tags"
    mode="multiple"
  />

  <!-- 带图标 -->
  <s-tag-group
    v-model:value="value3"
    :tags="tagsWithIcon"
  />

  <!-- 自定义图标颜色 -->
  <s-tag-group
    v-model:value="value4"
    :tags="tagsWithIconColor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TagItem } from '@/components/TagGroup/type'

// 基础标签数据
const tags: TagItem[] = [
  { label: '标签1', value: '1' },
  { label: '标签2', value: '2' },
  { label: '标签3', value: '3' },
  { label: '标签4', value: '4' }
]

// 带图标的标签数据
const tagsWithIcon: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star' },
  { label: '标签2', value: '2', icon: 'icon-star' },
  { label: '标签3', value: '3', icon: 'icon-star' },
  { label: '标签4', value: '4', icon: 'icon-star' }
]

// 自定义图标颜色的标签数据
const tagsWithIconColor: TagItem[] = [
  { label: '标签1', value: '1', icon: 'icon-star', iconColor: '#f5222d' },
  { label: '标签2', value: '2', icon: 'icon-star', iconColor: '#fa8c16' },
  { label: '标签3', value: '3', icon: 'icon-star', iconColor: '#52c41a' },
  { label: '标签4', value: '4', icon: 'icon-star', iconColor: '#1890ff' }
]

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref<string[]>([])

// 带图标的值
const value3 = ref('')

// 自定义图标颜色的值
const value4 = ref('')
<\/script>`
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