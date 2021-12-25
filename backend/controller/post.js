const Post = require("../models/Post");
const Comment = require("../models/Comment");
const { postValidation, commentValidation } = require("../utils/validation");

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
    const { error } = postValidation(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.files.file,
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

const comment = async (req, res) => {
  try {
    const { error } = commentValidation(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const newComment = new Comment({
      username: req.user.username,
      userId: req.user._id,
      postId: req.params.id,
      body: req.body.body,
    });

    const comment = await newComment.save();

    res.send({ message: comment });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const updateComment = async (req, res) => {
  res.send({ message: "Hello World" });
};

const postComments = async (req, res) => {
  res.send({ message: "Hello World" });
};

module.exports = {
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  comment,
  updateComment,
  postComments,
};
