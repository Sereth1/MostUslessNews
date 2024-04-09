const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Must have a Username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Must have a Password"],
  },
  name: {
    type: String,
    required: [true, "Must have a Name"],
  },
  email: {
    type: String,
    required: [true, "Must have an Email"],
    unique: true,
  },
  articlesIdTitle: [
    {
      _id: false,
      id: {
        type: Schema.Types.ObjectId,
        required: [true, "Must have an Article ID"],
      },
      title: {
        type: String,
        required: [true, "Must have an Article Title"],
      },
    },
  ],
});

const UserLogin = model("UserLogin", userSchema);

module.exports = UserLogin;
