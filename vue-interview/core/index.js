function Vue(options) {
    var self = this
    this.data = options.data
    this.methods = options.methods
    // 代理
    Object.keys(this.data).forEach(key => {
        self.proxyKeys(key)
    })

    observe(this.data)
    new Compile(options.el, this)
    options.mounted.call(this) // 事情处理好之后执行mounted函数

    Vue.prototype = {
        proxyKeys: function(key) {
            var self = this
            Object.defineProperty(this, key, {
                enumerable: false,
                configurable: true,
                get: function getter() {
                    return self.data[key]
                },
                set: function setter(newVal) {
                    return self.data[key] = newVal
                }
            })
        }
    }
}