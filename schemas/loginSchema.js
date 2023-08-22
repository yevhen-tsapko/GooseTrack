const Joi = require("joi");
const { emailRegexp, passwordRegexp } = require("./patternConstants");
const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).pattern(passwordRegexp).required(),
});

module.exports = loginSchema;
