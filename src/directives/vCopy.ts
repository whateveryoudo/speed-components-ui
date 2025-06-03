import { message } from 'ant-design-vue'
export const vCopy = {
  mounted(el?: HTMLElement, binding?: any) {
    if (el) {
      el.addEventListener('click', () => {
        // 首先去找 v-bind="值", 如果没有值，则那 innerText 充当
        const text = binding.arg || binding.value || el.innerText || ''
        console.log(text);
        // 一个兼容性不好的 API
        if (navigator.clipboard) {
          // clipboard api 复制
          navigator.clipboard.writeText(text)
          message.success('复制成功')
        }

        // 通用做法
        else {
          const textarea = document.createElement('textarea')

          // Chrome 中不要这句也可以，但 FireFox 不行
          document.body.appendChild(textarea)

          // 隐藏输入框
          textarea.style.position = 'fixed'
          textarea.style.width = '0'
          textarea.style.height = '0'
          textarea.style.top = '10px'

          // 赋值
          textarea.value = text

          // 选中
          textarea.select()

          // 复制
          document.execCommand('copy', true)
          
          message.success('复制成功');
          // 移除输入框
          document.body.removeChild(textarea)
        }
      })
    }
  },
}