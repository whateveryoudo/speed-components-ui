<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>默认显示为文件上传</h3>
        <div class="mb-2">此模式下不会限制上传文件类型</div>
        <s-custom-upload v-model:value="files3" />
        <a-space> files：{{ files3 }} </a-space>
      </div>
      <div class="demo-item">
        <h3>图片显示</h3>
        <div class="mb-2">
          内置图片规则：.jpg,.png,.jpeg,.svg, 你可以通过传入acceptList进行覆盖。
        </div>
        <s-custom-upload type="picture" v-model:value="files" />
        <a-space> files：{{ files }} </a-space>
      </div>

      <div class="demo-item">
        <h3>自定义触发按钮</h3>
        <s-custom-upload v-model:value="files2">
          <template #trigger>
            <a-button type="primary"> <upload-outlined /> 自定义触发 </a-button>
          </template>
        </s-custom-upload>
        <a-space> files：{{ files2 }} </a-space>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import type { IFileItem } from "@/hooks/useCustomUpload";

const files = ref<IFileItem[]>([]);
const files2 = ref<IFileItem[]>([]);
const files3 = ref<IFileItem[]>([]);

const code = ref(`
<template>
    <div class="demo-wrapper">
        <div class="demo-item">
        <h3>默认显示为文件上传</h3>
        <div class="mb-2">此模式下不会限制上传文件类型</div>
        <s-custom-upload
          v-model:value="files3"
        />
        <a-space> files：{{ files3 }} </a-space>
      </div>
      <div class="demo-item">
        <h3>图片显示</h3>
        <div class="mb-2">内置图片规则：.jpg,.png,.jpeg,.svg, 你可以通过传入acceptList进行覆盖。</div>
        <s-custom-upload type="picture" v-model:value="files" />
        <a-space> files：{{ files }} </a-space>
      </div>

      <div class="demo-item">
        <h3>自定义触发按钮</h3>
        <s-custom-upload v-model:value="files2">
          <template #trigger>
            <a-button type="primary"> <upload-outlined /> 自定义触发 </a-button>
          </template>
        </s-custom-upload>
        <a-space> files：{{ files2 }} </a-space>
      </div>

     
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import type { IFileItem } from "@/hooks/useCustomUpload";

const files = ref<IFileItem[]>([]);
const files2 = ref<IFileItem[]>([]);
const files3 = ref<IFileItem[]>([]);

<\/script>
<style scoped lang="less">
.demo-wrapper {
  .demo-item {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 16px;
      margin-top: 0;
      font-weight: 500;
    }
  }
}
</style>
`);
</script>

<style scoped lang="less">
.demo-wrapper {
  .demo-item {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 16px;
      margin-top: 0;
      font-weight: 500;
    }
  }
}
</style>
