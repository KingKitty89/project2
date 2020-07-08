const db = require("../models");
const express = require("express");
const aroma = require("../models/aroma");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/whiskey", (req, res) => {
  db.Aroma.findAll({}).then(aromaData => {
    db.Taste.findAll({}).then(tasteData => {
      const aromas = JSON.parse(JSON.stringify(aromaData));
      const tastes = JSON.parse(JSON.stringify(tasteData));
      res.render("whiskey", { aromas, tastes });
    });
  });
});

router.get("/wine", (req, res) => {
  db.Aroma.findAll({}).then(aromaData => {
    db.Taste.findAll({}).then(tasteData => {
      const aromas = JSON.parse(JSON.stringify(aromaData));
      const tastes = JSON.parse(JSON.stringify(tasteData));
      res.render("wine", { aromas, tastes });
    });
  });
});

router.get("/api/whiskey", (req, res) => {
  db.Drink.findAll({
    where: {
      type: "whiskey"
    },
    include: [db.Taste, db.Aroma]
  }).then(results => {
    res.json(results);
  });
});

router.get("/api/wine", (req, res) => {
  db.Drink.findAll({
    where: {
      type: "wine"
    },
    include: [db.Taste, db.Aroma]
  }).then(results => {
    res.json(results);
  });
});

router.get("/api/whiskey/:aroma", (req, res) => {
  console.log(req.params.aroma);
  db.DrinkAroma.findAll({
    where: {
      AromaId: req.params.aroma
    },
    include: {
      model: db.Drink,
      where: {
        type: "whiskey"
      }
    }
  }).then(results => {
    console.log(aroma, "aroma");
    const whiskeyArr = JSON.parse(JSON.stringify(results));
    res.json({ whiskey: whiskeyArr });
  });
});

router.get("/api/wine/:aroma", (req, res) => {
  console.log(req.params.aroma);
  db.DrinkAroma.findAll({
    where: {
      AromaId: req.params.aroma
    },
    include: {
      model: db.Drink,
      where: {
        type: "wine"
      }
    }
  }).then(results => {
    console.log(aroma, "aroma");
    const wineArr = JSON.parse(JSON.stringify(results));
    res.json({ wine: wineArr });
  });
});

router.get("/api/whiskey/:taste", (req, res) => {
  db.Taste.findAll({
    where: {
      TasteId: req.params.taste
    },
    include: {
      model: db.Drink,
      where: {
        type: "whiskey"
      }
    }
  }).then(results => {
    console.log(aroma, "aroma");
    const whiskeyArr = JSON.parse(JSON.stringify(results));
    res.json({ whiskey: whiskeyArr });
  });
});

router.get("/api/wine/:taste", (req, res) => {
  db.Taste.findAll({
    where: {
      TasteId: req.params.taste
    },
    include: {
      model: db.Drink,
      where: {
        type: "wine"
      }
    }
  }).then(results => {
    console.log(taste, "taste");
    const wineArr = JSON.parse(JSON.stringify(results));
    res.json({ wine: wineArr });
  });
});

router.post("/api/drink", (req, res) => {
  db.Drink.create(req.body).then(results => {
    res.json(results);
  });
});
router.post("/api/aroma", (req, res) => {
  db.Aroma.create(req.body).then(results => {
    res.json(results);
  });
});
router.post("/api/taste", (req, res) => {
  db.Taste.create(req.body).then(results => {
    res.json(results);
  });
});
router.post("/api/whiskey", (req, res) => {
  db.Taste.create(req.body).then(results => {
    res.json(results);
  });
  console.log(req.body);
});
router.post("/api/wine", (req, res) => {
  db.Taste.create(req.body).then(results => {
    res.json(results);
  });
});

router.put("/api/drink/:id/taste", (req, res) => {
  db.Drink.findOne({
    where: { id: req.params.id }
  }).then(result => {
    result.setTastes(req.body);
    res.json(req.body);
  });
});

router.put("/api/drink/:id/aroma", (req, res) => {
  db.Drink.findOne({
    where: { id: req.params.id }
  }).then(result => {
    result.setAromas(req.body);
    res.json(req.body);
  });
});

module.exports = router;
