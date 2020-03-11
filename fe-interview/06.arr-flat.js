/**
 * n维数组的join
 * 
*/

let b = ['a', ['b', 'c', 'd', 'g', ['h', 'u']], 'e', 'f']

// 1.0
function flat(data) {
    let res = []
    function each(arr) {
        arr.forEach(item => {
            if (item instanceof Array) {
                each(item)
            } else {
                res.push(item)
            }
        })
    }
    each(data)
    return res.join(',')
}
console.log(flat(b))

// 2.0
function flat2(arr) {
    // 巧妙利用隐式类型转换
    const toString = Array.prototype.toString
    Array.prototype.toString = function() {
        return this.join(',')
    }
    let res = arr + ''
    Array.prototype.toString = toString
    return res
}
console.log(flat2(b))