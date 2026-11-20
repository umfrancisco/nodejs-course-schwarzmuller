const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  res.send("users");
});

app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000);