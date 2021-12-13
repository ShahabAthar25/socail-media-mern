const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  userId: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: "",
  },
  comments: {
    type: Array,
    default: [],
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Post", postSchema);
