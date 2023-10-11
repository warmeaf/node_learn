import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
// console.log(fileURLToPath(import.meta.url));
// console.log(path.resolve(fileURLToPath(import.meta.url), "../web/index.html"));

const server = http.createServer((req, res) => {
  // let fileBasePath = path.resolve(fileURLToPath(import.meta.url), "../web");

  const fileBasePath = fileURLToPath(import.meta.url);
  const rootPath = path.resolve(fileBasePath, "../web");

  // console.log(req.url)

  // // 原有书写方式
  // let source = "";
  // if (req.url === "/") {
  //   source = fs.readFileSync(path.resolve(fileBasePath, "./index.html"));
  // } else if (req.url === "/index.css") {
  //   source = fs.readFileSync(path.resolve(fileBasePath, `.${req.url}`));
  // } else if (req.url === "/index.js") {
  //   source = fs.readFileSync(path.resolve(fileBasePath, `.${req.url}`));
  // } else {
  //   res.statusCode = 404;
  //   res.end();
  // }

  // // 优化方式1
  // let source = "";
  // source = fs.readFileSync(path.resolve(fileBasePath, `.${req.url}`));
  // res.write(source);
  // res.end();

  // 优化方式2
  fs.readFile(rootPath + req.url, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      res.end("无法获取资源");
      return;
    }

    res.write(data);
    res.end();
  });
});

server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});
