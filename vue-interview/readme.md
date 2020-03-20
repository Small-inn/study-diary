## vue 面试部分

---

1. 双向数据绑定原理

- view ===(input 事件)===> data、 data ===(Object.defineProperty)===> view

2. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象
  > Object.defineProperty(obj, prop, descriptor)

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
