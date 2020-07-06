// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models/index.js");
//different pages for taste and aroma?

module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Drink.findAll(data => {
      const hbsObject = {
        drink: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.get("/bourbon", () => {
    app.get("/", (req, res) => {
      drink.all(data => {
        const hbsObject = {
          drink: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

    app.get("/wine", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/wine.html"));
    });

    app.get("/bourbon-results", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/bourbon-results.html"));
    });

    app.get("/wine-results", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/wine-results.html"));
    });
  });
};
