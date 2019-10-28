const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    const html = fs.readFileSync('test.html', 'utf8')
    const img = fs.readFileSync('img.jpg')

    if (request.url === '/') {
      response.writeHead(200, {
        'Content-Type': 'text/html'
        // max-age:设置过期时间，httpOnly:document.cookie获取不到
        // 'Set-Cookie': ['id=123;max-age=2', 'abc=456']
      })
      response.end(html)
    } else {
      response.writeHead(200, {
        'Content-Type': 'image/jpg',
        connection: 'close'
      })
      response.end(img)
    }
  })
  .listen(8899)

console.log('server listening On 8899')
