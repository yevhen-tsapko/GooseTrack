const User = require("../../models/users");
const { FRONTEND_URL } = process.env;

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.redirect(`${FRONTEND_URL}/GooseTrack/?emailVerification=success`);
};

module.exports = verify;
