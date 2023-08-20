const Joi = require("joi");

const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const userSchemaVerify = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = userSchemaVerify;
