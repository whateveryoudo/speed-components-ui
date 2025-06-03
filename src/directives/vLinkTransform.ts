/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2023-04-03 11:38:24
 * @LastEditors: ykx
 * @LastEditTime: 2024-01-08 17:51:11
 */
// 字符串中的链接转成a标签, innerhtml 事件会丢失？？ 这里判断是否是某些内部链接，追加rel="opener" 保留跳转session

import DOMPurify from 'dompurify';
export const vLinkTransform = {
  mounted(el?: HTMLElement, binding?: any) {
    if (el) {
      // URL正则表达式(看不懂，是否覆盖完全？？TODO:url解析库？)
      const urlRegex = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g

      const baseInnerhtml = binding?.value ?? '';
      // 替换文本中的URL为<a>标签
      const htmlText = baseInnerhtml.replace(urlRegex, (match: any) => {
        const isSysLink = match.includes('/easycube/preview');
        return `<a href="${match}" target="_blank" ${isSysLink && 'rel="opener"'}>${match}</a>`;
      });
      el.innerHTML = DOMPurify.sanitize(htmlText);
    }
  },
};
