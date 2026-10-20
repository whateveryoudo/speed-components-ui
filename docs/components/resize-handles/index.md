# ResizeHandles 8向缩放手柄与 useBoxResize

专为浮动元素（图表、图片、卡片、浮动弹框等）设计的八向 DOM 拖拽缩放手柄组件与配合使用的 `useBoxResize` Hook。

:::tip 亮点特性
1. **纯 DOM 实现**：非 SVG 专有，通用度高，可在任意绝对定位/相对定位的 HTML/Vue 容器上使用；
2. **大尺寸热区（Easy Touch）**：手柄视觉为精致的小方块（默认 8px），内部自动附加 `18px × 18px` 隐形透明点击/拖拽触发器（`::before`），极大提升鼠标点击与拖拽手感；
3. **8 向全方位控制**：支持 4 个角（`tl`、`tr`、`br`、`bl`）对角等比/双向缩放，以及 4 条边（`t`、`b`、`l`、`r`）单向自由拉伸；
4. **Hook + 组件分离**：`useBoxResize` 独立处理数学坐标、边界约束（最小/最大宽高）、宽高比锁定；`SResizeHandles` 负责手柄视图呈现。
:::

<script setup>
  import Basic from './Basic.vue'
</script>

## 基础用法

拖动下方矩形的四角或四边边缘手柄进行拉伸与缩放。

<Basic />

---

## 快速上手代码

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { SResizeHandles, useBoxResize } from 'speed-components-ui'

const rect = ref({
  left: 50,
  top: 50,
  width: 300,
  height: 200,
})

const { isResizing, startResize } = useBoxResize({
  minWidth: 100,
  minHeight: 100,
  onResizing: (newRect) => {
    rect.value = { ...newRect }
  },
})
</script>

<template>
  <div
    class="my-floating-box"
    :style="{
      left: rect.left + 'px',
      top: rect.top + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
    }"
  >
    <div class="content">内容区</div>

    <!-- 8向拖拽控制手柄 -->
    <s-resize-handles
      @resize-start="(handle, event) => startResize(handle, rect, event)"
    />
  </div>
</template>

<style scoped>
.my-floating-box {
  position: absolute;
  border: 1px solid #1677ff;
  user-select: none;
}
</style>
```

---

## SResizeHandles 组件属性 (Props)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `active` | 是否激活显示手柄 | `boolean` | `true` |
| `color` | 手柄方块背景主色（支持 CSS 变量） | `string` | `var(--speed-chart-primary, #1677ff)` |
| `size` | 手柄视觉方块尺寸（单位：px） | `number` | `8` |
| `handles` | 启用的手柄方向列表 | `ResizeHandleDirection[]` | `['tl', 't', 'tr', 'r', 'br', 'b', 'bl', 'l']` |

## SResizeHandles 组件事件 (Emits)

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `resize-start` | 当鼠标按下某个手柄开始拖拽时触发 | `(handle: ResizeHandleDirection, event: MouseEvent) => void` |

---

## useBoxResize Hook 配置项 (Options)

```typescript
import { useBoxResize } from 'speed-components-ui'

const { isResizing, activeHandle, startResize } = useBoxResize(options)
```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `minWidth` | 允许缩放的最小宽度 (px) | `number` | `50` |
| `minHeight` | 允许缩放的最小高度 (px) | `number` | `50` |
| `maxWidth` | 允许缩放的最大宽度 (px) | `number` | `Infinity` |
| `maxHeight` | 允许缩放的最大高度 (px) | `number` | `Infinity` |
| `keepAspectRatio` | 是否等比缩放（锁定宽高比） | `boolean` | `false` |
| `onResizeStart` | 拖拽开始回调 | `(handle: ResizeHandleDirection, startRect: BoxRect) => void` | - |
| `onResizing` | 拖拽中每一帧位置/尺寸变化回调 | `(newRect: BoxRect, handle: ResizeHandleDirection) => void` | - |
| `onResizeEnd` | 鼠标松开结束拖拽回调 | `(finalRect: BoxRect, handle: ResizeHandleDirection) => void` | - |

### ResizeHandleDirection 方向枚举
- `tl`：左上角 (Top-Left)
- `t`：上边中点 (Top)
- `tr`：右上角 (Top-Right)
- `r`：右边中点 (Right)
- `br`：右下角 (Bottom-Right)
- `b`：下边中点 (Bottom)
- `bl`：左下角 (Bottom-Left)
- `l`：左边中点 (Left)
