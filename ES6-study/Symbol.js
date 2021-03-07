let s1 = Symbol()
let s2 = Symbol()

console.log(s1 === s2)

let s3 = Symbol('foo')
let s4 = Symbol('bar')

let obj = { name: 'lx' }
let s5 = Symbol(obj)
console.log(s5)

let obj2 = {
    name: 'hh',
    toString() {
        return this.name
    }
}
let s6 = Symbol(obj2)
console.log(s6)


// Symbol.for()
// 全局登记
let s7 = Symbol.for('foo')
let s8 = Symbol.for('foo')
console.log(s7 === s8) // true

console.log(Symbol.keyFor(s7)) // 返回全局登记的key

// for in / for of 访问不到Symbol作为的key
let age = Symbol('age')
let obj3 = {
    name: 'lx',
    [age]: '18'
}
for (const key in obj3) {
    console.log(key)
}