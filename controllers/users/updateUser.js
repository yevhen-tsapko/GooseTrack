const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");

const updateUser = async (req, res) => {
  if (req.file) {
    req.body.avatarURL = req.file.path;
  }
  const result = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateUser;
