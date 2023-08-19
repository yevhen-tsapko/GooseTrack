const updateUser = require("../users/updateUser");
const getUser = require("../users/getUser");
const deleteUser = require("../users/deleteUser");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getUser: contrsWrapper(getUser),
  updateUser: contrsWrapper(updateUser),
  deleteUser: contrsWrapper(deleteUser),
};
