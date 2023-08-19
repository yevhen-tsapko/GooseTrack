const { sendEmail } = require("../../services");
const User = require("../../models/users");

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Email not found" });
  }

  if (user.verify) {
    return res
      .status(401)
      .json({ message: "Verification has already been passed" });
  }

  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email</a>`,
  };

  try {
    await sendEmail(verifyEmail);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerify;
