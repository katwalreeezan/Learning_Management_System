const { body, validationResult } = require("express-validator");

const validateUser = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("address").notEmpty().withMessage("Address is required"),
  body("gender")
    .isIn(["male", "female", "other"])
    .withMessage("Gender is invalid"),
  body("dob")
    .isDate()
    .withMessage("Invalid date of birth")
    .custom((value) => new Date(value) < Date.now())
    .withMessage("Date of birth must be in the past"),
  body("country").notEmpty().withMessage("Country is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
