const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;
const createNewSessionAndTokens = require("../../helpers/createNewSessionAndTokens");
const Session = require("../../models/session");
const HttpError = require("../../helpers/HttpError");

const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const { uid, sid } = jwt.verify(refreshToken, secret);

    await Session.findByIdAndRemove(sid);

    const tokens = await createNewSessionAndTokens(uid);
    return res.status(200).json(tokens);
  } catch (error) {
    throw HttpError(403, error.message);
  }
};

module.exports = refresh;
