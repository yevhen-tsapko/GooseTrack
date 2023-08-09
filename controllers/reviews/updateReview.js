const Review = require("../../models/reviews");
const HttpError = require("../../helpers/HttpError");
const updateReview = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findOneAndUpdate(
    {
       ownerId: id,
    },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateReview;
