const Session = require("../models/session");
const jwt = require("jsonwebtoken");
const createSessionAndTokens = async (userId) => {
  const newSession = await Session.create({ ownerId: userId });
  const accessToken = jwt.sign(
    { uid: userId, sid: newSession._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  const refreshToken = jwt.sign(
    { uid: userId, sid: newSession._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1m",
    }
  );
  return { accessToken, refreshToken };
};
module.exports = createSessionAndTokens;
