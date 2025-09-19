const { ObjectId } = require("mongodb");

const validateContact = (req, res, next) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;

  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
};

const validateId = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  next();
};

module.exports = {
  validateContact,
  validateId,
};
