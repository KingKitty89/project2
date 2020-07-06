// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
//different pages for taste and aroma?

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/bourbon", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/bourbon.html"));
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
};
