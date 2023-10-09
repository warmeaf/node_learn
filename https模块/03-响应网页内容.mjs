import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
// console.log(fileURLToPath(import.meta.url));
// console.log(path.resolve(fileURLToPath(import.meta.url), "../web/index.html"));

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, "http://example.org");
  // const ids = myURL.searchParams.get("ids");

  console.log(req.url);

  let source = "";
  let fileBasePath = path.resolve(fileURLToPath(import.meta.url), "../web");

  if (req.url === "/") {
    source = fs.readFileSync(path.resolve(fileBasePath, "./index.html"));
  } else if (req.url === "/index.css") {
    source = fs.readFileSync(path.resolve(fileBasePath, "./index.css"));
  } else if (req.url === "/index.js") {
    source = fs.readFileSync(path.resolve(fileBasePath, "./index.js"));
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
