/**
 * 
 * 集合：是一种包含不同元素的数据结构，集合中的元素称为成员，
 * 特点：1.集合中的成员的是无序的 2.集合中不存在相同的成员
 * 
 * add(val)：向集合添加一个新的项
 * delete(val)：从集合移除一个值
 * has(val)：判断值在集合中，返回true，否则返回false
 * clear()：移除集合中的所有项
 * size()：返回集合包含元素的数量
 * values()：返回一个包含集合中所有的数组
 *  */ 

class Set {
  constructor() {
    this.item = {}
  }
  has(val) {
    return this.item.hasOwnProperty(val)
  }
  add(val) {
    if (!this.has(val)) {
      this.item[val] = val
      return true
    }
    return false
  }
  delete(val) {
    if (!this.has(val)) {
      delete this.item[val]
      return true
    } 
    return false
  }
  clear() {
    this.item = {}
  }
  size() {
    const val = this.values()
    return val.length
  }
  values() {
    return Object.keys(this.item)
  }
}

// 并集
Set.prototype.union = function(otherSet) {
  let res = new Set(), curr = this.values, other = otherSet.values()

  for (let i = 0; i < curr.length; i++) {
    res.add(curr[i])
  }
  for (let i = 0; i < other.length; i++) {
    res.add(other[i])
  }
  return res
}
// 交集
Set.prototype.intersection = function(otherSet) {
  let res = new Set(), curr = this.values()
  for (let i = 0; i < curr.length; i++) {
    if (otherSet.has(curr[i])) {
      res.add(curr[i])
    }
  }
  return res
}
// 差集
Set.prototype.difference = function(otherSet) {
  let res = new Set(), curr = this.values()
  for (let i = 0; i < curr.length; i++) {
    if (!otherSet.has(curr[i])) {
      res.add(curr[i])
    }
  }
  return res
}

// 子集
Set.prototype.subSet = function(otherSet) {
  let res = new Set(), curr = this.values()
  if (this.size() > otherSet.size()) return  false

  for (let i = 0; i < curr.length; i++) {
    if (!otherSet.has(curr[i])) {
      return false
    }
  }
  return true
}