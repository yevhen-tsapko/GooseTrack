const Task = require("../../models/tasks");

const removeById = async (req, res) => {
  const { taskId } = req.params;
  const { id: owner } = req.user;

  const isOwner = await Task.findOne({ _id: taskId, owner });
  


  if (!isOwner) {
    return res.status(403).json({ message: "This is not your task" });
  }
  const result = await Task.findByIdAndRemove(taskId);

  if (!result) {
    return res.status(400).json({ message: "Not found" });
  }
  res.status(200).json({ message: "task deleted" });
};

module.exports = removeById;
