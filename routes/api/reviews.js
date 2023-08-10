const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
const contrs = require("../../controllers/reviews");
const { validateBody } = require("../../middlewares");
const { reviewSchema } = require("../../schemas");

router.get("/", contrs.getAllReviews);
router.get("/own", auth, contrs.getReview);
router.post("/own", auth, validateBody(reviewSchema), contrs.createReview);
router.patch(
  "/own",
  auth,
  // validateBody(reviewSchema),
  contrs.updateReview
);
router.delete("/own", auth, contrs.removeReview);
module.exports = router;
