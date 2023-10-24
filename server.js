const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// const { SocialMedia } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("/api/users", async (req, res) => {
  try {
    res.status(200).json("hi");
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/thoughts", async (req, res) => {
  try {
    res.status(200).json("hi");
  } catch (err) {
    console.log(err);
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on ${PORT}!`);
  });
});
