const express = require("express");

// const { validateBody } = require("../../middlewares");

const {auth} = require("../../middlewares");


const isValidTaskId = require("../../middlewares")

console.log(isValidTaskId);
// const { registerSchema, loginSchema } = require("../../schemas");

const router = express.Router();

const ctrl = require("../../controllers/tasks");

router.get(
  "/",
  auth,
  ctrl.getAll
);

router.post(
  "/",
  auth,
  // validateBody(loginSchema),
  ctrl.addTasks
);

router.delete(
  "/:taskId",
    auth, 
  // isValidTaskId,
  ctrl.removeById
);

router.patch(
  "/:taskId",
   auth,
    // isValidTaskId,
  // validateBody(loginSchema),
  ctrl.update
);

module.exports = router;


