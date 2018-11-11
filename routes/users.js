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

});

module.exports = router;
