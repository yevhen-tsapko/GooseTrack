const Task = require("../../models/tasks");

const removeById = async (req, res) => {
  const { taskId } = req.params;
  const result = await Task.findByIdAndRemove(taskId);

  if (!result) {
    return res.status(400).json({ message: "Not found" });
  }
  res.status(200).json({ message: "task deleted" });
};

module.exports = removeById;
