const Joi = require("joi");
const { emailRegexp, passwordRegexp } = require("./patternConstants");

const registerSchema = Joi.object({
  name: Joi.string().max(16).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).pattern(passwordRegexp).required(),
});

module.exports = registerSchema;
