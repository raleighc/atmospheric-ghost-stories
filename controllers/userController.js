// const express = require("express")
const db = require("../models");

module.exports = function (app) {
  // Views Routes
  app.get("/api/ghosts", (req, res) => {
    db.Ghost.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/ghosts/:id", (req, res) => {
    db.Ghost.findOne({
      where: { id: req.params.id },
      raw:true
    })
      .then(function (data) {
        res.render('ghosts',data);
      })
      .catch(() => {
        console.log();
      });
  });

  app.post("/api/users", (req, res) => {
    console.log(req.body)
    db.User.create(
        req.body
    )
      .then((newUser) => {
        res.json(newUser);
      })
  });

  app.put("/api/users", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    console.log(req.data);
    db.User.update({
      age: req.body.age,
      gender: req.body.gender
    }, {
      where: {
        id: 1
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // app.get("/api/:book", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       title: req.params.book
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // router.get("/ghosts", (req, res) => {
  //   res.render("all-ghosts");
  // });

  // router.get("/ghosts/:id", (req, res) => {
  //   res.render("single-ghost");
  // });

  // router.get("/stories", (req, res) => {
  //   res.render("all-stories");
  // });

  // router.get("/stories/:id", (req, res) => {
  //   res.render("single-story");
  // });

  // // API Routes
  // router.post("api/user", (req, res) => {
  //   db.User.create(req.body)
  //     .then((newUser) => {
  //       res.json(newUser);
  //     })
  //     .catch(() => {
  //       console.log();
  //     });
  // });
};
