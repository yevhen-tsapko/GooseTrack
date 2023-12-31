const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  priority: Joi.string()
    .valid("low", "medium", "high")
    .default("low")
    .required(),
  date: Joi.date().iso().error(new Error(" Is not valid date format")).required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
}).custom((value, helpers) => {
  const { start, end } = value;

  const startTime = parseTime(start);
  const endTime = parseTime(end);

  if (startTime > endTime) {
    return helpers.error("End time must be greater than start time");
  }

  return value;
});

function parseTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

module.exports = taskSchema;
