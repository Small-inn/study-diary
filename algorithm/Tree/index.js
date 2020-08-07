/**
 * 树：是一种非线性的数据结构，以分层方式存储数据，用来表示有层级关系的数据
 * 每棵树至多只有一个根结点，根节点会有很多子结点，每个子结点只有一个父结点
 * 
 * 家谱、公司组织架构图
 * */ 

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
  }
  /**
   * 插入一个节点
   * */ 
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null && node.right === null) {
        node.left = newNode
      } else if (node.left !== null && node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.left === null && node.right === null) {
        node.left = newNode
      } else if (node.left !== null && node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  /**
   * 插入操作
   * */ 
  insert(key) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  /**
   * 搜索节点
   * */ 
  searchNode(node, key) {
    if (node === null) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  /**
   * 找到最小值的节点
   * */ 
  min() {
    let node = this.root
    if (node === null) return null
    while (node && node.left !== null) {
      node = node.left
    }
    return node.key
  }
  max() {
    let node = this.root
    if (node === null) return null
    while (node && node.right !== null)  {
      node = node.right
    }
    return node.key
  }
}