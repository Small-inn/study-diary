/**
 * 代理：
 * 
 * 
*/

let obj = {}
let newVal = null
Object.defineProperty(obj, 'name', {
    get() {
        return newVal
    },
    set(val) {
        newVal = val
    }
})


// proxy
let obj2 = {}
let p = new Proxy(obj2, {})
p.name = 'imooc'
console.log(obj2.name)
console.log(obj2)

let arr = [7, 8, 9]
arr = new Proxy(arr, {
    get(target, prop) {
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[2])
console.log(arr[10])

let user = {
    name: 'lx',
    age: 20,
    _password: '***'
}
user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw Error('不能访问')
        } else {
            return target[prop]
        }
    },
    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw Error('不能访问')
        } else {
            target[prop] = val
        }
    },
    defineProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw Error('不能删除')
        } else {
            delete target[prop]
            return true
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(item => !item.startsWith('_'))
    },
    apply(target, ctx, args) {
        return target(...args) * 2
    },
    construct(target, args, newTarget) {
        console.log('constuct执行')
        return new target(...args)
    }
})


for (let key in user) {
    console.log(key)
}
console.log(user.name)
console.log(user._password)