const express = require("express");
const homeRoute = require("./routes/homeRoute.js");
const adminRoute = require("./routes/adminRoute.js");

const app = express();

app.use(homeRoute);
app.use(adminRoute);

// 404
app.all("*", (req, res) => {
  res.end("404 not found --- lalala");
});

app.listen(8090, () => {
  console.log("server is running at http://127.0.0.1:8090");
});
