const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("index");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/eiei", (req, res) => {
  res.send("Hello express!!");
});

router.get("/help", (req, res) => {
  res.send("Help page");
});

module.exports = router;
