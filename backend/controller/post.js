// Imports
const Post = require("../models/Post");
const User = require("../models/User");
const { postValidation } = require("../utils/validation");

// Getting all posts
const getPosts = async (req, res) => {
  try {
    // finding all posts
    const posts = await Post.find();

    // sending posts back
    res.send({ message: posts });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

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
    const user = await User.findById(req.user._id);

    // checking if the req.body containsevery field we want
    const { error } = postValidation(req.body);
    // send the error message instead of the error object
    if (error) return res.status(400).send({ error: error.details[0].message });

    // creating new post
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.body.file,
      username: req.user.username,
      userImage: user.image,
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

// updating posts
const updatePost = async (req, res) => {
  try {
    // finding the correct post
    const post = await Post.findById(req.params.id);

    // checking if the user is the creator of the post
    if (req.user._id === post.userId) {
      // if the person is the creator of the post then liking it
      const updatedPost = await Post.findOneAndUpdate(req.params.id, {
        $set: req.body,
      });

      // telling the user that the post has been liked
      res.send({ message: "Post has been updated" });
    } else {
      // if user is not the creator of the post, then sending an error
      res.status(403).send({ error: "You can only update your posts" });
    }
  } catch (error) {
    // sending an error if the backend is not working properly
    res.status(500).send({ error: error });
  }
};

// deleting a post
const deletePost = async (req, res) => {
  try {
    // finding the post
    const post = await Post.findById(req.params.id);
    // checking if the user is the creator of the post
    if (req.user._id === post.userId) {
      // if the user is the creator of the post then deleting it
      const deletedPost = await post.deleteOne();

      // sending a message to tell the user that the post has been deleted
      res.send({ message: "Post has been deleted" });
    } else {
      // if the user is not the creator of the post then denying access
      res.status(403).send({ message: "You can only delete your post" });
    }
  } catch (error) {
    // sending error if there is a problem with the backend
    res.status(500).send({ error: error });
  }
};

const likePost = async (req, res) => {
  try {
    // finding post
    const post = await Post.findById(req.params.id);
    //checking if the user has already liked the post
    if (!post.likes.includes(req.user._id)) {
      // if the user has not already liked the post then adding user id to the likes array
      const likedPost = await post.updateOne({
        $push: { likes: req.user._id },
      });

      // telling the user that the post has been liked
      res.send({ message: "The post has been liked" });
    } else {
      // if the user has already liked the post then disliking it
      const dislikedPost = await post.updateOne({
        $pull: { likes: req.user._id },
      });

      // telling user that the post has been disliked
      res.send({ message: "The post has been disliked" });
    }
  } catch (error) {
    // sending an error if there is any problem with backend itself
    res.status(500).send({ error: error });
  }
};

// exporting all functions
module.exports = {
  getPosts,
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
