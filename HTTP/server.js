/**
 * web服务
 *
 * server2.js 为演示跨域问题
 * */

const http = require('http')

http
  .createServer(function(ret, res) {
    console.log('request come', ret.url)
    // 1.0、2.0
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Test-Cors',
      'Access-Control-Allow-Methods': 'POST, PUT, Delete',
      'Access-Control-Max-Age': '1000'
    })
    res.end('123')
  })
  .listen(8887)

console.log('server listening 0n 8887')
