const focusDirective = {
  // 指令挂载时触发
  mounted(el) {
    el.style.backgroundColor = 'red';
    el.addEventListener('click', () => {
      console.log('元素被点击了');
    });
  }
};

export default focusDirective;
