
/**
 * Set
 * 基本用法：
 * ES6提供了新的数据结构Set，它类似于数组，但是成员的唯一值，没有重复的值
 * set本身就是一个构造函数，用来生成Set数据结构
 * 
 *  */ 

  const s = new Set()
  console.log(s)

  [2, 3, 5, 4, 5, 2, 2].forEach(element => {
    s.add(element)
  })

  for (let i of s) {
    console.log(i)
  }
  // [2, 3, 5, 4]

  /**
   * set函数可以接受一个数组作为参数(或者具有 iterable 接口的其他数据结构)，用于初始化
   * 
   *  */
  const set = new Set([1, 2, 3, 4, 4])
  let a = [...set] // [1, 2, 3, 4]
  console.log(set.size) // 4

  /** 
   * 可以用于用来进行数组去重， 字符串去重等
  */
  let arr = [...new Set(array)]
  let str = [...new Set('abcabaab')].join('') // 'abc'

  /**
   * 
   */
  let set1 = new Set()
  set1.add(NaN)
  set1.add(NaN)
  set1.size // 1 默认NaN 等于 NaN
  set1.clear()
  set1.size // 0

  /**
   * 
   * Set实例的属性和方法
   * Set.prototype.constructor: 构造函数，默认是Set函数
   * Set.prototype.size: 返回Set实例的成员总数
   * 
   * 操作方法
   * add(value): 添加某个值，返回set结构本身
   * delete(value): 删除某个值， 返回布尔值， 表示删除是否成功
   * has(value): 返回布尔值，表示该值是否set的成员
   * clear(): 清除所有成员，没有返回值
   * 
   * 
   * 遍历操作
   * keys(): 返回键名的遍历器
   * values(): 返回键值的遍历器
   * entrise(): 返回键值对的遍历器
   * forEach(): 使用回调函数遍历每一个成员
   * 
   * 
   * 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
   */

   /**
    * 
    * 数组的map、filter方法也可以间接的用于set了
    */
   let set2 = new Set([1, 2, 3])
   set2 = new Set([...set2].map(x => x * 2))
   // 返回 {2, 4, 6}

   /**
    * 使用Set结构可以实现并集、交集、差集
    */
   let a = new Set([1, 2, 3])
   let b = new Set([2, 3, 4])

   // 并集
   let union = new Set([...a, ...b]) // { 1, 2, 3, 4 }
   // 交集
   let intersect = new Set([...a].filter(x => b.has(x))) // { 2, 3 } 
   // 差集
   let diff = new Set([...a].filter(x => !b.has(x))) // { 1, 4 }



   /**
    * WeakSet
    * 与Set类似，也是不重复的值，但是与Set有两个区别
    * 1. WeakSet的成员只能是对象，不能是其他值
    * 2. WeakSet中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
    * 
    */


    /**
     * Map 
     * JavaScript的对象，本质上是键值对的集合（hash结构），传统上只能用字符串当做键，限制比较大
     * 而Map数据结构，类似于对象，也是键值对的集合，但键值不限于字符串，各种类型的值都可以当做键
     * 
     */
    const map = new Map([
      ['name', '李四'],
      ['title', 'Author']
    ])
    map.size // 2
    map.has('name') // true
    map.get('name') // 李四
 