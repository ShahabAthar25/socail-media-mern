const Comment = require("../models/Comment");
const { commentValidation } = require("../utils/validation");

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

    if (req.user._id !== comment.userId) {
      return res
        .status(403)
        .send({ error: "You can only update your comment." });
    }

    const updatedComment = await comment.updateOne({
      $set: {
        body: req.body.body,
      },
    });

    res.send({ message: "comment has been updated" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

module.exports = {
  comment,
  updateComment,
  getComments,
};
