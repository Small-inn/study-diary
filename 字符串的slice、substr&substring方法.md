## 字符串的 slice()、substr()、substring()

---

> 这三个方法都是基于子字符串创建新的字符串，也都接受一或者两个参数，第一个参数指定子字符串的开始位置，第二个参数(在指定的情况下)表示子字符串到哪里结束。

- slice()与 substring()的第二个参数指定字符串的位置，而 substr()的第二个参数指定的是返回的个数。这三个方法如果第二个参数没有指定，则默认以字符串的长度
- 若参数为负数，slice()方法会将传入的负数与字符长度相加，substr()将负的第一个参数加上字符串的长度，而将第二个负的参数转换为 0，substring()会将所有负数都转换为 0

---

- 2019-08-24 更新

eg: 这三个方法可以传入一个或者两个参数，一般的第一个参数指定字符串的开始位置

let str = 'hello world'

<!-- 只传入一个参数 -->

str.slice(3) // lo world
str.substr(3) // lo world
str.substring(3) // lo world

<!-- 传入两个参数 -->

str.slice(3, 7) // lo w
// substr 第二个参数表示返回的个数
str.substr(3, 7) // lo worl
str.substring(3, 7) // lo w

<!-- 传入一个负数 -->

// slice 会将字符串的长度加上这个负数
str.slice(-3) ==> str.slice(8) // rld
// substr 方法将负数加上字符串的长度
str.substr(-3) // rld
// substring 方法将负数参数转化为 0
str.substring(-3) // lo world

<!-- 第二个参数为负数 -->

// slice 会将字符串的长度加上这个负数
str.slice(3, -7) ==> str.slice(3, 4) // r
// substr 方法将负数加上字符串的长度
str.substr(3, -7) ==> str.substr(3, 0) // ''
// substring 方法将所有负数参数转化为 0, 需要注意的是，这个方法如果后面的参数小于前面的参数会调换位置
str.substring(3, -7) ==> str.substring(3, 0) ==> str.substring(0, 3) // hel
