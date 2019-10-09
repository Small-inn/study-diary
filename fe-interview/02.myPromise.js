/**
 * promise对象是异步编程的一种解决方案，相对于回调函数和事件，更加合理和强大
 *
 */

function promise(fn) {
  let _this = this
  _this.status = 'pending' // 存储promise的state
  _this.value = '' // 存储promise的value
  _this.reason = '' // 存储promise的reason
  _this.onFulfilledCb = [] // 存储then方法中注册的回调函数（第一个参数）
  _this.onRejectedCb = [] // 存储then方法中注册的回调函数（第二个参数）

  function resolve(value) {
    setTimeout(() => {
      if (_this.status === 'pending') {
        _this.status = 'fulfilled'
        _this.value = value

        _this.onFulfilledCb.map(item => {
          item(_this.value)
        })
      }
    }, 0)
  }

  function reject(reason) {
    setTimeout(() => {
      if (_this.status === 'pending') {
        _this.status = 'rejected'
        _this.reason = reason

        _this.onRejectedCb.map(item => {
          item(_this.reason)
        })
      }
    }, 0)
  }

  fn(resolve, reject)
}

// then方法
promise.prototype.then = function(onFulfilled, onRejected) {
  let _this = this
  // let promise2

  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => r

  if (_this.status === 'pending') {
    return new promise((resolve, reject) => {
      _this.onFulfilledCb.push(value => {
        try {
          let x = onFulfilled(value)
        } catch (e) {
          reject(e)
        }
      })

      _this.onRejectedCb.push(reason => {
        try {
          let x = onRejected(reason)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

// 极简版
function promise() {
  this.status = 'pending' // 2.1
  this.msg = '' // 存储value与reason
  let process = arguments[0],
    that = this
  process(
    function() {
      that.status = 'resolve'
      that.msg = argument[0]
    },
    function() {
      that.status = 'reject'
      that.msg = argument[0]
    }
  )
  return this
}

promise.prototype.then = function() {
  if (this.status === 'resolve') {
    arguments[0](this.msg)
  } else if (this.status === 'reject' && arguments[1]) {
    arguments[1](this.msg)
  }
}
