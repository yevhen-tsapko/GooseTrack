const uploadUserNewData = require("../users/uploadUserNewData");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  uploadNewUserData: contrsWrapper(uploadUserNewData),
};
