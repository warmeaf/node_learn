const express = require("express");

const router = express.Router();

// 后台请求
router.get("/admin", (req, res) => {
  res.end("hello admin");
});

module.exports = router;
