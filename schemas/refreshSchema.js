const Joi = require("joi");

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = refreshSchema;
