// pages/home/home.js
const USER = wx.cloud.database().collection("user");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: ['/common/images/banner1.jpg', '/common/images/banner1.jpg', '/common/images/banner1.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        goodsData: [{
            image: '/common/images/goods1.png',
            title: '植物洗衣液，不伤手，洗的更干净',
            desc: '植物洗衣液',
            price: '￥39.9'
        },{
            image: '/common/images/goods1.png',
            title: '植物洗衣液，不伤手，洗的更干净',
            desc: '植物洗衣液',
            price: '￥39.9'
        },{
            image: '/common/images/goods1.png',
            title: '植物洗衣液，不伤手，洗的更干净',
            desc: '植物洗衣液',
            price: '￥39.9'
        }]
    },
    getUserList(){
        // console.log('userList');
        // USER.add({
        //     data: {
        //         naame: 'fz',
        //         sex: '男',
        //         phone: '19298788876',
        //         address: '四川 成都'
        //     },
        //     success(res){
        //         console.log("添加成功", res);
        //     },
        //     fail(res){
        //         console.log("添加失败", res)
        //     }
        // })
        USER.get({
            success(res){
                console.log("查询成功", res);
            },
            fail(res){
                console.log("查询失败", res)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})