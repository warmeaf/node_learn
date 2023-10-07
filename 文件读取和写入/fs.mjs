/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-05-29 12:34:08
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-05-29 15:21:44
 * @FilePath: \node_project\fs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs";

// fs.readFile("./观书有感.txt", (err, data) => {
//   if (err) {
//     console.log("error to read file");
//     return;
//   }
//   console.log(data.toString()); // data是一个Buffer
// });

// let data = fs.readFileSync("./观书有感.txt");
// console.log(data.toString());

//创建读取流对象
let rs = fs.createReadStream('./观书有感.txt');
//每次取出 64k 数据后执行一次 data 回调
rs.on('data', data => {
console.log(data);
console.log(data.length);
});
//读取完毕后, 执行 end 回调
rs.on('end', () => {
console.log('读取完成')
})
