/**
 * 队列：又称为伫列，也是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序排列的数据，先进先出（First-In-First-Out）。
 * 
 * enqueue(ele): 向队尾添加一个新的项
 * dequeue(): 移除队列的第一项，并返回被移除的元素
 * front(): 返回队列中的第一个元素--最先被添加，也是最先被移除的元素（队列不做任何变动，不移除元素，只返回元素信息，类似于Stack类的peek方法）
 * tail(): 返回队列中的最后一个元素，队列不做任何变动
 * isEmpty(): 如果栈中没有任何元素就返回true，否则返回false
 * size(): 返回队列包含的元素个数，与数组的length属性类似
 * print(): 打印队列中的元素
 * */ 

class Queue {
  constructor() {
    this.item = []
  }
  enqueue(ele) {
    this.item.push(ele)
  }
  dequeue() {
    return this.item.shift()
  }
  front() {
    return this.item[0]
  }
  tail() {
    return this.item[this.item.length - 1]
  }
  isEmpty() {
    return this.item.length === 0
  }
  size() {
    return this.item.length
  }
  print() {
    return this.item.toString()
  }
}