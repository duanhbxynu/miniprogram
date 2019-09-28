//导入外部json数据
var post_data = require("../../data/local_data.js");
// 实例化一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "codewhy",
    age: 18,
    students: [{
        id: 100,
        name: "kobe",
        age: 20
      },
      {
        id: 100,
        name: "lili",
        age: 25
      },
      {
        id: 100,
        name: "lucy",
        age: 30
      },
      {
        id: 100,
        name: "tom",
        age: 40
      }
    ],
    counter:0,
    list:[],
    requiredata:""

  },

  // 监听wxml中相关的一些事件
  handleBtnClick(){
    //1.错误的做法，页面是不会发生改变的
    // this.data.counter += 1;
    
    //2.setData是可以的
    this.setData({
      counter:this.data.counter+1
    })

  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.setData({
      requiredata: post_data
    }),
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        var data = res.header;
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh:function(){

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //监听页面滚动
  onPageScroll:function(obj){
   // console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log("到底了 上拉加载")
  },
  //监听页面下拉滚动
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
})