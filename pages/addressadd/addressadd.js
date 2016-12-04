var citys = [
  ['北京'],['乌和浩特','通辽'],['高雄','台北'],['香港'],['澳门']
]
Page({
  data:{
    province:['北京', '内蒙古', '台湾', '香港', '澳门'],
    provinceIndex:0,
    city:citys[0],
    cityIndex:0
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
  // 省份选择
  provinceChange:function(e) {
    var self = this;
    self.setData({provinceIndex:e.detail.value});
    self.setData({city:citys[e.detail.value]});
  },
  cityChange: function(e) {
    this.setData({cityIndex: e.detail.value});
  }
})