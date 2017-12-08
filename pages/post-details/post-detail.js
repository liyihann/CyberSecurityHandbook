// pages/post-details/post-detail.js
var postsData = require('../../data/post-data.js')
var app = getApp();
Page({
  data: {
    isPlayingMusic: false,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var postId = options.id;
    console.log(postId)
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData,
    });
  },
})