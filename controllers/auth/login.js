const User = require("../../models/users");
const bcrypt = require("bcrypt");
const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user === null) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }

  if (!user.verify) {
    return res.status(401).json({ message: "Email not verified" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const tokens = await createSessionAndTokens(user.id);
    return res.status(200).json({ ...user._doc, ...tokens });
  }
  return res.status(401).json({ message: "Email or password is wrong" });
};

module.exports = login;
