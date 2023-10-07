/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-05-31 15:27:14
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-05-31 16:38:26
 * @FilePath: \node_project\文件读取和写入\copy.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs";
import process from "process";

// 方法1
// const data = fs.readFileSync("./assets/笑看风云.mp4");
// fs.writeFileSync("./assets/笑看风云02.mp4", data);
// console.log(process.memoryUsage());  // 111120384  105.9726 MB

// 方法2
const rs = fs.createReadStream("./assets/笑看风云.mp4");
const ws = fs.createWriteStream("./assets/笑看风云03.mp4");

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log(process.memoryUsage()); // 49422336  47.1328 MB
// });

// 笑看风云.mp4有77m
// 那么方法一至少要占用77m的内存
// 方法二，则至少只需要64kb的内存

// 方法3
rs.pipe(ws);
console.log(process.memoryUsage()); // 28717056  27.3867 MB