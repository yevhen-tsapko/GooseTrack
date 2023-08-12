const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "..", "upload"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, "avatar-" + req.user.id); // file name - user id
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1048576,
//   },
// });
// const multerUpload = multer({ storage });

// module.exports = multerUpload;

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "uploads",
      allowed_formats: ["jpg", "png"], // Adjust the allowed formats as needed
      public_id: "avatar-" + req.user.id, // Use original filename as the public ID
    };
  },
});

const upload = multer({ storage });

module.exports = upload;

