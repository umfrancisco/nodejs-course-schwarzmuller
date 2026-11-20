const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("--> In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("--> In another middleware");
  res.send("hello from express.js");
});

app.listen(3000);