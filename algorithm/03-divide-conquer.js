/**
 * 1. 分而治之是算法中的一种方法,s
 * 2. 将一个问题分成多个和原问题相似的小问题，递归解决小问题，再将结果合并以解决原来的问题 
 * 
*/

/**
 * 归并排序：
 * 分： 数组一分为二
 * 解： 递归对子数组进行归并排序
 * 合： 合并有序子数组
*/


/**
 * leetcode: 374 猜数字大小
 * 
*/

const gussNum = (n) => {
  const rec = (low, high) => {
    if (low > high) return
    const mid =  Math.floor((low + high) / 2)
    const res = guss(mid) // 这个函数提供的
    if (res === -1) { // 小； 
      return rec(mid + 1, high)
    } else if (res === 0) {
      return mid
    } else {
      return rec(low, mid - 1)
    }
  }
  return rec(1, n)
}


/**
 * LeetCode226：反转二叉树
 * 
 * 先翻转左右子树，再将子树换位置
*/

const reverseTree = (root) => {
  if (!root) return
  return {
    val: root.val,
    left: reverseTree(root.right),
    right: reverseTree(root.left)
  }
}

/**
 * LeetCode100: 相同的树
*/

const isSameTree = (p, q) => {
  if (!p && !q) return true
  if (p && q && p.val && q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true
  }
  return false
}

/**
 * LeetCode101:对称二叉树（镜像对称）
 * */
const isSymmetric = (root) => {
  if (!root) return true
  const rec = (l, r) => {
    if (!l && !r) return
    if (l && r && l.val === r.val && rec(l.left, r.right) && rec(l.right, r.left)) {
      return true
    } else {
      return false
    }
  }
  return rec(root.left, root.right)
}
