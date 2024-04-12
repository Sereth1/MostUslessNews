const express = require("express");
const {
  createArticle,
  getArticles,
} = require("../rootController/rootControls");
const upload = require("../helpers/uploadImage");

const router = express.Router();
router
  .post("/create/articles", createArticle)
  .get("/get/articles", getArticles);

module.exports = router;
