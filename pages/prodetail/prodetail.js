var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        list: [1, 2, 3],
        tabs: ["商品详情", "商品规格", "售后服务"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    // 立即购买
    buy: function(e) {
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })

        setTimeout(function(){
             wx.hideToast()
        },2000)
    }
});