const validateBody = require("./validateBody");
const auth = require("./auth");
const addUserName = require("./addUserName");
const isValidTaskId = require("./isValidTaskId")
const multerUpload = require("./multerUpload");
module.exports = { validateBody, auth, addUserName,
    isValidTaskId, multerUpload };
