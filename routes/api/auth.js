const express = require("express");
const { auth, validateBody } = require("../../middlewares");
const router = express.Router();
const contrs = require("../../controllers/auth");
const { registerSchema, loginSchema } = require("../../schemas");
router.post("/register", validateBody(registerSchema), contrs.register);
router.post("/login", validateBody(loginSchema), contrs.login);
router.post("/logout", auth, contrs.logout);
router.get("/refresh", auth, contrs.refresh);

module.exports = router;
