const express = require("express");
const router = express.Router();
const contrs = require("../../controllers/reviews");
const { auth, validateBody, addUserName } = require("../../middlewares");
const { reviewSchema, reviewUpdateSchema } = require("../../schemas");

router.get("/", contrs.getAllReviews);
router.get("/own", auth, contrs.getReview);
router.post(
  "/own",
  auth,
  addUserName,
  validateBody(reviewSchema),
  contrs.createReview
);
router.patch(
  "/own",
  auth,
  validateBody(reviewUpdateSchema),
  contrs.updateReview
);
router.delete("/own", auth, contrs.removeReview);
module.exports = router;
