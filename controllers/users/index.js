const updateUser = require("../users/updateUser");
const getUser = require("../users/getUser");
const verify = require("../users/verify");
const resendVerify = require("../users/resendVerify");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getUser: contrsWrapper(getUser),
  updateUser: contrsWrapper(updateUser),
  verify: contrsWrapper(verify),
  resendVerify: contrsWrapper(resendVerify),
};
