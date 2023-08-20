const Review = require("../../models/reviews");
const User = require("../../models/users");
const getReview = async (req, res) => {
  const { id } = req.user;
  const review = await Review.findOne({ ownerId: id });
  if (!review) {
    return res.status(404).json({ message: "You have no review" });
  }
  const user = await User.findById(id);
  const { name, text, rating } = review;
  return res
    .status(200)
    .json({ name, text, rating, avatarURL: user.avatarURL });
};
module.exports = getReview;
