const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Terminate app if JWT Private key not set
if (!process.env.JWT_PRIVATE_KEY) {
  console.error("Fatal error: jwtPrivateKey not configured.");
  process.exit(1);
}

// All routes
require("./startup/database")();
require("./startup/routes")(app);

// Default route
app.get("/", (req, res) => {
  res.send(`Welcome to BLUEWINDS!`);
});

// Configuration for port and running server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
