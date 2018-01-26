// pages/photo/photo.js
// 注册LeanCloud的JS文件
const AV = require('../../utils/av-live-query-weapp-min');
const BaiduAK = 'jYfflComxxErOUU6gHrO3cGl'
const BaiduSK = 'PtynvWyxIdW8dDrgaVIhPkw9PhQkdswU'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    animationData2: {},
    imgUrl: "/res/img/cycle.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    animationFun.call(that);
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          _cameraHeight: res.screenHeight,
          photoSrc: getApp().PhotoSrc
        })

        that.addSearchPicture();

        //百度云图片检索
        //that.addBaiduSimilar()

        /*new AV.File('file-name', {
          blob: {
            uri: getApp().PhotoSrc,
          },
        }).save().then(
          file => console.log(file.url())
          ).catch(console.error);*/
      }
    })
  },

  /**
   * LeanCloud添加图片
   */
  addSearchPicture: function () {
    var photoFile = new AV.File(app.globalData.openId, {
      blob: {
        uri: app.PhotoSrc,
      },
    })
    // 设置文件的用户openId
    photoFile.metaData('type', "1");

    photoFile.save().then(
      file => console.log(file.url())
    ).catch(console.error);
  },
  /**
   * 获取百度的Token
   */
  getBaiduToken: function () {
    /*var getTokenUrl = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + BaiduAK + '&client_secret=' + BaiduSK
    wx.request({
      url: getTokenUrl, 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })*/

    return '24.02b0e35457db3376dff9054db5986318.2592000.1519267322.282335-10602762'
  },
  /**
   * 相似图的检索
   */
  getBaiduSimilar: function () {
    var getSimilarUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/realtime_search/similar/search?access_token=';
    var that = this;
    getSimilarUrl = getSimilarUrl + that.getBaiduToken();

    wx.request({
      url: getSimilarUrl, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  /**
     * 相似图的增加
     */
  addBaiduSimilar: function () {
    var addSimilarUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/realtime_search/similar/add?access_token=';
    var that = this;
    addSimilarUrl = addSimilarUrl + that.getBaiduToken();
    wx.request({
      url: addSimilarUrl,
      method: 'POST', //默认是GET，所以要添加
      data: {
        image: 'http://ac-ktfekbup.clouddn.com/7e47906de7b2b5cf71e3.PNG',
        brief: 'id:0003'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
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
  /*takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },*/
  error(e) {
    console.log(e.detail)
  }
})

function animationFun() {
  //实例化一个动画
  var animation = wx.createAnimation({

    duration: 500,
    /**
    * http://cubic-bezier.com/#0,0,.58,1 
    * linear 动画一直较为均匀
    * ease 从匀速到加速在到匀速
    * ease-in 缓慢到匀速
    * ease-in-out 从缓慢到匀速再到缓慢
    * 
    * http://www.tuicool.com/articles/neqMVr
    * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
    * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
    */
    timingFunction: 'linear',
  })

  //实例化一个动画
  var animation3 = wx.createAnimation({
    duration: 500,
    /**
    * http://cubic-bezier.com/#0,0,.58,1 
    * linear 动画一直较为均匀
    * ease 从匀速到加速在到匀速
    * ease-in 缓慢到匀速
    * ease-in-out 从缓慢到匀速再到缓慢
    * 
    * http://www.tuicool.com/articles/neqMVr
    * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
    * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
    */
    timingFunction: 'linear',
  })

  this.animation = animation

  this.setData({
    animationData: animation.export()
  })

  this.animation3 = animation3

  this.setData({
    animationData3: animation3.export()
  })

  var n = 0;
  //连续动画需要添加定时器,所传参数每次+1就行
  var interval = setInterval(function () {
    // animation.translateY(-60).step()
    n = n + 1;
    console.log(n);
    this.animation.rotate(45 * (n)).scale(3, 3).step()
    this.animation3.rotate(-45 * (n)).scale(3, 3).step()

    this.setData({
      animationData: this.animation.export(),
      animationData3: this.animation3.export()
    })
    if (n > 20) {
      clearInterval(interval);
    }
  }.bind(this), 180)
}