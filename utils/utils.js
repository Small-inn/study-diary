/**
 *
 * 颜色十六进制转RGB
 * @param {String} color 十六进制的颜色变量
 * @return {Array}
 *
 */
const hex2rgb = color => {
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
const isDeepColor = color => {
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

// 数组版
const fibn = n => {
  let fibArr = [0, 1]
  if (n <= 2) return 1
  for (let i = 0; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }
  return fibArr[n]
}
//  递归版
const fibonacci = n => {
  if (n === 1 || n === 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 判断一个数是否为素数（质数）
 * @param {number} n
 * @return {boolean} true 是 false 否
 */
// 第一版
const isPrimeOne = n => {
  let divisor = 2
  while (n > divisor) {
    if (n % divisor === 0) {
      return true
    } else {
      divisor++
    }
  }
}
// 升级版
const isPrime = n => {
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
  let temp // 用于存储中间变量
  if (a < b)(temp = a), (a = b), (b = temp)

  while (temp !== 0)(temp = a % b), (a = b), (b = temp)
  return a
}

/**
 * 使用递归算法
 * @param {*} x
 * @param {*} y
 */
const gcdD = (x, y) => {
  if (y === 0) {
    return x
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

const gcd = (x, y) => (!y ? x : gcd(y, x % y))
/**
 *
 * 求一列数组中的最大公约数
 * @param {array} arr
 * @return {number}
 *  */

const arrayGcd = arr => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y))
  return arr.reduce((a, b) => gcd(a, b)) 
}

/**
 * 计算一个数组中的最小公倍数
 * @param {array} arr
 * @return {number}
 */

const arrayLcm = arr => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y))
  const lcm = (x, y) => (x * y) / gcd(x, y)
  return arr.reduce((a, b) => {
    lcm(a, b)
  })
}

/**
 * 获取数组中的最大、最小值
 * @param {array} arr
 */
const arrMax = arr => Math.max(...arr)
const arrMin = arr => Math.min(...arr)

/**
 * 按照一定的size将一个数组切分成含有size个数的更小块的数组
 * @param {array} arr 需要切分的数组
 * @param {number} size 切分的份数
 * @return {array} 数组
 */
const chunk = (arr, size) => {
  Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => {
    arr.slice(i * size, i * (size + 1))
  })
}

/**
 * 去除数组里的falsey的元素（该值布尔运算值为false的）
 */
const compact = arr => arr.filter(Boolean)

/**
 *
 * 统计一个元素在一个数组中出现的次数。
 * @param {array} arr
 * @param {val} any
 * @return {number}
 */
const countOccurrences = (arr, val) => {
  arr.reduce((a, v) => {
    v === val ? a + 1 : a + 0
  }, 0)
}

/**
 *
 * 深度平摊一个数组
 * @param {array} arr
 * @return {array}
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

const deepFlatten2 = arr => arr.reduce((x, y) => x.concat(y), [])

const deepFlatten3 = arr => arr.flat(Infinity) // es6语法

/**
 * 按指定分隔符
*/
const deepFlatten4 = arr => {
  const toString = Array.prototype.toString
  Array.prototype.toString = function() {
    return this.join(',')
  }
  let res = arr + ''
  Array.prototype.toString = toString
  return res
}

const deepFlatten5 = data => {
  let res = []
  const each = (arr) => {
    arr.forEach(item => {
      if (item instanceof Array) {
        each(item)
      } else {
        res.push(item)
      }
    })
  }
  each(data)
  return res.join(',')
}

/**
 *
 * 判断回文字符串
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = str => {
  let i,
    len = str.length
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) return false
  }
  return true
}

const isPalindromeOther = str => {
  return (str === str.split('').reverse().join(''))
}

/**
 *
 * 给出1-100的未排序数组中查找缺失的数
 * @param {array} arr
 * @return {number}
 *
 */
const missingNumber = arr => {
  const ARR_LEN = arr.length + 1
  const TOTAL_COUNT = (ARR_LEN * (ARR_LEN + 1)) / 2
  let sum
  for (let i = 0; i < ARR_LEN; i++) {
    sum += arr[i]
  }
  return TOTAL_COUNT - sum
}

// 判断是否是闰年
const leapYear = year => {
  return !(year % (year % 100 ? 4 : 400))
}

// 交换值
let a = 1,
  b = ((2)[(a, b)] = [b, a])

// 快速创建100个1的数组
const numArr = Array.from(new Array(100), x => 1)

new Array(100).fill(1)

// 货币千分位
const thousands = num => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 多个数组之间的交集
// 1.0
const intersect = (...rest) => {
  if (rest.length === 0) {
    return []
  }
  if (rest.length === 1) {
    return rest[0]
  }
  return rest.reduce((result, item, index) => {
    return result.filter(v => item.includes(v))
  }, [])
}

// Array.prototype.sort()
/**  
 * 默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序
 * */
let testArr = [3, 15, 8, 29, 102, 22]
testArr.sort()
testArr.sort((a, b) => a - b)

// 某公司 1 到 12 月份的销售额存在一个对象里面
let obj = {
  1: 222,
  2: 123,
  5: 888
}
const result = Array.from({
  length: 12
}).map((_, index) => obj[index + 1] || null)
console.log(result)

// 数字转成中文
function toChineseNum(num) {
  const model = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const unit = ['', '十', '百', '千', '万', '十', '百', '千']
  let numArr = num.toString().split('').reverse()
  let sArr = []
  numArr.map((item, index) => {
    if (item === '0') {
      sArr.push(model[item])
    } else {
      sArr.push(model[item] + '' + unit[index])
    }
  })
  return sArr.reverse().join('')
}

// Virtual DOM render方法
const ul = h('ul', { id: 'list', style: 'color : red' }, [
  h('li', { class: 'item' }, ['Item 1']),
  h('li', { class: 'item' }, ['Item 2']),
  h('li', { class: 'item' }, ['Item 3']),
])

class VNode {
  constructor(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }
  render() {
    const dom = document.createElement(this.tagName)
    if (this.props) {
      // const props = Object.keys(this.props)
      // props.map(prop => dom.setAttribute(prop, this.props[prop]))
      Object.entries(this.props).forEach(([key, value]) => dom.setAttribute(key, value)) 
    }
    if (this.children) {
      this.children.map(child => dom.appendChild(child instanceof VNode ? child.render() : document.createTextNode(child)))
    }
    return dom
  }
}
const h = (tagName, props, children) => new VNode(tagName, props, children)

// 有时候我们需要访问一个对象比较深的层次，对象某个属性不存在就会报错，例如
/**
 * let data = { a : { b: { c: 'script' } } }
 * data.a.b.c ===> script
 * data.a.b.c.d ===> 报错，代码停止执行
 * 完成一个函数使得不存在的数据返回undefined
 * safeGet(data, 'a.b.c.d') ===> undefined
*/
const safeGet = (data, path) => {
  if (!path) return undefined
  let arr = path.split('.')
  try {
    while (arr.length) {
      data = data[arr.shift()]
    }
  } catch (err) {
    return undefined
  }
  return data
}

/**
 * 检查浏览器是否支持触摸事件
*/
const touchSupported = () => {
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
}

/**
 * 随机获取布尔值
*/
const randomBoolean = () => Math.random() >= 0.5

/**
 * 检查日期是否为工作日
*/
const isWeekDay = (date) => date.getDay() % 6 !== 0

/**
 * 从日期中获取时间
*/
const timeForDate = date => date.toTimeString().slice(0, 8)
