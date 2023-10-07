/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-06-03 17:16:00
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-06-03 17:48:00
 * @FilePath: \node_project\path模块\resolve方法.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import fs from "fs";

// const filePath = new URL("./test.txt", import.meta.url);

// const resolvedPath = filePath.pathname;

// fs.writeFile(resolvedPath, "this is a text", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("success to writeFile");
// });

// 方式一
// import fs from "fs";
// const filePath = new URL("./test.txt", import.meta.url);
// const resolvedPath = decodeURI(filePath.pathname.slice(1));
// console.log(resolvedPath);

// 方式二
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
console.log(__filename); // E:\project\node_project\path模块\resolve方法.mjs
const __dirname = path.dirname(__filename);
console.log(__dirname); // E:\project\node_project\path模块
const resolvedPath = path.resolve(__dirname, "test.txt");
console.log(resolvedPath); // E:\project\node_project\path模块\test.txt

fs.writeFile(resolvedPath, "this is a text", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success to writeFile");
});
