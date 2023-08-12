const Joi = require("joi");
const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string().pattern(/^\d{2} \(\d{3}\) \d{3} \d{2} \d{2}$/),
  skype: Joi.string(),
  bithday: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/),
  theme: Joi.string(),
});

module.exports = userSchema;
