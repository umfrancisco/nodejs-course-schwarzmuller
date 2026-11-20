const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this always runs!!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("--> In middleware");
  res.send("add product page");
});

app.use("/", (req, res, next) => {
  console.log("--> In another middleware");
  res.send("hello from express.js");
});

app.listen(3000);