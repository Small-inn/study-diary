/**
 * Promise是异步编程的一种解决方案，比传统的解决方案-回调函数更加合理强大
 * 1. Promise对象不受外界影响，Promise对象表示一个异步操作，有三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)
 * 2. 一旦状态改变之后，就不会再变，任何时候都可以得到这个结果
 *  */

const promise = new Promise((resolve, reject) => {
  if (/* success */) {
    resolve()
  } else {
    reject()
  }
})

/** Promise 实例生成后可以用then方法指定resloved状态和rejected状态的回调函数, 接受两个回调函数作为参数，第二个参数是可选的 */
promise.then((value) =>{}, (err) => {})


/** 创建一个promise实例 */
const timeout =  (ms) => new Promise((resolve, reject) => {
  setTimeout(resolve, ms, 'done')
})

/** 使用promise封装异步加载图片的例子 */

const loadImageAsync = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      reject(new Error('Could not load image at' + url))
    }

    image.src = url
  })
}


/** 使用promise封装ajax */
const promistAjax = (url) => {
  return new Promise((resolve, reject) => {
    const handler = function() {
      if (this.readyState !== 4) {
        return
      }

      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }

      const client = new XMLHttpRequest()
      client.open('GET', url)
      client.onreadystatechange = handler
      client.responseType = 'json'
      client.setRequestHeader('Accept', 'application/json')
      client.send()
    }
  })
}
// 调用
promistAjax('/getJson.json').then(res => { 
  console.log(res)
}).catch(err => {
  console.log(err)
})

/** 如果调用resolve或者reject函数时带有参数，那么它们的参数会被传递给回调函数。
 * reject函数的参数通常是Error对象的实例，表示抛出错误，resolve除了正常值以外，还可能是里一个Promise实例 
 * */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(p1), 1000)
})

p2.then(res => { console.log(res) }).catch(err => { console.log(err) }) // Error: fail

/** 
 * Promise.prototype.then(): 作用是为Promise实例添加状态改变时的回调函数，
 * then的第一个参数是resolved状态的回调函数，第二个参数是rejectd状态的回调函数（可选）,
 * then方法返回的是一个新的promise实例（这里的不是指原来的那个promise实例），因此可以采用链式写法
*/
getJson(url).then(res => {
  return res.json
}).then(data => {
  console.log(data)
})

/**
 * Promise.prototype.catch(): 是then方法的别名，用于指定发生错误时的回调函数,
 * 如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。
 * 另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获
 */

getJson(url).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})


/** 
 * Promise.all(): 该方法用于将多个Promise实例，包装成一个新的Promise实例
 * 接受一个数组作为一个参数，p1, p2, p3都是Promise实例，如果不是就会调用Promise.resolve(),将参数转为Promise实例再进一步处理，
 * （Promise.all的参数可以不是数组，但必须要是Iterator接口，且每个返回的成员都是Promise实例）
 */

const p = Promise.all([p1, p2, p3])
// p的状态由p1, p2, p3决定，
//（1）只有p1, p2, p3的状态都变成了fulfilled, p的状态才会变成fulfilled,此时p1, p2, p3的返回值组成一个数组，传递给p的回调
// （2）p1, p2, p3的状态只要有一个变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

const databasePromise = connectDatabase()

const booksPromise = databasePromise
  .then(findAllBooks)

const userPromise = databasePromise
  .then(getCurrentUser)

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommendations(books, user))

// 需要注意的是：注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了')
})
.then(result => result)
.catch(e => e)

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e))
// ["hello", Error: 报错了]

/** 
 * Promise.race() 将多个Promise实例包装成一个新的Promise实例
 * 与Promise.all() 不同的是只要race参数中的一个实例率先改变状态，则跟着改变，那个率先改变的Promise实例的返回值，就传递给回调函数
 */

const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])

p.then(console.log).catch(console.error)

/** 
 * Promise.resolve()
 * 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
 * 1. 如果参数是一个Promise，则返回这个Promise实例
 * 2. 参数是一个thenable对象，是指具有then方法的对象； 例如：let thenable = { then: function(resolve,reject) { resolve(33) } }  
 * 3. 如果参数不具有then方法的对象，或者根本就不是对象，则Promise.resolve()返回新的Promise对象
 */

Promise.resolve('foo') 
// 等同于
new Promise(resolve => resolve('foo'))

/**  
 * Promise.reject(): 返回一个新的Promise实例，状态为rejected
 * 与resolve方法不同的是参数会原封不动的作为reject的参数
 */
