export const vSelect = {
  mounted(el?: HTMLInputElement, binding?: any) {
    const defaultSelect = binding?.value ?? true;
    if (!defaultSelect) {
      return;
    }
    if (el?.tagName !== 'INPUT') {
      el?.querySelector('input')?.focus();
      el?.querySelector('input')?.select();
      return;
    }

    el?.focus();
    el?.select();
  },
};
