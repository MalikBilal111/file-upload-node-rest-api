const apiResponse = require("../helpers/api-response");
const uploadFile = require("../middlewares/upload");

/**
 * Upload File
 * @param {file}      payment_receipt
 * @returns {string}
 */
exports.upload = [
  async (req, res) => {
    await uploadFile(req, res);
    try {
      if (req.file == undefined) {
        return apiResponse.validationErrorWithData(
          res,
          "Upload a file please!",
          {}
        );
      }
      return apiResponse.successResponseWithData(
        res,
        "File Uploaded Successfully",
        { path: req.file.path }
      );
    } catch (err) {
      console.error("Error saving file:", err);
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
