// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath:"../../assets/tabbar/profile_active.png",
      id: 0,
      latitude: 34.780254,
      longitude: 113.699559,
      width:30,
      height: 30,
      title: "【软银科技】\n网络音效领导者",
      callout: {
        content: '【软银科技】\n网络音效领导者',
        color: '#2c8df6',
        fontSize: 12,
        borderRadius: 10,
        bgColor: "#ffffff",
        display: "ALWAYS",
        boxShadow: '2px 2px 10px #aaa',
        padding: '10px'
      }
    }],
    controls: [
      {
        id: 1,
        iconPath: '../../assets/tabbar/home_active.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 20,
          height: 20
        }
      }
    ],
    polyline :[
      {
        points: [
          {
            latitude: 34.780254,
            longitude: 113.699559
          },
          {
            latitude: 34.779778,
            longitude: 113.701855
          }
        ],
        color: '#ff6600',
        width: 2,
        dottedline: false,
        arrowLine: true,
        borderColor: '#000000',
        borderWidth: 5
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