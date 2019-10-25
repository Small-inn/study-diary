const http = require('http')
const fs = require('fs')

http
  .createServer(function(ret, res) {
    console.log('request come', ret.url)

    // 1.0 cors跨域问题
    // const html = fs.readFileSync('test.html', 'utf8')
    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })
    // res.end(html)

    // 2.0 缓存头
    if (ret.url === '/') {
      const html = fs.readFileSync('test.html', 'utf8')
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(html)
    }

    if (ret.url === '/script.js') {
      // const html = fs.readFileSync('test.html', 'utf8')
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=20'
      })
      res.end('console.log("script loaded")')
    }
    // 3.0 缓存验证 Last-Modified-Since/Etag
  })
  .listen(8888)

console.log('server listening 0n 8888')
