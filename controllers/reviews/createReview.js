const Review = require("../../models/reviews");

const createReview = async (req, res) => {
  console.log(req.body);
  const result = await Review.create({
    ...req.body,
    ownerId: req.user.id,
  });
  res.status(201).json(result);
};

module.exports = createReview;
