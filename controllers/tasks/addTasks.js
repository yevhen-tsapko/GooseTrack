const Task = require("../../models/tasks");
const User = require("../../models/users");

const addTasks = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  if (user === null) {
    return res.status(404).json({ message: "User not found" });
  }
  const {createdAt} = user;


const inputDate = new Date(createdAt);
const year = inputDate.getUTCFullYear();
const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0'); 
const day = String(inputDate.getUTCDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;



const  {date}  = req.body 

if (formattedDate > date) {
return  res.status(400).json({ message: "You  can not create task earlier then you was registered" });
}
  
  const { id: owner } = req.user;

 

  const result = await Task.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = addTasks;



