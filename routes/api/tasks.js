const express = require("express");

// const { validateBody } = require("../../middlewares");

// const auth = require("../../middlewares");

// const { registerSchema, loginSchema } = require("../../schemas");


const router = express.Router();

const ctrl = require("../../controllers/tasks");

router.get("/",
// auth,
 ctrl.getAll);


router.post("/",
// auth,
// validateBody(loginSchema),
ctrl.addTasks);

router.delete("/:taskId",
//   auth, isValidTaskId,
 ctrl.removeById);

router.patch("/:taskId",
//  auth, isValidTaskId,
// validateBody(loginSchema),
  ctrl.update);



module.exports = router;


// const express = require("express");

// const { isValidId } = require("../../middlewares");

// const router = express.Router();

// const ctrl = require("../../controllers/contacts");

// router.get("/", ctrl.getAll);

// router.get("/:contactId",, isValidId, ctrl.getById);

// router.post("/",, ctrl.add);

// router.delete("/:contactId",, isValidId, ctrl.removeById);

// router.put("/:contactId", isValidId, ctrl.update);

// router.patch("/:contactId/favorite", isValidId, ctrl.updateStatusContact);

// module.exports = router;