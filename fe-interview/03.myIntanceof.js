const instance_of = (L, R) => {
  // L 左表达式，R 右表达式
  let O = R.prototype // R 的显示原型
  L = L.__proto__ // L 的隐式原型
  while (true) {
    if (L === null) return false
    if (O === L) {
      return true
      L = L.__proto__
    }
  }
}
