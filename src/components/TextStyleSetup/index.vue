<script lang="ts" setup>
import { ref, type CSSProperties, computed, watch } from 'vue'
import FullModal from '../FullModal/index.vue'
import ColorPicker from '../CColorPicker/index.vue'
import { cloneDeep } from 'lodash-es'
/*eslint no-undef: "off"*/
defineOptions({
  name: 'STextStyleSetup',
})
const props = defineProps<{
  value: any
  previewText?: string
}>()
const emits = defineEmits<{
  (e: 'update:value', style: CSSProperties): void
  (e: 'open'): void
}>()
const modalVisible = ref(false)
const style = ref(formatStyle())

watch(
  () => modalVisible.value,
  visible => {
    if (visible) {
      emits('open')
      style.value = formatStyle()
    }
  },
)

const computedStyle = computed(() => {
  const {
    opacity,
    fontWeight,
    fontStyle,
    color,
    fontSize,
    letterSpacing,
    lineHeight,
    textIndent,
    textDecoration,
    gradientColor1,
    gradientColor2,
    gradientAngle,
    shadowColor,
    shadowBlur,
    shadowX,
    shadowY,
    fontFamily,
  } = cloneDeep(style.value)

  const res: CSSProperties = {
    fontFamily,
    // lineHeight,
    // textDecoration,
    opacity: opacity / 100,
    fontSize: fontSize + 'px',
    ...(letterSpacing
      ? {
          letterSpacing: letterSpacing + 'px',
          paddingLeft: letterSpacing + 'px',
        }
      : {}),
    // letterSpacing: letterSpacing + 'px',
    textIndent: textIndent + 'em',
    fontStyle: fontStyle ? 'italic' : 'normal',
    fontWeight: fontWeight ? 'bolder' : 'normal',
    color: color || '',
    // color: gradientColor1 && gradientColor2 ? 'transparent' : color || '',
    // backgroundImage: `linear-gradient(${gradientAngle}deg, ${gradientColor1}, ${gradientColor2})`,
    // '-webkit-background-clip': 'text',
    // ...(shadowColor
    //   ? {
    //       textShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`,
    //     }
    //   : {}),
  }

  return res
})

function formatStyle() {
  const {
    fontFamily,
    lineHeight,
    textDecoration,
    opacity,
    fontSize,
    letterSpacing,
    textIndent,
    fontStyle,
    fontWeight,
    color,
    textShadow,
    backgroundImage,
  } = props.value

  const res: any = {
    fontFamily,
    // lineHeight: lineHeight || 1,
    // textDecoration: textDecoration || 'none',
    opacity: opacity ? opacity * 100 : 100,
    fontSize: fontSize ? Number(fontSize.split('px')[0]) : 14,
    letterSpacing: letterSpacing ? Number(letterSpacing.split('px')[0]) : 0,
    textIndent: textIndent ? Number(textIndent.split('em')[0]) : 0,
    fontStyle: fontStyle === 'italic' ? true : false,
    fontWeight: fontWeight === 'bolder' ? true : false,
    color: color === 'transparent' ? undefined : color || '',
    // gradientColor1: backgroundImage?.match(/#[a-zA-Z0-9]+/gim)?.[0] || '',
    // gradientColor2: backgroundImage?.match(/#[a-zA-Z0-9]+/gim)?.[1] || '',
    // gradientAngle: Number(backgroundImage?.match(/(\d+)deg/)?.[1] || 0),
    // shadowX: Number(textShadow?.split(' ')?.[0].split('px')[0] || 0),
    // shadowY: Number(textShadow?.split(' ')?.[1].split('px')[0] || 0),
    // shadowBlur: Number(textShadow?.split(' ')?.[2].split('px')[0] || 0),
    // shadowColor: textShadow?.split(' ')?.[3] || '',
  }

  return res
}

const resetStyle = () => {
  emits('update:value', {})
  modalVisible.value = false
}
const handleOk = () => {
  modalVisible.value = false
  emits('update:value', computedStyle.value)
}
</script>

