import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  // 获取请求的url
  console.log(req.url); // 只包含 url 中的路径和查询字符串

  //   // 方法1，已被弃用
  //   // 第二个参数为 true 时，会将 url 中的查询字符串解析为对象
  //   const path_query = url.parse(req.url, true);
  //   console.log(path_query);

  // 方法2
  const myURL = new URL(req.url, "http://example.org");
  console.log(myURL);
  console.log(myURL.pathname); // 路径
  const ids = myURL.searchParams.get("ids");
  console.log(ids);

  // 此时，需要设置响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end("你好");
});

// 监听9000端口
// http协议默认端口是80，https协议默认端口是443
server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});
