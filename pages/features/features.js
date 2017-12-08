var utils = require('../utils/utils.js')
var app = getApp();
var findList = require('../../data/feature-data.js');

Page({
  data: {
    findList: findList.film,
    active: 'film',
    showLoadMore: false,
    isMore: true,
    idx: 0
  },
  onLoad: function (options) {
    var _this = this;

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  showDetail: function (event) {
    var id = event.currentTarget.dataset.idx;
    console.log(id);
  },
  chageFindData: function (event) {
    console.log(event);
    var type = event.currentTarget.dataset.type;
    if (findList[type]) {
      this.setData({
        findList: findList[type],
        active: type,
        showLoadMore: false,
        idx: 0
      });
    }
  },
  scrollToLower: function (e) {
    console.log(e, 123)
    var isMore = true;
    if (this.data.idx >= 1) {
      isMore = false;
    }
    this.setData({
      showLoadMore: true,
      isMore: isMore,
      idx: this.data.idx + 1
    })
  }
});