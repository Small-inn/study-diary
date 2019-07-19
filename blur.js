// 失去焦点事件，解决ios软键盘回不去的问题
export const blur = () => {
  setTimeout(() => {
    const scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, Math.max(scrollHeight - 1, 0));
  }, 200);
}