/**
 * 树：
 * 广度优先遍历与深度优先遍历
 * 
*/

// 深度优先遍历
const dfs = (root) => {
    console.log(root.val)
    root.children.forEach(dfs)
}

// 广度优先遍历
// 1. 新建队列，根节点入队 2. 队头出队并访问 3. 队头children挨个入队 4. 重复2,3直到队列为空

const bfs = (root) => {
    const q = [].push(root)
    while (q.length > 0) {
        q.shift()
        q.children.forEach(child => {
            q.push(child)
        })
    }
}


/**
 * 二叉树
 * 树种每个节点最多只能有两个子节点
 * JS中常用Object表示
*/

// 先序遍历
const preOrder = (root) => {
    if (!root) return
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

// 中序遍历
const cenOrder = (root) => {
    if (!root) return
    cenOrder(root.left)
    console.log(root.val)
    cenOrder(root.right)
}

/**
 * 二叉树的最大深度
 * 使用深度优先遍历
*/

const maxDepth = (root) => {
    let res = 0
    const dfs = (n, l) => {
        if (!root) return
        res = Math.max(res, l)
        console.log(n.val)
        dfs(n.left, l++)
        dfs(n.right, l++)
    }
    dfs(root)
}