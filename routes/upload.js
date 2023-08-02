var express = require("express");
const UploadController = require("../controllers/upload-controller");
var router = express.Router();


router.post("/upload", UploadController.upload);


module.exports = router;
