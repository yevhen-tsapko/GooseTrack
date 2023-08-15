const createSessionAndTokens = require("../../helpers/createNewSessionAndTokens");
const googleAuth = async (req, res) => {
  const tokens = await createSessionAndTokens(user.id);
  res.redirect(``);
};
