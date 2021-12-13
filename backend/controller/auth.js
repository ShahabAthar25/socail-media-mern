const bcrypt = require("bcrypt");

const { registerValidation } = require("../utils/validation");
const User = require("../models/User");

// Registering a user
const register = async (req, res) => {
  // Validating Request
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  try {
    // Checking if username exists
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) return res.status(400).send("Username already exists");

    // Checking if email exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    // genrate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // creating new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving user
    const user = await newUser.save();
    res.send({ message: user });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  register,
};
