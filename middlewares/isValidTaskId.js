const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers");

const isValidTaskId = (req, res, next) => {
  const { taskId } = req.params;
  if (!isValidObjectId(taskId)) {
    next(RequestError(400, `${taskId} is not valid id`));
  }
  next();
};

module.exports = isValidTaskId;
