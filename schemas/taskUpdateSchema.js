const Joi = require("joi");

const taskUpdateSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string(),
  end: Joi.string(),
  priority: Joi.string()
    .valid("low", "medium", "high")
    .default("low"),
  date: Joi.date().iso(),
  category: Joi.string().valid("to-do", "in-progress", "done"),
}).custom((value, helpers) => {
  const { start, end } = value;

  const startTime = parseTime(start);
  const endTime = parseTime(end);

  if (startTime > endTime) {
    return helpers.error("end time must be greater then start");
  }

  return value;
});

function parseTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

module.exports = taskUpdateSchema;
