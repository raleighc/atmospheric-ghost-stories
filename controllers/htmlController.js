const express = require("express");
const html = express.Router();
// const db = require("../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/home", (req, res) => {
    // create a random number function
    // let randoNumObj = {
    //   num1:"1",
    //   num2:"2",
    //   num3:"4"
    // }
    res.render("home");
  });

  app.get("/ghosts/:id", (req, res) => {
    res.render("ghosts");
  });

  app.get("/room1/:id", (req, res) => {
    res.render("room1");
  });

  app.get("rooms/:id", (req, res) => {
    res.render("room2");
  });

  app.get("rooms/:id", (req, res) => {
    res.render("room3");
  });
};
