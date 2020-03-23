/** 
 * 1.0 ES6函数基本用法
*/
// 允许为函数的参数设置默认值
function fn1(w1, w2 = 'world') {
    console.log(w1 + w2)
}

function Point(x = 0, y = 0) {
    this.x = x
    this.y = y
}
let p = new Point()
console.log(p) // {x: 0, y: 0}

// 参数变量是默认声明的，所以不能用let或const再次声明。
function fn2(x = 6) {
    let x = 1 // 报错
    const x = 2 // 报错
}

// 使用参数默认值时，函数不能有同名参数。
function fn3(x, x, y = 2){}

// 另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let a = 99
function fn4(p = a + 1) {
    console.log(p)
}
fn4() // 100

/** 
 * 2.0 与解构赋值默认值结合使用
 * */ 
function fn5({x, y = 5}) {
    console.log(x, y)
}
foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2 
foo() // TypeError Cannot read property 'x' of undefined

function fn6({x, y = 5} = {}) {}

fn6() // undefined, 5

function fn7(url, { body = '', methods = 'GET', headers = {} }) {
    console.log(methods)
}
fn7('', {}) // GET
fn7('') // 报错

function fn8(url, { body = '', methods = 'GET', headers = {} } = {}) {
    console.log(methods)
}
fn8() // GET

// 都设定了参数默认值
// 写法一设置了函数参数默认值为空对象，但是设置了对象结构赋值的默认值
// 写法二函数参数默认值是有具体属性的对象，但是没有设置对象结构赋值的默认值
// 写法一
function m1({x = 0, y = 0} = {}) {
    return [x, y]
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y]
}
m1() // [0, 0]
m2() // [0, 0]
m1({x: 1, y: 2}) // [1, 2]
m2({x: 1, y: 2}) // [1, 2]
m1({x: 1}) // [1, 0]
m2({x: 1}) // [1, undefined]
m1({}) // [0, 0]
m2({}) // [undefined, undefined]

/** 
 * 3.0 参数默认值的位置
*/
function fn9(x = 1, y) {
    console.log(x, y)
}
fn9() // 1, undefined
fn9(2) // 2, undefined
fn9(, 1) // 报错
fn9(undefined), 1 // 1, 1

// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
fn9(null, 1) // null, 1

/**
 * 4.0 函数的length属性
 * */ 
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
(function (a) {}).length // 1
(function (a = 2) {}).length // 0
(function (a, b = 2, c = 3) {}).length // 1
(function (...arg) {}).length // 0

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
(function (a = 5, b, c) {}).length // 0
(function (a, b = 4, c) {}).length // 1

/**
 * 5.0 作用域
 * 函数进行声明初始化的时候，参数形成一个单独的作用域(context)
 * 等到初始化结束，这个作用域就会消失
 * */ 
var x = 1
function fn10(x, y = x) {
    console.log(y)
}
fn10(2) // 2

let x = 1
function fn11(y = x) {
    let x = 2
    console.log(y)
}
fn11() // 1

function fn12(y = x) {
    let x = 1
    console.log(y)
} 
fn12() // x is not defined

/**
 * 6.0 rest参数
 * ES6引入rest参数(...变量名)，用于获取函数的多余参数
 * 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
 * */ 
function restA(...rest) {
    let sum
    for (let i of rest) {
        sum += i
    }
    return sum
}
restA(1, 2, 3)

function restB() {
    return Array.prototype.slice.call(arguments).sort()
} 
const restC = (...num) => { num.sort() }