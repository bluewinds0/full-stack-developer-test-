const express = require("express");
const auth = require("../routes/auth");
const register = require("../routes/register");
const categories = require("../routes/categories");

module.exports = function (app) {
  app.use(express.json());
  app.use("/auth", auth);
  app.use("/register", register);
  app.use("/load_categories", categories);
};
