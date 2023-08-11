const Joi = require("joi");
const userSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
  skype: Joi.string(),
  theme: Joi.string(),
});

module.exports = userSchema;
