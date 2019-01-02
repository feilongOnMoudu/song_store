// miniprogram/pages/home/home.js

var Datas = require('../../util/staticData.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData: Datas.bannerData,
    gridData: Datas.gridData,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(Datas);
    console.log(2222);

    
  },

  gridClick: function (e) {
    console.log(this.data);
    wx.navigateTo({
      url: this.data.gridData[e.currentTarget.dataset.itemType].linkUrl,
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
    console.log(44444);
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