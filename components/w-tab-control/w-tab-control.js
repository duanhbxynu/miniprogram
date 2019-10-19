// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // 1.取出index
      const index = event.currentTarget.dataset.index;
      // console.log("-----",index)
      // 2.修改currentIndex的值
      this.setData({
        currentIndex:index
      })
      //通知page,组件的点击事件
      this.triggerEvent("itemclick", {index, title: this.properties.titles[index]},{})
    }
  }
})
