function Observer(data) {
    this.data = data
    this.walk(data)
}

Observer.prototype = {
    walk: function(data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
}


// function observe(data) {
//     if (!data || typeof data !== 'object') return

//     Object.keys(data).forEach(key => { defineReactive(data, key, data[key]) })
// }

// function defineReactive(data, key, val) {
//     observe(val)
//     Object.defineProperty(data, key, {
//         enumerable: true, // 可枚举
//         configurable: false, // 不可定义
//         get: function(val) {
//             return val
//         },
//         set: function(newVal) {
//             return newVal
//         }
//     })
// }


// 简版

function updateView() {
    console.log('视图更新了')
}

// 重新定义数组原型
const oldArrPrototype = Array.prototype
const arrProto = Object.create(oldArrPrototype)
['push', 'pop', 'shift', 'unshift'].forEach(e => {
    arrProto[e] = function() {
        updateView()
        oldArrPrototype[e].call(this, ...arguments)
    }
})

function defineReactive(target, key, val) {
    // 深度监听
    observe(val)
    Object.defineProperty(target, key, {
        get() {
            return val
        },
        set(newVal) {
            if (val !== newVal) {
                // 深度监听
                observer(newVal)
                val = newVal
                updateView()
            }
        }
    })
}


function observe(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    for (const key in object) {
        defineReactive(target, key, target[key])
    }
}