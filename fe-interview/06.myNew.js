
/**
 * 首先我们要知道new创建实例，new做了什么
 * 
 * 1. 为新对象开辟一块内存空间
 * 2. 把函数体内的this指到这个新开辟的内存空间
 * 3. 将新对象的__proto__这个属性指向对应构造函数的prototype属性，把实例对象和原型对相关关联起来
 * 4. 执行函数逻辑，如果构造函数没有return，就把这个创建的对象return出来
 * 
*/


function myNew(Fn, ...args) {
  // 首先创建一个以构造函数为原型的的对象
  const obj = Object.create(Fn.prototype)
  // 通过this指向这个对象，执行函数中的代码，以获取私有属性
  const res = Fn.apply(obj, args)
  // 如果构造函数返回了一个新对象，就返回该值，如果返回值不是对象，就返回创建的对象
  return res instanceof Object ? res : obj
}


function Person(name, age) {
  this.name = name
  this.age = age
}
let p1 = new Person('lx', 20)

let p2 = myNew(Person, 'lx', 18)

console.log(p1)
console.log(p2)