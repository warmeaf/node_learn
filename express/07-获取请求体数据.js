const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// 解析格式为application/x-www-form-urlencoded的请求体
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// get请求就返回登录页面
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/08-login.html");
});

// post请求就解析请求体数据
app.post("/login", urlencodedParser, (req, res) => {
  // 中间件urlencodedParser使req多了一个body属性
  console.log(req.body);
  res.send("Success");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
