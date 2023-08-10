const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getUser = require("./getUser");
const uploadUserNewData = require("./uploadUserNewData");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  register: contrsWrapper(register),
  login: contrsWrapper(login),
  logout: contrsWrapper(logout),
  getUser: contrsWrapper(getUser),
  uploadNewUserData: contrsWrapper(uploadUserNewData),
};
