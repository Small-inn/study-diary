## 前端安全

---

### sql 注入

- 窃取数据可内容
- 攻击方式：在 SQL 语句中添加特殊字符，形成攻击型代码

### XSS 攻击

- 窃取前端的 cookie 内容
- 攻击方式： 在页面展示内容中，掺杂 js 代码，以获取网页信息
- 措施：npm i xss 把左右尖括号转译成&lt; &gt;

### XRF 攻击

* CSRF(Cross-site request forgery) 跨站请求伪造， One Click Attack或者Session Riding，在用户不知情的情况下执行了攻击者伪造的请求。

- 跨站请求伪造

### DDOS

- 需要硬件支持

### 密码加密

- 攻击方式：获取用户名和密码，再去尝试登录其他系统
- 措施：将密码加密，即使拿到密码也不知道明文 crypto

```javascript
const crypto = require('crypto')
const SECRET_KEY = 'liux_123-#'
function md5(content) {
  let md5 = crypto.createHase('md5')
  return md5.update(content).digest('hex')
}

function genPsd(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

console.log(genPsd(123))
```

### 越权

* 水平越权：获取到跟访者同级别的数据
* 垂直越权：获取到更高级别用户的数据或权限

