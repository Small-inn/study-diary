## ES6 的学习笔记

---

ES6

#### let&&const

1. let
   - 不属于顶层对象 window
   - 不允许重复声明
   - 不存在变量提升
   - 暂时性死区
   - 块级作用域
2. const
   ```javascript
   Object.defineProperty(window, 'PI', {
     value: 3.14,
     writable: false,
   })
   ```

#### Array

1. 方法：
    - for
    - forEach: 不可阻塞
    - map：有返回值
    - filter
    - some
    - every
    - reduce
    - foi in
    - for of
    - Array.from
    - Array.of
    - Array.copyWithin
    - Array.fill
    - Array.includes: indexOf不能检测NaN,includes可以

#### 函数
1. length
    * 没有指定默认值的参数长度

2. 作用域
```javascript
    let x = 1
    function foo(x, y = x) {
        console.log(y)
    }
    foo(2)
    // 函数参数单独的作用域，x = 2, y = x = 2
    let x = 1
    function foo(y = x) {
        let x = 2
        console.log(y)
    }
    foo()
    // 1, 当前作用域没有，沿着作用域链往上找
```
