/**
 * Array.reduce
 * 语法：arr.reduce(cb[, initialValue])
 * 参数： 
 *    callback： 针对每一项执行的函数
 *      acc: 初始值/上一次回调返回的值
 *      cur: 当前元素
 *      index: 当前索引
 *      src: 源数据
 * 
 * 描述：方法接收一个函数作为累加器，reduce为数组中的每一个元素依次执行回调函数，不包括数组中被删除或者从未被赋值的元素
 *    1. 如果没有初始值，pre将使用数组中的第一个元素
 *    2. 在没有初始值的空数组上调用reduce将报错
 *    3. 在没有初始值的仅有一个元素的数组上使用reduce，那么callback不会执行，此唯一值将被返回
 * 
 * **/ 

/**
 * 下面的reduce中的callback执行几次？
 * 
 * 1. 如果没初始值，callback执行3次， 第一次执行pre = 1, cur = 2, index = 1
 * 2. 有初始值，callback执行4次, 第一次执行pre = 初始值， cur = 1, index = 0
 * **/ 
[1, 2, 3, 4].reduce((pre, cur, index, src) => {
  console.log('🍺', pre, cur, index)
  return pre + cur
})

Array.prototype.myReduce = function(fn, initialValue) {
  if (initialValue === undefined && !this.length) {
    throw Error('myReduce of empty array with no initial value')
  }
  let result = initialValue ? initialValue : this[0]
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    result = fn(result, this[i], i, this)
  }
  return result
}

