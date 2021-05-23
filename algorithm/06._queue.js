var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          nums.splice(i, 1)
          i-- // 上一步的splice操作之后，确定数组不会跳位，所以--
      }
  }
  return nums.length
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(arr))