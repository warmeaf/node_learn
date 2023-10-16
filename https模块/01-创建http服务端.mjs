import http from "http";

const server = http.createServer((req, res) => {
  // req: 浏览器请求报文封装的对象
  // console.log(req);

  // 获取请求的url
  console.log(req.url); // 只包含 url 中的路径和查询字符串

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
// http协议默认端口是80，https协议默认端口是443
server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});

// windows系统中，可以在资源监视器中查看端口和PID
// 在任务管理器中可以根据PID查看应用