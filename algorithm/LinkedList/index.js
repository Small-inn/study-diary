/**
 * 链表：是一种上一个元素的引用指向下一个元素的存储结构，链表通过指针来连接元素与元素
 * 链表是线性表的一种，线性表包含顺序线性表和链表，顺序线性表使用数组实现的，在内存中有顺序排列，通过改变数组大小实现。
 * 链表不是用顺序实现的，用指针实现，在内存中不连续，链表就是将一系列不连续的内存联系起来，将那种碎片内存进行合理利用，解决空间问题
 * 链表允许插入和删除表上任意位置上的节点，但是不允许随即存取
 * 链表分为单向链表、双向链表和循环链表
 * 
 * 与数组的区别：
 * 1. 相同点：两种数据结构局可实现数据的顺序存储，构造出来的模型呈线性结构
 * 2. 不同点：链表是链式的存储结构，数组是顺序的存储结构，链表通过指针连接元素，数组按次序存储
 * 
 * 生活中的案例：
 * 火车
 * 寻宝游戏，每个线索都是下一个线索的指针
 * 
 * 属性和方法：
 * append(ele)：向列表尾部添加一个新元素
 * insert(pos, ele)：向列表指定位置添加新元素
 * remove(ele)：从列表中移除并返回特定元素（若有相同则取出第一次出现的情况）
 * indexOf(ele)：返回元素在列表的索引（若有相同则取出第一次出现的情况），不存在返回-1
 * removeAt(pos)：删除特定的一项
 * isEmpty()：如果列表不含任何元素，返回true，否则返回false
 * size()：返回列表元素个数
 * toString()：输出元素值
 * */ 

// Node 类包含两个属性:element 用来保存节点上的数据，next 用来保存指向下一个节点的链接。我们使用一个构造函数来创建节点，该构造函数设置了这两个属性的值:
class Node {
  constructor(ele) {
    this.ele = ele
    this.next =  null
  }
}
class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  find(ele) {
    let currentNode = this.head
    while (currentNode.ele != ele) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  display() {
    let currentNode = this.head
    while (currentNode.next) {
      print(currentNode.next.ele)
      currentNode = currentNode.next  
    }
  }
  append(ele) {
    let node = new Node(ele)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      // 查找最后一项
      while (current.next) {
        current = current.next
      }
      // 将最后一下的next赋值为node，实现追加元素
      current.next = node
    }
    this.length++
  }
  insert(pos, ele) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(ele), index = 0, pre = null
      if (pos === 0) {
        node.next = this.head
        this.head = node
      } else {
        let current = this.head
        while (index++ < pos) {
          pre = current
          current = current.next
        }
        pre.next = node
        node.next = current
      }
      this.length++
    }
  }
  remove(ele) {
    let current = this.head, pre = null
    if (ele === this.head.ele) {
      this.head = current.next
    } else {
      while (current.next && current.ele !== ele) {
        pre = current
        current = current.next
      }
      pre.next = current.next
      this.length--
      return current.ele
    }
  }
  removeAt(pos) {
    if (pos >= 0 && pos <= this.length) {
      let current = this.head, index = 0, pre = null
      if (pos === 0) {
        this.head = current.next
      } else {
        while (index++ < pos) {
          pre = current
          current = current.next
        }
        pre.next = current.next
      }
      this.length--
      return current.ele
    }
  }
  indexOf(ele) {
    let current = this.head, index = 0
    while (current.next && current.ele !== ele) {
      current = current.next
      index++
    }
    return index === 0 ? -1 : index
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  toString() {
    let current = this.head, arr = new Array()
    while (current.next) {
      arr.push(current.ele)
      current = current.next
    }
    arr.push(current.ele)
    return arr.toString()
  }
}

// 反转链表
function reverseList(head) {
  let pre = null, curr = head
  while (curr) {
    next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return pre
}

// 判断链表是否有环
// 1.0 循环判断是否有null
function cycle(head) {
  while (head) {
    if (head.value === null) return true
    head.value = null
    head = head.next
  }
  return false
} 
// 2.0 标记法
let hasCycle2 = function(head) {
  let node = head
  while (node) {
    if (node.isVisit) {
      return true
    } else {
      node.isVisit = true
    }
    node = node.next
  }
  return false
}
// 双指针
function hasCycle3(head) {
  if (head === null && head.next === null) return false
  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false
    slow = slow.next
    fast = false.next.next
  }
  return true
}