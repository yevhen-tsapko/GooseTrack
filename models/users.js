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
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    skype: {
      type: String,
      default: "",
    },
    avatarURL: { type: String },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
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
