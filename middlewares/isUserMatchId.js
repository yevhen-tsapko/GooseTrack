const HttpError = require("../helpers/HttpError");
const isUserMatchId = (req, res, next) => {
  const jwt = require("jsonwebtoken");

  const { id } = req.params;
  const [, token] = req.headers.authorization.split(" ", 2);
  const decode = jwt.decode(token);

  if (decode.id !== id) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};
module.exports = isUserMatchId;
