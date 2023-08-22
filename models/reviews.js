const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model, default: mongoose } = require("mongoose");
const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name"],
    },
    ownerId: {
      type: mongoose.Types.ObjectId,
      required: [true, "User id"],
      ref: "users",
    },
    avatar: {
      type: String,
      required: [true, "User's avatar"],
    },
    text: {
      type: String,
      maxlength: 250,
      required: [true, "User review"],
    },
    avatarURL: { type: String },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, "User's rating"],
    },
  },
  { versionKey: false, timestamps: true }
);
const Review = model("reviews", reviewSchema);

reviewSchema.post("save", handleMongooseError);
module.exports = Review;
