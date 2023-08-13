const createNewSessionAndTokens = require("../../helpers/createNewSessionAndTokens");
const Session = require("../../models/session");

const refresh = async (req, res) => {
  await Session.findByIdAndRemove(req.session.id);
  const tokens = await createNewSessionAndTokens(req.user.id);
  return res.status(200).json(tokens);
};

module.exports = refresh;
