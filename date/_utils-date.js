/** 
 * 获取当前时间
 * */ 
let timesTemp = Date.parse(new Date()), // 精确到秒
    timesTemp2 = new Date().valueOf(), // 精确到毫秒
    timesTemp3 = new Date().getTime(), // 精确到毫秒
    timesTemp4 = +new Date()

/** 
 * 获取指定时间戳
 * */ 
let appointTime = new Date('2020-01-24 08:00:00').getTime(),
    appointTime2 = new Date('2020/01/24 08:00:00').getTime()

/**
 * 获取前一天的时间戳
 */
let beforeDayTime = +new Date() - 24 * 3600 * 1000

/** 
 * 获取今日零点时间戳
 */
let zeroTime = new Date(new Date().toLocaleDateString()).getTime()

/** 
 * 获取23:59:59的时间戳
 */
let lastSecTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 3600 * 1000 - 1 

/** 
 * 返回指定时间戳之间的间隔
 * */ 
function getTimeInterval(startTime, endTime) {
    let oneDaySecond = 86400
    let runTime = parseInt((endTime - startTime) / 1000) // 获取时间间隔秒数
    let year = Math.floor(runTime / oneDaySecond / 365) // 获取年
    runTime = runTime % (oneDaySecond * 365)
    let month = Math.floor(runTime / oneDaySecond / 30) // 获取月
    runTime = runTime % (oneDaySecond * 30)
    let day = Math.floor(runTime / oneDaySecond) // 获取天
    runTime = runTime % oneDaySecond
    let hour = Math.floor(runTime / 3600) // 获取时
    runTime = runTime % 3600
    let minute = Math.floor(runTime / 60) // 获取分
    runTime = runTime % 60
    let second = runTime // 获取秒

    let str = ''
    if (year > 0) {
        str = year + '年'
    }
    if (year <= 0 && month > 0) {
        str = month + '月'
    }
    if (year <= 0 && month <= 0 && day > 0) {
        str = day + '天'
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
        str = hour + '小时'
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
        str = minute + '分钟'
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
        str += second + '秒'
    }
    str += '前'
    return str
}