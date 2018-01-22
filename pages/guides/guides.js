// pages/guides/guides.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeUrl:"/res/img/like.png",
    unlikeUrl: "/res/img/unlike.png",
    listItems:[{
      url:"http://cdnssl.youyuwei.com/o_1ap2tb43716kkdbant9aqk2mij.jpg",
      description:"Chikalicious作为火爆纽约整整十年的甜品界神话",
      is_like: "y",
      likecount: 5,
      creattime: "20180116"
    },{
        url: "http://cdnssl.youyuwei.com/o_1ap2tckif14kfvgfj64bgo1jen12.jpg",
        description: "如果不提前预定，可能会白跑一趟哦！",
        likecount: 6,
        is_like: "n",
        creattime: "20180116"
      }, {
        url: "http://cdnssl.youyuwei.com/o_1ap2tbqgq1dbp1ng81buarf65fuo.jpg",
        description: "你能想象到他们家的千层蛋糕居然做了23层吗？",
        likecount: 7,
        is_like: "y",
        creattime: "20180116"
    }, {
        url: "http://cdnssl.youyuwei.com/o_1ap2tc8661k4m15ent1980918l0t.jpg",
        description: "蓬松柔软的触感，传递到舌尖是裹着细腻奶香的馥郁抹茶味",
      likecount: 8,
      is_like: "y",
      creattime: "20180116"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  /**
   * 用户点击
   */
  likeBtnTap: function (e){
    //获得原先的数据源
    let listItems = this.data.listItems
    let currentData = e.currentTarget.dataset
    //判断当前的状态，并进行逆向修改
    if (currentData.like == "y"){
      //修改喜欢的人数
      listItems[currentData.objid].likecount = listItems[currentData.objid].likecount - 1
      //保存点击后的状态
      listItems[currentData.objid].is_like = "n"
    }else{
      listItems[currentData.objid].likecount = listItems[currentData.objid].likecount + 1
      listItems[currentData.objid].is_like = "y"
    }

    //用于修改数据后，重新绑定的数据源
    let brandList = [];
    brandList = this.data.listItems
    //重新绑定数据
    var that = this
    that.setData({
      listItems: brandList
    })
  }
})