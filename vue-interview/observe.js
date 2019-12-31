function observe(data) {
    if (!data || typeof data !== 'object') return

    Object.keys(data).forEach(key => { defineReactive(data, key, data[key]) })
}

function defineReactive(data, key, val) {
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不可定义
        get: function(val) {
            return val
        },
        set: function(newVal) {
            return newVal
        }
    })
}