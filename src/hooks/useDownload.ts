/*
 * @Author: zhangxin
 * @Date: 2022-03-09 15:38:30
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-03-29 15:13:36
 * @Description: 导出公用方法
 */
import { message } from 'ant-design-vue';
import type { AxiosResponse } from 'axios';

// 下载文件，后台返回的文件流 stream--流 | fileName--文件名 | fileFormat--文件类型 className- 触发元素类名，兼容clickoutside
export const downloadFileFromStream = (stream: BlobPart, fileName = '', className?: string) => {
  // 转为blob
  const blob = new Blob([stream]);
  if ((window.navigator as any).msSaveOrOpenBlob) {
    // 兼容IE
    (navigator as any).msSaveBlob(blob, fileName);
  } else {
    const elink = document.createElement('a');
    if (className) {
      elink.className = className;
    }
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  }
};
// 带有处理异常的文件流下载(处理json异常, fileName默认后台获取)
export const handleExceptDown = (
  streamRes: AxiosResponse<Blob, any>,
  fileName?: string,
  className?: string,
) => {
  const { data, headers } = streamRes;
  let resFileName = '';
  // 前端才能正常获取到Content-Disposition内容
  const disposition = headers['content-disposition'];
  if (disposition) {
    resFileName = disposition?.substring(disposition.indexOf('filename=') + 9, disposition.length);
    resFileName = decodeURI(resFileName);
    // 去掉双引号
    resFileName = resFileName.replace(/"/g, '');
  }
  const newFileName = fileName || resFileName;
  const fileReader = new FileReader();
  fileReader.onload = (e: Event) => {
    try {
      const jsonData = JSON.parse((e?.target as any).result); // 说明是普通对象数据，后台转换失败
      if (!jsonData.success) {
        message.error(jsonData.errMessage);
      }
    } catch (e) {
      downloadFileFromStream(data, newFileName, className);
    }
  };
  fileReader.readAsText(data);
};
export const downloadFile = (url: string) => {
  const aLink = document.createElement('form');
  aLink.setAttribute('method', 'get');
  aLink.setAttribute('action', url);
  document.body.appendChild(aLink);
  aLink.submit();
  document.body.removeChild(aLink);
};
// 根据文件类型下载文件
export const download = (blobData: any, type: string, fileName = '') => {
  const blob = new Blob([blobData], {
    type,
  });
  // FileReader主要用于将文件内容读入内存
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  // onload当读取操作成功完成时调用
  reader.onload = function (e) {
    const a: HTMLAnchorElement = document.createElement('a');
    a.download = fileName || `${new Date().getTime()}`;
    a.href = e.target?.result as string;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
};
