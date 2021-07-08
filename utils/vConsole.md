## 移动设备调试

---

- [vConsole 的中文文档](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)

- 在 mian.js 中添加如下代码：

```javascript
// if (process.env.NODE_ENV === 'production') {
if (window.location.href.indexOf('http://wxtest.life.cntaiping.com') > -1) {
  var src = '//cdn.jsdelivr.net/npm/eruda'
  // if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') {return};
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>')
  document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>')
}
```
