// const express = require("express")
const db = require("../models");

module.exports = (app) => {
  // Views Routes

  // home ghost routes for Ghost + User information
  app.get("/home/1", (req, res) => {
    //
    db.Ghost.findOne({
      where: { deadFor: 170 },
      raw: true,
    })
      .then((data) => {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
        };
        return tempGhost;
      })
      .then((response) => {
        res.render("home", { entryGhost: response });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/api/users", (req, res) => {
    // console.log(req.body);
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
          id: req.body,
        },
      }
    ).then((dbUser) => {
      res.json(dbUser);
    });
  });

  // room 1 ghost routes for Ghost + User information
  app.get("/room1/2", (req, res) => {
    //
    db.Ghost.findOne({
      where: { deadFor: 65 },
      raw: true,
    })
      .then((data) => {
        let tempGhost = {
          fullName: data.fullName,
          deadFor: data.deadFor,
          homeTown: data.homeTown,
          faveSport: data.faveSport,
        };
        return tempGhost;
      })
      .then((response) => {
        // db.User.findOne({
        //   where: { identifier: 1 },
        //   raw: true,
        // })
        //   .then((results) => {
        //     let nameOfUser = {
        //       fullName: results.fullName,
        //     };
        res.render("room1", { entryGhost: response });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // });

  //room 2 ghost routes for Ghost + User information
  app.get("/room2/3", (req, res) => {
    //=============
    db.Ghost.findOne({
      where: { deadFor: 9 },
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
      .then((response) => {
        //==========
        // db.User.findOne({
        //   where: { id: 1 },
        //   raw: true,
        // })
        //   .then((results) => {
        //     let nameOfUser = {
        //       fullName: results.fullName,
        //     };
        //     return nameOfUser;
        //   })
        //   .then((flow) => {
        db.Ghost.findOne({
          where: { deadFor: 170 },
          raw: true,
        }).then((ghostData) => {
          let frontGhost = {
            fullName: ghostData.fullName,
          };
          res.render("room2", {
            entryGhost: response,
            // viewUser: flow,
            frontGhost: frontGhost,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // });

  //room 3 ghost routes for Ghost name/favsport + User information

  app.get("/room3/4", (req, res) => {
    3;
    //=============
    db.Ghost.findOne({
      where: { deadFor: 272 },
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
      .then((response) => {
        //==========
        // db.User.findOne({
        //   where: { id: 1 },
        //   raw: true,
        // })
        //   .then((results) => {
        //     let nameOfUser = {
        //       fullName: results.fullName,
        //     };
        //     return nameOfUser;
        //   })
        //   .then((flow) => {
        db.Ghost.findOne({
          where: { deadFor: 170 },
          raw: true,
        }).then((ghostData) => {
          let frontGhost = {
            fullName: ghostData.fullName,
          };
          res.render("room3", {
            entryGhost: response,
            // viewUser: flow,
            frontGhost: frontGhost,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // });
};
