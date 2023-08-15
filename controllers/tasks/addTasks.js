
const Task = require("../../models/tasks");

const addTasks = async (req, res) => {
  const { id: owner } = req.user;

  const result = await Task.create({ ...req.body, owner });

  res.status(201).json(result);
}
module.exports = addTasks;
