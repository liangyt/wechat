Page({
  data:{
    toView:'red',
    scrollTop:10,
    textMsg:'Msg',
    array:["美国","中国","巴西","日本"],
    index:0,
    date:"2016-09-01",
    time:"12:01",
    actionSheetHidden:true,
    actionSheetItems:['one', 'two', 'three', 'four'],
    toasttip: true
  },
  upperddd: function(e) {
    // console.log(e)
  },
  lower: function(e) {
    // console.log(e)
  },
  scroll: function(e) {
    console.log(arguments)
  },
  addText:function() {
      console.log(this);
      var _text = this.data.textMsg + " New";
      this.setData({
          textMsg:_text
      })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },
  bindTimeChange:function(e){
    this.setData({
      time:e.detail.time
    })
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindActionSheet: function(e) {
    console.log(e);
     this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  toastShow: function(e) {
    this.setData({
      toasttip:false
    })
  },
  toastcallback: function(e) {
    console.log(e);
     this.setData({
      toasttip:true
    })
  }
})