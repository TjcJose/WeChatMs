// pages/main/main.js
// 输入框输入的值
var inputValue = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{ url: '/res/img/swiper/top.jpg' },
      { url: '/res/img/swiper/top1.jpg' },
      { url: '/res/img/swiper/top2.jpg' },
      { url: '/res/img/swiper/top3.jpg' }],
    photoSrc: '/res/img/swiper/top.png',
    locationName: '厦门',
    locationImg:'/res/img/location.png',
    locationDescription: '　　厦门是一座“城在海上，海在城中”的美丽花园，素有东方夏威夷之称。当你漫步在宁静的鼓浪屿，一家家文艺范儿十足的店铺着实吸引眼球，而且这里也是小清新和文艺范儿的聚集地。厦门的美是多方位的，需要你用脚步一寸一寸去丈量的，需要你用心去感受。厦门的这种清新风格，也影响了厦门的饮食文化。厦门美食创出清、鲜、淡、脆、略带微辣的独特风味，备受大家的喜爱。客家菜在厦门的影响也非常大，有很多地方都可以吃到地道的客家菜，客家菜原料以肉类为主，追求原汁原味，清淡可口，富有营养且利于养生。中山路一带，是老字号和各种小吃的聚集地，喜欢小吃的一定要在这里好好寻觅；海鲜的话，实惠一点可以去各种海鲜大排档，佛跳墙这种大菜则是一定要去高级酒楼才能吃到；小清新的小餐馆主要聚集在鼓浪屿和曾厝垵，文艺青年必去。无论初夏秋冬，这里都吸引着亿万游客，秀丽景色配上厦门美食，真的是不白活一回呀。',
    suggestItems: [{
      title: '沙茶面',
      description: "厦门最著名的小吃，体验沙茶酱的魅力。",
      url: '/res/img/suggest/o_19tk2k6fm1dsj160dqos1101q9u9.jpg'
    },
    {
      title: '花生汤',
      description: "由花生煮制，是传统的闽南甜品。花生汤甜而不腻，烂而不糊。",
      url: '/res/img/suggest/o_19tk2lfp018mtmln15901gebav09.jpg'
    },
    {
      title: '海蛎煎',
      description: "闽南话“蚵仔煎”，闽南地区的家常菜，口感香脆，内馅香滑。",
      url: '/res/img/suggest/o_19tk2nkn1ddn8th1b0ahout2m9.jpg'
    },
    {
      title: '土笋冻',
      description: "发源于福建泉州的一种传统风味，闽南人没有不喜爱的。",
      url: '/res/img/suggest/o_19tk2ot611mia14u697361nu0v9.jpg'
    },
    {
      title: '姜母鸭',
      description: "姜母鸭属于闽菜系厦门菜，原为宫廷御膳后传入民间，味道鲜香，甘辛兼备。",
      url: '/res/img/suggest/o_1ajdleqj51cjuka29rn15bst4h9.jpg'
    },
    {
      title: '白灼章鱼',
      description: "厦门独有的白灼章鱼，是厦门必吃的一道特色小吃。",
      url: '/res/img/suggest/o_1ajdovuhggvdpfl1nvl16tv1ags9.jpg'
    },
    {
      title: '四果汤',
      description: "四果汤的学名叫烧仙草，是闽南地区的一道特色小吃，冰冰凉凉是消暑的良品。",
      url: '/res/img/suggest/o_1aje59ov7sm2nfsqeqcc7jp19.jpg'
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

  gotoPhoto: function () {
    wx.chooseImage({
      count: 1,
      success: function (res) {
        //设置全局的请求访问传递的参数
        var app = getApp();
        app.PhotoSrc = res.tempFilePaths[0];
        wx.navigateTo({
          url: '/pages/photo/photo',
        })
      },
    });
    /*var _this = this
    wx.chooseImage({
      count:1,  
      success: function(res) {
        console.log(res.tempFilePaths[0]);
        _this.setData({
          photoSrc: res.tempFilePaths[0]
        })
      },
    });*/
  }, 
  bindKeyInput: function (e) {
    inputValue = e.detail.value
  },
  searchMs:function(e){
    if (0 == inputValue.length){
      return
    }

    console.log(inputValue)
  }
})