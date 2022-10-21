// pages/qa/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      qaList:null,
    },
  
    getList(){
      const that = this;
  
      wx.cloud.callFunction({
        name:'getQaList',
      })
      .then(res=>{
        console.log(res);
        if(res.result.errcode == 0){
  
          that.setData({
            qaList:res.result.data,
          })
        }else{
          wx.showToast({
            title: '查询题目失败',
            icon:"error",
          })
        }
      })
      .catch(err=>{
        console.error(err);
      })
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getList();
    },
  
    gotoDetail(event){
      console.log(event);
      const currentId = event.target.dataset.id;
      wx.redirectTo({
        url: `/pages/qa/index?id=${currentId}`,
      })
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
    onShareAppMessage(){
      return {
        title: `邀请你来填写问卷`,
        path: `/pages/index/index`,
        // imageUrl:'图片地址',
      }
    },
    /**
     * 分享到朋友圈（安卓）
     */
    onShareTimeline(){
      return {
        title: `邀请你来填写问卷`,
        // query:'path?a=1&b=2',
        // imageUrl:'图片地址',
      }
    }
})