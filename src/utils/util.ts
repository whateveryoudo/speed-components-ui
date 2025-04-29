/*
 * @Author: Anxure
 * @Desc: 工具函数类
 * @Date: 2022-07-07 14:55:43
 * @LastEditors: Anxure
 * @LastEditTime: 2024-05-10 09:59:06
 */
import type { Schema } from '@/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/zh-cn';
import router from '@/router'
dayjs.extend(customParseFormat);

import { cloneDeep } from 'lodash-es';
interface ParsedUrlQuery {
  [key: string]: string | string[];
}
// 获取随机数
export function getRandomId() {
  return Number(Math.random().toString().substr(3, 4) + Date.now()).toString(36);
}
// 随机带有字母数字的数
export const generateRandomString = (length = 4) => {
  if (length < 2) {
    throw new Error('传入长度最小为两位');
  }
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  // 随机选择一个字母和一个数字
  const letter = characters.charAt(Math.floor(Math.random() * characters.length));
  const number = numbers.charAt(Math.floor(Math.random() * numbers.length));

  // 剩余的位置随机填充数字或字母
  const remainingChars = characters + numbers;
  let result = [letter, number];

  for (let i = 0; i < length - 2; i++) {
    result.push(remainingChars.charAt(Math.floor(Math.random() * remainingChars.length)));
  }

  // 打乱数组顺序以确保随机性
  result = result.sort(() => Math.random() - 0.5);

  return result.join('');
};

// 获取本地文件
export const getSourceUrl = (name: string) => {
  return new URL(name, import.meta.url).href;
};
export const getSrcUrl = (name: string) => {
  return new URL(`/src/assets/image/${name}`, import.meta.url).href;
};
export const evalFunc = (fn: string, args?: any) => {
  try {
    const Fun = Function; // 一个变量指向Function，防止有些前端编译工具报错
    return args && args.length > 0 ? new Fun(...args, fn) : new Fun(fn);
  } catch (e) {
    console.log(e);
    return null;
  }
};
// 判断数字是否为空，这里会过滤0,参数请传入数字
export const isNumEmpty = (num?: number): num is undefined => {
  return num === undefined || num === null;
};
// 这里存入全量数据
export function flattenTreeDataClosure(data: Schema[]) {
  const treeData = cloneDeep(data);
  const flattenData: {
    name: string;
    id: string;
    parentKey: string;
    type: string;
  }[] = [];
  function flattenTree(data: Schema[], parentKey: string) {
    data.forEach((ele) => {
      const { id, children } = ele;
      flattenData.push({
        parentKey,
        name: ele?.name ?? '',
        id: ele.id,
        type: ele.id,
      });
      if (children) {
        flattenTree(children, id);
      }
    });
  }
  flattenTree(treeData, '');
  return flattenData;
}
// 3.给个节点0-0-1-0，找到ta所有的父级节点
export function findParent(item: string, flattenTree: any) {
  const parentArr: Schema[] = []; // 存储所有的父级元素
  function find(item: string, flattenTree: any) {
    flattenTree.forEach((ele: any) => {
      if (ele.id === item) {
        parentArr.unshift(ele);
        find(ele.parentKey, flattenTree);
      }
    });
  }
  find(item, flattenTree);
  return parentArr;
}
/*
 *@functionName: 查找当前key 在树中的最近父节点
 *@params1: ${String} 唯一键
 *@params2: ${Array} 完整树结构
 *@returns ${String} 父节点key名
 */
export const getParentNode = (key: string, tree: Schema[], childrenKey: string): Schema | null => {
  let parentNode: Schema | null = null;
  for (let i = 0; i < tree.length; i++) {
    const node: Record<string, any> = tree[i];
    if (node[childrenKey]) {
      if (node[childrenKey].some((item: Schema) => item.id === key)) {
        parentNode = node as Schema;
      } else if (getParentNode(key, node[childrenKey], childrenKey)) {
        parentNode = getParentNode(key, node[childrenKey], childrenKey);
      }
    }
  }
  return parentNode;
};
/*
 *@functionName: 根据指定节点key获取指定节点全量数据
 *@params1: ${String} 唯一键
 *@params2: ${Array} 完整树结构
 */
export const getNodeByKey = (key: string, tree: any[], idKey = 'id'): Schema => {
  let result;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node[idKey] === key) {
      result = node;
    } else {
      if (node.children && getNodeByKey(key, node.children)) {
        result = getNodeByKey(key, node.children);
      }
    }
  }
  return result;
};
/** ************end*******************/


/** *
 *
 * 获取请求的UUID，指定长度和进制,如
 * getUUID(8, 2)   //"01001010" 8 character (base=2)
 * getUUID(8, 10) // "47473046" 8 character ID (base=10)
 * getUUID(8, 16) // "098F4D35"。 8 character ID (base=16)
 *
 */
export function getUUID(len: number, radix?: number) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
  const uuid = [];
  let i;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}
// 获取html的纯文本
export const getPlainTextFromHTML = (html: string) => {
  // 创建一个临时的DOM容器
  const tempDiv = document.createElement('div');
  // 将HTML内容赋值给临时DOM元素
  tempDiv.innerHTML = html;

  // 使用textContent属性获取纯文本内容，这会忽略所有的HTML标签
  const plainText = tempDiv.textContent || tempDiv.innerText;

  // 返回纯文本
  return plainText;
};
export function getAaUUID(len: number, radix: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uuid = [];
  let i;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}

