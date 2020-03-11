// 抽奖倒计时
const setTimer = (duration = 0) => {
  clearInterval(timer)
  let clock = {} //
  let timer = setInterval(() => {
    if (duration > 0) {
      let days = Math.floor(duration / (3600 * 24)), // 天数
        hours = Math.floor((duration - days * 3600 * 24) / 3600), // 小时数
        minutes = Math.floor((duration - days * 3600 * 24 - hours * 3600) / 60), // 分钟数
        seconds = duration - days * 3600 * 24 - hours * 3600 - minutes * 60 // 秒
      clock = Object.assign(clock, {
        days: days,
        hours: hours > 9 ? hours : '0' + hours,
        minutes: minutes > 9 ? minutes : '0' + minutes,
        seconds: seconds > 9 ? seconds : '0' + seconds
      })
      // console.log("clock", this.clock, duration);
      duration -= 1
    } else {
      clock = Object.assign(clock, {
        days: '0',
        hours: '00',
        minutes: '00',
        seconds: '00'
      })
      clearInterval(timer)
    }
  }, 1000)
}
