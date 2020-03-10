// 利用动态规划处理斐波那契数列
// 1.0
function iterFib(n) {
    let arr = []
    for (let i = 0; i <= n; ++i) {
        arr[i] = 0
    }
    if (n === 1 || n === 2) {
        return 1
    } else {
        arr[1] = 1
        arr[2] = 1
        for (let i = 3; i <= n; ++i) {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
        return arr[i]
    }
}
// 2.0
function iterFib2(n) {
    let last = 1, nextLast = 1, res = 1
    for (i = 2; i <= n; ++i) {
        res = last + nextLast
        nextLast = last
        last = res
    }
    return res
}

// 寻找最长公共子串
function lcs(word1, word2) {
    let max = 0, index = 0, str = ''
    // 初始化二维数组
    let lcsArr = new Array(word1.length + 1)
    for (let i = 0; i <= word1.length + 1; ++i) {
        lcsArr[i] = new Array(word2.length + 1)
        for (let j = 0; j <= word2.length + 1; ++j) {
            lcsArr[i][j] = 0
        }
    }
    console.log(lcsArr)

    for (let i = 0; i <= word1.length; ++i) {
        for (let j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsArr[i][j] = 0
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1
                } else {
                    lcsArr[i][j] = 0
                }
            }
            if (max < lcsArr[i][j]) {
                max = lcsArr[i][j]
                index = i
            }
        }
    }

    if (max == 0) {
        return str
    } else {
        console.log('index:' + index)
        console.log('max:' + max)
        for (let i = index - max; i <= max; ++i) {
            str += word2[i]
        }
        console.log('str:' + str)
        return str
    }
}
// lcs('aabbcc', 'aaccbb')