const Joi = require("joi");
const moment = require("moment");

const taskSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string()
    .custom((value, helpers) => {
      const startTime = moment(value, "HH:mm", true);
      if (!startTime.isValid()) {
        return helpers.error("any.invalid");
      }
      return value;
    })
    .required(),
  end: Joi.string()
    .custom((value, helpers) => {
      const endTime = moment(value, "HH:mm", true);
      if (!endTime.isValid()) {
        return helpers.error("any.invalid");
      }
      return value;
    })
    .required(),
  priority: Joi.string()
    .valid("low", "medium", "high")
    .default("low")
    .required(),
  date: Joi.date()
    .iso()
    .error(new Error("Is not a valid date format"))
    .required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
}).custom((value, helpers) => {
  const startTime = moment(value.start, "HH:mm");
  const endTime = moment(value.end, "HH:mm");

  if (startTime.isAfter(endTime)) {
    return helpers.error("any.invalid", {
      message: "Start time must be before end time",
    });
  }

  return value;
}, "custom validation");

module.exports = taskSchema;
