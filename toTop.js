// 返回顶部
const toTop = () => {
    // window.scrollTo(0,0);
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        if (scrollTop > 0) {
            scrollTop -= 40;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    })
}