const addTasks = require("./addTask");
const getAll = require("./getAll");
const removeById = require("./removeById");
const update = require("./update");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  addTasks: contrsWrapper(addTasks),
  getAll: contrsWrapper(getAll),
  removeById: contrsWrapper(removeById),
  update: contrsWrapper(update),
};