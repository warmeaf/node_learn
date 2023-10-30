const express = require("express");
const path = require("path");

const app = express();

// // get请求（这种情况先响应路由规则）
// app.get("/", (req, res) => {
//   res.end("admin");
// });

// 静态资源中间件
// 1. 默认响应的是index.html
// 2. 如果静态资源和路由规则同时匹配，谁先匹配上就响应谁
// 3. 一般来说，路由响应动态资源，静态资源中间件响应静态资源
app.use(express.static(path.resolve(__dirname, "./public")));

// get请求（这种情况先响应静态资源）
app.get("/", (req, res) => {
  res.end("admin");
});

app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
