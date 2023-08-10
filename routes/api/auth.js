const express = require("express");
const { auth, validateBody, multerUpload } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/users");
const { registerSchema, loginSchema } = require("../../schemas");
router.post("/register", validateBody(registerSchema), contrs.register);
router.post("/login", validateBody(loginSchema), contrs.login);
router.post("/logout", auth, contrs.logout);
router.get("/current", auth, contrs.getUser);
router.patch(
  "/current",
  auth,
  multerUpload.single("avatar"),
  contrs.uploadNewUserData
);
module.exports = router;
