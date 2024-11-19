const mongoose = require("mongoose");

const validatedObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid recipe ID" });
  }
  next();
};

module.exports = validatedObjectId;
