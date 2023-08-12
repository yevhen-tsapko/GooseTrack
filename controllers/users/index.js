const uploadUserNewData = require("../users/uploadUserNewData");
const getUser = require("../users/getUser");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getUser: contrsWrapper(getUser),
  uploadNewUserData: contrsWrapper(uploadUserNewData),
};
