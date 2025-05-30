import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

export const vView = {
  mounted(el?: HTMLImageElement) {
    if (el) {
      el.style.cursor = 'zoom-in';

      // 构造 viewer 实例
      const viewer = new Viewer(el, {
        // 内联展示
        inline: false,

        // 全屏预览时的缩放比例
        viewed() {
          viewer.zoomTo(0.8);
        },
        // 追加url处理（新版静态资源预览需要携带accessKey(公开地址),token(内部地址)）,未变化的地址也会重新再发送一遍请求？？
        url(image: any) {
          // console.log(image);
          return image.src; // 图片路径
        },
      });

      // 绑定事件监听
      el.addEventListener('click', () => {
        viewer.play();
      });
    }
  },
};
