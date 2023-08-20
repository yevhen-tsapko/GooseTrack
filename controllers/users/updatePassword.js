const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");
const bcrypt = require("bcrypt");

const updatePassword = async (req, res) => {
  const { id } = req.user;
  const { newPassword } = req.body;

  const password = await bcrypt.hash(newPassword, 10);

  const user = await User.findByIdAndUpdate(id, { password }, { new: true });

  if (!user) throw HttpError(404, "User not found");

  return res.status(200).json({ message: "Password updated successfully" });
};

module.exports = updatePassword;
