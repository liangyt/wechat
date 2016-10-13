var list = [];

for(var i = 0; i < 20; i++) {
    list.push({
        name: '我是测试的列表数据',
        num: 10,
        price: Math.random() * 10
    })
}

Page({
  data:{
    // 列表数据
    list:list
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
  }
})