import type { Component } from 'vue'
import * as components from './index'

export interface ComponentInfo {
  name: string
  component: Component
}

// 从 components 中获取所有导出的组件
export const componentList: ComponentInfo[] = Object.entries(components)
  .map(([name, component]) => ({
    name,
    component: component as Component
  }))

// 导出组件名称列表，用于 resolver
export const componentNames = componentList.map(item => item.name)

// 导出组件对象，用于全局注册
export const componentsMap = Object.fromEntries(
  componentList.map(({ name, component }) => [name, component])
) 