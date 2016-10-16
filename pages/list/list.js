function r(){
  return (Math.random() * 10).toFixed(2);
}

Page({
  data:{
    // 列表数据
    list:[],
    src:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;
    wx.chooseImage({
        success:function(res) {
           self.data.src = res.tempFilePaths[0];
           self.initList();
        }
    })
  },
  initList: function() {
    var self = this;
    var _list = [];
    for(var i = 0; i < 20; i++) {
      var _p = r();
      _list.push({
          img:self.data.src,
          name: '我是测试的列表数据',
          num: 10,
          price: _p
      })
    }

    self.setData({"list":_list});
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
  }
})