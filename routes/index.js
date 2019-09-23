var express = require('express');
var router = express.Router();
var budgetSearch = require('../services/yelp')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

/* GET search results page, with API query */
router.get('/search', function(req, res, next) {

  let city = req.query.city
  let search = req.query.search

  console.log(city, search)

  budgetSearch(city, search).then( function(response) {
    //console.log(response.data)
    res.render('results', { 
      restaurants: response.data.businesses,
      city: city,
      search: search
     })
  }).catch(function(err) {
    console.log(err.data)
    next(err)
  })
});



module.exports = router;
