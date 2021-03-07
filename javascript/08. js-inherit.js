/**
 * 继承：
 * 1. 原型继承
 * 2. 组合继承
 * 
 * 
*/
// ES5
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