/**
 * 
 * 
 * Object.prototype.toString
 * 需要注意的是，这个方法在IE6中存在兼容性问题
 * 
 * ES5规范
 * 当 toString 方法被调用的时候，下面的步骤会被执行：
    如果 this 值是 undefined，就返回 [object Undefined]
    如果 this 的值是 null，就返回 [object Null]
    让 O 成为 ToObject(this) 的结果
    让 class 成为 O 的内部属性 [[Class]] 的值
    最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串
 */
  const type = (obj) => {
    if (obj == null) return obj + ''
    return typeof obj === 'object' || typeof obj === 'function' ? 
      Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() || 'object' :
      typeof obj
  }
