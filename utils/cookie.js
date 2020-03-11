export const cookie = {
  setCookie(ckName, ckValue, times) {
    // 设置过期时间
    const expireTime = (new Date()).getTime() + (times * 3600000)
    // 对象序列化
    if (ckValue instanceof Object) ckValue = JSON.stringify(ckValue)
    // 设置
    // document.cookie = ckName + '=' + ckValue + ';' + 'expires=' + (new Date(expireTime)).toUTCString();
    document.cookie = `ckName=${ckName};expires=${new Date(expireTime).toUTCString()}`
  },

  getCookie() {
    const ck = document.cookie
    if (!ck || ck === '') return {}
    else {
      let index, name, val
      const arr = ck.split(';')
      let obj = {}
      arr.forEach((item) => {
        index = item.indexOf('=')
        name = item.slice(0, index).trim()
        val = item.slice(index + 1)
        if (val.indexOf('[') !== -1 && val.indexOf(']') !== -1) val = JSON.parse(val)
        obj[name] = val
      })
      return obj
    }
  }
}