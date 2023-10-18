const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// 声明全局中间件
function middleware(req, res, next) {
  const { ip, url } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${ip} -- ${url}\r\n`
  );
  next();
}
app.use(middleware);

// get请求
app.get("/express", (req, res) => {
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
