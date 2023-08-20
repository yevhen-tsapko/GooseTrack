const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");
const { sendEmail } = require("../../services");
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

const updateForgottenPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError("User not found", 404);
  }

  const newPassword = nanoid(8);
  const passwordHash = await bcrypt.hash(newPassword, 10);

  await User.findOneAndUpdate({ email }, { password: passwordHash });

  const newPasswordEmail = {
    to: email,
    subject: "New Password",
    html: `<p>Your new password is: ${newPassword}</p>`,
  };

  try {
    await sendEmail(newPasswordEmail);
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({ message: "New password sent to your email" });
};

module.exports = updateForgottenPassword;
