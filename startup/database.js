const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("Unable to connect to mongodb:", err));
};
