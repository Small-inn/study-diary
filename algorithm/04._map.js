/**
 * 两个数组的交集
 * 
*/
function fn(num1, num2) {
  let map = new Map()
  for (let i = 0; i < num1.length; i++) {
    map.set(num1[i], true)
  }
  const res = []
  for(let j = 0; j < num2.length; j++) {
    if (map.get(num2[j])) {
      res.push(num2[j])
      map.delete(num2[j])
    }
  }
  return res
}

/**
 * LeetCode20
 * 有效括号
*/

function isValid(s) {
  if (s.length % 2 === 0) return
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
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

/**
 * 
 * 两数之和
*/

function twoNum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}

/**
 * 3. 无重复最长字符子串
 * 
 * 双指针滑动窗口，剪切子串
 * 不断移动右指针
*/
function lengthOfLongSubstring(s) {

}
