const FRONTEND_URL = process.env;
const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");
const googleAuth = async (req, res) => {
  const { accessToken, refreshToken } = await createSessionAndTokens(
    req.user._id
  );
  res.redirect(
    `http://localhost:3000/api/auth/googdleAnswer?accessToken=${accessToken}&refreshToken=${refreshToken} }`
  );
};
module.exports = googleAuth;
