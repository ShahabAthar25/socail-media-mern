// Imports
const Post = require("../models/Post");
const { postValidation } = require("../utils/validation");

// Getting user posts
const getUserPosts = async (req, res) => {
  try {
    // finding posts by userId
    const posts = await Post.find({ userId: req.user._id });

    // sending posts back to user
    res.send({ message: posts });
  } catch (error) {
    // sending error back to user if any
    res.send({ error: error });
  }
};

// getting a singular post
const getPost = async (req, res) => {
  try {
    // finding post by id
    const posts = await Post.findById(req.params.id);

    // sending posts
    res.send({ message: posts });
  } catch (error) {
    // send error if any
    res.send({ error: error });
  }
};

// creating posts
const createPost = async (req, res) => {
  try {
    // checking if the req.body containsevery field we want
    const { error } = postValidation(req.body);
    // send the error message instead of the error object
    if (error) return res.status(400).send({ error: error.details[0].message });

    // creating new post
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.files.file,
      username: req.user.username,
      userId: req.user._id,
    });

    // saving post database
    const post = await newPost.save();

    // sending posts back to user
    res.send({ message: post });
  } catch (error) {
    // sending error if any
    res.send({ error: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (req.user._id === post.userId) {
      const updatedPost = await Post.findOneAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.send({ message: "Post has been updated" });
    } else {
      res.status(403).send({ error: "You can only update your posts" });
    }
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
      res.status(403).send({ message: "You can only delete your post" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user._id)) {
      const likedPost = await post.updateOne({
        $push: { likes: req.user._id },
      });
      res.status(200).send({ message: "The post has been liked" });
    } else {
      const dislikedPost = await post.updateOne({
        $pull: { likes: req.user._id },
      });
      res.status(200).send({ message: "The post has been disliked" });
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
  likePost,
};
