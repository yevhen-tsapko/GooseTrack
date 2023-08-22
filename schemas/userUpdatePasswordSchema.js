const Joi = require("joi");
const { passwordRegexp } = require("./patternConstants");
const userUpdatePasswordSchema = Joi.object({
  newPassword: Joi.string().min(6).pattern(passwordRegexp).required(),
});

module.exports = userUpdatePasswordSchema;
