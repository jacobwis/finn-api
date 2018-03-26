const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "hello again!",
    env: process.env.NODE_ENV
  });
});

module.exports = app;