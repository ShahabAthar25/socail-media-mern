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

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.body.file,
      username: req.user.username,
      userId: req.user._id,
    });

    const post = await newPost.save();
    res.send({ message: post });
  } catch (error) {
    res.send({ error: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send({ message: "Post has been updated" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.user._id === post.userId) {
      const deletedPost = await post.deleteOne();
      res.send({ message: "Post has been deleted" });
    } else {
      res.status(403).send({ message: "You can only update your post" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

module.exports = {
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
