// const express = require("express")
const db = require("../models");

module.exports = function (app) {
  // Views Routes

  // home ghost routes for Ghost + User information
  app.get("/home/1", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id:1 },
      raw: true,
    })
      .then(function (data) {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
        };
        return tempGhost;
      })
      .then(function (response) {
        res.render("home", { entryGhost: response });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/api/users", (req, res) => {
    console.log(req.body);
    db.User.create(req.body).then((newUser) => {
      res.json(newUser);
    });
  });

  app.put("/api/users", function (req, res) {
    console.log(req.data);
    db.User.update(
      {
        age: req.body.age,
        gender: req.body.gender,
      },
      {
        where: {
          id: 1,
        },
      }
    ).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // room 1 ghost routes for Ghost + User information
  app.get("/room1/2", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: 2 },
      raw: true,
    })
      .then(function (data) {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        db.User.findOne({
          where: { id: 1 },
          raw: true,
        })
          .then((results) => {
            let nameOfUser = {
              fullName: results.fullName,
            };
            res.render("room1", { entryGhost: response, viewUser: nameOfUser });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  });

  //room 2 ghost routes for Ghost + User information
  app.get("/room2/3", (req, res) => {
    //=============
    db.Ghost.findOne({
      where: { id: 3 },
      raw: true,
    })
      .then(function (data) {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        //==========
        db.User.findOne({
          where: { id: 1 },
          raw: true,
        })
          .then((results) => {
           
            let nameOfUser = {
              fullName: results.fullName,
            };
            res.render("room2", { entryGhost: response, viewUser: nameOfUser });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  });


  //room 3 ghost routes for Ghost name/favsport + User information
  app.get("/room3/4", (req, res) => {
    //
    db.Ghost.findOne({
      where: { id: 4 },
      raw: true,
    })
      .then(function (data) {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then(function (response) {
        db.User.findOne({
          where: { id: 1 },
          raw: true,
        })
          .then((results) => {
            let nameOfUser = {
              fullName: results.fullName,
            };
            // console.log(nameOfUser)
            
            res.render("room3", { entryGhost: response, viewUser: nameOfUser });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  });
};
