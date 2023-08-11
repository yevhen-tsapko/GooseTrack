const Review = require("../../models/reviews");
const getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  if (!reviews) {
    return res.status(200).json({ message: "Any reviews" });
  }
  return res.status(200).json(reviews);
};
module.exports = getAllReviews;
