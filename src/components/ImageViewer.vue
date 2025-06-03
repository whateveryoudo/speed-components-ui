<template>
    <div class="image-viewer-wrapper" ref="viewerRef">
      <div class="image-viewer-content">
        <div class="image-viewer-item" v-for="url in images" :key="url">
          <img :src="url" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useImageViewer } from '../../hooks/useImageViewer'
  
  const props = defineProps({
    images: {
      type: Array,
      default: () => []
    }
  })
  
  const { createViewer } = useImageViewer()
  const viewerRef = ref(null)
  
  onMounted(() => {
    if (viewerRef.value) {
      createViewer(viewerRef.value)
    }
  })
  </script>
  <style lang="less" scoped>
  .image-viewer-wrapper {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    
    .image-viewer-content {
      display: flex;
      gap: 10px;
      flex-wrap: nowrap;
      min-width: min-content;
    }

    .image-viewer-item {
      flex-shrink: 0;
      cursor: pointer;
      width: 50px;
      height: 50px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  </style>