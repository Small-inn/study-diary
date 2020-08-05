/**
 * 栈：是一种特殊的列表，栈内元素只能通过列表的一端访问，这一端称为栈顶。
 * 栈被称为一种后入先出（LIFO，last-in-first-out）的数据结构
 * 
 * push(方法) 入栈操作
 * pop(方法) 出栈操作
 * peek(方法) 返回栈顶元素
 * clear(方法) 清除栈内所有元素
 * length(属性) 记录栈内元素个数
 * empty(属性) 表示栈内是否含有元素
 * */ 

class Stack {
  constructor() {
    this.length = 0
    this.item = []
  }
  push(ele) {
    this.item[this.length++] = ele
  }
  pop() {
    return this.item[--this.length]
  }
  peek() {
    return this.item[this.length - 1]
  }
  clear() {
    this.item = []
    this.length = 0
  }
  empty() {
    return this.length === 0
  }
}

// 利用栈将一个数字从一种数制转换成另一种数制。假设想将数字 n 转换为以 b 为基数的数字
function nulBase(num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num / base)
  } while (num > 0) {
    let converted = ''
    while(s.length > 0) {
      converted += s.pop()
    }
    return converted
  }
}

function bitSet(bit, base) {
  let stack = new Stack(), result = ''
  while (bit > 0) {
    stack.push(bit % base)
    bit = Math.floor(bit / base)
  }
  while (!stack.empty()) {
    result += stack.pop().toString()
  }
  return result
}

function bitsSet2(bit, base) {
  if (bit === 0) return '0'
  if (!/^[0-9]+.?[0-9]*$/.test(bit)) {
    return new Error('请输入正确的数值！')
  }
  let arr = []
  while (bit > 0) {
    arr.push(bit % base)
    bit = Math.floor(bit / base)
  }
  return arr.reverse().join('')
}