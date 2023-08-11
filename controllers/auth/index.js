const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  register: contrsWrapper(register),
  login: contrsWrapper(login),
  logout: contrsWrapper(logout),
};
