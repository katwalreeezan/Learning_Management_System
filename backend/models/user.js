const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  address: { type: String, required: [true, "Address is required"] },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["male", "female", "other"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"],
    validate: {
      validator: function (value) {
        return value < Date.now();
      },
      message: "Date of birth must be in the past",
    },
  },
  country: { type: String, required: [true, "Country is required"] },
  files: [{ type: String }],
});

module.exports = mongoose.model("user", userSchema);
