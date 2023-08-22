const Review = require("../../models/reviews");
const getReview = async (req, res) => {
  const { id } = req.user;
  const review = await Review.findOne({ ownerId: id });
  if (!review) {
    return res.status(404).json({ message: "You have no review" });
  }
  return res.status(200).json(review);
};
module.exports = getReview;
