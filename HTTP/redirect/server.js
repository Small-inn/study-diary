const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    console.log('request come', request.url)

    // const html = fs.readFileSync('test.html', 'utf8')
    // 301: 永久缓存，这个一般要慎重

    if (request.url === '/') {
      response.writeHead(302, {
        Location: '/new'
      })
      response.end('')
    }

    if (request.url === '/new') {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      // response.end(html)
      response.end('<div>this is content</div>')
    }
  })
  .listen(8899)

console.log('server listening On 8899')
