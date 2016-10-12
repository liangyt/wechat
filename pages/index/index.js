//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    list:[1,2,3,4],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  clickMe:function() {
    this.setData({
      motto:"click Me",
      view:'elif'
    })
    console.log("click me");
  },
  inner:function(event) {
    console.log(event);
  },
  middle:function(event) {
    console.log(event);
  },
  out:function(event) {
    console.log(event);
  }
})
