
// 截取链接路由参数
const getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i') // 匹配目标参数
  let result = window.location.search.substr(1).match(reg) // 对querystring匹配目标参数
    if (result != null) {
      return decodeURIComponent(result[2])
    } else {
      return null
    }
}

// 判断是否是微信环境
const isWeiXin = () => {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = window.navigator.userAgent.toLowerCase()
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}

// 动态设置title
const setDocumentTitle = (title) => {
  document.title = title
  let i = document.createElement('iframe')
  i.src = 'favicon.ico'
  i.style.display = 'none'
  i.onload = () => {
    setTimeout(() => {
      i.remove()
    }, 9)
  }
  document.body.appendChild(i)
}