<template>
  <!-- 文本样式配置弹框和一个用于数据双向绑定的入口按钮 -->
  <div class="text-style-setup-btn" @click="modalVisible = true">
    <i class="iconfont icon-danhangwenben" />

    <!-- 配置弹框 -->
    <FullModal
      v-model:visible="modalVisible"
      tips=""
      allow-full-screen
      title="文本样式配置"
      :width="750"
      :height="400"
      @ok="handleOk"
    >
      <div class="text-style-setup-modal">
        <div class="config-wrapper">
          <div class="row">
            <div class="config-item-wrapper" style="width: 29%">
              <div class="config-item">
                <span class="title">颜色</span>
                <div class="form-item">
                  <ColorPicker v-model:value="style.color" placeholder="文本颜色" />
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 17%">
              <div class="config-item switch">
                <span class="title">斜体</span>
                <div class="form-item">
                  <a-switch v-model:checked="style.fontStyle" />
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 17%">
              <div class="config-item switch">
                <span class="title">加粗</span>
                <div class="form-item">
                  <a-switch v-model:checked="style.fontWeight" />
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 32.5%">
              <div class="config-item">
                <span class="title">字体</span>
                <div class="form-item">
                  <a-select
                    v-model:value="style.fontFamily"
                    style="width: 100%; margin-right: 10px"
                    placeholder="选择字体"
                    :options="[
                      { label: '默认', value: 'inherit' },
                      { label: '微软雅黑', value: 'Microsoft YaHei' },
                      { label: '宋体', value: 'SimSun' },
                      { label: '黑体', value: 'SimHei' },
                      { label: '仿宋', value: 'FangSong' },
                      { label: '楷体', value: 'KaiTi' },
                      { label: '隶书', value: 'LiSu' },
                      { label: '幼圆', value: 'YouYuan' },
                      { label: '华文琥珀', value: 'STHupo' },
                      { label: '华文行楷', value: 'STXingkai' },
                      { label: '方正舒体', value: 'FZShuTi' },
                      { label: '华文新魏', value: 'STXinwei' },
                      { label: '仿宋_GB2312', value: 'FangSong_GB2312' },
                      { label: 'Serif A', value: 'Georgia, serif' },
                      {
                        label: 'Serif B',
                        value: `'Palatino Linotype', 'Book Antiqua', Palatino, serif`,
                      },
                      { label: 'Serif C', value: `'Times New Roman', Times, serif` },
                      { label: 'Sans Serif A', value: 'Arial, Helvetica, sans-serif' },
                      { label: 'Sans Serif B', value: 'Arial Black, Gadget, sans-serif' },
                      { label: 'Sans Serif C', value: `'Comic Sans MS', cursive, sans-serif` },
                      { label: 'Sans Serif D', value: 'Impact, Charcoal, sans-serif' },
                      {
                        label: 'Sans Serif E',
                        value: `'Lucida Sans Unicode', 'Lucida Grande', sans-serif`,
                      },
                      { label: 'Sans Serif F', value: `Tahoma, Geneva, sans-serif` },
                      { label: 'Sans Serif G', value: `'Trebuchet MS', Helvetica, sans-serif` },
                      { label: 'Monospace A', value: `'Courier New', Courier, monospace` },
                      { label: 'Monospace B', value: `'Lucida Console', Monaco, monospace` },
                      { label: 'Monospace C', value: `'Consolas', Courier, monospace` },
                    ]"
                    allowClear
                  >
                    <template #option="{ label, value }">
                      <span :style="{ fontFamily: value }">{{ label }}</span>
                    </template>
                  </a-select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">透明</span>
                <div class="form-item">
                  <a-slider v-model:value="style.opacity" :min="10" :max="100" />
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">间距</span>
                <div class="form-item">
                  <a-slider
                    v-model:value="style.letterSpacing"
                    :min="0"
                    :max="50"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">缩进</span>
                <div class="form-item">
                  <a-slider
                    v-model:value="style.textIndent"
                    :min="0"
                    :max="10"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">大小</span>
                <div class="form-item">
                  <a-slider
                    v-model:value="style.fontSize"
                    :min="12"
                    :max="100"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row" v-if="true">
            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">行高</span>
                <div class="form-item">
                  <a-slider
                    v-model:value="style.lineHeight"
                    :min="1"
                    :max="10"
                    style="width: 100%"></a-slider>
                </div>
              </div>
            </div>

            <div class="config-item-wrapper" style="width: 49.2%">
              <div class="config-item">
                <span class="title">装饰线</span>
                <div class="form-item decoration">
                  <span
                    class="icon-wrapper"
                    :class="{ checked: item.value === style.textDecoration }"
                    @click="style.textDecoration = item.value"
                    v-for="item in [
                      { value: 'none', icon: 'icon-u' },
                      { value: 'underline', icon: 'icon-underline' },
                      { value: 'overline', icon: 'icon-icon-shanghuaxian' },
                      { value: 'line-through', icon: 'icon-xiahuaxian1' },
                    ]">
                    <i class="iconfont" :class="item.icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="config-item-wrapper" style="width: 100%">
            <div class="config-item">
              <span class="title">渐变</span>
              <div class="form-item" style="flex: none; width: 160px; margin-right: 10px">
                <ColorPicker v-model:color="style.gradientColor1" placeholder="起始渐变色" />
              </div>
              <div class="form-item" style="flex: none; width: 160px; margin-right: 10px">
                <ColorPicker v-model:color="style.gradientColor2" placeholder="结尾渐变色" />
              </div>
              <div class="form-item">
                <a-slider
                  v-model:value="style.gradientAngle"
                  :min="-180"
                  :max="180"
                  :step="10"
                  style="width: 100%"></a-slider>
              </div>
            </div>
          </div> -->

          <!-- <div class="config-item-wrapper" style="width: 100%">
            <div class="config-item">
              <span class="title">阴影</span>
              <div class="form-item" style="flex: none; width: 160px; margin-right: 10px">
                <ColorPicker v-model:color="style.shadowColor" placeholder="阴影颜色" />
              </div>
              <div class="form-item" style="margin-right: 10px">
                <a-slider
                  v-model:value="style.shadowX"
                  :min="-20"
                  :max="20"
                  style="width: 100%"></a-slider>
              </div>
              <div class="form-item" style="margin-right: 10px">
                <a-slider
                  v-model:value="style.shadowY"
                  :min="-20"
                  :max="20"
                  style="width: 100%"></a-slider>
              </div>
              <div class="form-item">
                <a-slider
                  v-model:value="style.shadowBlur"
                  :min="0"
                  :max="20"
                  style="width: 100%"></a-slider>
              </div>
            </div>
          </div> -->
        </div>

        <div class="preview-wrapper">
          <p :style="computedStyle">{{ previewText || 'EasyCube 零代码平台' }}</p>
        </div>
      </div>

      <template #extra-btn>
        <a-button @click="resetStyle()">样式重置</a-button>
      </template>
    </FullModal>
  </div>
