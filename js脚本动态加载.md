#### 一、JavaScript的动态加载
---
> script的动态生成优点是，不会阻塞页面的渲染,也就不会造成浏览器假死，又需要脚本的执行顺序，把async设置为false

```
[a.js, b.js].forEach(item => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.head.appendChild(script)
})
```