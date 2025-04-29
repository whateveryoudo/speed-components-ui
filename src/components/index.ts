/*
 * @Author: ykx
 * @Date: 2023-02-06 18:06:47
 * @LastEditTime: 2024-03-19 11:39:25
 * @LastEditors: Anxure
 * @Description:
 */
import type { App, Component } from 'vue'
import FullModal from './FullModal/index.vue'
const components: Component[] = [FullModal]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name as string, component as any)
  })
}
export { default as FullModal } from './FullModal/index.vue';

export default {
  install,
}