</template>

<style lang="less" scoped>
.text-style-setup-btn {
  display: inline-flex;
  width: 31px;
  height: 31px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: linear-gradient(140deg, #4986fe 12%, #91cffe 100%);
  cursor: pointer;
  .iconfont {
    color: #fff;
    font-size: 20px;
  }
}
.text-style-setup-modal {
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  display: flex;
  flex-flow: column nowrap;
  .config-wrapper {
    padding-right: 15px;
    margin-bottom: 30px;
    .row {
      display: flex;
      justify-content: space-between;
    }
    .config-item-wrapper {
      width: 50%;
      display: inline-block;
      padding: 6px 8px;
      border-radius: 2px;
      // background-color: #f9f9f9;
      border: 1px solid #e6e6f6;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
      margin-bottom: 12px;

      .config-item {
        width: 100%;
        display: inline-flex;
        align-items: center;
        &.switch {
          padding-top: 5px;
        }
        // &.slider {
        //   .title {
        //     padding-bottom: 16px;
        //   }
        // }
        .title {
          color: #555;
          font-weight: bold;
          &::after {
            content: '：';
            margin-right: 5px;
          }
        }
        .form-item {
          flex: 1;
          :deep(.ant-slider-rail) {
            background-color: #ddd;
          }
          :deep(.ant-slider-track) {
            background-color: #4c7dff;
          }
          &.decoration {
            display: inline-flex;
            .icon-wrapper {
              width: 32px;
              height: 32px;
              background-color: #fff;
              border: 1px solid #ddd;
              margin-right: 15px;
              border-radius: 3px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #4c7dff;
              transition: all 0.2s ease;
              font-weight: bold;

              &:hover {
                border: 1px solid #4c7dff;
              }
              &.checked {
                background-color: #4c7dff;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  .preview-wrapper {
    padding-right: 15px;
    width: 100%;
    flex: 1;
    height: 0;
    overflow-y: auto;
    > p {
      padding: 15px;
      border-radius: 2px;
      margin-bottom: 0;
      min-height: 100%;
      display: inline-flex;
      align-items: center;
      width: 100%;
      background-color: #f5f5f5;
      justify-content: center;
    }
  }
}
</style>
<style lang="less">
.dashboard-base-modal {
  .ant-modal-content {
    border-radius: 5px;
  }
  .ant-modal-header {
    padding-top: 15px;
  }
  .ant-modal-content {
    padding-bottom: 10px;
  }
}
</style>
