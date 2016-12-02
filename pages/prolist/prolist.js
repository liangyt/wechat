var app = getApp();
Page({
    data: {
        list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        sysInfo:{}
    },
    // 到了顶部
    upperddd: function(e) {
        console.log('top')
    },
    // 到了底部
    lower: function(e) {
        // console.log('bottom')
        var self = this;
        self.data.list.push(self.data.list.lenght + 1);
        self.data.list.push(self.data.list.lenght + 1);
        this.setData({
            list:self.data.list
        })
    },
    scroll: function(e) {
        console.log('srcoll')
    },
    onLoad: function() {
        var self = this;
        app.getSysInfo(function(res) {
            console.log(res)
            self.setData({sysInfo:res});
        })
    }
})