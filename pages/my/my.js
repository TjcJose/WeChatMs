// pages/my/my.js
//获取应用实例
const app = getApp()
var loginStatus = true;
const AV = require('../../utils/av-live-query-weapp-min');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    searchLogItems: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    AV.User.logIn(app.globalData.openId, '123456').then(function (loginedUser) {
      // 获取用户信息
      var myInfo = {
        nickName: loginedUser.getNickname(),
        avatarUrl: loginedUser.getTitlePicUrl()
      }

      // 将用户信息保存在全局变量中
      app.globalData.userInfo = myInfo
      // 更新页面的用户信息
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
      // 请注意，密码不会明文存储在云端，因此密码只能重置，不能查看
    }, function (error) {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo

          var user = new AV.User();
          // 设置用户OpenId
          user.setUsername(app.globalData.openId);
          // 设置用户昵称
          user.setNickname(res.userInfo.nickName);
          // 设置用户的头像
          user.setTitlePicUrl(res.userInfo.avatarUrl);
          // 设置密码
          user.setPassword('123456');
          // 设置邮箱
          user.setEmail('ms@163.com');

          user.signUp().then(function (loginedUser) {
            console.log(loginedUser);
          }, function (error) {
          });

          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
      })
    });
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取图片数据，Onload不会再次加载，OnShow会每次重新加载
    // 解决图片上传后，获取不到的感刚刚上传的图片Bug

    var that = this;
    // 获取用户查询的历史图片
    var query = new AV.Query('_File');
    // 文件名
    query.contains("name", app.globalData.openId)
    // 按创建时间降序
    query.descending('createdAt');
    query.find().then(function (results) {
      // 如果这样写，第二个条件将覆盖第一个条件
      console.debug(results)
      var mySearchLogItems = results.filter(function (item, index, array) {
        // type用来表示什么类型的操作，1：图片检索日志，0：头像
        return item.attributes.metaData.type === "1";
      }).map(function (item, index, array) {
        // toLocaleString()时间的格式化
        var searchLog = { date: item.createdAt.toLocaleString(), src: item.attributes.url + "?imageView2/2/h/400" }
        return searchLog
      })
      that.setData({
        searchLogItems: mySearchLogItems,
      })
    }, function (error) {
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

  updateTitle: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      title: value
    });
  },

  updateDescription: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      description: value
    });
  },
})