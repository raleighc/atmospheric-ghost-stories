// Requiring Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const userController = require("./controllers/userController");

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

// Views Routes
app.use(userController);

app.get("/", (req, res) => {
  res.render("index");
});

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
});
