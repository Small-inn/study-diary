## 算法类笔记以及代码

---

算法

### 时间复杂度

> 定性描述算法的运行时间

> 它表示随问题 n 的增大，算法执行时间的增长率和 f(n)的增长率相同，称作算法的渐进时间复杂度，简称为时间复杂度。其中，f(n)是问题规模 n 的某个函数

#### 空间复杂度

> 算法的空间复杂度通过计算算法所需的存储空间实现，算法空间复杂度的计算公式记作:S(n)= O(f(n))，其中，n 为问题的规模，f(n)为语句关于 n 所占存储空间的函数。

#### 数组

#### 列表

#### 栈

> LIFO:后进先出

- 十进制转二进制
- 有效括号问题
- 函数调用栈

```javascript
// 有效括号
const valild = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else {
      stack.pop()
    }
  }
}
```

#### 队列

> FIFO：先进先出

- 队列也是一种列表，但队列只能在队尾插入元素，在队首删除元素
- JS 异步任务队列

* 队列的操作

1. 向队列中插入新元素，入队 push()
2. 删除队列中的元素，出队 shift()

```javascript
const ping = (t) => {
  const queue = []
  queue.push(t)
  while (queue < t - 3000) {
    queue.shift()
  }

  return stack.length
}
```

#### 链表

> 多个元素组成的列表，元素存储不连续，用 next 指针连在一起

```javascript
// 删除链表中的节点
/**
 * 删除某个链表中给定的（非末尾）节点
 * 思路：
 * 1. 找到这个节点的上一个节点，将上一个节点的next指向当前节点的下一个节点，
 * 2. 但是链表中next只能指向下一个节点，无法获取上一个节点
 * 3. 将被删除节点转移到下一个节点，删除下一个节点
 *
 *
 * calss Node() {
 *  cosntructor(val, next) {
 *    this.val = val
 *    this.next = null
 *  }
 * }
 * **/

const delete = (node) => {
  node.val = node.next.val
  node.next = node.next.next
}
```

```javascript
/**
 * 反转链表
 * 思路：
 * 1. 将n+1的next指向n
 * 2. 反转多个节点；双指针遍历链表
 * 3. 重复操作
 * 
 * **/

```

#### 字典

```javascript
// 两个数组的交集
let Intersection = (num1, num2) => {
  let m = new Map()
  num1.forEach((val) => {
    m.set(val, true)
  })
  const res = []
  num2.forEach((n) => {
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
  for (let i = 0; i < s.length; i++) {
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

/**
 * 两数之和
 * 描述：
 * 思路：类比相亲介绍所
 *
 */

let countTwo = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    let n = nums[i]
    let n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}
console.log(countTwo([2, 7, 11, 15], 9))

/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度
 *
 * 思路：滑动双指针L, R,
 *
 * **/
let lengthOfLongestSubstring = (s) => {
  let l = 0
  let res = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // 确保子串在滑动区间
      l = map.get(s[r]) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(s[r], r)
  }
  return res
}
console.log(lengthOfLongestSubstring('abcabcbb'))

/**
 * 最小覆盖子串
 * 给你一个字符串S，一个字符串T，请在字符串S里面找出：包含T所有字符的最小子串
 *
 * 示例：输入：S = 'ADOBECODEBANC' T = 'ABC'  输出： 'BANC'
 * 思路：双指针滑动
 * **/
let minWindow = (s, t) => {
  let l = 0
  let r = 0
  const need = new Map()
  for (let c of t) {
    need.set(c, need.has(t) ? need.get(c) + 1 : 1)
  }
  let needType = need.size
  let res = ''
  while (r < s.length) {
    const c = s[r]
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) needType -= 1
    }
    while (needType === 0) {
      console.log(s.substring(l, r + 1))
      const newRes = s.substring(l, r + 1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[l]
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}
console.log(minWindow('ADOBECODEBANC', 'ABC'))
```

#### 散列

#### 集合

> Set

#### 二叉树和二叉查找树

#### 图和图算法

#### 排序算法

#### 检索算法

#### 高级算法
