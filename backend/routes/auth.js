const express = require("express");

const app = express();

const router = express.Router();

const {
  registerUser,
  loginUser,
  logOut,
} = require("../controllers/authControllers");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logOut);
module.exports = router;