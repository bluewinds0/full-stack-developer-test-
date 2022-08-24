const auth = require("../middleware/auth");
const axios = require("axios").default;
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  // Third-party API call
  axios
    .get("https://demo2.meals4u.net/fe/api.test.php")
    .then(function (response) {
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
});

module.exports = router;
