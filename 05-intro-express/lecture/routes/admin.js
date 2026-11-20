const express = require("express");
const getHtml = require("../utils");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  const html = getHtml("form.html");
  res.send(html.content);
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;