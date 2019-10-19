// components/my-event/my-event.js
Component({  
  methods: {
    handleIncrement(event){     
      this.triggerEvent("increment",{name:"zhangsan",age:"18"},{})
    }
  }
})