// 将一维数组转化为tree
export const formatToTree = (
  arr: { id: string; parentId: string; children: any[]; [key: string]: any }[],
  pid: string,
  pidName = 'parentId',
) => {
  return arr
    .filter((item) => item[pidName] === pid)
    .map((item) => {
      // 通过父节点ID查询所有子节点
      item.children = [...formatToTree(arr, item.id)];
      return item;
    });
};

// 将tree展开为一维数组
export const treeToList = (
  tree: { id: string; children?: any[]; [key: string]: any }[],
  childName = 'children',
) => {
  // 设置临时数组，用来存放队列
  let queen = [] as any[];
  // 设置输出数组，用来存放要输出的一维数组
  const result = [];
  queen = queen.concat(tree);
  // 对树对象进行广度优先的遍历
  while (queen.length) {
    const first = queen.shift();
    if (first[childName]) {
      queen = queen.concat(first[childName]);
      first[childName] = [];
    }
    result.unshift(first);
  }
  return result;
};
export function flattenTreeDFS(tree: any) {
  const result: any[] = [];
  function dfs(node: any[]) {
    for (let i = 0; i < node.length; i++) {
      result.push({ ...node[i], children: [] });
      if (node[i].children && node[i].children.length > 0) {
        dfs(node[i].children);
      }
    }
  }

  dfs(tree);
  return result;
}

export const getMenuId = (): string => {
  const time = new Date().getTime();
  const random = Math.floor(Math.random() * 100000);
  return time + random + '';
};

// 判断是否是表达式
export const isExpress = (val: any) => {
  return val && val instanceof Object && val.type === 'express';
};

// 交换两个元素的位置
export const swapArr = (arr: any[], index1: number, index2: number) => {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

// 中文日期转换 2020年10月01日 => 2020-10-01, 不包含则不处理， 修改为dayjs处理(目前支持：YYYY年MM月DD日, YYYY年MM月DD日 HH时mm分ss秒, HH时mm分ss秒)
export const parseStr2Date = (dateStr?: string) => {
  if (!dateStr) {
    return undefined;
  }
  // 检查是否包含时分秒信息
  const tempDate = dayjs(
    dateStr,
    [
      'YYYY-MM-DD',
      'YYYY-MM-DD HH:mm:ss',
      'HH:mm:ss',
      'YYYY年MM月DD日',
      'YYYY年MM月DD日 HH时mm分ss秒',
      'HH时mm分ss秒',
    ],
    'zh-cn',
  );
  // 这里仅校验 HH时mm分ss秒, HH:mm:ss
  const timePattern =
    /^(?:([01]\d|2[0-3])时)?([0-5]\d)分([0-5]\d)秒|(?:([01]\d|2[0-3]):([0-5]\d):([0-5]\d))$/;
  const onlyTime = timePattern.test(dateStr);

  const hasTimeInfo = tempDate.hour() !== 0 || tempDate.minute() !== 0 || tempDate.second() !== 0;
  return tempDate.format(
    onlyTime ? 'HH:mm:ss' : hasTimeInfo ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
  );
};

export const encodeUrlParams = (params: ParsedUrlQuery): string => {
  return Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
};
// 驼峰 => 横向连接
export const hump2line = (str: string) => {
  let tuo = '';
  const arr = str.split('');
  const newArr = arr.map((ite: string) => {
    return ite.toUpperCase() === ite ? (ite = '-' + ite.toLowerCase()) : ite;
  });
  tuo = newArr.join('');
  return tuo;
};

export function downloadBase64Img(base64String: string, fileName: string) {
  // 创建一个虚拟的链接元素
  const a = document.createElement('a');
  a.href = base64String;
  a.download = fileName;

  // 模拟点击事件来触发下载
  document.body.appendChild(a);
  a.click();

  // 清理
  document.body.removeChild(a);
}

export function formatTime(
  time: number | string | Date = new Date(),
  type = 'YYYY-MM-DD HH:mm:ss',
) {
  const date = new Date(time);
  return time ? dayjs(date).format(type) : '';
}
/**
 * 格式化文件大小
 * @param bytes
 * @returns
 */
export function formatFileSize(bytes: number) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
export const checkAgent = () => {
  // 获取用户代理字符串
  const userAgent = navigator.userAgent;
  // 创建正则表达式匹配关键词
  const mobileKeywords = ['Android', 'iPhone', 'iPad', 'Windows Phone', 'Mobile'];

  // 判断是否为移动端设备
  const isMobile = mobileKeywords.some(function (keyword) {
    return userAgent.indexOf(keyword) !== -1;
  });
  return isMobile;
};

// 兼容的url打开（微服务和单体）
export const openUrl = (options: {
  routeInfo: string | { path: string; query: Record<string, any> };
  openBlank?: boolean;
  type?: 'jump-self' | 'jump-main';
}) => {
  if (!options) {
    throw new Error('缺少必要配置项');
  }
  const isWuJie = window.__POWERED_BY_WUJIE__;
  const parentProps = window.$wujie?.props;
  const { routeInfo, type = 'jump-self', openBlank = true } = options;
  let tempRouteInfo: Record<string, any> = {};
  if (typeof routeInfo === 'string') {
    tempRouteInfo.path = routeInfo;
  } else {
    tempRouteInfo = routeInfo;
  }
  if (isWuJie && parentProps?.jump) {
    // 这里区分下类型
    if (type === 'jump-self') {
      parentProps.jump({
        type,
        href: router.resolve(tempRouteInfo).href,
        openBlank,
      });
    } else {
      parentProps.jump({
        type,
        to: tempRouteInfo,
        openBlank,
      });
    }
  } else {
    if (openBlank) {
      const { href } = router.resolve(tempRouteInfo);
      window.open(href, '_blank');
    } else {
      router.push(tempRouteInfo);
    }
  }
};
