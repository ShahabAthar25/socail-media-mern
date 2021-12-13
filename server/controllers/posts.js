const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.send({ message: posts });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);

    const newPost = await post.save();

    res.status(201).send({ message: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getPosts,
  createPost,
};
