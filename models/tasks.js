const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    title: {
      type: String,
      max: 250,
      required: [true, "Add task, plese"],
    },
    start: {
      type: String,
      validate: {
        validator: function (v) {
          const pattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
          return pattern.test(v);
        },
        message: "Your start time is invalid",
      },
      required: [true, "Start time is required"],
    },
    end: {
      type: String,
      validate: [
        {
          validator: function (v) {
            const pattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
            return pattern.test(v);
          },
          message: "Your end time is invalid",
        },
        {
          validator: function (v) {
            const startValue = this.start;
            const endValue = v;
            const startTime = parseTime(startValue);
            const endTime = parseTime(endValue);
            return startTime <= endTime;
          },
          message: "End time must be greater than or equal to start time",
        },
      ],
      required: [true, "End time is required"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
      required: [true, "Priority is required"],
    },
    date: {
      type: String,
      min: "1987-09-28",
      max: "2045-05-23",
      validate: {
        validator: function (value) {
          return /^\d{4}-\d{2}-\d{2}$/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid date in the 'YYYY-MM-DD' format!`,
      },
      required: [true, "Date is required"],
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
      required: [true, "Category is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Task = model("task", taskSchema);

taskSchema.post("save", handleMongooseError);

function parseTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

module.exports = Task;
