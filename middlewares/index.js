const validateBody = require("./validateBody");
const auth = require("./auth");
const addUserName = require("./addUserName");
const isValidTaskId = require("./isValidTaskId");
const multerUpload = require("./multerUpload");
const passport = require("./googleAuth");
module.exports = {
  validateBody,
  auth,
  addUserName,
  isValidTaskId,
  multerUpload,
  passport,
};
