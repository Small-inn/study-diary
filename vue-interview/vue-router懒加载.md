## 路由懒加载

> 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
> 结合 vue 的异步组件和 webpack 的代码分割功能实现路由懒加载

## 一般使用动态 import 语法定义代码分块点

```
代码写法
const App =  () => import('./app.vue')

const routes = [
    {
        path: '/',
        component: App
    }
]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    next()
    document.title = '标题'
    window.scroll(0, 0)
})

export default router
```
