
/**
 * 
 * 此段代码放置在HTML文件中的script标签中
 * 1rem = 50px;
 *  */ 
setRem();
window.addEventListener("orientationchange", setRem);
window.addEventListener("resize", setRem);
function setRem() {
    var html = document.querySelector("html");
    var width = html.getBoundingClientRect().width;
    var fontSize = width / 7.5;
    if(fontSize > 87) fontSize = 87;
    if(fontSize < 42) fontSize = 42;
    html.style.fontSize = fontSize + "px";
}