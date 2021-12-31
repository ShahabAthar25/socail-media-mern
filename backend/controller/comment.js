// imports
const Comment = require("../models/Comment");
const { commentValidation } = require("../utils/validation");

// Creating a comment
const comment = async (req, res) => {
  try {
    // Checking if the req.body has body field in it
    const { error } = commentValidation(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    // creating the comment
    const newComment = new Comment({
      username: req.user.username,
      userId: req.user._id,
      postId: req.params.id,
      body: req.body.body,
    });

    // saving the comment
    const comment = await newComment.save();

    // sending the comment to the user
    res.send({ message: comment });
  } catch (error) {
    // sending errors if any
    res.status(500).send({ error: error });
  }
};

// getting a post comments
const getComments = async (req, res) => {
  try {
    // finding the comments with the postId same as the req.params.id
    const comments = await Comment.find({ postId: req.params.id });

    // sending the comments with the postId same as the req.params.id
    res.send({ message: comments });
  } catch (error) {
    // sending any error if any
    res.status(500).send({ error: error });
  }
};

// updating comments
const updateComment = async (req, res) => {
  try {
    // finding the comment with the id of req.params.id
    const comment = await Comment.findById(req.params.id);

    // checking if the user is the creator of the comment
    if (req.user._id === comment.userId) {
      // updating the comment
      const updatedComment = await comment.updateOne({
        $set: {
          body: req.body.body,
        },
      });

      // sending message back to the user
      res.send({ message: "comment has been updated" });
    } else {
      // if user is not the creator of the comment then raising an error
      return res
        .status(403)
        .send({ error: "You can only update your comment." });
    }
  } catch (error) {
    // sending back any error if any
    res.status(500).send({ error: error });
  }
};

// deleting a comment
const deleteComment = async (req, res) => {
  try {
    // finding the comment with the id of req.params.id
    const comment = await Comment.findById(req.params.id);

    // checking if the user is the creator of the comment
    if (req.user._id === comment.userId) {
      // deleting the comment
      const deletedComment = await comment.deleteOne();

      // sending a message to tell the user that the comment has been deleted
      res.send({ message: "comment has been deleted" });
    } else {
      // if user is not the creator of the comment then raising an error
      return res
        .status(403)
        .send({ error: "You can only delete your comment." });
    }
  } catch (error) {
    // sending back any error if any
    res.status(500).send({ error: error });
  }
};

// liking a comment
const likeComment = async (req, res) => {
  try {
    // find the commment with the id of req.params.id
    const comment = await Comment.findById(req.params.id);

    // checking if the user has already liked the comment
    if (!comment.likes.includes(req.user._id)) {
      // if the user has not liked the comment then liking it
      const likedComment = await comment.updateOne({
        $push: { likes: req.user._id },
      });

      // sending a message to tell the user that the comment has been liked
      res.send({ message: "The comment has been liked" });
    } else {
      // if the user has already liked the comment then disliking it
      const dislikedComment = await comment.updateOne({
        $pull: { likes: req.user._id },
      });

      // sending message to tell the user that the comment has been disliked
      res.send({ message: "The comment has been disliked" });
    }
  } catch (error) {
    // sending an error if any
    res.status(500).send({ error: error });
  }
};

// exporting all functions
module.exports = {
  comment,
  updateComment,
  getComments,
  deleteComment,
  likeComment,
};
