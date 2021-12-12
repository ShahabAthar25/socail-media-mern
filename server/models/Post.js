const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 3,
    max: 255,
  },
  message: {
    type: String,
    require: true,
    min: 3,
    max: 255,
  },
  creator: {
    type: String,
    require: true,
    min: 3,
    max: 255,
  },
  tags: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Post", postSchema);
