# Vue 3 事件机制与浮层组件（Tooltip / Dropdown）嵌套避坑指南

> 本文档已同步收录至 `speed-sheet/dev-notes/vue3-events-and-overlay-nesting-guide.md`。
> 专门用于团队内部开发避坑、巩固 Vue 3 事件体系与浮层嵌套规范。

---

## 一、为什么手写 `onClick` 会把子节点原事件“盖掉”？

### 1. 翻车根因：普通对象赋值覆盖

```ts
// ❌ 翻车写法：直接覆盖 props
cloneVNode(vnode, {
  onClick: handleClick
})
```
在 JS 中，对象的键名是唯一的，后传入的 `{ onClick }` 会直接将子节点原本的 `props.onClick` 强行替换，导致按钮原本的业务逻辑完全失效。

### 2. 正确解法：Vue 官方 `mergeProps`

```ts
import { cloneVNode, mergeProps } from 'vue'

// ✅ 正确写法：安全链式合并
const mergedProps = mergeProps(vnode.props || {}, {
  onClick: handleClick,
  onMouseleave: handleMouseLeave
})

return cloneVNode(vnode, mergedProps)
```
- `mergeProps` 内部会自动把同名事件转换成函数数组 `onClick: [originalClick, myClick]`；
- 点击时**先执行原业务事件**（包括完整的 `$event` 事件对象），再执行后续辅助逻辑，互不影响。

---

## 二、浏览器原生 DOM 事件 vs Vue 组件事件

| 类别 | 举例 | 是否冒泡 | 说明 |
| :--- | :--- | :--- | :--- |
| **原生 DOM 事件** | `<button @click>`、`<svg @click>` | **是（从内向外冒泡）** | 点击最深层的图标，事件会一层层往外冒到父级 DOM。 |
| **Vue 自定义事件** | `<my-modal @close="onClose">` | **否（纯函数回调）** | 仅供父子组件直接通讯，不会沿着 DOM 树向外冒泡。 |

---

## 三、Dropdown 与 Tooltip 到底应该“谁包谁”？

### 铁律结论：永远遵循 **“Dropdown 在外，Tooltip 在内（紧贴按钮）”**

```html
<!-- ✅ 100 分标准规范 -->
<a-dropdown>
  <s-keymap-tip title="数字格式 (Ctrl+Shift+1)">
    <a-button>常规 <CaretDownOutlined /></a-button>
  </s-keymap-tip>

  <template #overlay>
    <a-menu>...</a-menu>
  </template>
</a-dropdown>
```

---

## 四、为什么反过来写（`Tip 包 Dropdown`）会有大坑？

1. **传送门（`<Teleport>`）与事件穿透丢失**：
   `<a-dropdown>` 内部使用了 `<Teleport to="body">` 把菜单扔到了 `document.body`，它本身是一个带有多个根节点的复合结构（Fragment）。外层 Tooltip 试图通过 `cloneVNode` 注入 `onClick` 时，Vue 无法判断把事件绑给谁，会直接在控制台警告并**丢弃属性（透传失败）**，导致点击无响应。
2. **菜单内交互触发气泡死灰复燃**：
   如果 Dropdown 设置了容器挂载（`getPopupContainer`），弹层就在 Tip 内部。用户在下拉菜单里移鼠标选东西，外层 Tip 误以为用户在 hover 按钮，导致黑色的快捷键气泡突然弹出来，死死挡住下拉菜单第一项！
3. **DOM 尺寸测量失准**：
   Tooltip 会通过 `getBoundingClientRect()` 测量子节点坐标。Tip 包含 Dropdown 时，展开后高度可能从 32px 暴增到 300px，导致气泡飞到屏幕下方偏离原位。

---

## 五、经典技巧：按钮被禁用（`disabled`）时怎么让 Tooltip 出来？

原生浏览器规定：`<button disabled>` 绝不触发任何鼠标事件。如果被禁用了仍需展示提示原因：

```html
<!-- 💡 巧妙解法：在 button 外层包一个 span，span 充当事件接收器 -->
<a-dropdown :disabled="true">
  <s-keymap-tip title="当前单元格已锁定，无编辑权限">
    <span class="inline-block cursor-not-allowed">
      <a-button :disabled="true" style="pointer-events: none;">常规</a-button>
    </span>
  </s-keymap-tip>
</a-dropdown>
```

---

## 六、速查口诀

1. **合并事件别手写，官方 `mergeProps` 准没错。**
2. **大容器（Dropdown）在外部，小贴纸（Tooltip）在里头。**
3. **Tip 贴身穿在 Button 上，下拉菜单跑不了。**
4. **组件套多报错漏，传送门前莫乱透。**
