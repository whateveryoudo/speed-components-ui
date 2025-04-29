<!-- 单个文件预览,沿用了antd组件样式：目前仅支持卡片模式 ,这里仅通过后缀名判断了，未准确校验mime-->
<template>
  <div
    v-if="['list', 'list-simple'].includes(mode)"
    :class="['file-preview-item-list-wrapper', mode === 'list-simple' && 'simple']"
  >
    <img
      ref="imgRef"
      :src="showPlacePic()"
      alt=""
    />
    <div class="info-wrapper">
      <p
        class="overflow-hidden-one title"
        :title="fileName"
        @click.stop="clickTitlePreview"
      >
        {{ fileName }}
      </p>
      <p
        v-if="mode !== 'list-simple' && (fileSize !== undefined || fileSize !== null)"
        class="overflow-hidden-one text-gray"
      >
        {{ formatFileSize(Number(fileSize)) }}
      </p>
      <a-space
        class="right-actions"
        :size="5"
      >
        <template v-if="mode !== 'list-simple'">
          <a
            class="text-primary"
            @click.stop="handlePreview"
          >
            预览
          </a>
          <a
            v-if="showDownLoad"
            class="text-primary"
            @click.stop="handleDownLoad"
          >
            下载
          </a>

          <a
            v-if="canIdel"
            class="text-error"
            @click.stop="emits('on-delete', id)"
          >
            删除
          </a>
        </template>
        <s-icon-font
          v-else
          title="删除"
          type="icon-close"
          @click.stop="emits('on-delete', id)"
        />
      </a-space>
    </div>
  </div>

  <a-tooltip
    v-else
    :title="fileName"
    placement="top"
  >
    <div class="file-preview-item-wrapper">
      <img
        ref="imgRef"
        :src="showPlacePic()"
        alt=""
      />
      <span class="actions-wrapper">
        <EyeOutlined
          title="预览"
          @click.stop="handlePreview"
        />
        <!-- 仅有附件支持下载 -->
        <DownloadOutlined
          v-if="showDownLoad"
          title="下载"
          style="margin-left: 5px"
          @click.stop="handleDownLoad"
        />
        <!-- <DeleteOutlined @click.stop="emits('on-delete', id)" /> -->
      </span>
      <s-icon-font
        v-if="canIdel"
        title="删除"
        color="#ff4d4f"
        :size="18"
        type="icon-close-circle-fill"
        class="close-icon"
        @click.stop="emits('on-delete', id)"
      />
    </div>
  </a-tooltip>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { getPreviewUrl } from '@/utils/getUrl';
  import { formatFileSize } from '@/utils';
  import 'viewerjs/dist/viewer.css';
  import { downloadFullBlob, getPreviewFileUrl } from '@/api';
  import { handleExceptDown } from '@/hooks/useDownload';
  import Viewer from 'viewerjs';
  import excelImg from '@/assets/image/excel.png';
  import fileImg from '@/assets/image/file.png';
  import musicImg from '@/assets/image/music.png';
  import pptImg from '@/assets/image/ppt.png';
  import videoImg from '@/assets/image/video.png';
  import wordImg from '@/assets/image/word.png';
  import zipImg from '@/assets/image/zip.png';

  export type IFileItem = {
    id: string;
    previewUrl?: string;
    fileName: string;
    fileType: string;
    fileSize?: string;
  };
  const imgRef = ref();
  const viewerInstance = ref();
  const props = withDefaults(
    defineProps<{
      mode?: 'card' | 'list' | 'list-simple';
      id: IFileItem['id'];
      canIdel?: boolean;
      className?: string;
      previewUrl?: IFileItem['previewUrl'];
      fileType: IFileItem['fileType'];
      fileSize: IFileItem['fileSize'];
      fileName: IFileItem['fileName'];
    }>(),
    {
      mode: 'card',
      canIdel: true, // 是否允许删除附件
    },
  );
  const emits = defineEmits(['on-delete']);
  const showDownLoad = computed(() => {
    if (!props.fileName) {
      throw new Error('缺少必要属性fileName');
    }
    const rge = /\.\w+$/;
    const fileSuffix = props.fileName.match(rge)?.[0] ?? '';
    if (fileSuffix) {
      return !['.png', '.jpg', '.gif', '.jpeg'].includes(fileSuffix);
    }
    return false;
  });
  // 图片占位映射
  const placeholderPicMap = {
    '.xlsx,.xls': excelImg,
    '.doc,.docx': wordImg,
    '.mp3': musicImg,
    '.ppt': pptImg,
    '.mp4,.avi,.wmv,.mpeg': videoImg,
    '.zip,.rar': zipImg,
  };
  /*eslint no-undef: "off"*/
  defineOptions({
    name: 'SFilePreviewItem',
  });
  // 占位图显示
  const showPlacePic = () => {
    if (!props.fileName) {
      throw new Error('缺少必要属性fileName');
    }
    const rge = /\.\w+$/;
    let target: any = fileImg;
    const fileSuffix = props.fileName.match(rge)?.[0] ?? '';
    if (fileSuffix) {
      // 图片走插件预览(如何禁止img点击触发？？)
      if (['.png', '.jpg', '.gif', '.jpeg'].includes(fileSuffix)) {
        return getPreviewUrl(props.id);
      } else {
        Object.keys(placeholderPicMap).forEach((key: string) => {
          if (key.includes(fileSuffix)) {
            target = placeholderPicMap[key];
          }
        });
      }
    }
    return target;
  };
  // 附件预览
  const handlePreview = async () => {
    if (!props.fileName) {
      throw new Error('缺少必要属性fileName');
    }
    const rge = /\.\w+$/;
    const fileSuffix = props.fileName.match(rge)?.[0] ?? '';
    if (fileSuffix) {
      // 图片走插件预览(如何禁止img点击触发？？)
      if (['.png', '.jpg', '.gif', '.jpeg'].includes(fileSuffix)) {
        if (viewerInstance.value) {
          viewerInstance.value.view(0);
        } else {
          viewerInstance.value = new Viewer(imgRef.value, {
            className: props.className,
            // 内联展示
            inline: false,
          });
          viewerInstance.value.view(0);
        }
      } else {
        // 这里修改为接口请求
        const { data } = await getPreviewFileUrl(props.id);
        window.open(data);
      }
    } else {
      // 这里修改为接口请求
      const { data } = await getPreviewFileUrl(props.id);
      window.open(data);
    }
  };
  const clickTitlePreview = () => {
    if (props.mode === 'list-simple') {
      handlePreview();
    }
  };
  // 附件下载
  const handleDownLoad = async () => {
    const res = await downloadFullBlob(props.id);
    handleExceptDown(res, props.fileName, props.className);
  };
