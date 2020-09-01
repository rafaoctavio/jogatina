var express = require('express');
var router = express.Router();
var cms = require('../data/cms')

/* GET home page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Express' });
});

module.exports = router;
