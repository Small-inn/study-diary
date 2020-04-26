// 递归版
function _binarySearch(arr, val, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return -1
    }
    let cent = Math.floor((left + right) / 2)
    if (arr[cent] === val) {
        return cent
    }
    if (arr[cent] > val) {
        right = cent - 1
    } else {
        left = cent + 1
    }
    return _binarySearch(arr, val, left, right)
}
// 非递归版
function _binarySearchNodigui(arr, val) {
    let left = 0,
        right = arr.length - 1,
        cent = Math.floor((right - left) / 2)
    while (left <= right) {
        if (arr[cent] === val) {
            return cent
        } else if (arr[cent] > val) {
            right = cent - 1
        } else {
            left = cent + 1
        }
    }
    return -1
}