function myNew(Fn, ...args) {
  // 首先创建一个以构造函数为原型的的对象
  const obj = Object.create(Fn.prototype)
  // 通过this指向这个对象，执行函数中的代码，以获取私有属性
  const res = Fn.apply(obj, args)
  // 如果构造函数返回了一个新对象，就返回该值，如果返回值不是对象，就返回创建的对象
  return res instanceof Object ? res : obj
}