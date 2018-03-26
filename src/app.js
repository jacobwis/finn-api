"use strict";
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send({
        message: "Hello from Typescript",
        env: process.env.NODE_ENV
    });
});
module.exports = app;
