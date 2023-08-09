const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
const contrs = require("../../controllers/reviews");
const { validateBody, isValidId, isUserMatchId } = require("../../middlewares");
const { reviewSchema } = require("../../schemas");

router.get("/", contrs.getAllReviews);
router.get("/own", auth, contrs.getReview);
router.post("/own", auth, validateBody(reviewSchema), contrs.createReview);
router.patch(
  "/own/:id",
  auth,
  isValidId,
  isUserMatchId,
  validateBody(reviewSchema),
  contrs.updateReview
);
router.delete("/own/:id", auth, isValidId, isUserMatchId, contrs.removeReview);
module.exports = router;
