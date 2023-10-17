// 1. 引入
const express = require("express");

// 2. 创建
const app = express();

// 3. 路由
app.get("/express", (req, res) => {
  res.end("hello express");
});

// 4. 监听
app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
