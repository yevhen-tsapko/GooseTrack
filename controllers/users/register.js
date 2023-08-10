const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user !== null) {
    res.status(409).json({ message: "Email in use" });
  }
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" });
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
    avatarURL,
  });
  res.status(201).json(newUser);
};

module.exports = register;
