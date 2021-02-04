/**
 * 1.0 myCall
 * 改变this指向
 * 传入参数
 * 立即执行
 * 返回值
 * */

Function.prototype.myCall = function(context, ...parameter) {
  context = context || window
  context.fn = this
  const res = context.fn(...parameter)
  // ctx.fn(...parameter)
  delete context.fn
  return res
}
/**
 * 2.0 myApply
 * */

Function.prototype.myApply = function(context, parameter) {
  if (typeof context === 'object') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  let fn = Symbol()
  context[fn] = this
  const res = context[fn](parameter)
  delete context[fn]
  return res
}

/**
 * 3.0 myBind
 * */

Function.prototype.myBind = function(context, ...parameter) {
  let _that = this
  return function(...finallyArgs) {
    return _that.call(context, ...parameter, ...finallyArgs)
  }
}
