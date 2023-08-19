const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../services");
const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser !== null) {
    return res.status(409).json({ message: "Email in use" });
  }
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" });
  const passwordHash = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
    avatarURL,
    verificationToken,
  });

  const tokens = await createSessionAndTokens(newUser.id);

  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify your email</a>`,
  };

  try {
    await sendEmail(verifyEmail);
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({ ...newUser._doc, ...tokens });
};

module.exports = register;
