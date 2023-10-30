const express = require("express");

const app = express();

// 路由中间件
// 注意：全局中间件比路由中间件优先级高
const checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === "123456") {
    next();
  } else {
    res.end("code error");
  }
};

// get请求
app.get("/express", checkCodeMiddleware, (req, res) => {
  res.end("hello express");
});

// get请求
app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.end("admin");
});

app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
