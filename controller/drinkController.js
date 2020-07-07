const db = require("../models/index.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/whiskey", (req, res) => {
  res.render("whiskey");
});

router.get("/wine", (req, res) => {
  res.render("wine");
});

router.get("/api/whiskey/:aroma", (req, res) => {
  db.Drink.findAll({
    where: {
      type: req.params.type,
      aroma: req.params.aroma
    },
    include: [db.Aroma]
  }).then(results => {
    res.json(results);
  });
});

router.get("/api/wine/:aroma", (req, res) => {
  db.Drink.findAll({
    where: {
      type: req.params.type,
      aroma: req.params.aroma
    },
    include: [db.Aroma]
  }).then(results => {
    res.json(results);
  });
});

router.get("/api/whiskey/:taste", (req, res) => {
  db.Drink.findAll({
    where: {
      type: req.params.type,
      aroma: req.params.aroma
    },
    include: [db.Taste]
  }).then(results => {
    res.json(results);
  });
});

router.get("/api/wine/:taste", (req, res) => {
  db.Drink.findAll({
    where: {
      type: req.params.type,
      aroma: req.params.aroma
    },
    include: [db.Taste]
  }).then(results => {
    res.json(results);
  });
});
module.exports = router;
