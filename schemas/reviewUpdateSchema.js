const Joi = require("joi");
const reviewSchema = Joi.object({
  text: Joi.string().max(250),
  rating: Joi.number().min(1).max(5),
});

module.exports = reviewSchema;
