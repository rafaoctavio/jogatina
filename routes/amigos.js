var express = require('express');
var router = express.Router();
var cms = require('../data/cms')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('amigos', { title: 'Express' });
});

module.exports = router;
