## 二、三 面试技巧（技术）

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

## js 运行机制

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