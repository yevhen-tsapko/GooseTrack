const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model, default: mongoose } = require("mongoose");
const sessionSchema = new Schema(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      required: [true, "User id"],
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);
const Session = model("session", sessionSchema);

sessionSchema.post("save", handleMongooseError);
module.exports = Session;
