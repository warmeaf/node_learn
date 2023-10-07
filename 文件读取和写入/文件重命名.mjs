/*
 * @Author: nextc 1391040917@qq.com
 * @Date: 2023-05-31 22:27:17
 * @LastEditors: nextc 1391040917@qq.com
 * @LastEditTime: 2023-05-31 22:32:22
 * @FilePath: \node_project\文件读取和写入\文件重命名.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs";

fs.rename("./观书有感.txt", "./古诗.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("sucess to rename");
});
