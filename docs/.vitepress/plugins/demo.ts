import type { Plugin } from 'vite';

export function demoPlugin(): Plugin {
  return {
    name: 'demo-plugin',
    transform(code, id) {
      if (!id.endsWith('.md')) return;

      // 匹配 Demo 组件的内容
      const demoRegex = /<Demo>([\s\S]*?)<\/Demo>/g;
      let match;
      let result = code;

      while ((match = demoRegex.exec(code)) !== null) {
        const demoContent = match[1];
        // 提取 template 和 script 部分
        const templateMatch = demoContent.match(/<template>([\s\S]*?)<\/template>/);
        const scriptMatch = demoContent.match(/<script[^>]*>([\s\S]*?)<\/script>/);

        if (templateMatch && scriptMatch) {
          const template = templateMatch[1].trim();
          const script = scriptMatch[1].trim();
          
          // 构建完整的 Vue 组件代码
          const componentCode = `<template>${template}</template>\n\n<script setup>${script}</script>`;
          
          // 替换 Demo 组件的内容
          result = result.replace(match[0], `<Demo :code="\`${componentCode}\`">${demoContent}</Demo>`);
        }
      }

      return result;
    }
  };
} 