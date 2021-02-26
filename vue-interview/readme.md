## vue 面试部分

---

1. 双向数据绑定原理

- view ===(input 事件)===> data、 data ===(Object.defineProperty)===> view

2. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象
  > Object.defineProperty(obj, prop, descriptor)，劫持data中的数据

3. vue通过以下4个步骤实现双向绑定

  **图解**
  ![](https://github.com/Small-inn/study-diary/blob/master/image/vue-core.png)

  - **实现一个监听器Observer**：对数据对象进行遍历，包括子属性对象的属性，利用Object.defineProperty()对属性都加上setter和getter。这样的话，给这个对象的某个属性赋值，就会触发setter，那么就能监听到了数据变化
  ```javascript

  function Observer(obj) {
    if (!obj || typeof obj !== 'object') return

    let keys = Object.keys(obj)

    keys.forEach((key) => {
      defineReactive(obj, key, obj[key])
    })

    return obj
  }


  function defineReactive(obj, key, val) {
    var dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log(`属性被读取了`)
        <!-- 2.0 有了dep函数 -->
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        console.log(`属性被赋值了`)
        if (newVal === val) return
        val = newVal
        <!-- 2.0 有了dep函数 -->
        dep.notify()
      }
    })
  }
  ```

  - **实现一个compiler**：解析Vue模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变化，收到通知，调用更新函数进行数据更新
  ```javascript
  compilerText: function(node, exp) {
    var self = this
    var initText = this.vm[exp]
    this.updateText(node, initText)
    new Watcher(this.vm, exp, function(value) {
      self.updateText(node, value)
    })
  }
  ```

  - **实现一个订阅者Watcher**：Watcher订阅者是Observer和Compiler之间的通信桥梁，主要任务是订阅Observer中的属性值的变化，当收到属性值变化的消息时，触发解析器Compiler中对应的更新函数，更新视图
  ```javascript
  /**
   * 
   * vm: 是一个vue的实例对象
   * exp: node节点的v-model等指令的属性值或者插值符号中的属性， v-model = “name” exp就是name
   * cb: 是Watcher绑定的更新函数
   **/
  function Watcher(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
  }
  Watcher.prototype = {
    update: function() {
      this.run()
    }
    run: function() {
      var value = this.vm.data[this.exp]
      var oldVal = this.value
      if (value !== oldVal) {
        this.value = value
        this.cb.call(this.vm, value, oldVal)
      }
    }
    get: function() {
      Dep.target = this // 全局变量 订阅者 赋值
      var value = this.vm.data[this.exp]
      Dep.target = null
      return value
    }
  }
  ```


  - **实现一个订阅器Dep**：订阅器采用 发布--订阅 设计模式，用来收集订阅者Watcher，对监听器Observer和订阅者Watcher进行统一管理
  ```javascript
  function Dep() {
    this.subs = []
  }
  Dep.prototype = {
    addSub: function(obj) {
      this.subs.push(sub)
    }
    notify: function() {
      this.subs.forEach(function(sub) {
        sub.update()
      })
    }
  }
  Dep.target = null
  ```

**双向数据绑定原理图**
![](https://github.com/Small-inn/study-diary/blob/master/image/reactive-core.png)

```
  var obj = {}
  var descriptor = Object.create(null) // 没有继承的属性
  // 默认没有 enumerable，没有 configurable，没有 writable
  descriptor.value = 'static'
  Object.defineProperty(obj, 'key', descriptor)
  <!-- 显式 -->
  Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
  })
```

3. 设计模式
- 观察者模式
