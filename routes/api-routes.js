// Requiring our models
const db = require("../models");

module.exports = function(app) {
  app.get("/api/bourbon/:aroma", (req, res) => {
    db.Bourbon.findAll({
      where: {
        aroma: req.params.aroma
      },
      include: [
        {
          model: db.Aroma,
          attributes: ["name"],
          required: true
        }
      ]
    })
      .then(dbBourbon => {
        res.json(dbBourbon);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/bourbon/:taste", (req, res) => {
    db.Bourbon.findAll({
      where: {
        taste: req.params.taste
      },
      include: [
        {
          model: db.Taste,
          attributes: ["name"],
          required: true
        }
      ]
    })
      .then(dbBourbon => {
        res.json(dbBourbon);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/wine/:aroma", (req, res) => {
    db.Wine.findAll({
      where: {
        aroma: req.params.aroma
      },
      include: [
        {
          model: db.Aroma,
          attributes: ["name"],
          required: true
        }
      ]
    })
      .then(dbWine => {
        res.json(dbWine);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/wine/:taste", (req, res) => {
    db.Wine.findAll({
      where: {
        taste: req.params.taste
      },
      include: [
        {
          model: db.Tatse,
          attributes: ["name"],
          required: true
        }
      ]
    })
      .then(dbWine => {
        res.json(dbWine);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
