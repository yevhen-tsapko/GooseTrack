const express = require("express");
const router = express.Router();
const contrs = require("../../controllers/reviews");
const {
  auth,
  validateBody,
  addUserNameAndAvatar,
} = require("../../middlewares");
const { reviewSchema, reviewUpdateSchema } = require("../../schemas");

router.get("/", contrs.getAllReviews);
router.get("/own", auth, contrs.getReview);
router.post(
  "/own",
  auth,
  addUserNameAndAvatar,
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
