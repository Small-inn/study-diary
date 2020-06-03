/**  
 * 1. 先定义一个对象
 * 2. 这个对象继承构造函数的原型链
 * 3. 将构造函数的this指向这个对象
 * 4. 根据构造函数的返回值类型返回结果
 * */ 
function myNew(fn) {
  let obj = {}
  obj = Object.create(fn.prototype)
  let args = Array.prototype.slice.call(arguments, 1)
  let res = fn.call(obj, args)
  return typeof res === 'object' || res instanceof Function ? res : obj
}
// 最后返回的判断：在JavaScript构造函数中：
// 如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；
// 如果return引用类型，那么实例化对象就会返回该引用类型
function foo() {
  this.name = 'lx'
  return function () {}
}
new foo() // fn() {}
function bar() {
  this.name = 'hh'
  return 1
}
new bar() // {name: 'hh'}