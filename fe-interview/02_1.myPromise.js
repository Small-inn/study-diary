/*
 * @Author: liuxie
 * @Date: 2021-10-31 11:52:01 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-10-31 15:09:33
 */


/**
 * 1. Promise就是一个类，在执行这个类的时候，需要传递一个执行器进去 执行器就会立即执行
 * 2. Promise中有三种状态分别为pending、fulfilled和rejected,状态一旦改变就不可修改
 * 3. resolve和reject函数是用来更改状态的
 *    resolve： fulfilled
 *    reject： rejected
 * 4. then方法内部做的状态判断,若状态成功调用成功的回调函数，若失败调用失败的回调函数
 * 5. then成功回调有一个参数 表示成功之后的值，失败也有一个参数 表示失败的原因
 * 
 * */ 


class MyPromise {
  constructor(excutor) {
    try {
      excutor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  status = 'pending'
  value = undefined
  reason = undefined
  successCb = []
  failCb = []

  resolve = (value) => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled'
    this.value = value
    if (this.successCb.length) {
      this.successCb.map(fn => {
        fn()
      })
    }
  }
  
  reject = (reason) => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    this.reason = reason
    if (this.failCb.length) {
      this.failCb.map(fn => {
        fn()
      })
    }
  }
  
  then(successCb, failCb) {
    successCb = successCb ? successCb : value => value
    failCb = failCb ? failCb : reason => { throw reason }
    let promise = new MyPromise((resolve, reject) => {
      // 改变状态
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = successCb(this.value)
            // 判断x是普通值还是promise对象
            // 如果是普通值，直接调用resolve
            // 如果是promise对象，查看promise对象返回结果，再根据结果决定调用resolve还是reject
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = failCb(this.reason)
            reject(x)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      
      // 将回调存储起来
      if (this.status === 'pending') {
        this.successCb.push(() => {
          setTimeout(() => {
            try {
              let x = successCb(this.value)
              // 判断x是普通值还是promise对象
              // 如果是普通值，直接调用resolve
              // 如果是promise对象，查看promise对象返回结果，再根据结果决定调用resolve还是reject
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.failCb.push(() => {
          setTimeout(() => {
            try {
              let x = failCb(this.reason)
              reject(x)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    
    return promise
  }

  finally(callback) {
    return this.then((value) => { 
      return MyPromise.resolve(callback()).then(() => value)
     }, (reason) => {
      return MyPromise.resolve(callback()).then(() => {throw reason})
     })
  }

  catch(failCb) {
    return this.then(undefined, failCb)
  }
  
  static resolve(value) {
    if (data instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }

  static all(arr) {
    let result = []
    let index = 0
    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key, value]
        index++
        if (index === arr.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current instanceof MyPromise) {
          current.then(value => addData(i, value), reason => reject(reason))
        } else {
          addData(i, current)
        }
      }
    })
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('chaining cycle'))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}


// test
let promise = new MyPromise((resolve, reject) => {
  // resolve('成功')
  reject('失败')
})
promise.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})