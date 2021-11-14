
// 部署可迭代接口
const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function() {
        return {
          value: value,
          done: true | false
        }
      }
    }
  }
}