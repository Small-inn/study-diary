/**
 * 1.0
 * 此段代码放置在HTML文件中的script标签中
 * 1rem = 50px;
 *  */

setRem()
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
function setRem() {
  var html = document.querySelector('html')
  var width = html.getBoundingClientRect().width
  var fontSize = width / 7.5
  if (fontSize > 87) fontSize = 87
  if (fontSize < 42) fontSize = 42
  html.style.fontSize = fontSize + 'px'
}

/**
 * 2.0
 * 最简单的rem代码,
 * 根据设备大小不一样，动态设置根元素字体大小
 * */
;```
html {
    font-size: calc(100vw / 3.75);
}

body {
    font-size: .14rem;
}
```
