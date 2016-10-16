var app = getApp();

Page({
  data:{
    src:'',
    imgs:[],
    background: ['green', 'red', 'yellow'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 1000
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
              wx.setStorage({
                key:"src",
                data:self.data.imgs[0]
              });

              app.listImg = self.data.imgs[0];

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
  },
  changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeVertical: function (e) {
        this.setData({
            vertical: !this.data.vertical
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    }
})