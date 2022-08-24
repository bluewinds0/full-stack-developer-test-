const { User, validate } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // Validate the body of request
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Eror if password and confirm password are not same
  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).send("Passwords does not match");

  // Check if user already registered
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered!");

  // register the new user
  user = new User(
    _.pick(req.body, ["name", "email", "password", "confirmPassword"])
  );

  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmPassword = await bcrypt.hash(user.confirmPassword, salt);

  // storing user in database
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
