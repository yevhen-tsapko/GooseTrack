const User = require("../../models/users");

const getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const { email, subscription } = user;
  return res.status(200).json({ email, subscription });
};
module.exports = getUser;
