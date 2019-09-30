// pages/func/func.js
Page({
  data: {

  },
  handleClick(){
    console.log("发生了点击事件")
  },
  handleTouchStart(){
    console.log("handleTouchStart")
  },
  handleMove() {
    console.log("handleMove")
  },
  handleEnd() {
    console.log("handleEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleLongPress() {
    console.log("handleLongPress")
  },
  handleEventClick(event){
    console.log("---------",event)
  }
})