</script>

<style scoped lang="less">
  .file-preview-item-wrapper {
    width: 60px;
    height: 60px;
    border: 1px solid #d9d9d9;
    padding: 3px;
    position: relative;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
    &:hover {
      .actions-wrapper {
        opacity: 1;
      }
      .close-icon {
        display: block;
      }
    }

    img {
      position: static;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
    .actions-wrapper {
      position: absolute;
      top: 50%;
      text-align: center;
      width: 100%;
      transition: opacity 0.2s;
      opacity: 0;
      left: 0;
      transform: translateY(-50%);
      :deep(.anticon) {
        transition: color 0.2s;
        color: rgba(255, 255, 255, 0.8);

        &:hover {
          color: #fff;
        }
      }
    }
    .close-icon {
      position: absolute;
      right: -10px;
      top: -5px;
      display: none;
    }
  }
  // 列表模式
  .file-preview-item-list-wrapper {
    background: #f0f1f4;
    border: none;
    border-radius: 3px;
    height: 52px;
    padding: 0 5px;
    margin: 6px 0;
    display: flex;
    position: relative;
    align-items: center;
    &.simple {
      height: 40px;
      img {
        height: 30px;
        width: 30px;
      }
      .right-actions {
        top: 50%;
      }
      .info-wrapper .title {
        cursor: pointer;
      }
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
    .info-wrapper {
      flex: 1;
      padding-right: 10px;
      min-width: 0;
    }
    .right-actions {
      position: absolute;
      top: 70%;
      right: 5px;
      font-size: 12px;
      transform: translateY(-50%);
    }
  }
</style>
