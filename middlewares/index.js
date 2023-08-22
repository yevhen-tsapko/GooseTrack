const validateBody = require("./validateBody");
const auth = require("./auth");
const addUserNameAndAvatar = require("./addUserNameAndAvatar");
const isValidTaskId = require("./isValidTaskId");
const multerUpload = require("./multerUpload");
const passport = require("./googleAuth");
module.exports = {
  validateBody,
  auth,
  addUserNameAndAvatar,
  isValidTaskId,
  multerUpload,
  passport,
};
