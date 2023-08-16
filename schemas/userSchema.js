const Joi = require("joi");
const userSchema = Joi.object({
  name: Joi.string().max(16),
  email: Joi.string(),
  phone: Joi.string().pattern(/^\d{2} \(\d{3}\) \d{3} \d{2} \d{2}$/),
  skype: Joi.string().pattern(/^\S[\S\s]{0,28}\S$/),
  birthday: Joi.string().pattern(/^\d{4}\/\d{2}\/\d{2}$/),
  theme: Joi.string(),
});

module.exports = userSchema;
