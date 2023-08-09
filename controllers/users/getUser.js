const User = require("../../models/users");

const getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const { email, name, phone, skype, avatarURL, bithday } = user;
  return res
    .status(200)
    .json({ email, name, phone, skype, avatarURL, bithday });
};
module.exports = getUser;
