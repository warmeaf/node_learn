/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-06-01 21:46:39
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-06-01 22:38:53
 * @FilePath: \node_project\文件夹的操作\创建文件夹.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");

// fs.mkdir("./新文件", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("success to mkdir");
// });

// fs.readdir("../文件读取和写入", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

console.log(__dirname);
const data = fs.readdirSync("../文件读取和写入", { withFileTypes: true });
console.log(data);
