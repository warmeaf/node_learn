/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-05-28 18:33:32
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-05-29 09:48:38
 * @FilePath: \node_project\buffer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1. alloc
let buf_1 = Buffer.alloc(10);
console.log(buf_1);

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

// 3. from
let buf_3 = Buffer.from("hello");
console.log(buf_3);

let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString());
buf_4[0] = 267; // 0001 0000 1011
console.log(buf_4[0].toString(2)); // 0000 1011

let buf_5 = Buffer.from("你好");
console.log(buf_5);
