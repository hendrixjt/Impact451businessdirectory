var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  models.listing.findAll().then(results => {
=======
  models.listings.findAll().then(results => {
>>>>>>> joshuas-playground
    res.send(results);
  });
});

<<<<<<< HEAD
router.post('/', function (req, res, next){
=======
router.post('/', function(req, res, next) {
>>>>>>> joshuas-playground
  //create a listing
});

module.exports = router;
