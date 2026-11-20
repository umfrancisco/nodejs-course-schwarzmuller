const express = require("express");
const bodyParser = require("body-parser");
const getHtml = require("./utils");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  const html = getHtml("form");
  res.send(html.content);
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  const html = getHtml("index");
  res.send(html.content);
});

app.listen(3000);