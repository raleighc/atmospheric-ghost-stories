// *** Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
// =============================================================
// var db = require("./models");

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// });
