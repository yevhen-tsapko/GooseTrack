const User = require("../models/users");
const addUserName = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  req.body.name = user.name;
  next();
};
module.exports = addUserName;
