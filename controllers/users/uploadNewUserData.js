const User = require("../../models/users");
const path = require("node:path");
const Jimp = require("jimp");

const uploadAvatar = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  Jimp.read(path.join(__dirname, "..", "..", "tmp", req.file.filename))
    .then((avatar) => {
      return avatar
        .resize(250, 250) // resize
        .write(
          path.join(
            __dirname,
            "..",
            "..",
            "public",
            "avatars",
            req.file.filename
          )
        ); // save
    })
    .catch((err) => {
      console.error(err);
    });
  return res.json({ avatarURl: req.file.path });
};
module.exports = uploadAvatar;
