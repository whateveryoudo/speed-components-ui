<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <a-space>
          <SColorPicker v-model:color="color1" placeholder="请选择颜色" />
          <span>当前颜色: {{ color1 || '未选择' }}</span>
        </a-space>
      </div>
      
      <div class="demo-item">
        <h3>不同输出格式</h3>
        <a-space direction="vertical" style="width: 100%">
          <a-space>
            <SColorPicker v-model:color="color2" format="hex" placeholder="Hex 格式" />
            <span>Hex: {{ color2 || '未选择' }}</span>
          </a-space>
          <a-space>
            <SColorPicker v-model:color="color3" format="rgb" placeholder="RGB 格式" />
            <span>RGB: {{ color3 || '未选择' }}</span>
          </a-space>
        </a-space>
      </div>

      <div class="demo-item">
        <h3>自定义触发器</h3>
        <a-space>
          <SColorPicker placement="right" v-model:color="color4" placeholder="请选择颜色">
            <a-button type="primary">选择颜色</a-button>
          </SColorPicker>
          <span>当前颜色: {{ color4 || '未选择' }}</span>
        </a-space>
      </div>
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color1 = ref('')
const color2 = ref('')
const color3 = ref('')
  const color4 = ref('')


const code = `<template>
  <div class="demo-wrapper">
      <div class="demo-item">
        <h3>基础用法</h3>
        <a-space>
          <SColorPicker v-model:color="color1" placeholder="请选择颜色" />
          <span>当前颜色: {{ color1 || '未选择' }}</span>
        </a-space>
      </div>
      
      <div class="demo-item">
        <h3>不同输出格式</h3>
        <a-space direction="vertical" style="width: 100%">
          <a-space>
            <SColorPicker v-model:color="color2" format="hex" placeholder="Hex 格式" />
            <span>Hex: {{ color2 || '未选择' }}</span>
          </a-space>
          <a-space>
            <SColorPicker v-model:color="color3" format="rgb" placeholder="RGB 格式" />
            <span>RGB: {{ color3 || '未选择' }}</span>
          </a-space>
        </a-space>
      </div>

      <div class="demo-item">
        <h3>自定义触发器</h3>
        <a-space>
          <SColorPicker placement="right" v-model:color="color4" placeholder="请选择颜色">
            <a-button type="primary">选择颜色</a-button>
          </SColorPicker>
          <span>当前颜色: {{ color4 || '未选择' }}</span>
        </a-space>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color1 = ref('')
const color2 = ref('')
const color3 = ref('')
const color4 = ref('')
<\/script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
}

.demo-item {
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>`

</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
}

.demo-item {
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>