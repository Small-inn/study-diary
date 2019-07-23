let identityUtils = {
  resolveBirthdate: resolveBirthdate,
  resolveGender: resolveGender,
  resolveAge: resolveAge,
  checkIdentityCode: checkIdentityCode
}

function resolveBirthdate(identityCode) {
  let year = parseInt(identityCode.substr(6, 4))
  let month = parseInt(identityCode.substr(10, 2))
  let day = parseInt(identityCode.substr(12, 2))

  return new Date(year, month - 1, day)
}

function resolveGender(identityCode) {
  let c = identityCode.charAt(16)
  let n = parseInt(c) % 2
  return n === 1 ? 'male' : 'female'
}

function resolveAge(param) {
  let birthDate = typeof param === 'string' ? resolveBirthdate(param) : param

  let year = birthDate.getFullYear()
  let month = birthDate.getMonth() + 1
  let day = birthDate.getDate()

  let today = new Date()
  let todayYear = today.getFullYear()
  let todayMonth = today.getMonth() + 1
  let todayDay = today.getDate()

  let age = todayYear - year

  if (todayMonth < month || (todayMonth === month && todayDay < day)) {
    age--
  }

  return age
}

function checkIdentityCode(codeStr) {
  if (!codeStr || codeStr.length !== 18) {
    return false
  }

  let reg = /^\d{6}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

  if (!reg.test(codeStr)) {
    return false
  }

  if (!validateCheckCode(codeStr)) {
    return false
  }

  let age = resolveAge(codeStr)

  // 年龄必须0-100岁
  return age >= 0 && age <= 100

  function validateCheckCode(codeStr) {
    var wiMap = {
      2: 2,
      3: 4,
      4: 8,
      5: 5,
      6: 10,
      7: 9,
      8: 7,
      9: 3,
      10: 6,
      11: 1,
      12: 2,
      13: 4,
      14: 8,
      15: 5,
      16: 10,
      17: 9,
      18: 7
    }
    var yMap = {
      0: '1',
      1: '0',
      2: 'X',
      3: '9',
      4: '8',
      5: '7',
      6: '6',
      7: '5',
      8: '4',
      9: '3',
      10: '2'
    }

    for (var i = 2, s = 0; i <= 18; i++) {
      s += wiMap[i] * codeStr[18 - i]
    }

    var y = s % 11

    return yMap[y] === codeStr.charAt(17).toUpperCase()
  }
}

export default identityUtils
