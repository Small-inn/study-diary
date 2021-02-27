
![](https://imgkr.cn-bj.ufileos.com/b4c806dd-caa2-43f4-82d9-796ce6716267.svg)

## 1.HTTP 详解

---

### 1.1 当浏览器输入 url 后 HTTP 请求返回的完成过程

   - redirect ---> App cache ---> DNS 解析 ---> TCP 链接 --->Request 请求 ---> Response 数据

### 1.2 五层模型

   - 应用层（HTTP、FTP）
   - 传输层（TCP、UDP）
   - 网络层（数据结点创建逻辑链路）
   - 数据链路层（实体间建立数据链路连接）
   - 物理层（硬件设备）

### 1.3 http methods

- method
   - GET：仅用作数据的读取，请求参数以query的形式附加
   - POST：创建新资源或者修改现有资源，请求参数以body的形式传递
   - HEAD：只请求页面的首部、不请求页面内容。它允许我们单纯获取服务器的响应头信息
   - PUT：在能力上与POST类似，区别在于PUT的URI指向的是具体的某个资源，而不能指向资源集合。同时PUT对资源的修改是幂等的
   - DELETE：用于删除指定的资源
   - OPTIONS：用于获取指定服务能够支持的通信选项

- code
   - 1XX：成功接受请求，但处理过程还没结束，需要客户端再抛出一个请求才能完成整个过程。
   - 2XX：表示成功接受请求、并已经处理完毕。200 OK，标识客户端的请求已被服务器正确处理
   - 3XX：表示服务器虽然也处理了你的请求，但客户端还需要进一步的工作，才可以完成请求。
      - 301：永久重定向，表示资源已被分配了新的URL
      - 302：临时重定向，表示资源临时被分配了新的URL
      - 304：表示服务器校验后发现资源没有改变，提醒客户端直接走缓存来取走资源
   - 4XX：客户端错误，意味着请求出错了。
      - 400：请求报文存在的语法错误
      - 401：请求需要用户认证
      - 403：对请求资源的访问被服务器拒绝（多半是没权限）
      - 404：资源不存在，可能是路径不对，也可能是这个资源在服务器端被下掉了。
   - 5XX：服务器错误，意味着服务器内部的程序处理有问题
      - 500：服务器在接受请求后进行处理的过程中，发生内部错误
      - 502：网关错误
      - 503：由于服务器过载或者维护导致无法完成请求
      - 504：网关超时

### 1.4 CORS 跨域请求
### 1.5 Cache-Control 缓存头
### 1.6 缓存验证 Last-Modified 和 Etag
   - Last-Modified:上次修改时间，配合 If-Modified-Since 或者 If-Unmodified-Since 使用，对比上次修改时间以验证资源是否需要更新
   - Etag:数据签名，配合 If-Match 或者 If-Non-Match 使用，对比资源的签名判断是否使用缓存

### 1.7 Cookie&session
 1. 通过 set-cookie 设置
 2. max-age 和 expires 来设置过期时间 
 3. secure 只在 https 的时候发送
 4. 在设置 HTTPonly 之后就无法通过 document.cookie 访问

### 1.8 HTTP协议的无状态？
> 与其说是“无状态”，不如说是“无记忆”。这个 HTTP 协议呀，心非常大，请求与请求之间，是不关心对方的情况的。也就是说你上一秒出去一个 A 请求，下一秒出去一个 B 请求，那么 B 是完全感知不到 A 请求曾经存在过的，更别提了解 A 请求的内容了。总之，两个请求间毫无瓜葛。

 - 如何维持状态信息？
   - cookie：cookie是存储在浏览器的小段文本，会在浏览器每次向同一服务器再发起请求时被携带并发送到服务器上。可以把状态信息方法在cookie里面，带给服务器
   - session：session是存储在服务器的用户数据。浏览器向服务器第一个发起请求时，服务器会为当前会话创建一个session，并且把对应的session-id写入cookie中，用来标识session。此后，每次用户请求都会携带一个包含session-id的cookie，服务器解析出了session-id，便能定位到的用户信息

## 2. HTTP的发展史
---
   HTTP/0.9 ---> HTTP/1.0 ---> HTTP/1.1 ---> HTTP/2.0
### 2.1 HTTP1.1解决的问题
   TCP连接不可复用--HTTP/1.0每一次HTTP通信，都需要三步走--TCP连接、HTTP通信、断开HTTP连接<br>

   队头阻塞问题—— HTTP/1.0中，请求与请求间是串行的。如果我发送了 A 请求，那么 A 请求的响应返回之前，你的 B 请求不管多么着急都出不去。如果 A 请求去了一年，那么 B 请求就得耗上一年，活活被堵死。这就是著名的“队头阻塞问题”

   **HTTP/1.1**尝试用**管线化**解决这个问题。

   HTTP/1.1 中的管线化是指，允许多个 HTTP 请求批量地提交给服务器。不过这样做仍然无法从根儿上解决队头阻塞——虽然发送动作可以并行，不过服务器依然需要根据请求顺序来回复浏览器的请求，也就是说响应仍是串行的。A 如果一年没有被响应，那么 B 也休想被响应。

### 2.2 HTTP2.0对性能的改进
   1. 二进制分帧

      在 HTTP1.x 中，数据以文本的格式进行传输，解析起来比较低效。<br>
      HTTP2.0 在传输消息时，首先会将消息划分为更小的消息和帧，然后再对其采取二进制格式的编码，确保高效的解析。
   2. 头部压缩

      HTTP2.0 中，客户端和服务器分别会维护一份相同的静态字典，这个字典用来存储常见的头部名称，以及常见的头部名称和值的组合。同时还会维护一份相同的动态字典，这个字典可以实时被更新。

      如此一来，第一次相互通信过后，后面的请求只需要发送与前面请求之间头部不同的地方，其它的头部信息都可以从字典中获取。相对于 HTTP1.x 中每次都要携带整个头部跑来跑去的笨重操作来说，大大节省了网络开销。
   3. 服务端推送

      在 HTTP1.x 中，如果用户请求了资源 A，结果发现自己如果要用资源 A，那么必须依赖资源 B，这时他不得不再消耗一个请求。

      而 HTTP2.0 中，允许服务器主动向客户端 push 资源。也就是说当服务器发现客户端请求了资源 A，却忘了请求资源 A 依赖的资源 B 时，它可以主动将资源 B 顺手推送给客户端。

      这样一来，当客户端发现自己漏掉一个必要请求的时候，直接从缓存中就可以读到资源 B 了，而不必再消耗一个请求。
   4. 多路复用

      HTTP1.x 并不能真正解决队头阻塞的问题。

      HTTP1.x 解决不了的问题，HTTP2.0 来解决！

      没错，多路复用其实就是进化版的长连接。

      在 HTTP 2.0 中，一次连接建立后，只要这个连接还在，那么客户端就可以在一个链接中批量发起多个请求。同时，请求与请求间完全不阻塞，A 请求的响应就算没回来，也不影响 B 请求收到自己的响应。请求与请求间做到了高度的独立，真正实现了并行请求。由此，彻底规避了队头阻塞问题。

## 3.跨域
### 3.1 什么是跨域
   首先要知道”同源策略“，协议、域名、端口号均相同。同源策略是浏览器的一个安全功能，不同源的脚本在没有明确授权的情况下，不能读写对方资源。

   不能读写资源的含义：
   - Cookie、LocalStorage和IndexDB无法读取
   - DOM和JS对象无法获取
   - Ajax请求发不出去
   只要是协议、域名、端口号任何一个不同，都被当做是不同的域，就是跨域。
### 3.2 跨域解决方案
   1. JSONP

      js天然支持跨域，JSONP主要是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSONP数据，客户端可以随意定制函数处理返回数据
      - 浏览器脚本定义callback，callback内是读取数据的逻辑
      - 服务端调用，输出对callback的调用，把目标数据信息写入目标文件
   2. CROS

      全称（Cross-origin- resource sharing）。<br>
      它允许浏览器指向不同源的服务器，发出XMLHttpRequest请求。需要浏览器和服务器同事支持，低版本IE不支持该功能

      - 简单的CORS行为<br>
         浏览器会把请求分为简单请求和非简单请求，对于这两种请求，CORS 的处理过程是不同的，我们先来看简单请求
         - 请求方式为HEAD、POST 或者 GET
         - http头信息不超出一下字段：Accept、Accept-Language 、 Content-Language、 Last-Event-ID、 Content-Type(限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain)<br>
      
         满足以上两个条件，就是简单请求。对于简单请求，浏览器直接发出CORS请求。具体的就是在头信息中，增加一个Origin字段：
         ```
            Origin: http://hhhh.com
         ```
         Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。服务器处理的结果，分为两种情况：<br>

         - 不同意： 如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应；浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被 XMLHttpRequest 的 onerror 回调函数捕获。
         - 同意：如果Origin指定的域名在许可范围内，服务器返回的响应，会多出这个关键的头信息字段：
         ```
            Access-Control-Allow-Origin: http://hhhh.com
         ```
         这个字段用于说明服务器接纳哪些域名。它的值要么是请求时Origin字段的值，要么是一个*——表示接受任意域名的请求。
      - 复杂的CORS行为
         预检请求，请求方式为OPTIONS，目的是为了避免做无用功。
   3. postMessage

      通过注册监听信息的Message事件、调用发送信息的postMessage方法，可以实现跨域窗口通信

      > 从广义上讲，一个窗口可以获得对另一个窗口的引用（比如 targetWindow = window.opener），然后在窗口上调用 targetWindow.postMessage() 方法分发一个 MessageEvent 消息。接收消息的窗口可以根据需要自由处理此事件。传递给 window.postMessage() 的参数（比如 message ）将通过消息事件对象暴露给接收消息的窗口。

      **发信息的postMessage方法**
      ```javascript
      otherWindow.postMessage(message, targetOrigin, [transfer])
      ```
      otherWindow是对目标窗口的引用；message是要发送的消息；targetOrigin是限定消息接受范围，一般是字符串或者URI，星号*则意味不限制

      **接受信息的message事件**

      ```javascript
      var onmessage = function(event) {
         var data = event.data;
         var origin = event.origin;
      }
      if (typeof window.addEventListener != 'undefined') {
         window.addEventListener('message', onmessage, false);
      } else if (typeof window.attachEvent != 'undefined') {
         window.attachEvent('onmessage', onmessage);
      }
      ```


