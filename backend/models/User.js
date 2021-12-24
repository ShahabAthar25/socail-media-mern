const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  email: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },
  image: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
