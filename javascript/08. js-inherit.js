/**
 * 继承：
 * 1. 原型继承
 * 2. 构造函数继承
 * 3. 组合继承
 * 4. 原型式继承
 * 5. 寄生式继承
 * 6. 寄生式组合继承
 * 
*/
// 1. 原型继承
/**
 * 说明：将子类的原型挂载到父类对象上
 * 缺点: 子类new出的实例，父类属性没有隔离，会互相影响
 * 
*/
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function() {
    console.log(this.name + '==' + this.age)
}
function Sun() {
    this.type = 'sun'
}
Sun.prototype = new Person('lx', 20) // 原型继承
let sun1 = new Sun()
let sun2 = new Sun()
console.log(sun1.name) // lx
console.log(sun2.age) // 20
console.log(sun2.sayHi()) // lx==20 

// 2. 构造函数继承 es5 
/**
 * 说明：直接利用call或者apply方法将父类构造函数的this绑定为子类构造函数的this就可以了
 * 缺点：无法继承原型链上的属性与方法
 * 
*/
function Animal(name) {
    this.name = name
}
Animal.prototype.sayName = function() {
    console.log('我的名字是：' + this.name)
}
function Dog(name, color) {
    Animal.call(this, name)
    this.color = color
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog = new Dog('金毛', 'yellow')
dog.sayName()
console.log(dog)

// ES6
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._sex = null
    }
    get sex() {
        return this._sex
    }
    set sex(val) {
        this._sex = val
    }
    sayName() {
        console.log(`我的名字是：${this.name}`)
    }

    static getCount() {
        return 5
    }
}

class Coder extends People {
    constructor(name, age, company) {
        super(name, age)
        this.company = company
    }
    showCompany() {
        console.log(this.company)
    }
}

let pl = new People('hh', '20')
pl.sex = 'male'
console.log(pl.sex)

let code1 = new Coder('lx', 26, 'alibaba')
console.log(code1)
code1.sayName()
code1.showCompany()
console.log(code1.sex)

// 3. 组合继承
/**
 * 说明：组合上面的构造函数与原型继承的功能
 * 缺点：call()方法已经拿到父类所有的属性，后面在使用原型时也会有父类的所有属性
 * 
*/
function Person2() {
    this.name = 'p2'
    this.arr = [1, 2, 3]
}
Person2.prototype.say = function() {
    console.log(this.name)
}