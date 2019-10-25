/**
 * 1.0 myCall
 * */

Function.prototype.myCall = function(context, ...parameter) {
  context.fn = this
  context.fn(...parameter)
  delete context.fn
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
  context[fn](parameter)
  delete context[fn]
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
