const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
  } catch (err) {}
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
  } catch (err) {}
});

module.exports = router;
