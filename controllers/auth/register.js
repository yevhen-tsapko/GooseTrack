const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser !== null) {
    res.status(409).json({ message: "Email in use" });
  }
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
    avatarURL,
  });
  user.token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "23h",
  });
  const newUser = await User.findByIdAndUpdate(user._id, user, { new: true });
  res.status(201).json(newUser);
};

module.exports = register;
