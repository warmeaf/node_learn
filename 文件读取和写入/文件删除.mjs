/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-06-01 21:43:07
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-06-01 21:44:46
 * @FilePath: \node_project\文件读取和写入\文件删除.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs";

fs.unlink("./古诗.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success to remove file");
});
