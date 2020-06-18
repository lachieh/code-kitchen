var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/recipes', function(req, res, next) {
  db.Recipes.findAll({
    include: [db.Categories]
  })
    .then(data => {
      res.json(data);
    })
});

module.exports = router;
