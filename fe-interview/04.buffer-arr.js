// 随机打乱数组
// 1.0 使用sort版本
const randomSort = arr => {
  return arr.sort(() => Math.random() - 0.5)
}

// 2.0 
const randomSort2 = arr => {
  let j = Math.floor(Math.random() * arr.length + 1)
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

let arrT = [1, 2, 3, 4, 5]

console.log(randomSort(arrT))


console.log(['a', ['b', 'c', 'd', 'g', ['h', 'u']], 'e', 'f'].join(','))