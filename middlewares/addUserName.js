const User = require("../models/users");
const addUserName = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  req.body.name = user.name;
  next();
};
module.exports = addUserName;
