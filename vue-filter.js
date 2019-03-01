/**
 * 金额加人民币符号,默认两位小数和人民币符号
 * @param value 数值
 * @param type 金额字符，默认为￥
 * @param number 保留几位小数，默认两位
 */
import Vue from 'vue'
// 1.0
Vue.filter('currency', function(value, type, number) {
    if (!value) return ''
    let num = number || 2
    let t = type || '￥'
    value = (value * 1).toFixed(num)
    return t + value
})
// 2.0
const digitsRE = /(\d{3})(?=\d)/g
Vue.filter('currency', function(value, type = '￥', decimals = 2) {
    value = parseFloat(value) / 100
    if (!isFinite(value) || (!value && value !== 0)) {
        return 0
    }
    let stringified = Math.abs(value).toFixed(decimals)
    let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    let i = _int % 3
    let head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
    let _float = decimals ? stringified.slice(-1 - decimals) : ''
    let sign = value < 0 ? '-' : ''
    return sign + type + head + _int.slice(i).replace(digitsRE, '$1,') + _float
})

/**
 * 
 * 状态名称过滤
 */
Vue.filter('orderStatus', function(val) {
    return {
        ALL : '全部',
        NEW_ORDER: '待支付',
        SHIPMENTS: '待收货'
    }
})