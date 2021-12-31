const bcrypt = require("bcrypt");

const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// getting current user profile
const getCurrentUserProfile = async (req, res) => {
  try {
    // finding the current user with the req.user._id
    // The req.user._id is taken from the isAuthenticated middleware
    const user = await User.findById(req.user._id);

    // sending current user back to the user
    res.send({ message: user });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// Getting single user profile
const getUserProfile = async (req, res) => {
  try {
    // finding the user with the same id as req.params.id
    const user = await User.findById(req.params.id);

    // sending the fields that are necessarily to the user
    res.send({
      message: {
        username: user.username,
        email: user.email,
        image: user.image,
        followers: user.followers,
        followings: user.followings,
      },
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// updating the user
const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findOneAndUpdate(req.user._id, {
      $set: req.body,
    });

    res.send({ message: "User has been updated" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// Deleting the user
const deleteUser = async (req, res) => {
  try {
    // Deleting the user
    const deletedUser = await User.findOneAndDelete(req.user._id);
    // Deleting the users posts
    const deletedPost = await Post.deleteMany({ userId: req.user._id });
    // Deleting the users comment
    const deletedComment = await Comment.deleteMany({ userId: req.user._id });

    res.send({ message: "User has been deleted" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// Following a user
const followUser = async (req, res) => {
  try {
    // finding the user with the id of req.params.id
    const user = await User.findById(req.params.id);

    // checking if the user has already followed the other user
    if (!user.followers.includes(req.user._id)) {
      // if the user has not followed the other user then following it
      const followerUser = await user.updateOne({
        $push: { followers: req.user._id },
      });

      // Add user to the follower list
      const followingUser = await User.findOneAndUpdate(req.user._id, {
        $push: { followings: req.user._id },
      });

      // sending a message to tell the user that the user has been followed
      res.send({ message: "The user has been followed" });
    } else {
      // if the user has followed the other user then unfollowing it
      const followerUser = await user.updateOne({
        $pull: { followers: req.user._id },
      });

      // Add user to the follower list
      const followingUser = await User.findOneAndUpdate(req.user._id, {
        $pull: { followings: req.user._id },
      });

      // sending message to tell the user that the comment has been disliked
      res.send({ message: "The user has been unfollowed" });
    }
  } catch (error) {
    // sending an error if any
    res.status(500).send({ error: error });
  }
};

module.exports = {
  getCurrentUserProfile,
  getUserProfile,
  updateUser,
  deleteUser,
  followUser,
};
