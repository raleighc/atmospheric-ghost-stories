// Requiring Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const db = require("./models");
const userController = require("./controllers/userController");
const htmlController = require("./controllers/htmlController");
// const { Model } = require("sequelize/types");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.delete("/api/ghosts", function (req, res) {
  // console.log("delete ghosts");
  db.sequelize
    .query("delete from ghosts")
    .then((results) => {
      // console.log("ghost delete");
      db.sequelize
        .query("alter table ghosts auto_increment = 1")
        .then(() => {
          introGhost();
        })
        .catch(() => {
          console.log();
        });
    })
    .catch(() => {
      console.log();
    });
});
app.delete("/api/users", function (req, res) {
  db.sequelize
    .query("delete from users")
    .then((results) => {
      db.sequelize
        .query("alter table users auto_increment = 1")
        .then(() => {
          console.log("user table ready")
        })
        .catch(() => {
          console.log();
        });
    })
    .catch(() => {
      console.log();
    });
});

function introGhost() {
  axios
    .get("https://api.namefake.com/english-united-states/female/")
    .then(function (res) {
      db.Ghost.create({
        fullName: res.data.name,
        deadFor: 170,
        homeTown: "Atlanta, Georgia",
        faveSport: res.data.sport,
      })
        .then(() => {
          ghostOneInfo();
        })
        .catch(() => {
          console.log();
        });
    })
    .catch(() => {
      console.log();
    });
}
function ghostOneInfo() {
  axios
    .get("https://api.namefake.com/english-united-states/female/")
    .then(function (res) {
      db.Ghost.create({
        fullName: res.data.name,
        deadFor: 65,
        homeTown: "Arno, Virginia",
        faveSport: res.data.sport,
      })
        .then(() => {
          ghostTwoInfo();
        })
        .catch(() => {
          console.log();
        });
    })
    .catch(() => {
      console.log();
    });
}
function ghostTwoInfo() {
  axios
    .get("https://api.namefake.com/english-united-states/male/")
    .then(function (res) {
      db.Ghost.create({
        fullName: res.data.name,
        deadFor: 9,
        homeTown: "Cleveland, Ohio",
        faveSport: res.data.sport,
      })
        .then(() => {
          ghostThreeInfo();
        })
        .catch(() => {
          console.log();
        });
    })
    .catch(() => {
      console.log();
    });
}
function ghostThreeInfo() {
  axios
    .get("https://api.namefake.com/english-united-states/male/")
    .then(function (res) {
      db.Ghost.create({
        fullName: res.data.name,
        deadFor: 272,
        homeTown: "Liverpool, England",
        faveSport: res.data.sport,
      })
        .catch(() => {
          console.log();
        })
        .catch(() => {
          console.log();
        });
    });
}

require("./controllers/userController")(app);
require("./controllers/htmlController")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function () {
  // db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
