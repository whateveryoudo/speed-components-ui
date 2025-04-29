<script setup lang="ts">
  import { computed } from 'vue';
  import ImageViewer from './ImageViewer.vue';
  import { getPreviewUrl } from '../../utils/getUrl';
  /* REPLACE API_COMMON START */
  import { downloadFile } from '../../../../apis/common';
  /* REPLACE API_COMMON END */
  import { handleExceptDown } from '../../hooks/useDownload';
  const props = defineProps<{
    files: Array<{
      id: string;
      fileName: string;
      fileSize?: string;
      className?: string;
    }>;
    type: 'image' | 'file';
  }>();

  // 只显示前两个
  const visibleFiles = computed(() => props.files.slice(0, 2));


  // 使用 DataTable 的文件预览逻辑
  const handlePreview = async (file: any) => {
    if (props.type === 'file') {
      const res = await downloadFile(file.id);
      if (res) {
        handleExceptDown(res, file.fileName, file.className);
      }
    }
  };
</script>

<template>
  <div class="file-list-viewer">
    <template v-if="type === 'image'">
      <a-popover
        placement="bottom"
        overlayClassName="preview-popover"
      >
        <template #content>
          <div class="popover-content">
            <div
              v-for="file in files"
              :key="file.id"
              class="popover-item"
            >
              <ImageViewer
                :images="[getPreviewUrl(file.id)]"
                class="popover-image"
              />
              <div class="file-info">
                <span class="file-name">{{ file.fileName }}</span>
                <span
                  v-if="file.fileSize"
                  class="file-size"
                >
                  ({{ file.fileSize }})
                </span>
              </div>
            </div>
          </div>
        </template>
        <div class="image-list">
          <ImageViewer
            v-for="file in visibleFiles"
            :key="file.id"
            :images="[getPreviewUrl(file.id)]"
            class="image-item"
          />
        </div>
      </a-popover>
    </template>
    <template v-else>
      <a-popover
        placement="bottom"
        overlayClassName="preview-popover"
      >
        <template #content>
          <div class="popover-content">
            <a
              v-for="file in files"
              :key="file.id"
              href="javascript:;"
              class="popover-file"
              @click="() => handlePreview(file)"
            >
              {{ file.fileName }}
              <span
                v-if="file.fileSize"
                class="file-size"
              >
                ({{ file.fileSize }})
              </span>
            </a>
          </div>
        </template>

        <div class="file-list">
          <a
            v-for="file in visibleFiles"
            :key="file.id"
            href="javascript:;"
            class="file-item"
            @click="() => handlePreview(file)"
          >
            {{ file.fileName }}
            <span
              v-if="file.fileSize"
              class="file-size"
            >
              ({{ file.fileSize }})
            </span>
          </a>
        </div>
      </a-popover>
    </template>
  </div>
</template>
<style lang="less">
  .preview-popover {
    .ant-popover-inner {
      padding: 0;
    }
  }
</style>
<style scoped lang="less">
  .file-list-viewer {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    .image-list,
    .file-list {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .image-item {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      overflow: hidden;
    }

    .file-item {
      color: #1677ff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: #4096ff;
      }

      .file-size {
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
      }
    }
  }

  .popover-content {
    padding: 8px;
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 200px;

    .popover-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px;
      border-radius: 4px;

      &:hover {
        background: rgba(0, 0, 0, 0.06);
      }

      .popover-image {
        width: 48px;
        height: 48px;
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;
      }

      .file-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;

        .file-name {
          color: rgba(0, 0, 0, 0.88);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
        }

        .file-size {
          color: rgba(0, 0, 0, 0.45);
          font-size: 12px;
        }
      }
    }

    .popover-file {
      color: #1677ff;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        text-decoration: underline;
        color: #4096ff;
      }

      .file-size {
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
      }
    }
  }
</style>
