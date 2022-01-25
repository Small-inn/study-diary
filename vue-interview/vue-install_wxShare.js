import axios from 'axios'
let wxShare = {}
wxShare.install = function(Vue, options) {
  // 引入微信SDK
  const wechatSDK = document.createElement('script')
  wechatSDK.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'
  document.getElementsByTagName('body')[0].appendChild(wechatSDK)

  let wxSignature = (shareInfo) => {
    new Vue({
      data: {
        shareInfo: {}
      },
      created() {
        axios.post().then(res => {
          // 配置二次分享权限
          this.wxConfig(res, shareInfo)
        }).catch(error => {})
      },
      methods: {
        wxConfig(res, shareInfo) {
          let thumb = shareInfo.thumb
          // if (!(thumb.slice(0, 4) === 'http' || thumb.slice(0, 5) === 'https'))
          // 配置分享权限
          wx.config({
            debug: false,
            appId: 'wxfdafasfdfsfs', // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填， 生成签名的随机串
            signature: res.sign, // 必填，签名
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone'
            ]
          })
          wx.ready(function() {
            // 分享给朋友
            wx.onMenuShareAppMessage({
              title: shareInfo.title, // 分享标题
              desc: shareInfo.intro, // 分享描述
              link: shareInfo.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: thumb, // 分享图标
              type: 'link', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function(obj) {
                console.log(obj.errMsg)
                // 用户确认分享后执行的回调函数
              },
              fail: function(obj) {
                // 用户取消分享后执行的回调函数
                alert(obj.errMsg)
              }
            })
            // 分享到朋友圈
            wx.onMenuShareTimeline({
              title: shareInfo.title, // 分享标题
              link: shareInfo.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: thumb, // 分享图标
              success: function(obj) {
                // 用户确认分享后执行的回调函数
                console.log(obj.errMsg)
              },
              fail: function(obj) {
                // 用户取消分享后执行的回调函数
                alert(obj.errMsg)
              }
            })
            //微信分享到QQ
            wx.onMenuShareQQ({
              title: shareInfo.title, // 分享标题
              desc: shareInfo.intro, // 分享描述
              link: location.href, // 分享链接
              imgUrl: thumb, // 分享图标
              success: function(obj) {
                // 用户确认分享后执行的回调函数
                console.log(obj.errMsg)
              },
              fail: function(obj) {
                // 用户取消分享后执行的回调函数
                alert(obj.errMsg)
              }
            })
            // 微信分享到QQ空间
            wx.onMenuShareQZone({
              title: shareInfo.title, // 分享标题
              desc: shareInfo.intro, // 分享描述
              link: location.href, // 分享链接
              imgUrl: thumb, // 分享图标
              success: function(obj) {
                // 用户确认分享后执行的回调函数
                console.log(obj.errMsg)
              },
              fail: function(obj) {
                // 用户取消分享后执行的回调函数
                alert(obj.errMsg)
              }
            })
          })
        }
      }
    })
  }
  Vue.prototype.$wxShare = {
    wxShare(shareInfo) {
      wxSignature(shareInfo)
    }
  }
}
export default wxShare

// 在项目入口处：
import wxShare from '@/assets/static/wxShare'
Vue.use(wxShare)

// 在组件中：
this.$wxShare.wxShare({
  title: share.title,
  intro: share.intro,
  thumb: share.thumb,
  link: location.href
})
