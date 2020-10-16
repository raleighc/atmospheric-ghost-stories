// const express = require("express")
const db = require("../models");

module.exports = function (app) {
  // Views Routes

  // home ghost routes for Ghost name/favsport + User information
  app.get("/home/:id", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: req.params.id },
      raw: true,
    })
      .then(function (data) {
        // first Database call has returned here
        // console.log(data);
        // create a temp Ghost object
        let entryGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
        };
        // res.render("home", data.fullName);
        res.render("home", {entryGhost});
      })
      .catch((err) => {
        console.log(err);
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
  // room 1 ghost routes for Ghost name/favsport + User information
  app.get("/room1/:id", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: req.params.id },
      raw: true,
    })
      .then(function (data) {
        // first Database call has returned here
        // console.log(data);
        // create a temp Ghost object
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        // this should be our tempGhost OBJECT
        // console.log(response);
        // make our second DB call
        db.User.findAll({}).then(function (user) {
          // did we get the User?
          // console.log(user);
          let userObj = {
            // fullName: user.fullName,
            fullName: "Bobby",
            // age: user.age,
            // gender: user.gender
          };
          res.render("room1", { viewGhost: response, viewUser: userObj });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //room 2 ghost routes for Ghost name/favsport + User information
  app.get("/room2/:id", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: req.params.id },
      raw: true,
    })
      .then(function (data) {
        // first Database call has returned here
        // console.log(data);
        // create a temp Ghost object
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        // this should be our tempGhost OBJECT
        // console.log(response);
        // make our second DB call
        db.User.findAll({}).then(function (user) {
          // did we get the User?
          // console.log(user);
          let userObj = {
            fullName: "Tommy",
            // fullName: user.fullName,
            // age: user.age,
            // gender: user.gender
          };
          res.render("room2", { viewGhost: response, viewUser: userObj });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //room 3 ghost routes for Ghost name/favsport + User information
  app.get("/room3/:id", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: req.params.id },
      raw: true,
    })
      .then(function (data) {
        // first Database call has returned here
        // console.log(data);
        // create a temp Ghost object
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        // this should be our tempGhost OBJECT
        // console.log(response);
        // make our second DB call
        db.User.findAll({}).then(function (user) {
          // did we get the User?
          // console.log(user);
          let userObj = {
            fullName: "Sarah",
            // fullName: user.fullName,
            // age: user.age,
            // gender: user.gender
          };
          res.render("room3", { viewGhost: response, viewUser: userObj });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });



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
