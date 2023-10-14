import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";

const mimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  json: "application/json",
  xml: "application/xml",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  bmp: "image/bmp",
  ico: "image/x-icon",
  svg: "image/svg+xml",
  pdf: "application/pdf",
  zip: "application/zip",
  rar: "application/x-rar-compressed",
  txt: "text/plain",
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  mp4: "video/mp4",
  avi: "video/x-msvideo",
  mov: "video/quicktime",
  ogg: "application/ogg",
  woff: "application/font-woff",
  woff2: "application/font-woff2",
  ttf: "application/font-sfnt",
  eot: "application/vnd.ms-fontobject",
  otf: "application/font-sfnt",
};

const server = http.createServer((req, res) => {
  const fileBasePath = fileURLToPath(import.meta.url);
  const rootPath = path.resolve(fileBasePath, "../web");

  fs.readFile(rootPath + req.url, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      res.end("无法获取资源");
      return;
    }

    const ext = path.extname(req.url).slice(1);
    // console.log(ext)
    let mimeType = mimeTypes[ext];
    if (mimeType) {
      // 比网页中的<meta charset="UTF-8" />优先级更高
      mimeType = ext === "html" ? mimeType + ";charset=utf-8" : mimeType;
      res.setHeader("Content-Type", mimeType);
    } else {
      res.setHeader("Content-Type", "application/octet-stream");
    }

    res.write(data);
    res.end();
  });
});

server.listen(9000, () => {
  console.log("server is running at http://127.0.0.1:9000");
});
