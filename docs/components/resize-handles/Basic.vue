<script setup lang="ts">
import { ref } from 'vue'
import SResizeHandles from '../../../src/components/ResizeHandles/index.vue'
import { useBoxResize, type BoxRect, type ResizeHandleDirection } from '../../../src/hooks/useBoxResize'

const rect = ref<BoxRect>({
  left: 20,
  top: 20,
  width: 240,
  height: 140,
})

const { isResizing, startResize } = useBoxResize({
  minWidth: 120,
  minHeight: 80,
  onResizing: (newRect) => {
    rect.value = { ...newRect }
  },
})

function onResizeStart(handle: ResizeHandleDirection, e: MouseEvent) {
  startResize(handle, rect.value, e)
}

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { SResizeHandles, useBoxResize } from 'speed-components-ui'

const rect = ref({ left: 20, top: 20, width: 240, height: 140 })

const { isResizing, startResize } = useBoxResize({
  minWidth: 120,
  minHeight: 80,
  onResizing: (newRect) => {
    rect.value = { ...newRect }
  },
})
<\/script>

<template>
  <div
    class="relative border border-solid border-blue-500 bg-white shadow-sm user-select-none"
    :style="{
      left: rect.left + 'px',
      top: rect.top + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
    }"
  >
    <div class="p-3 text-xs text-gray-500">
      拖拽四周及四角控制点缩放
    </div>
    <s-resize-handles @resize-start="(h, e) => startResize(h, rect, e)" />
  </div>
</template>`
</script>

<template>
  <Demo :code="code">
    <div class="relative h-60 w-full bg-gray-50 border border-dashed border-gray-200 overflow-hidden select-none">
      <div
        class="absolute border border-solid border-blue-500 bg-white shadow-sm flex flex-col justify-between"
        :style="{
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        }"
      >
        <div class="bg-gray-100 px-2 py-1 text-xs text-gray-600 border-b border-gray-200 flex items-center justify-between">
          <span>拖拽缩放演示</span>
          <span class="text-10px text-gray-400">{{ Math.round(rect.width) }} x {{ Math.round(rect.height) }}</span>
        </div>
        <div class="p-2 text-xs text-gray-500">
          支持 4 个角与 4 条边，内置 18px 热区极易抓取
        </div>
        <s-resize-handles @resize-start="onResizeStart" />
      </div>
    </div>
  </Demo>
</template>
