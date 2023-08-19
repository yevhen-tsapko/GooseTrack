const registerSchema = require("./registerSchema");
const loginSchema = require("./loginSchema");
const reviewSchema = require("./reviewSchema");
const reviewUpdateSchema = require("./reviewUpdateSchema");
const userSchema = require("./userSchema");
const userVerifySchema = require("./userVerifySchema");
const taskSchema = require("./taskSchema");

module.exports = {
  loginSchema,
  registerSchema,
  reviewSchema,
  reviewUpdateSchema,
  userSchema,
  userVerifySchema,
  taskSchema,
};
