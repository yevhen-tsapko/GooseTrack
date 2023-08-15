const Task = require("../../models/tasks");

const update = async (req, res) => {
  const { taskId } = req.params;

  const result = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
  });
  res.json(result);
};

module.exports = update;
