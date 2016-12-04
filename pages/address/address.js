Page({
  data:{
    addresses:[
          {address:"北京市长安街天安门001号",name:'同同1',mobile:13888888888,id:1},
          {address:"北京市长安街天安门002号",name:'同同2',mobile:13888888888,id:2},
          {address:"北京市长安街天安门003号",name:'同同3',mobile:13888888888,id:3},
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
  // 删除地址
  del: function(e) {
    var self = this;
    var index = parseInt(e.currentTarget.dataset.index);
    wx.showModal({
      title:'提示',
      content:'确定删除该地址么？',
      success:function(res) {
        if(res.confirm) {
          self.data.addresses.splice(index, index + 1);
          self.setData({addresses:self.data.addresses});
        }
      }
    })
  }
})