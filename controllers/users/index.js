const updateUser = require("../users/updateUser");
const getUser = require("../users/getUser");
const deleteUser = require("../users/deleteUser");
const updatePassword = require("../users/updatePassword");
const updateForgottenPassword = require("../users/updateForgottenPassword");
const verify = require("../users/verify");
const resendVerify = require("../users/resendVerify");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getUser: contrsWrapper(getUser),
  updateUser: contrsWrapper(updateUser),
  deleteUser: contrsWrapper(deleteUser),
  updatePassword: contrsWrapper(updatePassword),
  updateForgottenPassword: contrsWrapper(updateForgottenPassword),
  verify: contrsWrapper(verify),
  resendVerify: contrsWrapper(resendVerify),
};
