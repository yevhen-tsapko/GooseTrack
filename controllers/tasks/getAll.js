const Task = require("../../models/tasks");

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { date } = req.query;
  if (!date) {
    return res.status(400)
    .json({ message: "missing date in query parameters" });
  }

  const result = await Task.find({
    owner,
    date: { $regex: date, $options: "i" },
  });


if (!result.length) {
  return res.status(204)
  .json({ message: "You don't have any tasks created yet" });
}
  res.json(result);
  
};

module.exports = getAll;
