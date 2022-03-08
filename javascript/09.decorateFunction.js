/***
 * 
 * 装饰器模式：
 * 例：重负载函数，结果是稳定的，输入同样的参数返回相同的结果
*/

function cacheDecorator(fn) {
  let map = new Map()

  return function(x) {
    if (map.has(x)) {
      return map.get(x)
    }

    let result = fn(x)

    map.set(x, result)

    return result
  }
}

function cacheDecorator(fn) {
  let map = new Map()
  return function (x) {
    if (map.has(x)) {
      return map.get(x)
    }

    let result = fn.call(this, x)
    map.set(x, result)
  }
}

// 一个函数不能被重复绑定
function f() {
  console.log(this.name)
}

f = f.bind({ name: 'John' }).bind({ name: 'Jack' })

f()

// 

for (const key in object) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //   const element = object[key];
    
  // }
  if (typeof object[key] === 'function') {
    object[key] = object[key].bind(object)
  }
}


function mul(a, b) {
  return a * b
}

let double = mul.bind(null, 2)
double(3)

// 绑定函数参数的偏函数
function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args)
  }
}

let user = {
  name: 'John'
}

Object.getOwnPropertyDescriptor(user, name)

Object.defineProperty(user, {
  writable: false,
  enumerable: false,
  configurable: false
})

user.name = 'lx'

function f() {
  alert('hello')
}
f.defer(1000) //  1秒就弹出hello

Function.prototype.defer = function(delay) {
  setTimeout(this, delay)
}

function f(a, b) {
  return a + b
}

f.defer(2000)(1, 2)

Function.prototype.defer = function(delay) {
  let f = this
  return function(...args) {
    setTimeout(() => f.apply(this, args), delay)
  }
}
