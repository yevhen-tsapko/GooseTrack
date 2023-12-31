const express = require("express");
const { auth, validateBody, passport } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/auth");
const { registerSchema, loginSchema, refreshSchema } = require("../../schemas");
router.post("/register", validateBody(registerSchema), contrs.register);
router.post("/login", validateBody(loginSchema), contrs.login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", { session: false }),
  contrs.googleAuth
);
router.post("/logout", auth, contrs.logout);
router.post("/refresh", validateBody(refreshSchema), contrs.refresh);

module.exports = router;
