const express = require("express");

const { auth, isValidTaskId, validateBody } = require("../../middlewares");
const {taskSchema} = require("../../schemas");

const router = express.Router();

const ctrl = require("../../controllers/tasks");

router.get("/", auth, ctrl.getAll);

router.post("/", auth, validateBody(taskSchema), ctrl.addTasks);

router.delete("/:taskId", auth, isValidTaskId, ctrl.removeById);

router.patch("/:taskId", auth, isValidTaskId, validateBody(taskSchema), ctrl.update);

module.exports = router;
