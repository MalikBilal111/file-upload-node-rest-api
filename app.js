// External Import
var cors = require("cors");
var express = require("express");
var cookieParser = require("cookie-parser");
// Internal Import
var apiResponses = require("./helpers/api-response");
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

global.__basedir = __dirname;
var app = express();
app.use(express.json());
app.use(cookieParser());

// To Allow Cross-Origin Requests
app.use(cors());

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

//throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponses.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
  if (err.name === "UnauthorizedError") {
    return apiResponses.unauthorizedResponse(res, err.message);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
});
app.maxHttpHeaderSize = 64 * 1024; // 64KB
module.exports = app;
