## vue-filter
---
> 常见的文件格式化，双花括号和v-bind表达式
```
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

#### 新建一个js, vfilter.js,并在main.js中注册
---
```
    const vfilter = {
        limitWord: function(title) {
                if (title.length <= 3) {
                    return title
                } else {
                    return title.slice(0, 33) + '...'
                }
        },
        formatMoney: function(value, type) {
            return value.toFixed(2) + type
        }
    }
    export default vfilter
    <!-- 在main.js中的写法 -->
    import vfilters from './common/filter/vfilter.js'

    for(let key in vfilters) {
        <!-- 注册为全局过滤器 -->
        Vue.filter(key, vfilters[key])
    }
    <!-- 在组件中使用 -->
    <h1>{{wordText | limitWord}}</h1>
    <span>{{price | formatMoney('元')}}</span>
```