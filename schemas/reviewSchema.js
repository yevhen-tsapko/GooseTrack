const Joi = require("joi");
const reviewSchema = Joi.object({
  name: Joi.string().required(),
  text: Joi.string().max(250).required(),
  rating: Joi.number().min(1).max(5).required(),
});

module.exports = reviewSchema;
