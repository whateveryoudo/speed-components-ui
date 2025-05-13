import { mount } from '@vue/test-utils';
import SFullModal from './index.vue';
import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { nextTick, ref } from 'vue';

describe('SFullModal', () => {
  // 测试基础渲染
  it('should render basic modal correctly', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        title: '测试标题'
      }
    });
    expect(wrapper.find('.title-left').text()).toBe('测试标题');
    expect(wrapper.findComponent(CloseOutlined).exists()).toBe(true);
  });

  // 测试全屏切换功能
  it('should toggle full screen mode when click icon', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        allowFullScreen: true
      }
    });
    
    // 初始非全屏状态
    expect(wrapper.findComponent(FullscreenOutlined).exists()).toBe(true);
    expect(wrapper.classes()).not.toContain('full-screen');
    
    // 点击切换全屏
    await wrapper.findComponent(FullscreenOutlined).trigger('click');
    expect(wrapper.emitted('update:fullScreen')?.[0]).toEqual([true]);
    
    // 模拟props更新
    await wrapper.setProps({ fullScreen: true });
    expect(wrapper.findComponent(FullscreenExitOutlined).exists()).toBe(true);
    expect(wrapper.classes()).toContain('full-screen');
  });

  // 测试关闭功能
  it('should handle close correctly', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        needConfirmClose: false
      }
    });
    
    // 直接关闭情况
    await wrapper.findComponent(CloseOutlined).trigger('click');
    expect(wrapper.emitted('update:visible')?.[0]).toEqual([false]);
    expect(wrapper.emitted('cancel')).toBeTruthy();
    
    // 需要确认关闭情况
    await wrapper.setProps({ needConfirmClose: true });
    await wrapper.findComponent(CloseOutlined).trigger('click');
    expect(wrapper.emitted('cancel')).toHaveLength(2);
    expect(wrapper.emitted('update:visible')).toHaveLength(1); // 不应该触发
  });

  // 测试footer按钮功能
  it('should handle footer buttons correctly', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        showCancelBtn: true
      }
    });
    
    // 取消按钮
    await wrapper.findAll('button')[0].trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    
    // 确定按钮
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.emitted('ok')).toBeTruthy();
  });

  // 测试props变化监听
  it('should watch props changes correctly', async () => {
    const fullScreenRef = ref(false);
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        fullScreen: fullScreenRef.value
      }
    });
    
    // 修改fullScreen
    fullScreenRef.value = true;
    await wrapper.setProps({ fullScreen: fullScreenRef.value });
    expect(wrapper.vm.isFullScreen).toBe(true);
    
    // 关闭modal时重置全屏状态
    await wrapper.setProps({ visible: false });
    expect(wrapper.vm.isFullScreen).toBe(false);
  });

  // 测试插槽功能
  it('should render slots correctly', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true
      },
      slots: {
        default: '<div class="test-content">内容</div>',
        'title-left': '<span class="custom-title">自定义标题</span>',
        'title-right': '<button class="custom-button">自定义按钮</button>',
        footer: '<div class="custom-footer">自定义底部</div>'
      }
    });
    
    expect(wrapper.find('.test-content').exists()).toBe(true);
    expect(wrapper.find('.custom-title').exists()).toBe(true);
    expect(wrapper.find('.custom-button').exists()).toBe(true);
    expect(wrapper.find('.custom-footer').exists()).toBe(true);
  });

  // 测试样式类应用
  it('should apply correct style classes', async () => {
    const wrapper = mount(SFullModal, {
      props: {
        visible: true,
        fullScreen: true
      }
    });
    
    expect(wrapper.find('.full-base-modal').classes()).toContain('full-screen');
    expect(wrapper.find('.ant-modal-content').attributes('style')).toContain('height: calc(100vh)');
  });
});
