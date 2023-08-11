const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model } = require("mongoose");

const taskSchema = Schema({
    title: {
      type: String,
      max: 250,
      required: [true, "Add task, plese"],
      },
    start: {
      type: String,
      validate: {
        validator: function (v) {
         const pattern = /^([01]\d|2[0-3]):([0-5]\d)$/
         return pattern.test(v)
            // return v.length > 3
        },
        message: 'Your time is invalid'
    }, 
      // validate: {
      //   validator: function(v) {
      //     return ^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$.test(v);
      //   },
      //   message: props => `${props.value} is not a valid phone number!`
      // },
      // required: function () { return this.end },
      // required: this.start < this.end,
      //  match: ^(?:[01][0-9]|2[0-3])[-:h][0-5][0-9]$,
    //   required: [true, "Start time is required"],
    },
    end: {
      type: String,
      // required: [true, "End time is required"],
      required: this.end > this.start,
    },
  //   favorite: {
  //     type: String,
  //     default: false,
  //   },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
      required: [true, "Priority is required"],
    },
    date: {
      type: Date,
      min: '1987-09-28',
      max: '2045-05-23',
      default: false,
      required: [true, "Date is required"],
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
      required: [true, "Category is required"],
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    //   required:true,
    // },
  },{
    versionKey: false,
  });
  
  const Task = model("task", taskSchema);

  taskSchema.post("save", handleMongooseError);

  module.exports = Task;