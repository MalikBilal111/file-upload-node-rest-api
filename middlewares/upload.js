// import the multer module before configuring it to use the disc storage engine
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/payment_receipt");
  },
  filename: (req, file, cb) => {
    // const username = req.user; // Change this to match the location of the username in your request object
    // const originalFileName = file.originalname;
    // const fileExtension = originalFileName.split('.').pop();
    // const newFileName = `${username}_${Date.now()}.${fileExtension}`;
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("payment_receipt");

// create the exported middleware object
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
