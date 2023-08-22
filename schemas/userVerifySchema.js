const Joi = require("joi");
const { emailRegexp } = require("./patternConstants");

const userSchemaVerify = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = userSchemaVerify;
