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

/**
 * @param  {number} year 要判断的年份
 * @return {boolean} 返回布尔值
 */
function leapYear(year) {
    return !(year % (year % 100 ? 4 : 400))
}

/** 
 * 判断时间格式是否有效
 * 1.短时间，如 「10:24:04」
 * @param {String} str 需要验证的短时间
 * @return {Boolean} 返回布尔值
 * */
function isTime(str) {
    let a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/)
    if (a === null) return false
    if (a[1] >= 24 || a[3] >= 60 || a[4] >= 60) return false
    return true
}
/** 
 * 2.短日期，如「2019-02-01」
 * */
function isDate(str) {
    let result = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (result === null) return false
    const D = new Date(result[1], result[3] - 1, result[4])
    return (D.getFullYear() === result[1] && D.getMonth + 1 === result[3] && D.getDate() === result[4])
}

/**
 * 验证日期大小
 * 例："2019-10-24" 和 "2019-10-25"
 * @param  {string} d1需要验证的日期1
 * @param  {string} d2需要验证的日期2
 * @return {boolean} 返回布尔值
 */
function compareDate(d1, d2) {
    return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))))
}

/**
 * 验证一个日期是不是今天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
function isToday(val) {
    return new Date().toLocaleDateString() == new Date(val).toLocaleDateString();
}

/**
 * 验证传入的日期是否是昨天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
function isYesterday(val) {
    let now = new Date()
    let yesterday = new Date(now - 1000 * 60 * 60 * 24)
    let test = new Date(val)
    if (yesterday.getYear() === test.getYear() && yesterday.getMonth() === test.getMonth() && yesterday.getDate() === test.getDate()) {
        return true
    } else {
        return false
    }
}

/**
 * 设置几天后的日期
 * @param  {string} date 起始日期
 * @param  {number} day 向后的天数
 * @return {string} 返回想要得到的日期
 */
function convertDate(date, day) {
    let tempDate = new Date(date)
    tempDate.setDate(tempDate.getDate() + day)
    let Y = tempDate.getFullYear()
    let M = tempDate.getMonth() + 1 < 10 ? '0' + (tempDate.getMonth() + 1) : tempDate.getMonth() + 1
    let D = tempDate.getDate() < 10 ? '0' + (tempDate.getDate()) : tempDate.getDate()
    let result = Y + "-" + M + "-" + D
    return result
}