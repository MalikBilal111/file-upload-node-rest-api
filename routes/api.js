var express = require("express");
var uploadRouter = require("./upload");
var app = express();

app.use("/file/", uploadRouter);

module.exports = app;
