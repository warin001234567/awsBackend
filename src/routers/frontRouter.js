const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  console.log("test");
  res.render("index");
});
router.get("/index", (req, res) => {
  console.log("test");
  res.render("index");
});

router.get("/process_1", (req, res) => {
  res.render("process_1");
});

router.get("/process_2", (req, res) => {
  res.render("process_2");
});

router.get("/process_3", (req, res) => {
  res.render("process_3");
});

module.exports = router;
