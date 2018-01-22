// pages/foods/foods.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: [
      {
        name: '要吃汤团缸鸭狗',
        heart_num: '1',
        title: '我是一个土生土长的宁波人，虽怀揣食遍天下之志但每每让人魂牵梦萦的恐怕还要数家乡的美食了。无论是小海鲜、还是咸齑露（腌制的雪里蕻菜汁）、抑或是难登大雅的“三臭大王”（臭冬瓜、臭苋菜管、臭芋艿蓊），家常食物中总是透着“鲜咸”二字。不过今天我要介绍的便是享誉海内外“宁波汤团”。',
        url: 'http://cdnssl.youyuwei.com/o_1b9vc3a85bq75juap61t43d4m1f.jpg?imageView2/2/w/1000',
        avatar: 'http://cdn.youyuwei.com/6f5218c1eb8c0ea9942f2638222f8bfc164475.jpg'
      },
      {
        name: '根特，听说薯条跟啤酒更配噢',
        heart_num: '2',
        title: '日本和比利时，今年的两次小旅行，顺便完成了互访彼此留学过的城市——京都与根特。只是根特于我是时间线上的过去式，没有同步过的心境，都是后来才听说的故事。',
        url: 'http://cdnssl.youyuwei.com/o_1arsibvgg1f8016ho3jt14h419rk7.jpg?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://cdn.youyuwei.com/4dd654e7d86670d32d985cfa3f8fcb44.jpg'
      },
      {
        name: '冰淇淋的时光机',
        heart_num: '3',
        title: "Life is like a box of chocolates,you never konw what you're going to get.",
        url: 'http://cdnssl.youyuwei.com/o_1barp4scqqtk1sfshinhfl850f.jpg?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://www.youyuwei.com/fe/asset/common/img/default_icon.jpg'
      }, {
        name: '2天玩澳门 绝不会人扎堆的美食攻略（下）',
        heart_num: '4',
        title: '第一天如果在澳门本岛holly嗨2天行程里的第二天当然要留给略略“纸醉金迷”的氹仔了氹怎么念？dàng',
        url: 'http://cdnssl.youyuwei.com/o_1b63liupv1jqu1idornuh78j2qf.jpg?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://cdnssl.youyuwei.com/d66116765e984bebc15a5f5c2fb855cb556498.jpg'
      },
      {
        name: '三里屯——吃货的朝圣地',
        heart_num: '5',
        title: '初来帝都，它给我留下了很多的印象——繁华又浮躁，博大又现实，热情又冷漠...但最深的还是多元化的饮食。',
        url: 'http://cdnssl.youyuwei.com/o_19t05b9tb1q9o4conrqpq21ioe9.jpg?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://cdn.youyuwei.com/d6780a43746acdc940ddbb97652f9a53.jpg446'
      },
      {
        name: '最原始的【武隆】，最文艺的【成都】',
        heart_num: '6',
        title: '在重庆感受热辣火锅感受江边美景，在武隆感受鬼斧神工的自然奇观，在成都感受熟悉的麻辣火锅的味道感受故地重游的感慨。虽然从飞机落地的那一刻起便小雨淅沥下个不停，但我依旧深刻的感受到旅行中给我带来的一切美好。',
        url: 'http://cdnssl.youyuwei.com/o_1b549bpaf1t1l13res8p1gn11e6tf.png?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://www.youyuwei.com/fe/asset/common/img/default_icon.jpg'
      },
      {
        name: '迷失香港，庆幸依旧有早茶',
        heart_num: '7',
        title: '香港是一个典型的国际化都市，各种文化在此冲撞融合。在这里可以找到非常地道的西式早午餐（brunch），也不乏各种类型的中式早茶，毕竟本土餐饮文化依旧扎根岭南。',
        url: 'http://cdnssl.youyuwei.com/o_1b5phf27qo6f1dop1plo1huv3kgf.jpg?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://cdn.youyuwei.com/3a98df537cb54911531d81a9a116db18883523.jpg'
      }, {
        name: '周末，游杭州',
        heart_num: '8',
        title: '其实我真不擅长写东西，也不擅长拍照，不过应某迪的要求，还是当一次键盘侠。言归正传，计划错峰出游好久了，订了好多地点，广州顺德，珠海，厦门云水谣，山西平遥...，最后脑子一发热，周一看到了feekr上说杭州的梅花开了，直接高铁买票，周四走人。',
        url: 'http://cdnssl.youyuwei.com/o_1b9vbg8rsun27c6tb212l91qn8f.png?imageMogr2/thumbnail/!292.5x415r/gravity/Center/crop/292.5x415',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ]
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

  }
})