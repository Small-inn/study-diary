## 算法类笔记以及代码

---

算法

#### 数组
#### 列表
#### 栈
#### 队列
- 队列也是一种列表，但队列只能在队尾插入元素，在队首删除元素
* 队列的操作
1. 向队列中插入新元素，入队
2. 删除队列中的元素，出队
#### 链表
#### 字典
```javascript
// 两个数组的交集
let Intersection = (num1, num2) => {
  let m = new Map()
  num1.forEach(val => {
    m.set(val, true)
  })
  const res = []
  num2.forEach(n => { 
    if (m.get(n)) {
      res.push(n)
      m.delete(n)
    }
  })
  return res
}

const arr = Intersection([1, 2, 2, 4], [2, 2, 3, 4, 5])
console.log(arr)

// 有效括号
let isValid = (s) => {
  if (s.length % 2 === 1) return
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push[c]
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
console.log(isValid('fasf(fasfafs)sdfa{fd{sf}a}'))
```
#### 散列
#### 集合
#### 二叉树和二叉查找树
#### 图和图算法
#### 排序算法
#### 检索算法
#### 高级算法
