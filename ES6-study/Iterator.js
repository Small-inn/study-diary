function MyIterator(arr) {
    let i= 0
    return {
        next: function() {
            let value = !done ? arr[i++] : undefined
            return {
                value,
                done: arr.length > i ? false : true
            }
        }
    }
}

arr[iterator] = function() {
    let _this = this
    let i = 0
    return {
        next: function() {
            let value = !done ? _this[i++] : undefined
            return {
                value,
                done: _this.length > i ? false : true
            }
        }
    }
}