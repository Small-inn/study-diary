## HTTP 详解

---

1. 当浏览器输入 url 后 HTTP 请求返回的完成过程

   > redirect ---> App cache ---> DNS 解析 ---> TCP 链接 --->Request 请求 ---> Response 数据

2. 五层模型

   > 应用层（HTTP、FTP）、传输层（TCP、UDP）、网络层（数据结点创建逻辑链路）、数据链路层（实体间建立数据链路连接）、物理层（硬件设备）

3.http

- 3.1 method

> 用来定义对于资源的操作
> get&post

- 3.2 code

> 定义服务器对请求的处理结果

4. CORS 跨域请求
5. Cache-Control 缓存头
6. 缓存验证 Last-Modified 和 Etag
   > Last-Modified:上次修改时间，配合 If-Modified-Since 或者 If-Unmodified-Since 使用，对比上次修改时间以验证资源是否需要更新
   > Etag:数据签名，配合 If-Match 或者 If-Non-Match 使用，对比资源的签名判断是否使用缓存

7.Cookie&session

> （1）通过 set-cookie 设置，（2）max-age 和 expires 来设置过期时间，（3）secure 只在 https 的时候发送，（4）在设置 HTTPonly 之后就无法通过 document.cookie 访问
