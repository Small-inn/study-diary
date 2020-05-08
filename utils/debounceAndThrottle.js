// debounce中心思想：某段时间内，不管你触发了多少次回调，都只认最后一次
/**
 * 防抖函数：某个时间段内,只执行一次
 * @param fn 事件触发操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns { function }
 *
 */

function debounce(fn, delay) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      // timer = null
    }, delay)
  }
}

// 调用
window.scroll = debounce(function () {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  console.log(scrollTop)
}, 200)

// throttle中心思想：在某段时间内，不管你触发了多少次回调，都只认第一次，并在计时结束时予以响应

/**
 * 节流函数：处理函数截止后一段时间依次执行
 * @param fn 事件触发操作
 * @param delay 间隔多少毫秒需要触发一次事件
 * @returns { function }
 *
 */
// 首次不执行
function nFirstThrottle(fn, delay) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
// 首次执行
function throttle(fn, delay) {
  let last = 0
  return function () {
    let curr = +new Date()
    if (curr - last > delay) {
      fn.apply(this, arguments)
      last = curr
    }
  }
}
