const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/upload");
const validateUser = require("../middlewares/validateUser");

router.post(
  "/users",
  upload.array("files", 5),
  validateUser,
  userController.createUser
);

module.exports = router;
