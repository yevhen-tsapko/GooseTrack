const Task = require("../../models/tasks");

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { date } = req.query;

  const result = await Task.find({
    owner,
    date: { $regex: date, $options: "i" },
  });

  res.json(result);
  
};

module.exports = getAll;
