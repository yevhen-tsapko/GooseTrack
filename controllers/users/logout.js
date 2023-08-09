const User = require("../../models/users");

const logout = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user && user.token) {
    await User.findByIdAndUpdate(req.user.id, { token: null });
    return res.status(204).json();
  }
  return res.status(401).json({ message: "Not Authorized" });
};
module.exports = logout;
