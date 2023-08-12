const User = require("../../models/users");
const getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  return res.status(200).json(user);
};
module.exports = getUser;
