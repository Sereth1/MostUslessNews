const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema(
  { image: String },
  { collection: "ImageDetails" }
);

const ImageDetails = mongoose.model("ImageDetails", ImageSchema);

module.exports = ImageDetails;
