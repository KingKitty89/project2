// Requiring necessary npm packages
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");

const routes = require("./controller/drinkController.js");
const db = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser."
    );
  });
});
