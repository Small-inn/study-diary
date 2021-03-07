/**
 * 反射：
 * 1. 将Object属于语言内部的方法放到Reflect上
 * 2. 修改某些Object方法的返回结果，让其变得合理
 * 3. 让Object操作变成函数操作
 * 4. Reflect对象的方法与Proxy对象的方法一一对应
 * 
*/

if (Reflect.defineProperty()) {}


console.log('assign' in Object)
console.log(Reflect.has(Object, 'assign'))