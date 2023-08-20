const Task = require("../../models/tasks");

const update = async (req, res) => {
  const { taskId } = req.params;
  const { id: owner } = req.user;

  const isOwner = await Task.findOne({ _id: taskId, owner });
  


  if (!isOwner) {
    return res.status(404).json({ message: "You do not own this task" });
  }

  const result = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
  });
  res.json(result);
};

module.exports = update;



