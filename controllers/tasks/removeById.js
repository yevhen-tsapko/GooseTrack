const  Task
    // , taskSchemas
   = require("../../models/tasks");
  
  
  const removeById = async (req, res
    // , next
    ) => {
      // try {
        const { taskId } = req.params;
        const result = await Task.findByIdAndRemove(taskId);
    
        if (!result) {
          // throw RequestError(400, "Not found");
          return res.status(400).json({ message: "Not found" });
        }
        res.status(200).json({ message: "task deleted" });
      // } catch (error) {
      //   next(error);
      // }
    };
  
    module.exports = removeById;