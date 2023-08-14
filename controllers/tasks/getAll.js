const Task
    // , taskSchemas
   = require("../../models/tasks");
  
  const getAll = async (req, res
    // , next
    ) => {
    // try {
      // console.log(req.query)
      const { id: owner } = req.user;
      const {date,category} = req.query
      if (date && category) {
        const result = await Task.find({ owner,date,category })
        // .select({date});
        // console.log(result);
        res.json(result);
      }
    
      else if (date){
        
        const result = await Task.find({ owner,date })
        
        res.json(result);
      }
      else  {
       // const { _id: owner } = req.user;
      //  const { page = 1, limit = 20 } = req.query;
      //  const skip = (page - 1) * limit;
      //  const result = await Task.find({ owner }, null, { skip, limit });
       const result = await Task.find({ owner, date: { $regex: date, $options: 'i' } });

    
       res.json(result);
     }
    
  };
  
  module.exports = getAll;


// const getAll = async (req, res) => {
//   try {
//     const { id: owner } = req.user;
//     const { date } = req.query;

//     if (date) {
//       const startDate = new Date(date);
//       const endDate = new Date(startDate);
//       endDate.setHours(23, 59, 59, 999);

//       const result = await Task.find({ owner, createdAt: { $gte: startDate, $lte: endDate } })
//         .sort({ createdAt: 'asc' }); // Sort tasks by date in ascending order
//         console.log(result);
//       res.json(result);
//     } else {
//       const { page = 1, limit = 20 } = req.query;
//       const skip = (page - 1) * limit;

//       const result = await Task.find({ owner }, null, { skip, limit })
//         .sort({ createdAt: 'asc' }); // Sort tasks by date in ascending order
//       res.json(result); 
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };

//  module.exports = getAll;

// Example usage:
// GET /tasks?date=2023-08-14&page=1&limit=10



  //  пошук по частині даних 
  // { $regex: date, $options: 'i' }

  // date=2012-20-18&category=orange

  // select({ "name": 1, "_id": 0});