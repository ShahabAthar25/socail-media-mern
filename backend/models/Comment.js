const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
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
  postId: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Comment", commentSchema);
