<script lang="ts" setup>
import { SketchPicker, tinycolor } from 'vue-color'
import 'vue-color/style.css'
import { Input, Popover } from 'ant-design-vue'

defineOptions({
    name: 'SColorPicker',
})
const props = withDefaults(defineProps<{
    color: string
    placeholder?: string
    placement?: 'left' | 'right' | 'top' | 'bottom'
    format?: 'hex' | 'rgb' | 'hsb'
    /** 拾色器 Popover 挂载容器，默认 body */
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
}>(), {
    placement: 'left',
    format: 'hex',
})

const emits = defineEmits<{
    (e: 'update:color', color: typeof props.color): void
    (e: 'openChange', open: boolean): void
}>()

const inputHandler = (color: string) => {
    // vue-color 默认返回 HSV 格式，根据 format 属性转换为指定格式
    const colorObj = tinycolor(color);

    let outputColor: string;

    switch (props.format) {
        case 'hex':
            // hex 格式：有透明度时使用 8位 hex，无透明度时使用 6位 hex
            const alpha = colorObj.getAlpha();
            outputColor = alpha < 1 ? colorObj.toHex8String() : colorObj.toHexString();
            break;
        case 'rgb':
            // rgb 格式：自动包含透明度
            outputColor = colorObj.toRgbString();
            break;
        case 'hsb':
            // hsb 格式：自动包含透明度 (HSB 就是 HSV)
            outputColor = colorObj.toHsvString();
            break;
        default:
            outputColor = colorObj.toHexString();
    }

    emits('update:color', outputColor)
}
</script>

<template>
    <div >
        <Input v-if="!$slots.default" :value="color" class="addon-input" :placeholder="placeholder" :bordered="false"
            @input="emits('update:color', $event.target.value!)">
            <template #addonBefore>
                <Popover :title="false" trigger="click"
                    overlay-class-name="color-picker-popover" :placement="placement"
                    :get-popup-container="getPopupContainer"
                    @openChange="(open: boolean) => emits('openChange', open)">
                    <template #content>
                        <SketchPicker :model-value="color" @update:modelValue="inputHandler" />
                    </template>
                    <span class="addon-mark" :class="{ 'color-mark': !color }" :style="{ backgroundColor: color }" />
                </Popover>
            </template>
        </Input>
        <Popover v-else :title="false" trigger="click"
            overlay-class-name="color-picker-popover" :placement="placement"
            :get-popup-container="getPopupContainer"
            @openChange="(open: boolean) => emits('openChange', open)">
            <template #content>
                <SketchPicker :model-value="color" @update:modelValue="inputHandler" />
            </template>
            <slot />
        </Popover>
    </div>
</template>

<style lang="less" scoped>
@bgGray: #fafafa;
@labelBg: rgb(241, 242, 245);
@border: 1px solid #dadada;
@radius: 2px;

.addon-input {
    border: @border;
    border-radius: 3px;
    overflow: hidden;
    height: 32px;

    :deep(.ant-input) {
        height: 32px !important;
        line-height: 32px !important;
    }

    :deep(.ant-input-group-addon) {
        &::after {
            content: 'A';
            color: transparent;
        }
    }

    :deep(.ant-input),
    :deep(.ant-input-affix-wrapper) {
        padding-top: 0;
        padding-bottom: 2px;
        background-color: #fff !important;
    }

    :deep(.ant-input-group-addon) {
        border: none;
        background-color: @labelBg;
        border-right: @border;
        position: relative;

        .addon-mark {
            width: 22px;
            border-radius: @radius;
            position: absolute;
            height: 23px;
            top: 4px;
            left: 5px;
            display: inline-block;
            color: #666;

            &.color-mark {
                background: linear-gradient(135deg, #00f8ff 10%, #006eff 100%);
                cursor: pointer;
            }
        }
    }
}
</style>

<style lang="less">
.color-picker-popover {
    .ant-popover-inner-content {
        padding: 0;
    }
    .vc-sketch-picker {
        padding: 0;
        box-shadow: none;
    }
}

</style>
