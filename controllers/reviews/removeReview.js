const Review = require("../../models/reviews");
const HttpError = require("../../helpers/HttpError");
const updateReview = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findOneAndRemove({
    ownerId: id,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateReview;
