require("dotenv").config({ path: "./dotenv.env" });
const UserLogin = require("../schemes/RegisterScheme");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const bcrypt = require("bcrypt");
const NewArticle = require("../schemes/articleSheme");

exports.register = async (req, res) => {
  try {
    newUser = new UserLogin(req.body);
    console.log(req.body);
    await newUser.save();
    console.log("User creation successful");
    res
      .status(201)
      .send({ message: "User created successfully", newUser: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error creating UserName Exists " });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newArticle = NewArticle(req.body);
    console.log(req.body);
    await newArticle.save();
    console.log("Article has been successfully created");
    res
      .status(201)
      .send({ message: "Article has been created", newArticle: newArticle });
  } catch (error) {
    console.error("Error creating Article", error);
    res.status(500).send({ message: "beeeep booop error had been found" });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const docs = await NewArticle.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).send(`error`);
  }
};

exports.getRegister = async (req, res) => {
  try {
    const docs = await UserLogin.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).send(`fuck`);
  }
};

exports.findUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await UserLogin.findOne({ _id: id });
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const { articlesIdTitle } = req.body; 
    if (!articlesIdTitle || !articlesIdTitle.id || !articlesIdTitle.title) {
      return res
        .status(400)
        .json({ message: "Article ID and Title are required." });
    }

    const user = await UserLogin.findByIdAndUpdate(
      req.params.id,
      {
        $push: { articlesIdTitle: articlesIdTitle },
      },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Server error when updating user:", error);
    res.status(500).json({ message: error.message });
  }
};
exports.mongooseConnection = mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((err) => {
    console.error("Connection error", err);
    console.log("MONGO_URI used:", mongoURI);
  });
