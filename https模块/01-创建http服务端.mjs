import http from "http";

const server = http.createServer((req, res) => {
  // req: 浏览器请求报文封装的对象
  // console.log(req);
  // res: 服务器响应报文封装的对象
  // console.log(res);

  // res.end()，设置响应体
  // res.end("hello");

  // 响应体如果是中文，会乱码
  // 此时，需要设置响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end("你好");
});

// 监听9000端口
// 默认端口是80
server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});
