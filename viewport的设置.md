#### viewport的设置问题
---
1. 设置页面宽度等于设备宽度，缩放比例为1，禁止用户缩放网页
```
    <mta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```
2. 针对一些不识别viewport的浏览器
```
    <meta name="HandheldFriendly" content="true">
```
3. 针对微软的老式浏览器
```
  <meta name="MobileOptimized" content="320"> 
```
