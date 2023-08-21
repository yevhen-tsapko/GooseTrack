const register = require("./register");
const login = require("./login");
const googleAuth = require("./googleAuth");
const logout = require("./logout");
const refresh = require("./refresh");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  register: contrsWrapper(register),
  login: contrsWrapper(login),
  googleAuth: contrsWrapper(googleAuth),
  logout: contrsWrapper(logout),
  refresh: contrsWrapper(refresh),
};
