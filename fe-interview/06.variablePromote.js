function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

function getName() {
  console.log(5)
}

// 请问
Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()

/**
 * 首先分下一下:
 * Foo.getName():Foo是个对象，对象.方法，执行console.log(2) ==> 2
 * getName():这个方法针对变量提升的问题主要是：var getName和getName,对于函数和变量相同的，只提升函数，不提升变量， ==> 4
 * Foo().getName():先执行Foo()方法，也就是执行了函数内的getName函数，也就是把全局的getName替换成了函数内的方法==> 1
 * getName(): 等同于this.getName ==> 1
 * new Foo.getName(): 这个主要考察运算符的优先级的（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence），
 * ==> new function() {console.log(2)}() ==> 2
 *
 * new Foo().getName(): 先算new Foo()等于实例化对象，在。getName() ==> 3
 * new new Foo().getName ==> new foo.getName ==> 3
 */
