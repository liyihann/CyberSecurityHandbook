var postsData = require('../../data/post-data.js')//只能用相对路径

Page({
    data: {

    },
    imgPath: "/images/...",
    process: function () {
       /* var date = "Oct 26 2017";
        var date_ele = document.getElementById('id');*/
    },
    onLoad: function (options) {
        //页面初始化 options 为页面跳转带来的参数
        this.setData({
            posts_key:postsData.postList
        });
    },
    onPostTap:function(event){
        var postId = event.currentTarget.dataset.postid;
        //console.log(postId);
        wx.navigateTo({
          url: '../post-details/post-detail?id='+postId
        })
    }


}
)