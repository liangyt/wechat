Page({
  data:{
    src:'',
    imgs:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    // wx.getLocation({
    //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //     success: function (res) {
    //         var latitude = res.latitude; 
    //         var longitude = res.longitude; 
    //         wx.openLocation({
    //           latitude:latitude,
    //           longitude:longitude,
    //           scale:1
    //         })
    //     }
    // });
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
  chImage:function() {
      var self = this;
      wx.chooseImage({
          success:function(res) {
              console.log(self.data.imgs);
              var _list = self.data.imgs.concat(res.tempFilePaths);
              self.setData({
                  imgs:_list
              })
          }
      })
  },
  chVideo:function() {
    var that = this;
    wx.chooseVideo({
        sourceType:['album','camera'],
        maxDuration:60,
        camera:['front','back'],
        success:function(res){
            that.setData({
                src:res.tempFilePath
            })
        }
    })
  }
})