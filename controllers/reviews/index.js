const getAllReviews = require("./getAllReviews");
const getReview = require("./getReview");
const createReview = require("./createReview");
const updateReview = require("./updateReview");
const removeReview = require("./removeReview");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  getAllReviews: contrsWrapper(getAllReviews),
  getReview: contrsWrapper(getReview),
  createReview: contrsWrapper(createReview),
  updateReview: contrsWrapper(updateReview),
  removeReview: contrsWrapper(removeReview),
};
