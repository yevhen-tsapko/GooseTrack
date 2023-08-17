const { isValidObjectId } = require("mongoose");



 const HttpError = require("../helpers/HttpError");

const isValidTaskId = (req, res, next) => {
  const { taskId } = req.params;
  if (!isValidObjectId(taskId)) {
       next( HttpError(400, `${taskId} is not valid id`));
  }
  next();
};

module.exports = isValidTaskId;
