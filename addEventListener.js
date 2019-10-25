/**
 * 兼容性封装
 */
function addEventHandler(target, type, func) {
  if (target.addEventListener) {
    //监听IE9，谷歌和火狐
    target.addEventListener(type, func, false)
  } else if (target.attachEvent) {
    target.attachEvent('on' + type, func)
  } else {
    target['on' + type] = func
  }
}

function removeEventHandler(target, type, func) {
  if (target.removeEventListener) {
    //监听IE9，谷歌和火狐
    target.removeEventListener(type, func, false)
  } else if (target.detachEvent) {
    target.detachEvent('on' + type, func)
  } else {
    delete target['on' + type]
  }
}

function eventOne() {
  alert(111)
}

window.onload = function() {
  const btn = document.getElementById('btn')
  // 添加事件监听
  addEventHandler(btn, 'click', eventOne)
  // 去除事件监听
  removeEventHandler(btn, 'click', eventOne)
}
