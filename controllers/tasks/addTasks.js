const Task
    // , taskSchemas
  = require("../../models/tasks");

const addTasks = async (req, res
    // , next
    ) => {
      // console.log(Task)
    // try {
      // const { error } = taskSchemas.postCheckingSchema.validate(req.body);
  
      // if (error) {
      //   throw RequestError(400, error.message);
      // }
      console.log(req.user);
      const { id: owner } = req.user;
      // const { _id: owner } = req.user;
  
      const result = await Task.create({ ...req.body
        , owner
       });
  
      res.status(201).json(result);
    // } catch (error) {
    //   next(error);
    // }
  };

  module.exports = addTasks;