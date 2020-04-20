var express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");

var app = new express();

app.use(express.static("./page/"));

app.post("/editEveryDay",loader.get("/editEveryDay"));
app.get("/queryEveryDay", loader.get("/queryEveryDay"));

app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));

app.get("/queryBlogCount", loader.get("/queryBlogCount"));
app.get("/queryBlogById", loader.get("/queryBlogById"));
//评论
app.get("/addComment", loader.get("/addComment"));
//验证码
app.get("/queryRandomCode", loader.get("/queryRandomCode"));
//留言功能
app.get("/queryCommentsByBlogId", loader.get("/queryCommentsByBlogId"));
app.get("/queryCommentsCountByBlogId", loader.get("/queryCommentsCountByBlogId"));

//地图
app.get("/queryAllBlog", loader.get("/queryAllBlog"));
//随机标签云
app.get("/queryRandomTags", loader.get("/queryRandomTags"));
//最近热门
app.get("/queryHotBlog", loader.get("/queryHotBlog"));
//最新评论
app.get("/queryNewComments", loader.get("/queryNewComments"));
//随机标签云点击连接
app.get("/queryByTag", loader.get("/queryByTag"));
app.get("/queryByTagCount", loader.get("/queryByTagCount"));

app.listen(globalConfig.port,function () {
    console.log("服务器已启动");
})