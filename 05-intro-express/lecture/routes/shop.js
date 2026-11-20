const express = require("express");
const getHtml = require("../utils");

const router = express.Router();

router.get("/", (req, res, next) => {
  const html = getHtml("index.html");
  res.send(html.content);
});

module.exports = router;