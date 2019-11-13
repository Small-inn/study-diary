const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http
  .createServer(function(request, response) {
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html')
    // const img = fs.readFileSync('img.jpg')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip'
      // max-age:设置过期时间，httpOnly:document.cookie获取不到
      // 'Set-Cookie': ['id=123;max-age=2', 'abc=456']
    })
    response.end(zlib.gzipSync(html))
  })
  .listen(8899)

console.log('server listening On 8899')
