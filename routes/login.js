var express = require('express');
var router = express.Router();
var cms = require('../data/cms')

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
