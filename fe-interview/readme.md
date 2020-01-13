## 一、二面试技术
1.通信类
    a).什么是同源策略及限制
        >限制从一个源（协议、域名、端口）加载的文档或者脚本如何与来自另一个源的资源进行交换，用于隔离潜在恶意文件的关键的安全机制
        i).cookie、localStorage、indexDB无法读取
        ii).DOM无法获得（主要指另一个源的DOM）
        iii).Ajax请求不能发送(Ajax不能跨域请求，只能同源通信)
    b).前后端如何通信
        i).Ajax
        ii).WebSocket
        iii).CORS
    c).如何创建Ajax(考察点)
        i).XMLHttpRequest对象的工作流程
        ii).兼容性的处理
        iii).事件的触发条件
        vi).事件的触发顺序
    d).跨域通信的几种方式
        1).JSONP
        2).Hash
        3).postMessage
            <!-- 窗口A向窗口B发送信息,在B窗口下window对象监听message事件 -->
            Window.postMessage('data', 'http://B.com')
            <!-- 在B窗口监听 -->
            window.addEventListener('message', function(event) {
                console.log(event)
            }, false)
        4).WebSocket
            <!-- 参考阮一峰的博客 -->
            let ws = new WebScoket('wss://echo.websocket.org')
            ws.onopen = funciton(ev) {
                ws.send(data)
            }
            ws.onmessage = funciton(ev) {
                ws.close()
            }
            ws.onclose = funciton(ev) {}
        5).CORS
2.安全类
    a).CSRF(Cross-site request forgery 跨站请求伪造)，原理：登录Cookie/get，防御原理：Token验证、Refer验证、隐藏令牌 
    b).XSS(Cross-site scripting 跨域脚本攻击)
3.算法类
    a).排序
    b).堆栈、队列、链表
    c).递归
    d).波兰式和逆波兰式 

## 二、三 面试技巧（技巧&&技术）

1. 知识面要广
2. 理解要深刻
3. 内心要诚实
4. 态度要谦虚
5. 回答要灵活
6. 要学会赞美

## DOM 事件

1.DOM 事件类 
    1).DOM事件的级别
        (a).DOM0、element.onClick = function() {}
        (b).DOM2、element.addEventListener('click', function() {}, false)
        (c).DOM3、element.addEventListener('keyUp', function() {}, false)
    2).DOM事件模型
        (a).捕获(自上往下)
        (b).冒泡(自里而外)
    3).DOM事件流（三步）
        捕获 ---> 目标阶段 ---> 冒泡
    4).描述DOM事件捕获的具体流程
        window ---> document ---> html ---> body ---> .... ---> 目标元素
    5).Event对象的常见应用
        (a).event.preventDefault() // 阻止默认事件
        (b).event.stopPropagation() // 阻止冒泡行为
        (c).event.stopImmediatePropagation() // 同一DOM注册多个事件时，只执行某一事件，事件优先级
        (d).event.currentTarget() // 获取被触发事件的目标元素 
        (e).event.target() //
    6).自定义事件
        var eve = new Event('custome')
        ev.addEventListener('custome', function() { console.log('custome') })
        ev.dispatchEvent(eve)
2.

## 渲染机制
1.什么是DocType
    >是用来来声明文档类型定义和DTD(Document type definition, 文档类型定义),主要作用是文件的合法性校验  
2.浏览器是如何渲染的
    >HTML --> HTML Parser --> DOM Tree && Style Sheets --> CSS Parser --> Style Rules(CSSOM Tree) ==(Attachment)==> Render Tree --> Painting --> display
3.reflow和repaint
4.布局Layout

## js 运行机制
1.理解JS单线程
2.任务队列
3.Event Loop

## 页面性能

1. 资源合并,减少 HTTP 请求
2. 非核心代码的异步加载 ---> 异步加载方式 ---> 异步加载区别
   1).动态脚本加载
   2).defer ---> HTML 解析完之后执行,按加载顺序执行
   3).async ---> 加载完之后执行，如果多个执行顺序和加载顺序无关
3. 利用浏览器缓存 ---> 缓存的分类 ---> 缓存的原理
   1).强缓存
   Expires Expires: Thu, 21 Jan 2017 23:09:00 GMT
   Cache-Control Cache-Control: max-age=3600
   2).协商缓存
   Last-Modified If-Modified-Since Last-Modified: Wed, 26 Jan 2017 00:35:11 GMT
   Etag If-None-Match
4. 使用 CDN
5. 预解析 DNS
   `<meta http-equiv='x-dns-prefetch-control' content='on'> <link rel='dns-prefetch' href='//host_name_to_prefetch.com'>`

## 错误监控

1.前端错误分类
    1).即时加载错误，代码错误
    2).资源加载错误 
2.错误的捕获方式
    1).try...catch
    2).window.onerror
    3).object.onerror (资源加载错误)
    4).performance.getEntries() (资源加载错误)
    5).Error 事件捕获 (资源加载错误) 
3.上报错误的基本原理
    1).采用 Ajax 通信的方式上报
    2).利用 Image 对象上报
`(new Image()).src = 'http://www.baidu.com/test?x=hhhh&y=kkkk'`

## MVVM 框架
1.了解MVVM框架吗
    Vue.js React.js Angular.js
2.谈谈对MVVM框架的认识
    model ===> ViewModel <===> view
3.双向绑定的原理
    view ==(input事件)==> data, data ==(Object.defineProperty)==> view
4.设计模式
    观察者模式：Observe监听Data数据变化，通知Dep回调Watcher，Watcher订阅Dep，更新View
5.生命周期 
6.源码

## 三、四面 面试技巧（技术总监）
 
1.准备要充分
2.描述要演练
3.引导找时机
4.优势要发挥
5.回答要灵活

## 面试模拟
1.业务能力
    a).我做过什么业务 ---> 独立负责了什么模块的开发
    b).负责的业务有什么业绩 ---> 获取XXX粉丝（用户量）
    c).使用了什么技术方案 ---> 使用css3动画标签取代常规的jq动画等
    d).突破了什么技术难点 ---> 对XX类的动画以及细节得到提升
    e).遇到的问题 ---> requestFrameAnimation
    f).最大的收获是什么 ---> 对此类业务的流程以及控制有了更加深入的理解
2.团队协作能力
    a).主动描述
3.事务推动能力
4.带人能力
5.其他能力

## 终面 面试技巧（hr）
1.乐观积极
2.主动沟通 
3.逻辑顺畅
4.上进有责任心
5.有主张、做事果断

## 内容
1.职业竞争力
    a).业务能力
    b).思考能力
    c).学习能力
    d).无上限的付出 
2.职业规划
    a).目标是什么
    b).近阶段的目标
    c).长期目标
    d).方式方法

## 面试总结
1. JD描述
2. 简历
    对照JD写出相符合的简历，对于未掌握的技术栈快速复习、理解
3. 自我介绍
    事先打好草稿，展示优势，描述什么项目，切忌临场发挥

## 一面
重基础、懂原理、要思考、知进退、然后势不可挡
## 二面
横向扩展、项目结合、做到有的放矢
## 三面
有经验、懂合作、有担当、懂规矩、察言观色
## 终面
会沟通、要上进、好性格、有主见、强逻辑、无可挑剔
## 复盘
胜不骄、败不馁、总结经验、步步为营、多拿offer