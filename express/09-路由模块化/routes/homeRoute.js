const express = require("express");

const router = express.Router();

// 前台请求
router.get("/home", (req, res) => {
  res.end("hello home");
});

module.exports = router;
