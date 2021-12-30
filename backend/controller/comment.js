const Comment = require("../models/Comment");
const { commentValidation } = require("../utils/validation");

const comment = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).send(`No post with id: ${id}`);

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

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });

    res.send({ message: comments });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (req.user._id === comment.userId) {
      const updatedComment = await comment.updateOne({
        $set: {
          body: req.body.body,
        },
      });

      res.send({ message: "comment has been updated" });
    } else {
      return res
        .status(403)
        .send({ error: "You can only update your comment." });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (req.user._id === comment.userId) {
      const deletedComment = await comment.deleteOne();

      res.send({ message: "comment has been deleted" });
    } else {
      return res
        .status(403)
        .send({ error: "You can only delete your comment." });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const likeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment.likes.includes(req.user._id)) {
      const likedComment = await comment.updateOne({
        $push: { likes: req.user._id },
      });
      res.status(200).send({ message: "The comment has been liked" });
    } else {
      const dislikedComment = await comment.updateOne({
        $pull: { likes: req.user._id },
      });
      res.status(200).send({ message: "The comment has been disliked" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

module.exports = {
  comment,
  updateComment,
  getComments,
  deleteComment,
  likeComment,
};
