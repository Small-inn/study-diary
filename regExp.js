/**
 * @param RegExp|String 一个正则对象，或者是字符串。 如果是字符串，只会替换一次内容
 * @param String|Function 想要替换成的字符串， 或者是一个返回字符串内容的函数
 * @param String 一个经过替换之后的全新字符串
 * @usage str.replace(regExp|substr, newSubStr|function)
 *  */ 
const re = /(\d{2}|\d{4}) - (\d{1, 2}) - (\d{1, 2})/g
const str = '2019-01-24'
const res = str.replace(re, '$1/$2/$3')
// res = 2019/01/24

// replace用法：replace()的第一个参数可以是正则，或者是一个字符串（字符串没有全局模式，仅匹配一次），用来匹配你想要将替换它的文本内容，
// 第二个参数可以是字符串，或者是一个返回字符串的函数