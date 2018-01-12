// pages/photo/photo.js
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
      success: function(res) {
        that.setData({
          _cameraHeight:res.screenHeight,
          photoSrc: getApp().PhotoSrc
        })
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

function animationFun(){
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