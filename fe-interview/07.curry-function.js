/** 
 * 函数柯里化：在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * */ 

// 公式类型1,
fn(a, b, c, d) = fn(a)(b)(c)(d)
fn(a, b, c, d) = fn(a, b)(c)(d)
fn(a, b, c, d) = fn(a, b, c)(d)
// 传入参数等于函数参数数量时开始执行

// 公式类型2
fn(a, b, c, d) = fn(a)(b)(c)(d)()
fn(a, b, c, d) = fn(a);fn(b);fn(c);fn(d);fn()
// 当没有参数传入时（且参数数量）开始执行

const createCurry = (fn, ...args) => {
  let _args = args || []
  let len = fn.length

  return (...rest) => {
    _args.push(...rest)

    if (_args.length < len) {
      return createCurry.call(this, fn, ..._args)
    } else {
      return fn.apply(this, _args)
    }
  }
}


// curry简洁版实现
function curry(fn) {
  let args = Array.prototype.slice.call(arguments, 1)
  return function () {
    let innerArgs = Array.prototype.slice.call(arguments)
    let finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}

// 加强版
function curryStrong(f) {
  let len = f.length
  return function t() {
    let innerLen = arguments.length
    let args = Array.prototype.slice.call(arguments)

    if (innerLen >= len) {
      return f.apply(undefined, args)
    } else {
      return function() {
        let innerArgs = Array.prototype.slice.call(arguments)
        let allArgs = args.concat(innerArgs)
        return t.apply(undefined, allArgs)
      }
    }
  }
}

// 实现02
function curry02() {
  let allArgs = Array.prototype.slice.call(arguments)
  let add = function() {
    allArgs.push(...arguments)
    return add
  }
  add.toString = function() {
    return allArgs.reduce((a, b) => a + b)
  }
  return add
}


// 实现03
// func要转换的函数
// func.length 函数参数长度
// args.length
function curry03(func) {
  return function curried(...args) {
    if (args.length > func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}


let user = {
  name: 'John',
  go: function() { console.log(this.name) }
};

(user.go)()


let obj, method

obj = {
  go: function() { console.log(this) }
};

obj.go();
(obj.go)();
(method = obj.go)();
(obj.go || obj.stop)();



