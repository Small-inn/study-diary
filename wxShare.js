// 1. 请求接口签名，appid等
import { getShareConfig } from 'api/data'
import wx from ' weixin-js-sdk'

const shareParams = {
    title: '你好',
    desc: '不好',
    link: 'https://www.baidu.com',
    imgUrl: 'https: //www.hhh.jpg'
}
const share = function wx(shareParams) {
    getShareConfig().then(res => {
        if (res.data.status === 200) {
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appid, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名
                jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表
            })
            wx.ready(() => {
                wx.onMenuShareAppMessage({
                    title: shareParams.title, // 分享标题
                    desc: shareParams.desc, // 分享描述
                    link: shareParams.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareParams.imgUrl, // 分享图标
                    type: shareParams.type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: shareParams.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                    // 用户点击了分享后执行的回调函数
                    },
                    fail: function() {}
                })
                wx.onMenuShareTimeline({
                    title: shareParams.title, // 分享标题
                    desc: shareParams.desc, // 分享描述
                    link: shareParams.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareParams.imgUrl, // 分享图标
                    type: shareParams.type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: shareParams.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                    // 用户点击了分享后执行的回调函数
                    },
                    fail: function() {}
                })
            })   
            wx.error(() => {
                console.log(error)
            })         
        }
    })
}
export default share