const Review = require("../../models/reviews");
const User = require("../../models/users");
const createReview = async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { avatarURL } = user;

  const result = await Review.create({
    ...req.body,
    avatar: avatarURL,
    ownerId: id,
  });
  res.status(201).json(result);
};

module.exports = createReview;
