const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, address, gender, dob, country } =
      req.body;
    const files = req.files.map((file) => file.path);

    const user = new User({
      firstName,
      lastName,
      email,
      address,
      gender,
      dob,
      country,
      files,
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
