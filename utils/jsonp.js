const jsonp = ({ url, params, callback }) => {
  return new Promise((resolve, reject) => {
    // 创建script标签
    let script = document.createElement('script')
    // 将回调挂到window上
    window[callback] = function(data) {
      resolve(data)
      // 代码执行之后，删除script标签
      document.body.removeChild(script)
    }
    // 回调函数加在请求地址上
    params = { ...params, callback } //wb=b&callback=show
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}

// 使用
function show(data) {
  console.log(res)
}

jsonp({
  url: '',
  params: {
    code: '121'
  },
  callback: show
}).then(res => {
  alert(res)
})
