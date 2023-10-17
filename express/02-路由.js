const express = require("express");

const app = express();

// get请求
app.get("/express", (req, res) => {
  // req: 浏览器请求报文封装的对象
  // req.query : 浏览器请求中的查询字符串,是一个对象
  console.log(req.query);
  // req.path : 浏览器请求中的路径
  console.log(req.path);
  // req.get : 浏览器请求中的请求头
  console.log(req.get("User-Agent"));
  res.end("hello express");
});

// 路由参数
app.get("/:goods_id.html", (req, res) => {
  res.end("商品详情" + req.params.goods_id);
});

// get请求
app.get("/", (req, res) => {
  res.end("home");
});

// post请求
app.post("/post", (req, res) => {
  res.end("post");
});

// all请求
app.all("/test", (req, res) => {
  res.end("all test");
});

// 404
app.all("*", (req, res) => {
  res.end("404 not found --- lalala");
});

app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
