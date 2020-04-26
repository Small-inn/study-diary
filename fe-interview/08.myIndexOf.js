// for循环
function _myIndexOf(a, b) {
    const A_LEN = a.length,
        B_LEN = b.length
    for (let i = 0; i <= A_LEN - B_LEN; i++) {
        if (a.slice(i, B_LEN + i) == b) {
            return i
        }
    }
    return -1
}

// 正则表达式版本
function _myIndexOfReg (a, b) {
    let reg = new RegExp(`${b}`, 'gi')
    let c = reg.exec(a)
    return c ? c.index : -1
}

let a = 'abcdefghijk'
let b = 'hij'
console.log(_myIndexOf(a, b))
console.log(_myIndexOfReg(a, b))