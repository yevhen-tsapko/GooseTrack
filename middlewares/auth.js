const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;
const Session = require("../models/session");
function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (typeof authHeader !== "string") {
    return res.status(401).json({ error: "No Token Provided" });
  }
  const [bearer, token] = authHeader.split(" ", 2);

  if (bearer !== "Bearer") {
    return res.status(401).json({ error: "No Token Provided" });
  }

  jwt.verify(token, secret, async (err, decode) => {
    if (err) {
      if (
        err.name === "TokenExpiredError" ||
        err.name === "JsonWebTokenError"
      ) {
        return res.status(401).json({ error: "Token Error" });
      }

      return next(err);
    }
    const isSession = await Session.findById(decode.sid);
    if (!isSession) {
      return res.status(401).json({ error: "Not Authorized" });
    }
    req.user = { id: decode.uid };
    req.session = { id: decode.sid };
    next();
  });
}
module.exports = auth;
