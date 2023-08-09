const Review = require("../../models/reviews");
const getReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findOne({ ownerId: id });
  if (!review) {
    return res.status(404).json({ message: "You have no review" });
  }
  const { name, text, rating } = review;
  return res.status(200).json({ name, text, rating });
};
module.exports = getReview;
