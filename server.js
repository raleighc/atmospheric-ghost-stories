// Requiring Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
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

require("./controllers/userController")(app);
require("./controllers/htmlController")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function () {
  // db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
