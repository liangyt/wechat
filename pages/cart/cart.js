Page({
  data:{
    list:[
      {name:"iPhone 6s iPhone 6s ",price:6488,num:1},
      {name:"iPhone 6s iPhone 6s ",price:6488,num:1},
      {name:"iPhone 6s iPhone 6s ",price:6488,num:1}
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  minus:function(e) {
    var self = this;
    var currData = self.data.list[e.currentTarget.dataset.id]
    
    if (currData.num > 1) {
      currData.num--
      self.setData({
        list:self.data.list
      })
    }
  },
  plus: function(e) {
    var self = this;
    var currData = self.data.list[e.currentTarget.dataset.id]
    currData.num++
    self.setData({
      list:self.data.list
    })
  }
})