
var indexList = require('../../data/index');

Page({
  data: {
      title: '文章',
      author: 'author',
      imgUrl: '',
      content: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    // this.setData({
    //   content: indexList[option.idx].content
    // })
    console.log('onLoad');
  },
  imageInfo: function(e) {
    console.log(e);
  }
});