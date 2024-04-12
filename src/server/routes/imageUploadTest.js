const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const Images = require("../schemes/uploadImg");

const storageDirectory = path.join(__dirname, "../../../public/img");

fs.mkdirSync(storageDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storageDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded" });
    }
    const newImage = await Images.create({ image: req.file.filename });
    res.json({ status: "ok", image: newImage });
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).send({ error: "Failed to upload image" });
  }
});

module.exports = router;
