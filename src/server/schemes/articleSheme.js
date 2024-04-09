const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

const schema = new Schema({
  Title: { type: String },
  Author: { type: String },
  Date: { type: String },
  imgArt: { type: String },
  Tags: { type: String },
  Considerations: { type: String },
  Body: { type: String },
});

const NewArticle = model("NewArticle", schema);

module.exports = NewArticle;
