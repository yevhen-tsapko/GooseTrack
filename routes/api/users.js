const express = require("express");
const { auth, validateBody, multerUpload } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/users");
const { userSchema, userUpdatePasswordSchema } = require("../../schemas");

router.get("/current", auth, contrs.getUser);
router.patch(
  "/current",
  auth,
  multerUpload.single("avatar"),
  validateBody(userSchema),
  contrs.updateUser
);

router.post("/delete", auth, contrs.deleteUser);

router.patch(
  "/password",
  auth,
  validateBody(userUpdatePasswordSchema),
  contrs.updatePassword
);

module.exports = router;
