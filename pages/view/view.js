// pages/view/view.js
Page({
  data: {
    isShow:true,
    score:59,
    movies:["大话西游","西游记","三国演义","水浒传"],
    nums:[
      [1,2,3,4,],
      [11,12,13,14],
      [21,22,23,24]
    ]
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  hanldeIncrement(){
    this.setData({
      score:this.data.score + 1
    })
  },   
  // 打开相册或者相机
  handleChooseAlbum(){
    var that = this;
    wx.chooseImage({
      success:function(res){
        console.log(res)
        const path = res.tempFiles[0].path
        that.setData({
          imagePath:path
        })
      }
    })
  },
  handleImageLoad(){
    console.log("图片加载完成")
  }
  
  
})

