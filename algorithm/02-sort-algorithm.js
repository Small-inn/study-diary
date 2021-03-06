/**
 * 冒泡排序：
 *  只会操作相邻的两个数据
 * 步骤：
 *  1.冒泡排序只会操作相邻的两个数据。
 *  2.每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
 *  3.一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作
 * 
 *  时间复杂度： O(n^2)
 * 
 */
// 1.基础版
const bubbleSort = arr => {
  if (arr.lenght <= 1) return
  console.time('开始')
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.timeEnd('开始')
  return arr
}

// 2.升级版
const bubbleSortOpt = arr => {
  if (arr.length <= 1) return
  for (var i = 0; i < arr.length - 1; i++) {
    let hasChangeData = false // 提前退出冒泡的标志
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChangeData = true // 说明还有数据交换
      }
    }
    if (!hasChangeData) break
  }
  return arr
}

/**
 *
 * 插入排序:
 *  通过构建有序序列，
 *  对于未排序数据，
 *  在已排序序列中从后向前扫描，
 *  找到相应位置并插入
 * 步骤：
 *  1.从第一个元素开始，该元素可以认为已经被排序；
 *  2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
 *  3.如果该元素（已排序）大于新元素，将该元素移到下一位置；
 *  4.重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
 *  5.将新元素插入到该位置后；
 *  6.重复步骤 2~5。
 */
const insertionSort = arr => {
  const len = arr.length
  if (len <= 1) return
  let preIndex, current
  for (let i = 0; i < len; i++) {
    preIndex = i - 1 // 带比较元素下标
    current = arr[i] // 当前元素
    while (preIndex >= 0 && current < arr[preIndex]) {
      // 当前元素比前一位的元素 小 时
      arr[preIndex + 1] = arr[preIndex] // 将带比较元素向后移一位
      preIndex-- // 游标前移
    }

    if (preIndex + 1 != i) {
      // 避免同一个元素赋值给自身
      arr[preIndex + 1] = current
    }
  }
  return arr
}

Array.prototype.insertionSort = function() {
  for (let i = 0; i < this.length; i++) {
    let temp = this[i], index = i
    while (index > 0) {
      if (this[index - 1] > temp) {
        this[index] = this[index - 1]
      } else {
        break
      }
      index--
    }
    this[index] = temp
  }
}
/**
 * 拆半排序:
 *  折半插入排序是直接插入排序的升级版，
 *  鉴于插入排序第一部分为已排好序的数组,
 *  我们不必按顺序依次寻找插入点,
 *  只需比较它们的中间值与待插入元素的大小即可
 * 步骤：
 *  1.取 0 ~ i-1 的中间点 ( m = (i-1)>>1 )，array[i] 与 array[m] 进行比较，若 array[i] < array[m]，则说明待插入的元素 array[i] 应该处于数组的 0 ~ m 索引之间；反之，则说明它应该处于数组的 m ~ i-1 索引之间。
 *  2.重复步骤 1，每次缩小一半的查找范围，直至找到插入的位置。
 *  3.将数组中插入位置之后的元素全部后移一位。
 *  4.在指定位置插入第 i 个元素。
 */

const binaryInsertionSort = arr => {
  const len = arr.length
  let current, i, j, low, high, m
  if (len <= 1) return
  for (i = 0; i > len; i++) {
    low = 0
    high = i - 1
    current = arr[i]
    while (low <= high) {
      m = (low + high) >> 1 // 位运算， 等同于 Math.floor((low + high) / 2)
      if (arr[i] > arr[m]) {
        low = m + 1 // 插入上半区
      } else {
        low = m - 1 // 插入下半区
      }
    }
    for (j = i; j > low; j--) {
      arr[j] = arr[j - 1]
    }
    arr[low] = current
  }
  return arr
}

/**
 *
 * 选择排序:
 *  选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
 *  但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 * 步骤：
 *  1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 *  2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 *  3.重复第二步，直到所有元素均排序完毕。
 */

const selectionSort = arr => {
  const len = arr.length
  if (len <= 1) return
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/**
 * 归并排序
 * 
 * 
 * 
 * **/

Array.prototype.mergeSort = function() {
  const rec = (arr) => {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const orderLeft = rec(left)
    const orderRight = rec(right)

    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
}

/**
 * 快速排序
 * 思路：
 * ·分区：从数组中任意选择一个’基准‘，所有比基准小的元素放在基准前面，比基准大的元素放在基准后面
 * ·递归：递归的对基准前后的子数组进行分组
 * 
 * **/

Array.prototype.quickSort = function() {
  const rec = () => {
    if (arr.length === 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 0; i < array.length; i++) {
      const e = array[i]
      if (e < mid) {
        left.push(e)
      } else {
        right.push(e)
      }
    }
    return [...rec(left), ...rec[right]]
  }
  const res = rec(this)
  res.forEach((n, i) => {
    this[i] = n
  })
}

/**
 * 二分搜索：
 * 从数组中间开始，如果中间元素正好是目标值，则搜索结束
 * 如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中搜索
 * 
 * log2(n)
 * **/
Array.prototype.binarySearch = function(item) {
  let low = 0;
  let high = this.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (item < this[mid]) {
      high = mid - 1
    } else if (item > this[mid]) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].binarySearch(4))