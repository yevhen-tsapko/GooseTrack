const Review = require("../../models/reviews");
const createReview = async (req, res) => {
  console.log("req.user.name", req.body.name);
  const result = await Review.create({ ...req.body, ownerId: req.user.id });
  res.status(201).json(result);
};

module.exports = createReview;
