let mySetInterval = (callback, userTime) => {
  const Time = Date.now
  let startTime = Time() // 获取当前时间戳
  let currentTime
  let myLoop = () => {
    currentTime = Time()
    let index = requestAnimationFrame(myLoop)
    if (currentTime - startTime >= userTime) {
      startTime = currentTime = Time()
      // 调callback
      callback(null, index)
    }
  }
  return window.requestAnimationFrame(myLoop)
}
