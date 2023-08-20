const express = require("express");
const { auth, validateBody, multerUpload } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/users");
const { userSchema, userVerifySchema } = require("../../schemas");

router.get("/current", auth, contrs.getUser);

router.patch(
  "/current",
  auth,
  multerUpload.single("avatar"),
  validateBody(userSchema),
  contrs.updateUser
);

router.get("/verify/:verificationToken", contrs.verify);

router.post("/verify", validateBody(userVerifySchema), contrs.resendVerify);

module.exports = router;
