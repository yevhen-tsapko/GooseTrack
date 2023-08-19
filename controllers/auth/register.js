const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser !== null) {
    return res.status(409).json({ message: "Email in use" });
  }
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
    avatarURL,
  });
  const tokens = await createSessionAndTokens(user.id);
  return res.status(200).json({ ...user._doc, ...tokens });
};

module.exports = register;
