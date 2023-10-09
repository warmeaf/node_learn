import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, "http://example.org");
  // const ids = myURL.searchParams.get("ids");

  console.log(req.url);

  let source = "";

  // 此时，需要设置响应头

  if (req.url === "/") {
    source = fs.readFileSync("./web/index.html");
  } else if (req.url === "/index.css") {
    source = fs.readFileSync("./web/index.css");
  } else if (req.url === "/index.js") {
    source = fs.readFileSync("./web/index.js");
  } else {
    res.statusCode = 404;
    res.end();
  }

  // res.setHeader("Content-Type", "text/html;charset=utf-8");

  res.write(source);
  res.end();
});

server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});
