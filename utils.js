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

