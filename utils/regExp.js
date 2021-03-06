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

// 身份证正则
const IDReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
// export const is
// 邮箱验证
const emailReg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/
export const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 手机号
const phoneReg = /^1[34578]\d{9}$/
export const isPhone = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

// 电话号码
export const isTel = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 是否是URL地址
export const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}

// 是否是微信环境
export const isWeiXin = () => {
    return ua.match(/microMessenger/i) === 'micromessenger'
}

// 是否是移动端
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

// 是否是QQ浏览器
export const isQQBrowser = () => {
    return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

// el是否包含某个class
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// el添加某个class
export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// el去除某个class
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

// 判断el是否在视口内
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

// 随机洗牌算法
export const shuffle = (arr) => {
    var result = [],
        random
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result
}

// 判断集合类型
export const checkStr = (str, type) => {
  switch (type) {
      case 'phone':   //手机号码
          return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
      case 'tel':     //座机
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      case 'card':    //身份证
          return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
      case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
          return /^[a-zA-Z]\w{5,17}$/.test(str)
      case 'postal':  //邮政编码
          return /[1-9]\d{5}(?!\d)/.test(str)
      case 'QQ':      //QQ号
          return /^[1-9][0-9]{4,9}$/.test(str)
      case 'email':   //邮箱
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      case 'money':   //金额(小数点2位)
          return /^\d*(?:\.\d{0,2})?$/.test(str)
      case 'URL':     //网址
          return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
      case 'IP':      //IP
          return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str)
      case 'date':    //日期时间
          return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      case 'number':  //数字
          return /^[0-9]$/.test(str)
      case 'english': //英文
          return /^[a-zA-Z]+$/.test(str)
      case 'chinese': //中文
          return /^[\\u4E00-\\u9FA5]+$/.test(str)
      case 'lower':   //小写
          return /^[a-z]+$/.test(str)
      case 'upper':   //大写
          return /^[A-Z]+$/.test(str)
      case 'HTML':    //HTML标记
          return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
      default:
          return true
  }
}

// 严格身份证校验
export const isCardID = (sId) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      console.log('你输入的身份证长度或格式错误')
      return false
  }
  //身份证城市
  var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
      console.log('你的身份证地区非法')
      return false
  }

  // 出生日期验证
  var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday)
  if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
      console.log('身份证上的出生日期非法')
      return false
  }

  // 身份证号码校验
  var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
  for (var i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
      console.log('你输入的身份证号非法')
      return false
  }

  return true
}

// 阿拉伯数字转换成中文大写
export const numberToChinese = (num) => {
  var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
      k = 0,
      re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
          case 0:
              re = BB[7] + re;
              break;
          case 4:
              if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                  .test(a[0]))
                  re = BB[4] + re;
              break;
          case 8:
              re = BB[5] + re;
              BB[7] = BB[5];
              k = 0;
              break;
      }
      if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
          re = AA[0] + re;
      if (a[0].charAt(i) != 0)
          re = AA[a[0].charAt(i)] + BB[k % 4] + re;
      k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
  {
      re += BB[6];
      for (var i = 0; i < a[1].length; i++)
          re += AA[a[1].charAt(i)];
  }
  if (re == '一十')
      re = "十";
  if (re.match(/^一/) && re.length == 3)
      re = re.replace("一", "");
  return re;
}

// 追加URL参数
export const appendQuery = (url, key, value) => {
    var options = key
    if (typeof options == 'string') {
        options = {}
        options[key] = value
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url
}

// 16进制转换RGB、RGBA字符串
export const colorToRGB = (val, opa) => {

  var pattern = /^(#?)[a-fA-F0-9]{6}$/ //16进制颜色值校验规则
  var isOpa = typeof opa == 'number' //判断是否有设置不透明度

  if (!pattern.test(val)) { //如果值不符合规则返回空字符
        return ''
    }

    var v = val.replace(/#/, '') //如果有#号先去除#号
    var rgbArr = []
    var rgbStr = ''

    for (var i = 0; i < 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2)
        var num = parseInt(item, 16)
        rgbArr.push(num)
    }

    rgbStr = rgbArr.join()
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')'
    return rgbStr
}

// 检验密码强度
export const checkPwd = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv
}

// 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "")
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "")
        case 3:
            return str.replace(/(^\s*)/g, "")
        case 4:
            return str.replace(/(\s*$)/g, "")
        default:
            return str
    }
}