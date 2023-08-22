const Joi = require("joi");
const {
  emailRegexp,
  phoneRegexp,
  skypeRegexp,
  birthdayRegexp,
} = require("./patternConstants");

const userSchema = Joi.object({
  name: Joi.string().max(16),
  email: Joi.string().pattern(emailRegexp),
  phone: Joi.string().pattern(phoneRegexp),
  skype: Joi.string().pattern(skypeRegexp),
  birthday: Joi.string().pattern(birthdayRegexp),
  theme: Joi.string(),
});

module.exports = userSchema;
