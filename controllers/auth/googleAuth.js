const { FRONTEND_URL } = process.env;
const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");

const googleAuth = async (req, res) => {
  const { accessToken, refreshToken } = await createSessionAndTokens(
    req.user._id
  );
  res.redirect(
    `${FRONTEND_URL}/GooseTrack?accessToken=${accessToken}&refreshToken=${refreshToken}`
  );
};
module.exports = googleAuth;
