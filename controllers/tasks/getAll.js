const { Task
  // , taskSchemas
} = require("../../models/tasks");

const getAll = async (req, res
  // , next
  ) => {
  // try {
    // const { _id: owner } = req.user;
    // const { page = 1, limit = 20 } = req.query;
    // const skip = (page - 1) * limit;
    // const result = await Task.find({ owner }, null, { skip, limit });
    const result = await Task.find({});
    res.json(result);
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = getAll;