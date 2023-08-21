const Joi = require("joi");

const updateForgottenPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = updateForgottenPasswordSchema;
