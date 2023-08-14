const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");

const updateUser = async (req, res) => {
  // const { email } = req.body;
  // const isUser = await User.findOne({ email });
  // if (isUser !== null) {
  //   res.status(409).json({ message: "Email in use" });
  // }
  console.log(req.file);
  if (req.file) {
    req.body.avatarURL = req.file.path;
  }
  console.log(req.body);
  const result = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateUser;
