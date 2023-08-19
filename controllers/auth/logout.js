const Session = require("../../models/session");

const logout = async (req, res) => {
  await Session.findByIdAndRemove(req.session.id);
  return res.status(204).json();
};
module.exports = logout;
