//app.js
App({
  // 系统启动后调用
  onLaunch: function () {
    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getSysInfo: function(cb) {
    var self = this;
    if(this.globalData.sysInfo) {
      typeof cb == 'function' && cb(this.globalData.sysInfo)
    }
    else {
      wx.getSystemInfo({
        success: function(res) {
          // console.log(res.model)
          // console.log(res.pixelRatio)
          // console.log(res.windowWidth)
          // console.log(res.windowHeight)
          // console.log(res.language)
          // console.log(res.version)
          self.globalData.sysInfo = res;
          typeof cb == "function" && cb(self.globalData.sysInfo)
        }
      })
    }
  },
  globalData:{
    sysInfo:null,
    userInfo:null,
    listImg:''
  }
})