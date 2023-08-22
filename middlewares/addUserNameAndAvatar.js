const User = require("../models/users");
const addUserNameAndAvatar = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  req.body.name = user.name;
  req.body.avatarURL = user.avatarURL;
  next();
};
module.exports = addUserNameAndAvatar;
