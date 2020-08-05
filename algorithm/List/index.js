/**
 * 
 * 列表是一组有序的数据，每一项的数据称为元素。可以为任意类型
 * listSize(属性) 列表的元素个数
 * pos(属性) 列表的当前位置
 * length(属性) 返回列表中元素的个数
 * clear(方法) 清空列表中的所有元素
 * toString(方法) 返回列表的字符串形式
 * getElement(方法) 返回当前位置的元素
 * insert(方法) 在现有元素后插入新元素
 * append(方法) 在列表的末尾添加新元素
 * remove(方法) 从列表中删除元素
 * front(方法) 将列表的当前位置设移动到第一个元素
 * end(方法) 将列表的当前位置移动到最后一个元素
 * prev(方法) 将当前位置后移一位
 * next(方法) 将当前位置前移一位
 * currPos(方法) 返回列表的当前位置
 * moveTo(方法) 将当前位置移动到指定位置
 * */ 
class {
  constructor() {
    this.item = []
    this.pos = 0
    this.listSize = 0
  }
  length() {
    return this.listSize
  }
  clear() {
    this.listSize = this.pos = 0
    this.item = []
  }
  contains(element) {
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i] === element) return true
      else return false
    }
  }
  toString() {
    return this.item
  }
  getElement() {
    return this.item[this.pos]
  }
  insert(element, afterEle) {
    let insertPos = this.find(afterEle)
    if (insertPos > -1) {
      this.item.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    } else {
      return false
    }
  }
  append(element) {
    this.item[this.listSize++] = element
  }
  find(element) {
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i] === element) {
        return i
      } else {
        return -1
      }
    }
  } 
  remove(element) {
    let findAt = this.find(element)
    if (findAt > -1) {
      this.item.splice(i, 1)
      --this.listSize
      return true
    } else {
      return false
    }
  }
  front() {
    this.pos = 0
  }
  end() {
    this.pos = this.listSize - 1
  }
  prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }
  currPos() {
    return this.pos
  }
  moveTo(position) {
    this.pos = position
  }
}