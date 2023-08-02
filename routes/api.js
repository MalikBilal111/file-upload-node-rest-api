var express = require("express");
var uploadRouter = require("./upload");
var app = express();

app.use("/upload/", uploadRouter);

module.exports = app;
