const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    birthday: {
      type: String,
      default: "YYYY/MM/DD",
    },
    phone: {
      type: String,
      default: "+380001110022",
    },
    skype: {
      type: String,
      default: "Add skype number",
    },
    token: { type: String, default: null },
    avatarURL: { type: String },
    theme: {
      type: String,
      enum: ["dark", "light"],
      default: "light",
    },
  },
  { versionKey: false, timestamps: true }
);
const User = model("users", userSchema);

userSchema.post("save", handleMongooseError);
module.exports = User;
