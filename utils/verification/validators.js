import identityUtils from './identityUtils'

let validators = {
  name: validateName,
  tel: validateTel,
  identityCode: validateIdentityCode
}

function ValidationResult(result, message) {
  this.result = !!result
  this.message = message || ''
}
// 姓名
function validateName(str) {
  let ret = new ValidationResult()

  if (!str) {
    ret.message = '请填写姓名'
    return ret
  }

  if (str.length < 2 || str.length > 26) {
    ret.message = '姓名录入错误，长度应为2-26个字'
    return ret
  }

  let reg = /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\u2022]*[\u4e00-\u9fa5]+$/
  if (!reg.test(str)) {
    ret.message = '姓名录入错误，只能录入中文和“•”'
    return ret
  }

  ret.result = true
  return ret
}

// 手机号码
function validateTel(numStr) {
  let ret = new ValidationResult()

  if (!numStr) {
    ret.message = '请填写投保人手机号'
    return ret
  }

  if (!/^[1-9][0-9]{10}$/.test(numStr)) {
    ret.message = '手机号必须为11位全数字'
    return ret
  }

  let validStartNums = [
    '13',
    '14',
    '15',
    '18',
    '170',
    '173',
    '175',
    '176',
    '177',
    '178'
  ]

  let anyValidStartNum = false
  for (let i in validStartNums) {
    let n = validStartNums[i]
    if (startsWith(numStr, n)) {
      anyValidStartNum = true
      break
    }
  }

  if (!anyValidStartNum) {
    ret.message = '系统不支持该手机号段'
    return ret
  }

  ret.result = true
  return ret

  function startsWith(str1, str2) {
    let sub = str1.substr(0, str2.length)
    return sub === str2
  }
}

// 身份证
function validateIdentityCode(identityCode) {
  let ret = new ValidationResult()

  if (!identityUtils.checkIdentityCode(identityCode)) {
    ret.message = '请输入正确的身份证信息'
    return ret
  }
  ret.result = true
  return ret
}
export default validators
