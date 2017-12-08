var postsData = require('../../data/info-data.js')

Page({
    data: {

    },
    imgPath: "/images/...",
    process: function () {
       
        var date_ele = document.getElementById('id');
    },
    onLoad: function (options) {
        //页面初始化 options 为页面跳转带来的参数
        this.setData({
            posts_key:postsData.postList
        });
        // this.data.postList = postsData.postList 用法失效
    },
    onPostTap:function(event){
        var postId = event.currentTarget.dataset.postid;

       
    },

}
)