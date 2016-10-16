Page({
  data:{
    modalHidden:false,
    imgs:[],
    currTab:1
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
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
  back:function() {
      wx.navigateBack();
  },
  // 选择几个图片
  chooseImg: function() {
    var self = this;
    wx.chooseImage({
        success:function(res){
            self.setData({
                imgs:res.tempFilePaths,
                modalHidden:true
            })
        }
    })
  },
  tab: function(e) {
    this.setData({
      currTab:e.currentTarget.dataset.index
    })
  }
})