const Task = require("../../models/tasks");

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  // const { date } = req.query;

  // const result = await Task.find({
  //   owner,
  //   date: { $regex: date, $options: "i" },
  // });
const result = await Task.find({owner})

if (!result.length) {
  return res.status(204)
  .json({ message: "You don't have any tasks created yet" });
}
  res.json(result);
  
};

module.exports = getAll;
