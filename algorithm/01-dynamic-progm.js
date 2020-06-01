/**
 * 动态规划：
 * 此文件为动态规划算法的学习
 * Author： Small-inn
 * CreateTime: 2020-03-10
 * 
*/
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

/**
 * 寻找两个字符串中最长公共子串
 * */ 
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

/** 
 * 爬梯子问题
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
*/
function climbStairs(n) {
    if (n === 1 || n === 2) {
        return n
    }
    let ways = []
    ways[0] = 1
    ways[1] = 2

    for (i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    return ways[n - 1]
}

function climbStairs2(n) {
    let ways = []
    ways[0] = 0
    ways[1] = 1
    ways[2] = 2

    for(let i = 3; i <= n; n++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    return ways[n]
}

/** 
 * 动态规划之路径问题
 * 问题描述：
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
*/
function countPaths(m, n) {
    let ways = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        ways[i] = new Array(n + 1)
    }
    // 扩展一行
    for (let i = 0; i <= n; i++) {
        ways[0][i] = 0
    }
    // 扩展一列
    for (let j = 0; j <= m; j++) {
        ways[j][0] = 0
    } 

    ways[1][1] = 1

    for (let a = 1; a <= m; a++) {
        for (let b = 1; b <= n; b++) {
            if (a === 1 && b === 1) {
                continue
            }
            ways[a][b] = ways[a - 1][b] + ways[a][b - 1]
        }
    }
    return ways[m][n]
}