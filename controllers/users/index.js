const updateUser = require("../users/updateUser");
const getUser = require("../users/getUser");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getUser: contrsWrapper(getUser),
  updateUser: contrsWrapper(updateUser),
};
