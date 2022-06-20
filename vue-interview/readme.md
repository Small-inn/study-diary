## vue 面试部分

---
### vue
1. 双向数据绑定原理
    - view ===(input 事件)===> data、 data ===(Object.defineProperty)===> view

2. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象

   > Object.defineProperty(obj, prop, descriptor)，劫持 data 中的数据

3. vue 通过以下 4 个步骤实现双向绑定

   **图解**
   ![](https://github.com/Small-inn/study-diary/blob/master/image/vue-core.png)

- **实现一个监听器 Observer**：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty()对属性都加上 setter 和 getter。这样的话，给这个对象的某个属性赋值，就会触发 setter，那么就能监听到了数据变化

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

- **实现一个 compiler**：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变化，收到通知，调用更新函数进行数据更新

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

- **实现一个订阅者 Watcher**：Watcher 订阅者是 Observer 和 Compiler 之间的通信桥梁，主要任务是订阅 Observer 中的属性值的变化，当收到属性值变化的消息时，触发解析器 Compiler 中对应的更新函数，更新视图

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

- **实现一个订阅器 Dep**：订阅器采用 发布--订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和订阅者 Watcher 进行统一管理

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

4. 为何在 v-for 中使用 key?

    - 首先必须使用 key，且不能是 index 和 random
    - diff 算法中通过 tag 和 key 来判断，是否是 sameNode
    - 减少渲染次数，提升渲染性能

5. vue组件通讯
    - 父子组件props和this.$emit
    - 自定义事件event.$on event.$off event.$emit
    - vuex

6. v-model实现原理
    - input元素的value=this.name
    - 绑定input事件this.name = $event.target.value
    - data更新触发re-render

    - 手动实现v-model
    ```vue
      <template>
        <input 
          type="text" 
          :value="text" 
          @input="$emit('change', $event.target.value)">
      </template>
      <script>
      export default = {
        model: {
          prop: 'text', // 对应value的text
          event: 'change'
        },
        props: {
          text: String
        }
      }
      </script>
    ```

7. 为什么data必须是一个函数
    - 在JS中对象是引用关系，每个vue组件是一个实例，如果data是一个对象，那么作用域没有隔离，子组件data属性会互相影响，若组件data是一个函数，每个实例维护一份对象独立的拷贝，就不会互相影响

8. 如何将组件的所有props传递给子组件
    - $props <User v-bind="$props" />

9. 何时需要使用beforeDesstory
    - 解绑自定义事件event.$off
    - 清除定时器
    - 解绑自定义的DOM事件，如window srcoll等

10. VNode描述一个DOM结构
    ```javascript
      {
        tag: 'div',
        props: {
          className: 'container',
          id: 'div1'
        }
        children: [
          {
            tag: 'p',
            children: 'vdom'
          },
          {
            tag: 'ul',
            props: { style: 'font-size: 20px' },
            children: [
              {
                tag: 'li',
                children: 'a'
              }
            ]
          }
        ]
      }
    ```

11. diff算法
    - O(n)^3，树的比较：左右树，排序
    - 优化时间复杂度
      - 只比较同一层级，不跨级比较
      - tag不相同，则删掉重建，不再深度比较
      - tag和key，两者都相同，则认为是相同节点，不再深度比较
      * **源码解析（主要方法）**
      - patchVnode、 patch(elem, vnode)/patch(vnode, newVnode)
      - addVnodes removeVnodes
      - updateChildren（key）

12. 模板编译
    - vue template complier 将模板编译为render函数
    - 执行render函数生成VNode
    - 基于vnode再执行patch和diff


13. 异步组件
    ```javascript
      this.$nextTick(() => {
        ...
      })
    ```
    - 异步渲染，$nextTick待DOM渲染完再进行回调
    - 页面渲染时会将data的修改整合，多次data修改只会渲染一次

14. Object.defineProperty在Vue中的缺点
    - 深度监听需要一次性递归
    - 无法监听新增、删除属性（Vue.set/Vue.delete）
    - 无法监听数组，需求特殊处理

15. Proxy
    ```javascript
      const proxyData = new Proxy(data, {
        get(target, key, receiver) {
          const ownKeys = Reflect.getOwnKeys(target)
          if (ownKeys.includes(key)) {
            console.log('get', key)
          }

          const res = Reflect.get(target, key, receiver)
          console.log('get', key)
          return result // 返回结果
        },
        set(target, key, val, receiver) {
          const res = Reflect.set(target, key, val, receiver)
          console.log('set', key, val)
          return res // 是否设置成功
        },
        deleteProperty(target, key) {
          const res = Reflect.deleteProperty(target, key)
          console.log('deleteProperty', key)
          return res // 是否删除成功
        }
      })
    ```

### vuex

1. vuex中action和mutation区别
    - action可以处理异步操作，mutation不可以
    - mutation做原子操作
    - action可以整合多个mutation

### vue-router

1. vue-router路由模式
    - mode: 
    - abstract
    - hash  
        - 变化会触发网页跳转，即浏览器的前进、后退
        - hash变化不会刷新页面
        - hash不会提交到server端
        ```javascript
          window.onhashchange = function(event) {
            console.log('oldUrl' + event.oldUrl)
            console.log('newUrl' + event.newUrl)
          }
          document.addEventListener('DOMContentLoaded', function() {
            console.log(location.hash)
          })
        ```
    - history
        - url规范的路由，跳转时不刷新页面
        - history.pushState
        - window.onpopState：监听浏览器的前进、后退
        ```javascript
          document.getElementById('btn').addEventListener('click', () => {
            const state = { name: 'page1' }
            history.pushState(state, '', 'pageUrl')
          })
          window.onpopState = (event) => {
            console.log('onpopstate', event.state, location.pathname)
          }
        ```

2. 异步路由
    component: () => import()

