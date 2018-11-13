var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.listings.findAll().then(results => {
    res.send(results);
  });
});

router.post('/', function(req, res, next) {
models.formInput.create({
  Name:  req.body.name,
  Email: req.body.email,
  CurrentModule:req.body.currentmodule
}).then(results => {
  res.send(results);
});
});

module.exports = router;
