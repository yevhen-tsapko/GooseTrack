const express = require("express");
const { auth } = require("../../middlewares");
const contrs = require("../../controllers/users");
const upload = require("../../middlewares/editUserData");
const router = express.Router();
router.patch(
  "/avatar",
  auth,
  upload.single("avatar"),
  contrs.uploadNewUserData
);
module.exports = router;
