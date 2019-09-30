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
  }
}) 