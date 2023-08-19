const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");

const deleteUser = async (req, res) => {
  const { id } = req.user;

  const user = await User.findByIdAndDelete(id);

  if (!user) throw HttpError(404, "User not found");

  return res.status(200).json("Deleted successfully");
};

module.exports = deleteUser;
