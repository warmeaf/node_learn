const fs = require("fs");
const path = require("path");

const resolvedPath = path.resolve(__dirname, "test.txt");
console.log(resolvedPath);

fs.writeFile(resolvedPath, "this is a text", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success to writeFile");
});
