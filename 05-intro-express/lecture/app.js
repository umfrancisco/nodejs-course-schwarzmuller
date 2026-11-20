const fs = require("fs");
const express = require("express");

const app = express();

const getHtml = (file) => {
  const path = `./pages/${file}.html`;
  const html = { content: "" };
  try {
    html.content = fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.log("file not found: "+err);
    html.content = "page not found :/";
  }
  return html;
}

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