const registerSchema = require("./registerSchema");
const loginSchema = require("./loginSchema");
const refreshSchema = require("./refreshSchema");
const reviewSchema = require("./reviewSchema");
const reviewUpdateSchema = require("./reviewUpdateSchema");
const userSchema = require("./userSchema");
const userUpdatePasswordSchema = require("./userUpdatePasswordSchema");
const updateForgottenPasswordSchema = require("./updateForgottenPasswordSchema");
const userVerifySchema = require("./userVerifySchema");
const taskSchema = require("./taskSchema");

module.exports = {
  loginSchema,
  registerSchema,
  refreshSchema,
  reviewSchema,
  reviewUpdateSchema,
  userSchema,
  userUpdatePasswordSchema,
  updateForgottenPasswordSchema,
  userVerifySchema,
  taskSchema,
};
