const  Task
    // , taskSchemas
  = require("../../models/tasks");


const update = async (req, res
    // , next
    ) => {
    // try {
    //   const { error } = taskSchemas.putCheckingSchema.validate(req.body);
    //   if (error) {
    //     throw RequestError(400, "missing fields");
    //   }
  
      const { taskId } = req.params;
     
      const result = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true,
      });
      res.json(result);
    // } catch (error) {
    //   next(error);
    // }
  };

  module.exports = update;