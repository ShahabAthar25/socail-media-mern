const mongoose = require("mongoose");

module.exports = function (req, res, next) {
  const valid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!valid) return res.send({ error: "Object id is invalid." });
  next();
};
