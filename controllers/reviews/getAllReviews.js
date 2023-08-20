const Review = require("../../models/reviews");
const getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  if (!reviews) {
    return res.status(200).json({ message: "Any reviews" });
  }
  const sortedReviews = reviews.sort(
    (review1, review2) => review2.updatedAt - review1.updatedAt
  );

  return res.status(200).json(sortedReviews.slice(0, 9));
};
module.exports = getAllReviews;
