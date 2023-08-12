const express = require("express");
const { auth, validateBody, multerUpload } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/users");
const { userSchema } = require("../../schemas");

router.get(  "/",  auth,    contrs.getUser);
router.patch(
  "/",
  auth,
  multerUpload.single("avatar"),
  validateBody(userSchema),
  contrs.uploadNewUserData
);
module.exports = router;
