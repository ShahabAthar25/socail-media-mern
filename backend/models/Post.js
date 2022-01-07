const mongoose = require("mongoose");
const moment = require("moment");

const postSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  userImage: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  body: {
    type: String,
  },
  image: {
    type: String,
    default: "",
  },
  likes: {
    type: Array,
    default: [],
  },
  createdOn: {
    type: String,
    default: moment().format("DD MM YYYY"),
  },
});

module.exports = mongoose.model("Post", postSchema);
