const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf8')

      response.writeHead(200, {
        'Content-Type': 'text/html',
        // max-age:设置过期时间，httpOnly:document.cookie获取不到
        'Set-Cookie': ['id=123;max-age=2', 'abc=456']
      })

      response.end(html)
    }
  })
  .listen(8090)

console.log('server listening On 8090')
