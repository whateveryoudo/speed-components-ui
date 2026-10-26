<!--
 * @Author: ykx
 * @Date: 2022-12-16 17:30:55
 * @LastEditTime: 2026-10-26 20:45:00
 * @LastEditors: ykx
 * @Description: 带有快捷键tip显示(支持title null传入不显示tip，点击子节点时自动收起气泡，防止遮挡下拉)
 * @FilePath: \speed-components\src\components\KeyMapTip\index.vue
-->
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  cloneVNode,
  mergeProps,
  Comment,
  Fragment,
  h,
  type VNode,
  type PropType
} from 'vue'
import { Tooltip } from 'ant-design-vue'
import type { TooltipPlacement } from 'ant-design-vue/es/tooltip'

export default defineComponent({
  name: 'SKeymapTip',
  inheritAttrs: false,
  props: {
    title: {
      type: [String, null] as PropType<string | null>,
      default: ''
    },
    keyMap: {
      type: [String, null] as PropType<string | null>,
      default: ''
    },
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'bottom'
    },
    open: {
      type: Boolean as PropType<boolean | undefined>,
      default: undefined
    }
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, attrs, emit }) {
    // undefined 表示交由 Tooltip 内部 hover 控制；false 强制关闭
    const innerVisible = ref<boolean | undefined>(undefined)

    // 优先尊重外部受控传入的 open
    const resolvedOpen = computed(() => {
      if (props.open !== undefined) return props.open
      if (attrs.open !== undefined) return attrs.open as boolean
      return innerVisible.value
    })

    function handleOpenChange(visible: boolean) {
      innerVisible.value = visible
      emit('update:open', visible)
      emit('openChange', visible)
    }

    function handleClick() {
      // 点击后强制收起提示，防止遮挡展开的下拉菜单或弹层
      innerVisible.value = false
      emit('update:open', false)
      emit('openChange', false)
    }

    function handleMouseLeave() {
      // 鼠标离开后释放强制关闭状态，下次移入恢复正常的 hover 提示
      innerVisible.value = undefined
    }

    // 递归为所有有效的真实节点使用 mergeProps 链式合并事件，绝不覆盖子节点原本的 onClick
    function injectEvents(vnodes: VNode[]): VNode[] {
      return vnodes.map((vnode) => {
        if (!vnode || vnode.type === Comment) return vnode
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
          const cloned = cloneVNode(vnode)
          cloned.children = injectEvents(vnode.children as VNode[])
          return cloned
        }
        return cloneVNode(
          vnode,
          mergeProps(vnode.props || {}, {
            onClick: handleClick,
            onMouseleave: handleMouseLeave
          })
        )
      })
    }

    return () => {
      if (props.title === null) {
        return slots.default?.()
      }

      const defaultChildren = slots.default?.()
      const triggerVNodes = defaultChildren ? injectEvents(defaultChildren) : null

      return h(
        Tooltip,
        {
          ...attrs,
          open: resolvedOpen.value,
          placement: props.placement,
          'onUpdate:open': handleOpenChange
        },
        {
          title: () =>
            h('div', { class: 'keymap-tip-wrapper' }, [
              props.title ? h('span', props.title) : null,
              props.keyMap ? h('span', { class: 'key-map' }, props.keyMap) : null
            ]),
          default: () => triggerVNodes
        }
      )
    }
  }
})
</script>

<style lang="less">
.keymap-tip-wrapper {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  .key-map {
    color: #8a8f8d;
    font-size: 12px;
  }
}
</style>
