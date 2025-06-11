import type { ComponentResolver } from 'unplugin-vue-components'
import { componentNames } from './components/auto-import'

export interface SpeedComponentsResolverOptions {
  /**
   * 组件前缀
   * @default 'S'
   */
  prefix?: string
}

// 将 kebab-case 转换为 PascalCase
function kebabToPascal(str: string): string {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export function SpeedComponentsResolver(options: SpeedComponentsResolverOptions = {}): ComponentResolver {
  const { prefix = 'S' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      // 处理 kebab-case 格式的组件名
      if (name.startsWith('s-')) {
        const pascalName = kebabToPascal(name)
        if (componentNames.includes(pascalName)) {
          return {
            name: pascalName,
            from: 'speed-components-ui/components',
            sideEffects: 'speed-components-ui/dist/style.css'
          }
        }
      }
      // 处理 PascalCase 格式的组件名
      else if (name.startsWith(prefix)) {
        if (componentNames.includes(name)) {
          return {
            name,
            from: 'speed-components-ui/components',
            sideEffects: 'speed-components-ui/dist/style.css'
          }
        }
      }
    }
  }
} 