//index.js
Page({
  onTap: function (event) {
    //从父级跳到子级页面 执行onHide
    // wx.navigateTo({
    //   url: "/pages/posts/post"
    // })
    //下面的跳转不存在子父级 执行onUnload
    wx.switchTab({
      url: '../posts/post'
    })
  },
  // onText:function(){
  //   console.log('1212')
  // }

  //catchtap  阻止冒泡事件
})
