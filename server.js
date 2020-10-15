// Requiring Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const db = require("./models");
const userController = require("./controllers/userController");
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

function introGhost() {
  axios
    .get("https://api.namefake.com/english-united-states/female/")
    .then(function (res) {
      db.Ghost.create({
        fullName: res.data.name,
        deadFor: 170,
        homeTown: "Atlanta, Georgia",
        faveSport: res.data.sport,
      }).then(() => {
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
      }).then(() => {
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
        deadFor: 166,
        homeTown: "Cleveland, Ohio",
        faveSport: res.data.sport,
      }).then(() => {
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
})
}
introGhost();



// Views Routes
app.use(userController);

// module.exports = function () {
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("home");
});


app.get("/room1", (req, res) => {
  res.render("room1");
});

app.get("/room2", (req, res) => {
  res.render("room2");
});

app.get("/room3", (req, res) => {
  res.render("room3");
});
// };

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then(function() {
// db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
