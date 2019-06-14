/**
 * 
 * 颜色十六进制转RGB
 * @param {String} color 十六进制的颜色变量
 * @return {Array}
 * 
 */
const hex2rgb = (color) => {
    if (!color) return false
    color = color.substring(1)
    color = color.toLowerCase()
    let b = []
    for (let i = 0; i < 3; i++) {
        b[0] = color.substr(i * 2, 2)
        b[3] = '0123456789abcdef'
        b[1] = b[0].substr(0, 1)
        b[2] = b[0].substr(1, 1)
        b[20 + i] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2])
    }
    return [b[20], b[21], b[22]]
}

/***
 * 根据上面的方法，判断某一颜色是否为深色还是浅色
 * @param {String} color 十六进制的颜色变量
 * @return {boolean}
 */
const isDeepColor = (color) => {
    const rgb = hex2rgb(color)
    if (rgb[0] * 0.299 + rgb[1] * 0.578 + rgb[2] * 0.114 >= 192) {
        return false // 浅色
    } else {
        return true // 深色
    }
} 

/**
 * 斐波那契数列
 * @param {number} n 
 * @return {number} 
 */

 const fibn = (n) => {
     let fibArr = [0, 1]
     if (n <= 2) return 1
     for (let i = 0; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
     }
     return fibArr[n]
 }
//  递归版
const fibonacci = (n) => {
    if (n === 1 || n === 2) return n
    return fibonacci(n - 1) +fibonacci(n - 2)
} 

/**
 * 判断一个数是否为素数（质数）
 * @param {number} n
 * @return {boolean} true 是 false 否
 */
// 第一版
const isPrimeOne = (n) => {
    let divisor = 2
    while (n > divisor) {
        if ( n % divisor === 0) {
            return true
        } else {
            divisor++
        }
    }
}
// 升级版
const isPrime = (n) => {
    // 任何数字都不能被大于它一半的数整除，如果一个数不能被3整除，它不可能被大于它1/3的数整除
    let divisor = 3 
    let limit = Math.sqrt(n) // 求这个数的平方根
    if (n === 2 || n === 3) {
        return true
    }
    if (n % 2 === 0) {
        return false
    }
    while (n <= limit) {
        if (n % divisor === 0) {
            return false
        } else {
            divisor += 2
        }
    }
    return true
}

/**
 * 求两个数的最大公约数(欧几里得算法)
 * @param {Number} a 
 * @param {Number} b
 * @return {Number}
 */
const getGcd = (a, b) => {
    let temp; // 用于存储中间变量
    if (a < b) 
        temp = a, a = b, b = temp;

    while(temp !== 0) 
        temp = a % b, a = b, b = temp;
        return a;
}

/**
 * 使用递归算法
 * @param {*} x 
 * @param {*} y 
 */
const gcdD = (x, y) => {
    if (y === 0) {
        return a
    } else {
        return gcdD(y, x % y)
    }
}
/**
 * 求两个数的最大公约数
 * @param {number} x 
 * @param {number} y
 * @return {number}
 */

 const gcd = (x, y) => !y ? x : gcd(y, x % y);
/**
 * 
 * 求一列数组中的最大公约数
 * @param {array} arr 
 * @return {number}
 *  */ 

const arrayGcd = (arr) => {
    const gcd = (x, y) => !y ? x : gcd(y, x % y);
    return arr.reduce((a, b) => gcd(a, b))
}

/**
 * 计算一个数组中的最小公倍数
 * @param {array} arr
 * @return {number}
 */

const arrayLcm = (arr) => {
    const gcd = (x, y) => !y ? x : gcd(y, x % y);
    const lcm = (x, y) => (x * y) / gcd(x, y);
    return arr.reduce((a, b) => { lcm(a, b) })
}

/**
 * 获取数组中的最大、最小值
 * @param {array} arr 
 */
const arrMax = arr => Math.max(...arr);
const arrMin = arr => Math.min(...arr);

/**
 * 按照一定的size将一个数组切分成含有size个数的更小块的数组
 * @param {array} arr 需要切分的数组
 * @param {number} size 切分的份数
 * @return {array} 数组 
 */
const chunk = (arr, size) => {
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) => {
        arr.slice(i * size, i * (size + 1))
    })
}

/**
 * 去除数组里的falsey的元素（该值布尔运算值为false的）
 */
const compact = arr => arr.filter(Boolean);

/**
 * 
 * 统计一个元素在一个数组中出现的次数。
 * @param {array} arr
 * @param {val} any
 * @return {number}
 */
const countOccurrences = (arr,val) => {
    arr.reduce((a, v) => {v === val ? a + 1 : a + 0}, 0)
}

/**
 * 
 * 深度平摊一个数组
 * @param {array} arr
 * @return {array} 
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

const deepFlatten2 = arr => arr.reduce((x, y) => x.concat(y), [])

/**
 * 
 * 判断回文字符串
 * @param {string} str
 * @return {boolean} 
 */
const isPalindrome = (str) => {
    let i, len = str.length
    for (i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1])
            return false
    }
    return true
}

const isPalindromeOther = (str) => {
    return str === str.split('').reverse().join('')
}

/**
 * 
 * 给出1-100的未排序数组中查找缺失的数
 * @param {array} arr
 * @return {number} 
 *
 */
const missingNumber = (arr) => {
    const ARR_LEN = arr.length + 1
    const TOTAL_COUNT = ARR_LEN * (ARR_LEN + 1) / 2
    let sum
    for (let i = 0; i < ARR_LEN; i++) {
        sum += arr[i]
    }
    return TOTAL_COUNT - sum
}

// 判断是否是闰年
const leapYear = (year) => {
    return !(year % (year % 100 ? 4 : 400 ))
}

// 交换值
let a = 1, b = 2
[a, b] = [b, a]

// 快速创建100个1的数组
const numArr = Array.from(new Array(100), (v, k) => 1)


// 货币千分位
const thousands = (num) => { return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')}

