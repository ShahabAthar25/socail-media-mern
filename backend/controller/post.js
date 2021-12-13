const Post = require("../models/Post");

const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user._id });

    res.send({ message: posts });
  } catch (error) {
    res.send({ error: error });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);

    res.send({ message: posts });
  } catch (error) {
    res.send({ error: error });
  }
};

const createPost = (req, res) => {
  res.send({ message: "Hello World" });
};

const updatePost = (req, res) => {
  res.send({ message: "Hello World" });
};

const deletePost = (req, res) => {
  res.send({ message: "Hello World" });
};

module.exports = {
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
