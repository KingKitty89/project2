const db = require("../models/index.js");
const express = require("express");
const router = express.Router();
//different pages for taste and aroma?
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/whiskey", (req, res) => {
  res.render("whiskey");
});

router.get("/wine", (req, res) => {
  res.render("wine");
});

router.get("/api/drinks/:aroma", (req, res) => {
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

router.get("/api/drinks/:taste", (req, res) => {
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

router.get("/api/wine/:aroma", (req, res) => {
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

router.get("/api/wine/:taste", (req, res) => {
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
module.exports = router;
