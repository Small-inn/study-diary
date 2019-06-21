/** 
 * 按需求把这个数组分割成长度为3的若干数组
*/
let sArr = [111, 23, 44, 534, 4123, 312, 32, 3123, 424, 552, 24, 55]
let nArr = []
for(let i = 0; i < sArr.length; i += 3) {
  nArr.push(sArr.slice(i, i + 3))
}
// console.log(nArr)
/**、
 * 
 * 将分隔完成之后的数组找出数组中的最大值以及最大值的下标
 */
let mArr = []
let aArr = nArr.map(item => {
  mArr.push({
    // 'index': item.findIndex(sItem => sItem === Math.max(...item)),
    'index': item.indexOf(Math.max(...item)),
    'max':  Math.max(...item)
  })
})
console.log(mArr)