const express = require("express");

const app = express();

app.get("/express", (req, res) => {
  // 设置响应状态、响应头、响应体
  //   res.status(500);
  //   res.set("aaa", "bbb");
  //   res.send("你好 express");

  //   也可以连续设置
  //   res.status(500).set("aaa", "bbb").send("你好 express");

  // 设置跳转响应
  //   res.redirect("/");
  //   res.redirect("https://www.google.com");

  // 下载响应
  //   res.download(__dirname + "/package.json");

  //   JSON响应
  //   res.json({
  //     name: "帅锅会",
  //     age: 18,
  //   });

  // 文件响应
  res.sendFile(__dirname + "/test.txt");
});

app.get("/", (req, res) => {
  res.end("home");
});

app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
