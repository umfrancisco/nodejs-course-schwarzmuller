const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   res.send("assignment solved");
// });

app.use("/users", (req, res, next) => {
  console.log("/users middleware");
  res.send("users middleware");
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("root middleware");
});

app.listen(3000);