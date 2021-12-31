const User = require("../models/User");

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

const getUserProfile = (req, res) => {
  res.send({ message: "Hello World" });
};

const updateUser = (req, res) => {
  res.send({ message: "Hello World" });
};

const deleteUser = (req, res) => {
  res.send({ message: "Hello World" });
};

const followUser = (req, res) => {
  res.send({ message: "Hello World" });
};

const getUserFollowers = (req, res) => {
  res.send({ message: "Hello World" });
};

module.exports = {
  getCurrentUserProfile,
  getUserProfile,
  updateUser,
  deleteUser,
  followUser,
  getUserFollowers,
};
