//app.js
const AV = require('./utils/av-live-query-weapp-min');

var OpenId = '';
var UserInfo = null;

AV.init({
  appId: 'KTFEKBupHq0XU4HsmgbK5goU-gzGzoHsz',
  appKey: 'zw8HqrHYf2qw1IpWc5saXJGS',
});

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow:function(){
  },
  globalData: {
    userInfo: null,
    openId: ""
  },
})