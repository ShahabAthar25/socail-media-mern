const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { registerValidation, loginValidation } = require("../utils/validation");
const User = require("../models/User");

// Registering a user
const register = async (req, res) => {
  // Validating Request
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) return res.status(400).send("Username already exists");

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
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const login = async (req, res) => {
  // Validating Request
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  // checking if email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send({ message: "Wrong credentials" });

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(404).send({ message: "Wrong credentials" });

  // genrating a jwt
  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.SECRET_KEY
  );
  res.send({ token: token });
};

module.exports = {
  register,
  login,
};
