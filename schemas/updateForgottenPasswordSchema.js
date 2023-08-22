const Joi = require("joi");
const { emailRegexp } = require("./patternConstants");
const updateForgottenPasswordSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = updateForgottenPasswordSchema;
