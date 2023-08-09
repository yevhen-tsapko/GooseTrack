const express = require("express");
const multer = require("multer");
const path = require("node:path");
const auth = require("../../middlewares/auth");
const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, path.join(__dirname, "..", "..", "tmp"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);

    cb(null, baseName + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();
const contrs = require("../../controllers/users");
router.patch(
  "/avatar",
  auth,
  upload.single("avatar"),
  contrs.uploadNewUserData
);
module.exports = router;
