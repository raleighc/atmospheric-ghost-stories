const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");



// Views Routes
router.get("/user", (req, res) => {
  res.render("user-info");
})

router.get("/ghosts", (req, res) => {
  res.render("all-ghosts");
})

router.get("/ghosts/:id", (req, res) => {
  res.render("single-ghost");
})

router.get("/stories", (req, res) => {
  res.render("all-stories");
})

router.get("/stories/:id", (req, res) => {
  res.render("single-story");
})



// API Routes
router.post("api/user", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch(() => {
      console.log();
    });
});


module.exports = router;
