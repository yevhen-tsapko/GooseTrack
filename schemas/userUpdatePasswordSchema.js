const Joi = require("joi");

const userUpdatePasswordSchema = Joi.object({
  newPassword: Joi.string().min(6).required(),
});

module.exports = userUpdatePasswordSchema;
